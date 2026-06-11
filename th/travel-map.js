(function () {
  const guide = window.TRAVEL_GUIDE;
  if (!guide) return;

  const page = document.body.dataset.page;
  const placeId = document.body.dataset.placeId;
  const places = guide.places || [];
  const categoriesList = guide.categories || [];
  const typeOrder = categoriesList.map((category) => category.id);
  const categories = new Map(categoriesList.map((category) => [category.id, category]));
  const placesById = new Map(places.map((place) => [place.id, place]));
  const grabDownloadUrl = "https://www.grab.com/download";
  let map = null;
  let userMarker = null;
  let accuracyCircle = null;
  let watchId = null;
  let currentUserLatLng = null;
  let hasCenteredOnLocate = false;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value || "";
  }

  function isFiniteNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
  }

  function placeCategoryId(place) {
    return place.categoryId || place.category || "";
  }

  function categoryFor(place) {
    return categories.get(placeCategoryId(place)) || {};
  }

  function categoryColor(category) {
    return category.color || "#0d7a63";
  }

  function hexToRgba(hex, alpha) {
    const value = String(hex || "").trim();
    const match = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!match) return `rgba(13, 122, 99, ${alpha})`;
    const raw = match[1].length === 3
      ? match[1].split("").map((char) => char + char).join("")
      : match[1];
    const number = Number.parseInt(raw, 16);
    const red = (number >> 16) & 255;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function applyCategoryStyle(element, category) {
    const color = categoryColor(category);
    element.style.setProperty("--category-color", color);
    element.style.setProperty("--category-soft", hexToRgba(color, .08));
    element.style.setProperty("--category-line", hexToRgba(color, .26));
  }

  function setAccent(category) {
    const color = categoryColor(category);
    document.documentElement.style.setProperty("--accent", color);
    document.documentElement.style.setProperty("--accent-soft", hexToRgba(color, .11));
    document.documentElement.style.setProperty("--accent-line", hexToRgba(color, .30));
  }

  function pointOfPlace(place) {
    const firstStep = (place.steps || []).find((step) => isFiniteNumber(step.lat) && isFiniteNumber(step.lon));
    if (firstStep) return { lat: firstStep.lat, lon: firstStep.lon };
    return { lat: place.lat, lon: place.lon };
  }

  function mapsUrlForPoint(lat, lon, fallbackQuery) {
    if (isFiniteNumber(lat) && isFiniteNumber(lon)) {
      return `https://uri.amap.com/marker?position=${lon},${lat}&name=${encodeURIComponent(fallbackQuery || "目标点")}&coordinate=gaode&callnative=1`;
    }
    return `https://uri.amap.com/search?keyword=${encodeURIComponent(fallbackQuery || "")}&city=北京&callnative=1`;
  }

  function googleSearchUrl(query, lat, lon) {
    if (isFiniteNumber(lat) && isFiniteNumber(lon)) {
      return `https://uri.amap.com/marker?position=${lon},${lat}&name=${encodeURIComponent(query || "目标点")}&coordinate=gaode&callnative=1`;
    }
    return `https://uri.amap.com/search?keyword=${encodeURIComponent(query || "")}&city=北京&callnative=1`;
  }

  function exactMapUrl(entity) {
    if (!entity) return "";
    if (entity.mapUrl) return entity.mapUrl;
    if (entity.googleMapsUrl) return entity.googleMapsUrl;
    if (entity.amapUrl) return entity.amapUrl;
    if (entity.amapPoiId) return `https://ditu.amap.com/place/${encodeURIComponent(entity.amapPoiId)}`;
    return "";
  }

  function mapsUrl(place) {
    return exactMapUrl(place) || googleSearchUrl(`${place.name || ""} ${place.address || ""}`.trim());
  }

  function detailUrl(place) {
    return `kl_xhs_place_${place.id}.html`;
  }

  function internalMapUrl(place) {
    return `kl_xhs_place_${place.id}_map.html`;
  }

  function stepPointUrl(step) {
    return exactMapUrl(step) || mapsUrlForPoint(step.lat, step.lon, step.googleQuery || step.name);
  }

  function hasInternalMap(place) {
    const steps = place?.steps || [];
    if (place?.internalMap === false || place?.detailMode === "compact") return false;
    return steps.filter((step) => isFiniteNumber(step.lat) && isFiniteNumber(step.lon)).length >= 2;
  }

  function isSequencePlace(place) {
    return hasInternalMap(place) || place?.detailMode === "sequence";
  }

  function detailActionLabel(place) {
    return isSequencePlace(place) ? "แผนเดินเที่ยว" : "วิธีเที่ยว";
  }

  function detailPillLabel(place) {
    const steps = place?.steps || [];
    if (isSequencePlace(place)) return `แผนเดินเที่ยว · ${steps.length} จุด`;
    if (steps.length === 1) return "จุดเดียว · คำแนะนำ";
    return "จุดเดียว · ไม่บังคับเส้นทาง";
  }

  function hotelDirectionsUrl(place) {
    const origin = guide.anchor || {};
    const point = pointOfPlace(place);
    if (isFiniteNumber(origin.lat) && isFiniteNumber(origin.lon) && isFiniteNumber(point.lat) && isFiniteNumber(point.lon)) {
      return `https://uri.amap.com/navigation?from=${origin.lon},${origin.lat},${encodeURIComponent(anchorShort())}&to=${point.lon},${point.lat},${encodeURIComponent(place.name || "目的地")}&mode=car&coordinate=gaode&callnative=1`;
    }
    return mapsUrl(place);
  }

  function currentDirectionsUrl(place) {
    const point = pointOfPlace(place);
    if (currentUserLatLng && isFiniteNumber(currentUserLatLng.lat) && isFiniteNumber(currentUserLatLng.lon) && isFiniteNumber(point.lat) && isFiniteNumber(point.lon)) {
      return `https://uri.amap.com/navigation?from=${currentUserLatLng.lon},${currentUserLatLng.lat},${encodeURIComponent("ตำแหน่งของฉัน")}&to=${point.lon},${point.lat},${encodeURIComponent(place.name || "目的地")}&mode=walk&coordinate=gaode&callnative=1`;
    }
    return hotelDirectionsUrl(place);
  }

  function currentDirectionsLabel() {
    return currentUserLatLng ? "นำทางจากตำแหน่งปัจจุบัน" : `นำทางจาก ${anchorShort()}`;
  }

  function hotelDirectionsLabel() {
    return `นำทางจาก ${anchorShort()}`;
  }

  function stepNavigationUrl(step) {
    if (currentUserLatLng && isFiniteNumber(currentUserLatLng.lat) && isFiniteNumber(currentUserLatLng.lon) && isFiniteNumber(step.lat) && isFiniteNumber(step.lon)) {
      return `https://uri.amap.com/navigation?from=${currentUserLatLng.lon},${currentUserLatLng.lat},${encodeURIComponent("ตำแหน่งของฉัน")}&to=${step.lon},${step.lat},${encodeURIComponent(step.name || "目的地")}&mode=walk&coordinate=gaode&callnative=1`;
    }
    return stepPointUrl(step);
  }

  function grabBookingParams(place) {
    const point = pointOfPlace(place);
    const params = new URLSearchParams({
      screenType: "BOOKING",
      vertical: "Car",
      dropOffLatitude: isFiniteNumber(point.lat) ? String(point.lat) : "",
      dropOffLongitude: isFiniteNumber(point.lon) ? String(point.lon) : "",
      dropOffAddress: place.address || place.name || "",
      dropOffKeywords: place.name || ""
    });
    if (currentUserLatLng) {
      params.set("pickUpLatitude", String(currentUserLatLng.lat));
      params.set("pickUpLongitude", String(currentUserLatLng.lon));
      params.set("pickUpAddress", "ตำแหน่งของฉัน");
    }
    return params;
  }

  function grabDirectUrl(place) {
    const w = place.didi || {};
    if (!isFiniteNumber(w.lat) || !isFiniteNumber(w.lon)) return mapsUrl(place);
    return `diditaxi://open?maptype=wgs&tolat=${w.lat}&tolng=${w.lon}&toname=${encodeURIComponent(place.name || "目的地")}`;
  }

  function grabIntentUrl(place) {
    return grabDirectUrl(place);
  }

  function openGrab(place) {
    const isAndroid = /Android/i.test(navigator.userAgent);
    window.location.href = isAndroid ? grabIntentUrl(place) : grabDirectUrl(place);
  }

  function refreshGrabLinks() {
    document.querySelectorAll("[data-grab-place]").forEach((link) => {
      const place = placesById.get(link.dataset.grabPlace);
      if (place) link.setAttribute("href", grabDirectUrl(place));
    });
    document.querySelectorAll("[data-current-nav-place]").forEach((link) => {
      const place = placesById.get(link.dataset.currentNavPlace);
      if (!place) return;
      link.setAttribute("href", currentDirectionsUrl(place));
      link.textContent = currentDirectionsLabel();
    });
    document.querySelectorAll("[data-step-nav]").forEach((link) => {
      const place = placesById.get(link.dataset.stepPlace);
      const step = (place?.steps || []).find((candidate) => String(candidate.order) === link.dataset.stepNav);
      if (step) link.setAttribute("href", stepNavigationUrl(step));
    });
  }

  function anchorShort() {
    const name = guide.anchor?.shortName || guide.anchor?.name || "ที่พัก";
    const firstWord = String(name).split(/\s+/)[0];
    return firstWord || "ที่พัก";
  }

  function tagsHtml(tags) {
    if (!tags || !tags.length) return "";
    return `<div class="tags">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
  }

  function recLabel(item) {
    if (!item) return "";
    if (typeof item === "string") return item;
    return item.actionLabel || item.label || item.name || item.query || item.text || "";
  }

  function uniqLabels(items) {
    const seen = new Set();
    const labels = [];
    for (const item of items || []) {
      const label = recLabel(item);
      if (!label || seen.has(label)) continue;
      seen.add(label);
      labels.push(label);
    }
    return labels;
  }

  function categoryIntentLabel(category) {
    const title = category.title || "";
    if (/吃|food|eat|snack|กิน/i.test(title)) return "กิน & ดื่ม";
    if (/买|shop|market|ช้อป|ซื้อ/i.test(title)) return "ซื้อ & หิ้วกลับ";
    if (/玩|play|ride|เล่น/i.test(title)) return "เดินเล่น";
    if (/看展|museum|exhibit|art|indoor|พิพิธภัณฑ์|นิทรรศการ/i.test(title)) return "นิทรรศการ";
    return "ชม & ถ่ายรูป";
  }

  function overviewPicks(place, category) {
    if (place.actionPicks?.length) return place.actionPicks.slice(0, 5);
    if (place.cardPicks?.length) return uniqLabels(place.cardPicks).map((label) => ({ label, target: label })).slice(0, 5);
    const title = category.title || "";
    const labels = title.includes("吃")
      ? uniqLabels([...(place.eats || []), ...(place.routes || [])])
      : title.includes("买")
        ? uniqLabels([...(place.buys || []), ...(place.rests || [])])
        : title.includes("玩")
          ? uniqLabels([...(place.looks || []), ...(place.eats || []), ...(place.rests || [])])
          : title.includes("看展")
            ? uniqLabels([...(place.looks || []), ...(place.buys || []), ...(place.rests || [])])
            : uniqLabels([...(place.looks || []), ...(place.routes || []), ...(place.rests || [])]);
    return labels.map((label) => ({ label, target: label })).slice(0, 5);
  }

  function overviewAction(place, category) {
    if (place.actionSummary) return place.actionSummary;
    if (place.cardAction) return place.cardAction;
    const stepNames = (place.steps || []).slice(0, 3).map((step) => step.name).filter(Boolean).join(" / ");
    const title = category.title || "";
    if (/吃|food|eat|snack|กิน/i.test(title)) return `เส้นหลัก — ตระเวนกิน: ${stepNames}`;
    if (/买|shop|market|ช้อป|ซื้อ/i.test(title)) return `เส้นหลัก — ช้อปและหิ้วของ: ${stepNames}`;
    if (/玩|play|ride|เล่น/i.test(title)) return `เส้นหลัก — เดินเล่นสัมผัสบรรยากาศ: ${stepNames}`;
    if (/看展|museum|exhibit|art|indoor|พิพิธภัณฑ์|นิทรรศการ/i.test(title)) return `เส้นหลัก — ชมนิทรรศการ: ${stepNames}`;
    return `เส้นหลัก — ชมและถ่ายรูป: ${stepNames}`;
  }

  function overviewActionHtml(place, category) {
    const picks = overviewPicks(place, category);
    return `
      <div class="intent-box">
        <div class="intent-label">${escapeHtml(categoryIntentLabel(category))} · ทำอะไรดี</div>
        <p>${escapeHtml(overviewAction(place, category))}</p>
        ${picks.length ? `
          <div class="mini-picks action-picks" aria-label="ทำอะไร & ที่ไหน">
            ${picks.map((pick) => {
              const label = typeof pick === "string" ? pick : pick.label;
              const target = typeof pick === "string" ? pick : (pick.target || pick.query || pick.place || pick.label);
              const url = typeof pick === "string" ? googleSearchUrl(target) : (exactMapUrl(pick) || googleSearchUrl(target));
              return `<a href="${url}" target="_blank" rel="noopener"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(target)}</span></a>`;
            }).join("")}
          </div>
        ` : ""}
      </div>
    `;
  }

  function markerIcon(color, size, label = "") {
    const content = label
      ? `<span style="display:grid;place-items:center;width:${size}px;height:${size}px;border-radius:50%;background:${color};color:#fff;border:3px solid white;box-shadow:0 2px 10px rgba(0,0,0,.3);font-size:12px;font-weight:800;">${escapeHtml(label)}</span>`
      : `<span style="display:block;width:${size}px;height:${size}px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.28);"></span>`;
    return L.divIcon({
      className: label === "H" ? "home-marker" : "trip-marker",
      html: content,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  }

  function markerLabel(place) {
    const categoryId = placeCategoryId(place);
    const order = places.filter((item) => placeCategoryId(item) === categoryId).map((item) => item.id);
    const index = order.indexOf(place.id);
    return index >= 0 ? String(index + 1) : "";
  }

  function createMap(containerId, points) {
    if (!window.L) return null;
    const validPoints = points.filter((point) => isFiniteNumber(point.lat) && isFiniteNumber(point.lon));
    const center = validPoints[0] || guide.anchor || { lat: 0, lon: 0 };
    map = L.map(containerId, { scrollWheelZoom: true, zoomControl: true }).setView([center.lat, center.lon], 13);
    const tileLayer = L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=en&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
      maxZoom: 18,
      subdomains: ["1", "2", "3", "4"],
      attribution: "&copy; \u9ad8\u5fb7\u5730\u56fe"
    }).addTo(map);
    tileLayer.on("load", () => map.invalidateSize(true));
    window.addEventListener("resize", () => map.invalidateSize(true));
    return map;
  }

  function fitMap(points, options = {}) {
    if (!map) return;
    const validPoints = points.filter((point) => isFiniteNumber(point.lat) && isFiniteNumber(point.lon));
    if (!validPoints.length) return;
    map.invalidateSize(true);
    map.closePopup();
    if (validPoints.length === 1) {
      map.setView([validPoints[0].lat, validPoints[0].lon], options.maxZoom || 15);
      return;
    }
    const bounds = L.latLngBounds(validPoints.map((point) => [point.lat, point.lon]));
    map.fitBounds(bounds, { padding: options.padding || [42, 42], maxZoom: options.maxZoom || 12 });
  }

  function popupHtml(place) {
    const category = categoryFor(place);
    const categoryTitle = category.title || "สถานที่";
    const routeHint = place.routePairing || place.routeHint || "จัดตามแรงและเส้นทาง";
    const feature = place.feature || place.bestFor || place.note || "";
    return `
      <div class="popup-title">${escapeHtml(place.name)}</div>
      <div class="popup-address">${escapeHtml(place.address || "")}</div>
      <div class="popup-type">${escapeHtml(categoryTitle)}</div>
      <div class="popup-distance">${escapeHtml(place.distance || "")}</div>
      <div class="popup-section popup-feature"><strong>จุดเด่น</strong>${escapeHtml(feature)}</div>
      <div class="popup-section popup-best"><strong>เหมาะกับ</strong>${escapeHtml(place.bestFor || "แวะตามทางได้")}</div>
      <div class="popup-section popup-route"><strong>ต่อด้วย</strong>${escapeHtml(routeHint)}</div>
      ${tagsHtml(place.tags || [])}
      <div class="popup-section popup-note"><strong>แนะนำ</strong>${escapeHtml(place.note || place.feature || "")}</div>
      <div class="popup-section popup-source"><strong>ที่มา</strong>${escapeHtml(place.sourceNote || place.source || "")}</div>
      <div class="popup-actions">
        <a class="guide-link" href="${detailUrl(place)}">วิธีเที่ยวจุดนี้</a>
        ${hasInternalMap(place) ? `<a href="${internalMapUrl(place)}">แผนที่ภายใน</a>` : ""}
        <a href="${currentDirectionsUrl(place)}" data-current-nav-place="${escapeHtml(place.id)}" target="_blank" rel="noopener">${escapeHtml(currentDirectionsLabel())}</a>
        <a class="grab-link" href="${grabDirectUrl(place)}" data-grab-place="${escapeHtml(place.id)}">เรียกรถ DiDi</a>
        <a href="${mapsUrl(place)}" target="_blank" rel="noopener">เปิดใน AMap</a>
      </div>
    `;
  }

  function initBaseText() {
    setText("[data-guide-title]", guide.title || "แผนที่เที่ยวบนมือถือ");
    setText("[data-guide-subtitle]", guide.subtitle || "เริ่มจากที่พัก เลือกก่อนว่าอยากทำอะไร แล้วดูว่าแต่ละจุดต่อเส้นทางกันยังไง");
  }

  function renderOverview() {
    initBaseText();
    const points = [];
    if (guide.anchor && isFiniteNumber(guide.anchor.lat) && isFiniteNumber(guide.anchor.lon)) {
      points.push({ lat: guide.anchor.lat, lon: guide.anchor.lon });
    }
    for (const place of places) {
      const point = pointOfPlace(place);
      if (isFiniteNumber(point.lat) && isFiniteNumber(point.lon)) points.push(point);
    }
    createMap("map", points);
    if (map && guide.anchor && isFiniteNumber(guide.anchor.lat) && isFiniteNumber(guide.anchor.lon)) {
      L.marker([guide.anchor.lat, guide.anchor.lon], {
        icon: markerIcon("#30363d", 26, "H"),
        title: guide.anchor.name || "ที่พัก"
      })
        .addTo(map)
        .bindPopup(`
          <div class="popup-title">${escapeHtml(guide.anchor.name || "ที่พัก")}</div>
          <div class="popup-address">${escapeHtml(guide.anchor.address || "")}</div>
          <div class="popup-section">ระยะทางบนแผนที่วัดจากจุดนี้ เวลาเดินทางจริงขึ้นกับสภาพจราจร</div>
        `);
    }
    places.forEach(addPlaceMarker);
    renderCategoryGroups();
    bindLocationTools(points, { padding: [42, 42], maxZoom: 12 });
    document.addEventListener("click", handleGrabClick);
    requestAnimationFrame(() => fitMap(points, { padding: [42, 42], maxZoom: 12 }));
    window.addEventListener("load", () => fitMap(points, { padding: [42, 42], maxZoom: 12 }));
  }

  function addPlaceMarker(place) {
    if (!map) return;
    const category = categoryFor(place);
    const point = pointOfPlace(place);
    if (!isFiniteNumber(point.lat) || !isFiniteNumber(point.lon)) return;
    const color = categoryColor(category);
    const marker = L.marker([point.lat, point.lon], {
      icon: markerIcon(color, 22, markerLabel(place)),
      title: place.name
    }).addTo(map).bindPopup(popupHtml(place));

    if (guide.anchor && isFiniteNumber(guide.anchor.lat) && isFiniteNumber(guide.anchor.lon)) {
      L.polyline([[guide.anchor.lat, guide.anchor.lon], [point.lat, point.lon]], {
        color,
        weight: 1.1,
        opacity: .22,
        dashArray: "4 7"
      }).addTo(map);
    }
    place.__marker = marker;
  }

  function renderCategoryGroups() {
    const list = document.getElementById("placeList");
    if (!list) return;
    list.innerHTML = "";

    categoriesList.forEach((category) => {
      const type = category.id;
      const groupedPlaces = places.filter((place) => placeCategoryId(place) === type);
      if (!groupedPlaces.length) return;
      const group = document.createElement("div");
      const itemsId = `category-${type}-items`;
      const isMobileStart = window.matchMedia("(max-width: 900px)").matches;
      const isExpanded = !isMobileStart && type === typeOrder[0];
      group.className = `type-group${isExpanded ? "" : " is-collapsed"}`;
      group.dataset.type = type;
      applyCategoryStyle(group, category);

      const toggle = document.createElement("button");
      toggle.className = "type-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.setAttribute("aria-controls", itemsId);
      toggle.innerHTML = `
        <span class="type-copy">
          <span class="type-title-line">
            <span class="dot type-dot"></span>
            <span class="type-name">${escapeHtml(category.title || type)}</span>
            <span class="type-count">${groupedPlaces.length}</span>
          </span>
          <span class="type-summary">${escapeHtml(category.summary || "")}</span>
        </span>
        <span class="type-chevron" aria-hidden="true">⌄</span>
      `;

      const items = document.createElement("div");
      items.id = itemsId;
      items.className = "type-items";
      items.hidden = !isExpanded;

      toggle.addEventListener("click", () => {
        const shouldCollapse = !group.classList.contains("is-collapsed");
        group.classList.toggle("is-collapsed", shouldCollapse);
        items.hidden = shouldCollapse;
        toggle.setAttribute("aria-expanded", String(!shouldCollapse));
        requestAnimationFrame(() => map?.invalidateSize(true));
      });

      group.appendChild(toggle);
      groupedPlaces.forEach((place) => items.appendChild(placeCard(place, category)));
      group.appendChild(items);
      list.appendChild(group);
    });
  }

  function placeCard(place, category) {
    const card = document.createElement("article");
    const routeHint = place.routePairing || place.routeHint || "จัดตามแรงและเส้นทาง";
    applyCategoryStyle(card, category);
    card.className = "place";
    card.dataset.placeId = place.id || "";
    card.innerHTML = `
      <div class="place-category">${escapeHtml(category.title || "สถานที่")} · #${escapeHtml(markerLabel(place))}</div>
      <h2>${escapeHtml(markerLabel(place))}. ${escapeHtml(place.name)}</h2>
      <div class="meta">${escapeHtml(place.bestFor || "แวะตามทางได้")} · ต่อด้วย: ${escapeHtml(routeHint)}</div>
      <div class="distance">${escapeHtml(place.distance || "")}</div>
      <div class="note">${escapeHtml(place.feature || place.note || "")}</div>
      ${tagsHtml(place.tags || [])}
      <div class="card-actions">
        <button type="button" class="focus-place">ดูบนแผนที่</button>
        <a class="guide-link" href="${detailUrl(place)}">${escapeHtml(detailActionLabel(place))}</a>
        ${hasInternalMap(place) ? `<a href="${internalMapUrl(place)}">แผนที่ภายใน</a>` : ""}
        <a class="primary" href="${hotelDirectionsUrl(place)}" target="_blank" rel="noopener">${escapeHtml(hotelDirectionsLabel())}</a>
        <a class="grab-link" href="${grabDirectUrl(place)}" data-grab-place="${escapeHtml(place.id)}">เรียกรถ DiDi</a>
        <a href="${mapsUrl(place)}" target="_blank" rel="noopener">ดูสถานที่</a>
      </div>
    `;
    card.querySelector(".focus-place").addEventListener("click", () => focusPlace(place));
    return card;
  }

  function focusPlace(place) {
    const point = pointOfPlace(place);
    if (!map || !isFiniteNumber(point.lat) || !isFiniteNumber(point.lon)) return;
    map.setView([point.lat, point.lon], Math.max(map.getZoom(), 15), { animate: true });
    if (!window.matchMedia("(max-width: 900px)").matches) {
      place.__marker?.openPopup();
    }
  }

  function renderDetail() {
    const place = placesById.get(placeId);
    if (!place) return;
    const category = categoryFor(place);
    setAccent(category);
    document.title = `${place.name} - ${detailActionLabel(place)}`;
    setText("[data-category-title]", category.title || "สถานที่");
    setText("[data-place-title]", place.name);
    setText("[data-place-summary]", place.playbookIntro || place.feature || place.bestFor || "");
    setText("[data-step-count]", detailPillLabel(place));
    const internalMapLink = document.querySelector("[data-internal-map-link]");
    if (internalMapLink) {
      internalMapLink.hidden = !hasInternalMap(place);
      if (hasInternalMap(place)) internalMapLink.setAttribute("href", internalMapUrl(place));
    }
    renderPlaybook(place);
    renderCompactGuide(place);
    renderSequenceRows(place);
  }

  const topPlaybookExcludedTitles = new Set(["时间策略", "地图确认", "现场确认", "交通", "安全"]);

  function includeInTopPlaybook(group) {
    if (group?.playbook === true) return true;
    if (group?.playbook === false) return false;
    return !topPlaybookExcludedTitles.has(group?.title);
  }

  function allRecommendationGroups(place) {
    if (Array.isArray(place.playbookGroups) && place.playbookGroups.length) {
      return place.playbookGroups;
    }
    const groups = new Map();
    for (const step of place.steps || []) {
      for (const group of step.recommendationGroups || []) {
        if (!includeInTopPlaybook(group)) continue;
        if (!groups.has(group.title)) groups.set(group.title, []);
        const seen = new Set(groups.get(group.title).map((item) => {
          if (typeof item === "string") return item;
          return [item.label, item.query, item.text].filter(Boolean).join("|");
        }));
        for (const item of group.items || []) {
          const key = typeof item === "string" ? item : [item.label, item.query, item.text].filter(Boolean).join("|");
          if (!seen.has(key)) {
            groups.get(group.title).push(item);
            seen.add(key);
          }
        }
      }
    }
    const category = categoryFor(place);
    const preferred = category.title?.includes("吃")
      ? ["吃/喝", "看/拍", "买/带走", "冷气/休息", "商家/顺路"]
      : category.title?.includes("买")
        ? ["买/带走", "吃/喝", "看/拍", "冷气/休息", "商家/顺路"]
        : category.title?.includes("玩")
          ? ["看/拍", "吃/喝", "买/带走", "冷气/休息", "商家/顺路"]
          : category.title?.includes("看展")
            ? ["看/拍", "买/带走", "吃/喝", "冷气/休息", "商家/顺路"]
            : ["看/拍", "吃/喝", "买/带走", "冷气/休息", "商家/顺路"];
    const rank = (title) => {
      const index = preferred.indexOf(title);
      return index >= 0 ? index : preferred.length;
    };
    return [...groups.entries()]
      .map(([title, items]) => ({ title, items }))
      .sort((a, b) => rank(a.title) - rank(b.title));
  }

  function trimSentence(value) {
    return String(value || "").trim().replace(/[。！？.!?]+$/u, "");
  }

  function finishSentence(value) {
    const text = String(value || "").trim();
    if (!text) return "";
    return /[。！？.!?]$/u.test(text) ? text : text;
  }

  const nonPlaceMapLabelPattern = /(休息|补给|补水|轻便|小件|地图确认|营业|确认|排队|取舍|预算|节奏|逻辑|接法|路线|转场|方向|安全|礼让|人流|低体力|防晒|雨天|阵雨|闭馆|预约|时间|邮寄|避坑|不要|只买|不买|随身|垃圾|看好|保存|现场|为准|风大|温差|电量|负重|错峰|高峰|定位|明信片|小吃(?!区)|咖啡(?!馆)|咖啡豆|米线店|鲜花饼|奶茶|饮品|冰箱贴|小包|小物|周边|挂件|花酱|干货(?!山珍区|区)|水果(?!区)|干巴|火腿|雨衣|雨具|帽子|墨镜|防晒|鸥粮|零食|饮料|口味|主题书|图录|餐具|票|读书位|氛围|装饰|批发|清仓|日场|夜场|空间)/u;

  function isConcreteMapItem(item, label) {
    if (!item || typeof item === "string") return false;
    if (item.noMap || item.linkType === "none" || item.kind === "none") return false;
    if (item.linkType === "search" || item.kind === "search") return false;
    const text = [label, item.query, item.name].filter(Boolean).join(" ");
    if (nonPlaceMapLabelPattern.test(text)) return false;
    return Boolean(item.url || item.query || (isFiniteNumber(item.lat) && isFiniteNumber(item.lon)));
  }

  function renderRecLink(item, label, url) {
    if (!url) return `<strong>${escapeHtml(label)}</strong>`;
    return `<a class="rec-link rec-link-exact" href="${escapeHtml(url)}" target="_blank" rel="noopener" title="จุดบนแผนที่">${escapeHtml(label)}</a>`;
  }

  function mapHint(linkHtml) {
    return linkHtml ? ` <span class="rec-map-hint"> (แผนที่: ${linkHtml})</span>` : "";
  }

  function contentFirstRecSentence(item, label, linkHtml, detail) {
    const action = trimSentence(item.actionLabel || "");
    const tail = trimSentence(detail);
    const labelText = trimSentence(label);
    let main = tail || action || labelText;
    if (action && tail && !tail.includes(action)) {
      main = `${action}：${tail}`;
    }
    if (!linkHtml && labelText && main && !main.includes(labelText)) {
      main = `${labelText}：${main}`;
    }
    return `${finishSentence(escapeHtml(main))}${mapHint(linkHtml)}`;
  }

  function renderRecItem(item, groupTitle = "") {
    if (typeof item === "string") return escapeHtml(item);
    if (!item) return "";
    if (item.html) return String(item.html);
    const label = item.label || item.name || item.query || item.text || "";
    const description = item.text && item.text !== label ? item.text : "";
    const url = isConcreteMapItem(item, label) ? (item.url || exactMapUrl(item) || googleSearchUrl(item.query, item.lat, item.lon)) : "";
    const linkHtml = renderRecLink(item, label, url);
    return contentFirstRecSentence(item, label, url ? linkHtml : "", description);
  }

  function renderRecBox(step) {
    const groups = step.recommendationGroups || [];
    if (!groups.length) return "";
    return `
      <div class="rec-box">
        ${groups.map((group) => `
          <div class="rec-group">
            <div class="rec-label">${escapeHtml(group.title || "แนะนำ")}</div>
            <ul class="rec-list">
              ${(group.items || []).map((item) => `<li>${renderRecItem(item, group.title)}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderPlaybook(place) {
    const container = document.getElementById("playbookGroups");
    if (!container) return;
    const groups = allRecommendationGroups(place);
    const panel = container.closest(".playbook-panel");
    if (panel) panel.hidden = !groups.length;
    container.innerHTML = groups.map((group) => `
      <article class="playbook-card${group.featured ? " playbook-card-featured" : ""}">
        <h2>${escapeHtml(group.title || "แนะนำ")}</h2>
        <ul>${(group.items || []).map((item) => `<li>${renderRecItem(item, group.title)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  function compactGuideItems(place) {
    const steps = place.steps || [];
    const items = [];
    const mainAction = place.actionSummary || steps[0]?.action || place.feature || place.bestFor || "";
    if (mainAction) items.push(["ใช้จุดนี้ยังไง", mainAction]);
    if (place.bestFor) items.push(["เวลาที่เหมาะ", place.bestFor]);
    if (place.feature && place.feature !== mainAction) items.push(["ดูอะไรเป็นหลัก", place.feature]);
    if (place.routePairing) items.push(["ต่อเส้นทางไปไหน", place.routePairing]);
    if (steps[0]?.action && steps[0].action !== mainAction) items.push(["เมื่อมาถึง", steps[0].action]);
    return items.slice(0, 5);
  }

  function renderCompactGuide(place) {
    const container = document.getElementById("compactGuide");
    if (!container) return;
    if (isSequencePlace(place)) {
      container.hidden = true;
      container.innerHTML = "";
      return;
    }
    const items = compactGuideItems(place);
    const mapTarget = stepPointUrl((place.steps || [])[0] || place);
    container.hidden = false;
    container.innerHTML = `
      <div class="panel-title">เมื่อถึงที่</div>
      <div class="compact-guide-panel">
        ${items.length ? `<dl>${items.map(([label, value]) => `
          <div>
            <dt>${escapeHtml(label)}</dt>
            <dd>${escapeHtml(value)}</dd>
          </div>
        `).join("")}</dl>` : `<p>${escapeHtml(place.playbookIntro || place.sourceNote || "จุดเดียวจบ ไม่ฝืนแยกเป็นหลายขั้น")}</p>`}
        <div class="compact-actions">
          <a class="button primary" href="${hotelDirectionsUrl(place)}" target="_blank" rel="noopener">${escapeHtml(hotelDirectionsLabel())}</a>
          <a class="button" href="${mapTarget}" target="_blank" rel="noopener">ดูสถานที่</a>
        </div>
      </div>
    `;
  }

  function renderSequenceRows(place) {
    const title = document.querySelector(".sequence-title");
    const wrap = document.querySelector(".table-wrap");
    if (!isSequencePlace(place)) {
      if (title) title.hidden = true;
      if (wrap) wrap.hidden = true;
      return;
    }
    if (title) title.hidden = false;
    if (wrap) wrap.hidden = false;
    const tbody = document.getElementById("sequenceRows");
    if (!tbody) return;
    tbody.innerHTML = (place.steps || []).map((step) => {
      const meta = [step.kind, step.duration].filter(Boolean).join(" · ");
      return `
        <tr id="step-${step.order}">
          <td class="order-cell" data-label="#">${escapeHtml(step.order)}</td>
          <td class="step-cell" data-label="จุด / ทำอะไร">
            <h2 class="step-title">${escapeHtml(step.name)}</h2>
            ${meta ? `<span class="tag">${escapeHtml(meta)}</span>` : ""}
          </td>
          <td class="nav-cell" data-label="แผนที่">
            <div class="table-actions">
              <a class="button" href="${stepPointUrl(step)}" target="_blank" rel="noopener">AMap</a>
              <a class="button primary" href="${internalMapUrl(place)}#step-${step.order}">แผนที่ภายใน</a>
            </div>
          </td>
          <td class="action-cell" data-label="ทำยังไง">
            <div class="action-text">${escapeHtml(step.action || "")}</div>
            ${renderRecBox(step)}
          </td>
        </tr>
      `;
    }).join("");
  }

  function renderInternalMap() {
    const place = placesById.get(placeId);
    if (!place) return;
    const category = categoryFor(place);
    setAccent(category);
    document.title = `${place.name} - แผนที่ภายใน`;
    setText("[data-category-title]", category.title || "สถานที่");
    setText("[data-place-title]", hasInternalMap(place) ? `${place.name} แผนที่ภายใน` : `${place.name} แผนที่สถานที่`);
    setText("[data-place-summary]", place.feature || place.bestFor || "");
    document.querySelector("[data-detail-link]")?.setAttribute("href", detailUrl(place));
    renderStepCards(place);

    const points = hasInternalMap(place)
      ? (place.steps || []).filter((step) => isFiniteNumber(step.lat) && isFiniteNumber(step.lon))
      : [pointOfPlace(place)].filter((point) => isFiniteNumber(point.lat) && isFiniteNumber(point.lon));
    createMap("detailMap", points);
    if (!map) return;
    if (!hasInternalMap(place)) {
      const point = points[0];
      if (point) {
        L.marker([point.lat, point.lon], {
          icon: markerIcon(categoryColor(category), 24, markerLabel(place)),
          title: place.name
        })
          .addTo(map)
          .bindPopup(`<div class="popup-title">${escapeHtml(place.name)}</div><div class="popup-section">${escapeHtml(place.feature || place.bestFor || "")}</div>`);
      }
    }
    if (hasInternalMap(place)) points.forEach((step) => {
      step.__marker = L.marker([step.lat, step.lon], {
        icon: markerIcon(categoryColor(category), 24, String(step.order)),
        title: step.name
      })
        .addTo(map)
        .bindPopup(`
          <div class="popup-title">${escapeHtml(step.order)}. ${escapeHtml(step.name)}</div>
          <div class="popup-section">${escapeHtml(step.action || "")}</div>
          <div class="popup-actions">
            <a href="${stepNavigationUrl(step)}" data-step-place="${escapeHtml(place.id)}" data-step-nav="${escapeHtml(step.order)}" target="_blank" rel="noopener">AMap</a>
            <a class="guide-link" href="${detailUrl(place)}#step-${step.order}">คู่มือเต็ม</a>
          </div>
        `);
    });
    if (hasInternalMap(place) && points.length > 1) {
      L.polyline(points.map((step) => [step.lat, step.lon]), {
        color: categoryColor(category),
        weight: 3,
        opacity: .65,
        dashArray: "6 7"
      }).addTo(map);
    }
    bindLocationTools(points, { padding: [34, 34], maxZoom: 17 });
    requestAnimationFrame(() => fitMap(points, { padding: [34, 34], maxZoom: 17 }));
    window.addEventListener("load", () => fitMap(points, { padding: [34, 34], maxZoom: 17 }));
    setTimeout(() => focusFromHash(place, true), 250);
    window.addEventListener("hashchange", () => focusFromHash(place, true));
  }

  function renderStepCards(place) {
    const container = document.getElementById("stepCards");
    if (!container) return;
    if (!hasInternalMap(place)) {
      container.innerHTML = `
        <article class="map-list-item">
          <div class="step-head">
            <span class="step-num">${escapeHtml(markerLabel(place) || "•")}</span>
            <div>
              <h2 class="step-title">${escapeHtml(place.name)}</h2>
              <div class="muted">จุดเดียว ไม่มีเส้นทางภายใน</div>
            </div>
          </div>
          <p class="action-text">${escapeHtml(place.actionSummary || place.feature || place.bestFor || "")}</p>
          <div class="item-actions">
            <button type="button" data-fit-single>ดูบนแผนที่</button>
            <a class="button" href="${mapsUrl(place)}" target="_blank" rel="noopener">AMap</a>
            <a class="button primary" href="${detailUrl(place)}">คู่มือเต็ม</a>
          </div>
        </article>
      `;
      container.querySelector("[data-fit-single]")?.addEventListener("click", () => focusPlace(place));
      return;
    }
    container.innerHTML = (place.steps || []).map((step) => {
      const meta = [step.kind, step.duration].filter(Boolean).join(" · ");
      return `
        <article class="step-card map-list-item" id="step-card-${step.order}" data-step="${step.order}">
          <div class="step-head">
            <span class="step-num">${escapeHtml(step.order)}</span>
            <div>
              <h2 class="step-title">${escapeHtml(step.name)}</h2>
              ${meta ? `<div class="muted">${escapeHtml(meta)}</div>` : ""}
            </div>
          </div>
          <p class="action-text">${escapeHtml(step.action || "")}</p>
          <div class="item-actions">
            <button type="button" data-focus="${step.order}">ดูบนแผนที่</button>
            <a class="button" href="${stepNavigationUrl(step)}" data-step-place="${escapeHtml(place.id)}" data-step-nav="${escapeHtml(step.order)}" target="_blank" rel="noopener">AMap</a>
            <a class="button primary" href="${detailUrl(place)}#step-${step.order}">คู่มือเต็ม</a>
          </div>
        </article>
      `;
    }).join("");
    container.querySelectorAll("[data-focus]").forEach((button) => {
      button.addEventListener("click", () => focusStep(place, Number(button.dataset.focus), true));
    });
  }

  function focusFromHash(place, openPopup = false) {
    const match = location.hash.match(/step-(\d+)/);
    if (match) focusStep(place, Number(match[1]), openPopup);
  }

  function focusStep(place, order, openPopup = false) {
    const step = (place.steps || []).find((candidate) => Number(candidate.order) === Number(order));
    if (!map || !step || !isFiniteNumber(step.lat) || !isFiniteNumber(step.lon)) return;
    map.setView([step.lat, step.lon], Math.max(map.getZoom(), 17), { animate: true });
    document.querySelectorAll(".map-list-item.is-active").forEach((node) => node.classList.remove("is-active"));
    const card = document.getElementById(`step-card-${order}`);
    card?.classList.add("is-active");
    card?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    if (openPopup || !window.matchMedia("(max-width: 900px)").matches) {
      step.__marker?.openPopup();
    }
  }

  function bindLocationTools(points, fitOptions) {
    document.getElementById("fitButton")?.addEventListener("click", () => fitMap(points, fitOptions));
    document.getElementById("locateButton")?.addEventListener("click", locateMe);
  }

  function setLocationStatus(message) {
    const status = document.getElementById("locationStatus");
    if (status) status.textContent = message;
  }

  function updateUserLocation(position, options = {}) {
    if (!map || !window.L) return;
    const { centerMap = false } = options;
    const { latitude, longitude, accuracy } = position.coords;
    const latLng = [latitude, longitude];
    currentUserLatLng = (function () {
      const PI2 = Math.PI, A2 = 6378245.0, EE2 = 0.00669342162296594323;
      if (longitude < 72.004 || longitude > 137.8347 || latitude < 0.8293 || latitude > 55.8271) return { lat: latitude, lon: longitude };
      const x = longitude - 105.0, y = latitude - 35.0;
      let dLat = -100 + 2*x + 3*y + 0.2*y*y + 0.1*x*y + 0.2*Math.sqrt(Math.abs(x));
      dLat += (20*Math.sin(6*x*PI2) + 20*Math.sin(2*x*PI2)) * 2/3;
      dLat += (20*Math.sin(y*PI2) + 40*Math.sin(y/3*PI2)) * 2/3;
      dLat += (160*Math.sin(y/12*PI2) + 320*Math.sin(y*PI2/30)) * 2/3;
      let dLon = 300 + x + 2*y + 0.1*x*x + 0.1*x*y + 0.1*Math.sqrt(Math.abs(x));
      dLon += (20*Math.sin(6*x*PI2) + 20*Math.sin(2*x*PI2)) * 2/3;
      dLon += (20*Math.sin(x*PI2) + 40*Math.sin(x/3*PI2)) * 2/3;
      dLon += (150*Math.sin(x/12*PI2) + 300*Math.sin(x/30*PI2)) * 2/3;
      const radLat = latitude / 180.0 * PI2;
      let magic = Math.sin(radLat);
      magic = 1 - EE2 * magic * magic;
      const sqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / ((A2 * (1 - EE2)) / (magic * sqrtMagic) * PI2);
      dLon = (dLon * 180.0) / (A2 / sqrtMagic * Math.cos(radLat) * PI2);
      return { lat: latitude + dLat, lon: longitude + dLon };
    })();
    const accuracyText = Number.isFinite(accuracy) ? ` แม่นยำ ~${Math.round(accuracy)} ม.` : "";
    const userIcon = L.divIcon({
      className: "user-location-marker",
      html: '<span class="user-location-dot"></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    if (!userMarker) {
      userMarker = L.marker(latLng, { icon: userIcon, title: "ตำแหน่งของฉัน" })
        .addTo(map)
        .bindPopup('<div class="popup-title">My location</div>');
    } else {
      userMarker.setLatLng(latLng);
    }

    if (!accuracyCircle) {
      accuracyCircle = L.circle(latLng, {
        radius: accuracy || 25,
        color: "#1677ff",
        weight: 1,
        opacity: .55,
        fillColor: "#1677ff",
        fillOpacity: .08
      }).addTo(map);
    } else {
      accuracyCircle.setLatLng(latLng);
      accuracyCircle.setRadius(accuracy || 25);
    }

    if (centerMap) {
      map.closePopup();
      map.setView(latLng, 15, { animate: true });
    }
    refreshGrabLinks();
    const time = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setLocationStatus(`กำลังติดตามตำแหน่ง${accuracyText} อัปเดต ${time}`);
    const locateButton = document.getElementById("locateButton");
    if (locateButton) locateButton.textContent = "กลับมาที่ตำแหน่งฉัน";
  }

  function locationError(error) {
    const messages = {
      1: "ไม่ได้รับอนุญาตให้ระบุตำแหน่ง เปิดสิทธิ์ในเบราว์เซอร์/ระบบ หรือใช้ปุ่มนำทางจากที่พักในการ์ดแต่ละใบ",
      2: "ยังระบุตำแหน่งไม่ได้ ลองออกที่โล่งหรือเปิด Location Services",
      3: "ระบุตำแหน่งหมดเวลา ลองใหม่ หรือใช้ปุ่มนำทางจากที่พัก"
    };
    setLocationStatus(messages[error?.code] || "ระบุตำแหน่งไม่สำเร็จ ใช้ปุ่มนำทางจากที่พักแทน");
    const locateButton = document.getElementById("locateButton");
    if (locateButton) locateButton.textContent = "ระบุตำแหน่งฉัน";
  }

  function locateMe() {
    if (!("geolocation" in navigator)) {
      setLocationStatus("เบราว์เซอร์นี้ไม่รองรับการระบุตำแหน่ง ใช้ปุ่มนำทางจากที่พักแทน");
      return;
    }
    if (window.isSecureContext === false) {
      setLocationStatus("ไม่ใช่ HTTPS เบราว์เซอร์อาจบล็อกการระบุตำแหน่ง เปิดผ่าน HTTPS หรือใช้ปุ่มนำทางจากที่พัก");
    } else {
      setLocationStatus(watchId === null ? "กำลังขอสิทธิ์ตำแหน่งและเริ่มติดตาม..." : "กำลังเลื่อนกลับมาที่ตำแหน่งของคุณ...");
    }
    const locateButton = document.getElementById("locateButton");
    if (locateButton) locateButton.textContent = "กำลังระบุตำแหน่ง...";
    hasCenteredOnLocate = false;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        hasCenteredOnLocate = true;
        updateUserLocation(position, { centerMap: true });
      },
      locationError,
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 10000
      }
    );
    if (watchId === null) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          updateUserLocation(position, { centerMap: !hasCenteredOnLocate });
          hasCenteredOnLocate = true;
        },
        locationError,
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 5000
        }
      );
    }
  }

  function handleGrabClick(event) {
    const grabLink = event.target.closest("[data-grab-place]");
    if (!grabLink) return;
    const place = placesById.get(grabLink.dataset.grabPlace);
    if (!place) return;
    event.preventDefault();
    openGrab(place);
  }

  if (page === "overview") renderOverview();
  if (page === "detail") renderDetail();
  if (page === "internal-map") renderInternalMap();
})();
