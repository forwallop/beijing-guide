window.TRAVEL_GUIDE = {
  title: "Beijing Travel Map for Visitors",
  goldProfile: {
    expectedOverviewPlaces: 20,
    expectedCategories: 6,
    expectedMinHtml: 24
  },
  subtitle: "Start from the Wangfujing reference point. Pick what you want to do, then open each place's guide. Major sights need WeChat mini-program booking with your passport; most close on Mondays.",
  anchor: {
    name: "City-center reference · Wangfujing 王府井 (swap in your hotel)",
    shortName: "Wangfujing",
    address: "Wangfujing Pedestrian Street, Dongcheng, Beijing",
    lat: 39.916204,
    lon: 116.411344
  },
  categories: [
    {
      id: "royal",
      title: "Imperial Landmarks 皇城地标",
      summary: "Forbidden City, Temple of Heaven, Summer Palace, Lama Temple — book tickets first, then plan your days. Most close Mondays.",
      color: "#b03a2e"
    },
    {
      id: "wall",
      title: "Great Wall Day Trip 长城",
      summary: "Mutianyu: fewer crowds + toboggan. Badaling: direct high-speed rail to the Hero Slope. Pick one by time and stamina.",
      color: "#7d6608"
    },
    {
      id: "hutong",
      title: "Old City Hutong Citywalk 胡同",
      summary: "Shichahai, Nanluoguxiang, Baochao Hutong, Qianmen — the alleys foreigners love to wander, plus heritage shops.",
      color: "#7b5aa6"
    },
    {
      id: "food",
      title: "Food Streets & Beijing Eats 小吃",
      summary: "Niujie, Gui Street, a local morning market and a courtyard restaurant — choose by time of day: morning / dinner / late night.",
      color: "#b24f37"
    },
    {
      id: "modern",
      title: "Modern Art & New Beijing 798",
      summary: "798 Art Zone and the Olympic icons: photos, exhibitions, handy on the way to the airport.",
      color: "#1f618d"
    },
    {
      id: "indoor",
      title: "Museums & Rainy-Day Indoor 博物馆",
      summary: "Free national museum and a hidden cathedral — for rain, heat, or a spare half day.",
      color: "#2f64a3"
    }
  ],
  places: [
    {
      id: "gugong",
      categoryId: "royal",
      name: "Forbidden City + Jingshan 故宫+景山",
      address: "4 Jingshan Front St, Dongcheng, Beijing",
      bestFor: "First visit must-do: the imperial core plus the full panorama from Wanchun Pavilion. Book a morning slot to have enough time.",
      feature: "Enter at the Meridian Gate, walk the central axis halls, exit the north gate, then climb Jingshan across the road to see the whole Forbidden City from above.",
      routePairing: "Morning Forbidden City → Jingshan; afternoon Nanluoguxiang or Shichahai",
      tags: [
        "must-see",
        "book 7 days ahead",
        "closed Mondays"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "For foreign visitors the booking and the entrance are the whole game: tickets are released 7 days ahead at 20:00 China time, the WeChat mini-program accepts passport companions; use the staffed manual lane to enter.",
      sourceNote: "Xiaohongshu r013 (booking walkthrough for foreigners), r017 (axis route + Jingshan viewpoint), r053/r056 (Siji Minfu roast duck), r046 (Monday closure)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Central axis halls 太和殿",
              query: "故宫太和殿",
              linkType: "exact",
              text: "Walk the axis 午门、太和殿、保和殿 northward; rent the English audio guide and listen as you go"
            },
            {
              label: "Wanchun Pavilion 景山万春亭",
              query: "景山公园万春亭",
              linkType: "exact",
              text: "Exit the north gate, cross the road and climb Jingshan — Wanchun Pavilion is the best full-panorama spot of the Forbidden City"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Siji Minfu 四季民福·故宫店",
              query: "四季民福烤鸭店 故宫店",
              linkType: "exact",
              text: "Roast duck right after the palace: a tested winner — one foreign family finished two whole ducks; don't skip the salt-and-pepper duck rack 椒盐鸭架. Queues at mealtimes, grab a number first"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Booking",
              linkType: "none",
              text: "Tickets drop 7 days ahead at 20:00 China time and hot dates vanish in minutes — set an alarm for the time difference; the WeChat mini-program 故宫博物院 takes passport companions"
            },
            {
              label: "Closed Mondays",
              linkType: "none",
              text: "The Forbidden City closes on Mondays. Alipay works with foreign cards at the shops (fee above ¥200); WeChat transfers are restricted for foreigners"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Meridian Gate 午门",
          kind: "Arrive",
          duration: "20-30 min",
          googleQuery: "故宫午门",
          action: "Enter through the Meridian Gate after security. Foreign passports often fail the machine gates — go straight to the staffed manual lane and show your booking plus passport.",
          recommendationGroups: [
            {
              title: "Tips",
              items: [
                {
                  label: "Manual lane",
                  linkType: "none",
                  text: "The staffed lane is fastest with a passport; don't waste time at the turnstiles"
                },
                {
                  label: "Morning slot",
                  linkType: "none",
                  text: "Book the morning session — foreign guests usually want more time than the afternoon allows"
                }
              ]
            }
          ],
          lat: 39.913502,
          lon: 116.397842
        },
        {
          order: 2,
          name: "Hall of Supreme Harmony 太和殿 (central axis)",
          kind: "Core visit",
          duration: "1.5-2 h",
          googleQuery: "故宫太和殿",
          action: "Follow the central axis through 太和殿、中和殿、保和殿. English audio guides are rented at the entrance and English tours are common.",
          recommendationGroups: [
            {
              title: "See & Shoot",
              items: [
                {
                  label: "Supreme Harmony square 太和殿",
                  query: "故宫太和殿",
                  linkType: "exact",
                  text: "The great square is the first big photo — emptier right after opening"
                }
              ]
            }
          ],
          lat: 39.917301,
          lon: 116.397042
        },
        {
          order: 3,
          name: "Gate of Divine Prowess 神武门",
          kind: "Exit",
          duration: "10 min",
          googleQuery: "故宫神武门",
          action: "Exit via the north gate 神武门; Jingshan Park's south gate is right across the street, about 5 minutes on foot.",
          recommendationGroups: [
            {
              title: "Nearby & Next",
              items: [
                {
                  label: "Jingshan Park 景山公园",
                  query: "景山公园",
                  linkType: "exact",
                  text: "Go straight across to Jingshan — don't loop back toward the Meridian Gate"
                }
              ]
            }
          ],
          lat: 39.922302,
          lon: 116.396843
        },
        {
          order: 4,
          name: "Wanchun Pavilion 景山公园万春亭",
          kind: "Finale view",
          duration: "40-60 min",
          googleQuery: "景山公园万春亭",
          action: "Climb to Wanchun Pavilion on the central peak for the golden-roof panorama of the Forbidden City — best light near dusk. Continue to Shichahai or Nanluoguxiang after.",
          recommendationGroups: [
            {
              title: "See & Shoot",
              items: [
                {
                  label: "Wanchun Pavilion 万春亭",
                  query: "景山公园万春亭",
                  linkType: "exact",
                  text: "Dead-center on the palace axis — the classic 'first look at Beijing' shot"
                }
              ]
            },
            {
              title: "Eat & Drink",
              items: [
                {
                  label: "Siji Minfu 四季民福·故宫店",
                  query: "四季民福烤鸭店 故宫店",
                  linkType: "exact",
                  text: "The old roast-duck house near the palace where foreigners queue — duck rack 椒盐鸭架 and the duck itself both worth it; walk over after the park"
                }
              ]
            }
          ],
          lat: 39.925902,
          lon: 116.396643
        }
      ],
      lat: 39.913502,
      lon: 116.397842,
      didi: {
        lat: 39.9121,
        lon: 116.3916
      },
      distance: "~1.2 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "tiananmen",
      categoryId: "royal",
      name: "Tian'anmen Square 天安门广场",
      address: "Chang'an Avenue, Dongcheng, Beijing",
      bestFor: "Same day as the Forbidden City / National Museum; earliest morning = fewest people, most classic photos.",
      feature: "Free but reservation + security check required; a same-day Forbidden City ticket exempts you from a separate square booking.",
      routePairing: "Square → Forbidden City → Jingshan in one line, or pair with the National Museum",
      tags: [
        "free",
        "reservation needed",
        "go early"
      ],
      detailMode: "compact",
      playbookIntro: "30-60 minutes is enough for the square itself: shoot the gate tower and the square, and budget real time for the reservation and security queue.",
      sourceNote: "Xiaohongshu r017 (arrive early), r046 (free WeChat booking / FC-ticket exemption), r044 (same day as National Museum)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Tian'anmen Gate 天安门",
              query: "天安门",
              linkType: "exact",
              text: "Fewest people at dawn; the head-on gate photo is the classic. The flag ceremony 升旗仪式 needs an even earlier spot, and security 安检 takes time"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Booking + passport",
              linkType: "none",
              text: "Free, but WeChat reservation + passport security check; skip the separate booking if you hold a same-day Forbidden City ticket"
            }
          ]
        },
        {
          title: "Nearby & Next",
          items: [
            {
              label: "National Museum 国家博物馆",
              query: "中国国家博物馆",
              linkType: "exact",
              text: "On the east side of the square — free, but book 7 days ahead; closed Mondays"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Tian'anmen Square 天安门广场",
          kind: "Photo stop",
          duration: "30-60 min",
          googleQuery: "天安门广场",
          action: "Pass security, take photos, then head north into the Forbidden City or east into the National Museum.",
          recommendationGroups: [],
          lat: 39.904101,
          lon: 116.397641
        }
      ],
      lat: 39.904101,
      lon: 116.397641,
      didi: {
        lat: 39.9027,
        lon: 116.3914
      },
      distance: "~1.8 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "tiantan",
      categoryId: "royal",
      name: "Temple of Heaven 天坛",
      address: "1 Tiantan Rd, Dongcheng, Beijing",
      bestFor: "Half a day — the Hall of Prayer is Beijing's most photogenic building after the Forbidden City.",
      feature: "Hall of Prayer + Circular Mound; the combo ticket 联票 is the right buy. A real local morning market sits just east.",
      routePairing: "Morning market + Temple of Heaven, afternoon on to Qianmen Street",
      tags: [
        "combo ticket",
        "partly closed Mon",
        "good English signage"
      ],
      detailMode: "compact",
      playbookIntro: "Buy the combo ticket and focus on the Hall of Prayer 祈年殿 and Circular Mound 圜丘. For a 'non-tourist Beijing' breakfast, hit Xingfu Street morning market east of the park first.",
      sourceNote: "Xiaohongshu r046 (combo/Monday), r033/r036 (English-guided 祈年殿/圜丘), r025 (Xingfu St market nearby), r044 (itinerary slot)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Hall of Prayer 祈年殿",
              query: "天坛祈年殿",
              linkType: "exact",
              text: "The triple-eaved round hall — shoot from below the front steps for the classic upward angle"
            },
            {
              label: "Circular Mound 圜丘坛",
              query: "天坛圜丘",
              linkType: "exact",
              text: "The echo stones — 天心石 and the Echo Wall 回音壁 are the interactive bits foreign visitors love"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Xingfu St morning market 幸福大街",
              query: "幸福大街 菜市场",
              linkType: "search",
              text: "Local market east of the park: corn buns 菜团子 + lamb offal soup 羊杂汤, full for about ¥20; stalls close by 1 pm"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Combo ticket",
              linkType: "none",
              text: "The inner sights need the combo ticket 联票 — gate-only tickets waste the trip; some halls close Mondays; WeChat booking with passport"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Temple of Heaven 天坛",
          kind: "Visit",
          duration: "2-3 h",
          googleQuery: "天坛公园",
          action: "Enter at the east or south gate; Hall of Prayer → Echo Wall → Circular Mound in one line. The morning exercisers in the park are a sight of their own.",
          recommendationGroups: [],
          lat: 39.881303,
          lon: 116.40914
        }
      ],
      lat: 39.881303,
      lon: 116.40914,
      didi: {
        lat: 39.8799,
        lon: 116.4029
      },
      distance: "~3.9 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "yiheyuan",
      categoryId: "royal",
      name: "Summer Palace 颐和园",
      address: "19 Xinjiangongmen Rd, Haidian, Beijing",
      bestFor: "Half to a full day: imperial garden + Kunming Lake; lots of walking.",
      feature: "Enter at the North Palace Gate to save your legs; the Long Corridor and a Kunming Lake boat are what every guide agrees on.",
      routePairing: "It's in the northwest suburbs — give it its own half day; the Olympic Park is on the way back",
      tags: [
        "imperial garden",
        "lots of walking",
        "boat ride"
      ],
      detailMode: "compact",
      playbookIntro: "It's huge — don't try to see it all. North Palace Gate in, then Suzhou Street → Long Corridor → Kunming Lake is the leg-saving line. Boats in summer, ice in winter.",
      sourceNote: "Xiaohongshu r017 (North Gate / corridor + boat), r003 (efficient money-saving route), r046 (same-day or 7-day booking)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Long Corridor 长廊",
              query: "颐和园长廊",
              linkType: "exact",
              text: "长廊、昆明湖、游船 are the agreed highlights — 728 m of painted beams, every panel a different story, walk it slowly"
            },
            {
              label: "Kunming Lake 昆明湖",
              query: "颐和园昆明湖",
              linkType: "exact",
              text: "Take a boat — 游船、万寿山、佛香阁 in one view, far easier than walking the shoreline"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Which gate",
              linkType: "none",
              text: "North Palace Gate 北宫门 saves a lot of walking versus the east gate; same-day booking usually works but book ahead in peak season, passport + WeChat"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Summer Palace (North Palace Gate) 颐和园北宫门",
          kind: "Visit",
          duration: "3-4 h",
          googleQuery: "颐和园北宫门",
          action: "North gate in → Suzhou Street → Long Corridor → Kunming Lake boat, trimming by stamina; taxi or metro back to town.",
          recommendationGroups: [],
          lat: 39.991323,
          lon: 116.270741
        }
      ],
      lat: 39.991323,
      lon: 116.270741,
      didi: {
        lat: 39.9901,
        lon: 116.2647
      },
      distance: "~15 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "yonghegong",
      categoryId: "royal",
      name: "Lama Temple 雍和宫 (+ snack belt)",
      address: "12 Yonghegong St, Dongcheng, Beijing",
      bestFor: "Tibetan Buddhist temple with a dense old-shop snack belt right outside — worship and food in one stop.",
      feature: "'Walk out of the Lama Temple and everything is delicious' — the walkable circle around it is packed with shops locals keep recommending.",
      routePairing: "Lama Temple → Wudaoying / Beixinqiao snacks → Gui Street at night",
      tags: [
        "open daily",
        "incense",
        "snack belt"
      ],
      detailMode: "compact",
      playbookIntro: "The temple itself takes 1-1.5 h; the hidden play is the snack belt after — the walk from 雍和宫 toward 北新桥 is lined with beloved old shops.",
      sourceNote: "Xiaohongshu r026 (Yonghegong 18-item snack list: 同日升/奶油老生/六面寿/烤肉宛/红星前进, extracted from images), r046 (open daily), r044 (itinerary slot)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Lama Temple 雍和宫",
              query: "雍和宫",
              linkType: "exact",
              text: "Beijing's busiest Tibetan Buddhist temple; 每日开放 — open every day, WeChat booking with passport, free incense at the gate"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Liumianshou 六面寿",
              query: "六面寿 雍和宫",
              linkType: "search",
              text: "Braised-sauce noodles right opposite the temple — unlimited noodle and sauce refills, cheap and homely"
            },
            {
              label: "Naiyou Laosheng 奶油老生",
              query: "奶油老生 北京",
              linkType: "search",
              text: "Fried cream puffs 奶油炸糕 made to order — golden crisp outside, dip in white sugar; an old Beijing childhood taste"
            },
            {
              label: "Tongrisheng 同日升粮行",
              query: "同日升粮行",
              linkType: "search",
              text: "Stone-ground 二八酱 sesame-peanut paste — take a jar home for noodles"
            }
          ]
        },
        {
          title: "Buy & Take",
          items: [
            {
              label: "Hongxing Qianjin 红星前进面包牛奶公司",
              query: "红星前进面包牛奶公司",
              linkType: "search",
              text: "Toast stamped with today's date plus glass-bottle milk — birthday-photo favorite"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Shop locations",
              linkType: "none",
              text: "The shops scatter across 雍和宫、北新桥、交道口; chains like 烤肉宛、同日升 have multiple branches — check names in AMap before heading out"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Lama Temple 雍和宫",
          kind: "Visit + eat",
          duration: "2-3 h",
          googleQuery: "雍和宫",
          action: "Morning in the temple halls, then walk south along the street for 六面寿 / 奶油老生 and the other old shops; Wudaoying Hutong 五道营 is next door.",
          recommendationGroups: [],
          lat: 39.947004,
          lon: 116.417246
        }
      ],
      lat: 39.947004,
      lon: 116.417246,
      didi: {
        lat: 39.9456,
        lon: 116.411
      },
      distance: "~3.5 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "mutianyu",
      categoryId: "wall",
      name: "Mutianyu Great Wall 慕田峪长城",
      address: "Mutianyu Village, Huairou, Beijing",
      bestFor: "Fewer crowds, greener views, and the toboggan down — the usual pick in foreigner guides, relaxed vibe.",
      feature: "90%+ tree cover. Cable car up to Tower 14, walk to Tower 20 (the Hero Slope), toboggan down from Tower 6.",
      routePairing: "Full-day trip; Gui Street crayfish or the Olympic lights on the way back",
      tags: [
        "full day",
        "toboggan",
        "foreigner favorite",
        "avoid unlicensed taxis"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "Standard line: official bus from the city → ticket ¥40 + shuttle ¥15 at the visitor center → cable car up to Tower 14 → walk the wall to Tower 20 (Hero Slope 好汉坡) → back to Tower 6 and toboggan down. About 3-4 h on the wall.",
      playbookIntro: "Which wall: quiet + toboggan + kids → Mutianyu; fastest access + the textbook Hero Slope → Badaling. Mutianyu runs on buses/charters — use official channels only. Follow the signage between towers; this page keeps no in-park map.",
      sourceNote: "Xiaohongshu r061 (transport/prices/best combo), r066 (climb combos), r063 (vs Badaling / many foreign visitors), r046 (less crowded, cable car & toboggan), r060/r062/r064/r065/r067 (family corroboration)",
      playbookGroups: [
        {
          title: "Play",
          items: [
            {
              label: "Toboggan 滑道",
              linkType: "none",
              text: "Ride the toboggan 滑道 down from Tower 6 — you control the speed, like a Great Wall roller coaster, 5-8 minutes and the highlight for most visitors; kids under 1.2 m share a sled, closed in rain or snow"
            }
          ]
        },
        {
          title: "See & Shoot",
          items: [
            {
              label: "Tower 20 · Hero Slope 好汉坡",
              linkType: "none",
              text: "The highest point — the wall snakes to the horizon. Low on energy? The shots at Towers 14/15 by the cable car 缆车 are nearly as good"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Official buses",
              linkType: "none",
              text: "Qianmen tourist hub round trip ¥80 (depart 7:00-11:00, return 13:00-16:00) or Bus-Da from Hepingxiqiao ¥115 incl. shuttle 摆渡车 + ticket. Never take unlicensed taxis 黑车; slow public buses waste 2+ hours. Driving? Navigate to 慕田峪P4停车场"
            },
            {
              label: "Climb combos",
              linkType: "none",
              text: "Cable car 缆车 (enclosed, to Tower 14) or open chairlift + toboggan (Tower 6) — each ¥140 return. Best line: cable up to 14 → walk to 20 → toboggan from 6. Toboggan closes in rain/snow"
            },
            {
              label: "Before 8 am",
              linkType: "none",
              text: "Beat the 9-11 am crowd for clean photos; summit food is pricey, bring water and snacks; wear real shoes"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Mutianyu Visitor Center 慕田峪游客中心",
          kind: "Arrive",
          duration: "full day",
          googleQuery: "慕田峪长城",
          action: "Bus or charter to the visitor center; ticket ¥40 (under-18 free) + shuttle ¥15, then follow 'cable up Tower 14 → Tower 20 Hero Slope → toboggan from Tower 6'.",
          recommendationGroups: [],
          lat: 40.435546,
          lon: 116.569376
        }
      ],
      lat: 40.435546,
      lon: 116.569376,
      didi: {
        lat: 40.4344,
        lon: 116.5635
      },
      distance: "~59 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "badaling",
      categoryId: "wall",
      name: "Badaling Great Wall 八达岭长城",
      address: "Badaling, Yanqing, Beijing",
      bestFor: "Short on time or with elders: 30-min high-speed rail, cable car to the Hero Slope, 1.5 h on the wall.",
      feature: "The textbook Great Wall — 'He who has not reached the Great Wall is not a true man' was written about the North 8th Tower here.",
      routePairing: "Half to most of a day; rail back to Beijing North then Shichahai at dusk",
      tags: [
        "high-speed rail",
        "Hero Slope",
        "crowded"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "Standard line: high-speed rail from Beijing North 北京北站 30 min to Badaling Great Wall station → cable car to North Tower 7 → walk 20 min to North Tower 8, the Hero Slope 好汉坡 → return the same way. About 1.5 h on the wall.",
      playbookIntro: "Badaling wins on access: walk out of the rail station and you're at the gate. Crowds are a given — the earliest train plus cable car skips most of them.",
      sourceNote: "Xiaohongshu r063 (rail/cable/N8 tower/free-ticket policy), r017 (rail or Bus 877 from Deshengmen), r046 (WeChat ticket + bus bundle)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "North Tower 8 · Hero Slope 北八楼",
              linkType: "none",
              text: "20 minutes' walk from the cable car at North Tower 7 — the stele and the wall stretching over the ridges is the classic frame, morning light is best"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Rail tickets",
              linkType: "none",
              text: "Beijing North 北京北 → Badaling trains are limited — book both ways on 12306 in advance; Bus 877 jams on holidays"
            },
            {
              label: "Free entry",
              linkType: "none",
              text: "Under 18 and over 60 enter free (cable car still ¥100 single / ¥140 return)"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Badaling Great Wall 八达岭长城",
          kind: "Arrive",
          duration: "half day+",
          googleQuery: "八达岭长城",
          action: "High-speed rail from Beijing North (30 min, book ahead; Bus 877 as backup); WeChat ticket + park-bus bundle skips queues; cable car to North Tower 7 then walk 20 min to the Hero Slope.",
          recommendationGroups: [],
          lat: 40.361581,
          lon: 116.011305
        }
      ],
      lat: 40.361581,
      lon: 116.011305,
      didi: {
        lat: 40.3603,
        lon: 116.0051
      },
      distance: "~60 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "shichahai",
      categoryId: "hutong",
      name: "Shichahai · Yandai Lane · Drum Tower 什刹海·烟袋斜街·鼓楼",
      address: "Di'anmen Outer St, Xicheng, Beijing",
      bestFor: "Best at dusk into night: lake, slanted old lane and the Drum Tower in one line; turns into a bar-and-skewer strip after dark.",
      feature: "The standard evening line in foreigner guides: lakeside → Silver Ingot Bridge → Yandai Lane → climb the Drum Tower.",
      routePairing: "Follows naturally after Forbidden City / Jingshan or Nanluoguxiang; start at dusk",
      tags: [
        "dusk",
        "lake views",
        "nightlife"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "The walk takes 1.5-2 h but deserves slowness: watch locals fish and play chess by the lake, browse the lane, then catch the drum show and old-town skyline from the tower.",
      sourceNote: "Xiaohongshu r017 (Shichahai→Yandai→Drum Tower order + on-site tickets), r028 (Houhai night-food strip), r044 (itinerary slot)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Silver Ingot Bridge 银锭桥",
              query: "银锭桥",
              linkType: "exact",
              text: "The little stone bridge between 前海、后海 — looking west from it is a classic old-Beijing view"
            },
            {
              label: "Drum Tower 鼓楼",
              query: "北京鼓楼",
              linkType: "exact",
              text: "Climb for the drum show 击鼓表演 and the old-town skyline 老北京天际线; tickets on site 现场购票, check the last show time"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Houhai strip 后海",
              linkType: "none",
              text: "At night the lakeside loops with skewers 烤串, fermented mung-bean drink 豆汁 and offal stew 卤煮 — dare a friend with the 豆汁"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Tower shows",
              linkType: "none",
              text: "鼓楼、钟楼: buy tickets on site; note the last drum performance 击鼓表演 of the day"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Shichahai lakeside 什刹海湖畔",
          kind: "Arrive",
          duration: "30-40 min",
          googleQuery: "什刹海",
          action: "Get off at the Di'anmen Outer St entrance and walk the Qianhai shore — locals fishing and playing chess; boats in summer, an ice rink in winter.",
          recommendationGroups: [
            {
              title: "See & Shoot",
              items: [
                {
                  label: "Qianhai lake 前海",
                  linkType: "none",
                  text: "Backlit water and willow silhouettes at dusk — best shots of the walk"
                }
              ]
            }
          ],
          lat: 39.937402,
          lon: 116.396344
        },
        {
          order: 2,
          name: "Silver Ingot Bridge 银锭桥",
          kind: "Photo stop",
          duration: "10-15 min",
          googleQuery: "银锭桥",
          action: "Cross the small bridge where 前海 meets 后海 and shoot the lake; the bar strip starts here.",
          recommendationGroups: [],
          lat: 39.939,
          lon: 116.393442
        },
        {
          order: 3,
          name: "Yandai Xiejie 烟袋斜街",
          kind: "Browse",
          duration: "20-30 min",
          googleQuery: "烟袋斜街",
          action: "One of Beijing's oldest slanted lanes — pipes, gourds and small craft shops; the far end faces the Drum Tower.",
          recommendationGroups: [
            {
              title: "Buy & Take",
              items: [
                {
                  label: "Lane shops",
                  linkType: "none",
                  text: "Shops turn over fast — buy what you like on the spot, but save big purchases for elsewhere"
                }
              ]
            }
          ],
          lat: 39.939101,
          lon: 116.394843
        },
        {
          order: 4,
          name: "Drum Tower 鼓楼",
          kind: "Climb & finish",
          duration: "40-60 min",
          googleQuery: "北京鼓楼",
          action: "Climb for the drum show and rooftop skyline; afterwards, supper on the Houhai strip or taxi to Gui Street.",
          recommendationGroups: [
            {
              title: "Eat & Drink",
              items: [
                {
                  label: "Houhai night strip 后海",
                  linkType: "none",
                  text: "Skewers 烤串, 豆汁 and 卤煮 ring the lake — the natural supper after the tower"
                }
              ]
            }
          ],
          lat: 39.940702,
          lon: 116.395944
        }
      ],
      lat: 39.937402,
      lon: 116.396344,
      didi: {
        lat: 39.936,
        lon: 116.3901
      },
      distance: "~2.7 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "nanluoguxiang",
      categoryId: "hutong",
      name: "Nanluogu Lane 南锣鼓巷",
      address: "Nanluoguxiang, Dongcheng, Beijing",
      bestFor: "An 800-year-old hutong main street with snacks and souvenirs — the easiest first hutong.",
      feature: "Busy but convenient: eat candied hawthorn as you walk; the real old Beijing hides in the side lanes.",
      routePairing: "Walkable from the Forbidden City / Jingshan; chains straight into Shichahai",
      tags: [
        "en route",
        "snacks",
        "crowded"
      ],
      detailMode: "compact",
      playbookIntro: "The main street takes 20 minutes — don't stop there: the side lanes (帽儿胡同、雨儿胡同) are where courtyard doorways and hutong life actually are.",
      sourceNote: "Xiaohongshu r017 (800-year hutongs / tanghulu), r044 (itinerary slot)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Candied hawthorn 糖葫芦",
              linkType: "none",
              text: "Eat as you walk — 糖葫芦、煎饼 are the safe crowd-pleasers; try the classic hawthorn first"
            }
          ]
        },
        {
          title: "See & Shoot",
          items: [
            {
              label: "Mao'er & Yu'er lanes 帽儿胡同、雨儿胡同",
              linkType: "none",
              text: "Turn into the side lanes for door piers and old house plates — quiet enough to actually shoot"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Beat the crowd",
              linkType: "none",
              text: "Weekends and holidays the main street is packed; weekdays or evenings feel far better — pair with 糖葫芦、煎饼 and amble"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Nanluogu Lane 南锣鼓巷",
          kind: "Stroll",
          duration: "1-1.5 h",
          googleQuery: "南锣鼓巷",
          action: "South gate in, north gate out; snacks on the main drag, life in the side lanes. From the north end Shichahai is 10 minutes west.",
          recommendationGroups: [],
          lat: 39.933705,
          lon: 116.403947
        }
      ],
      lat: 39.933705,
      lon: 116.403947,
      didi: {
        lat: 39.9323,
        lon: 116.3977
      },
      distance: "~2.0 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "baochao",
      categoryId: "hutong",
      name: "Baochao Hutong citywalk 宝钞胡同",
      address: "Baochao Hutong, Dongcheng, Beijing",
      bestFor: "'The hutong foreigners love to slip into' — 700 m, 8 small shops: coffee, Cantonese noodles, Yunnan food, a livehouse.",
      feature: "A local blogger's find: foreigners ducking into a side alley to shoot the Bell Tower; the lane 'irons out your anxiety'.",
      routePairing: "Same block as the Bell & Drum Towers and Shichahai — perfect for the afternoon-tea slot",
      tags: [
        "hidden gem",
        "coffee",
        "photogenic"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "Under 700 m, 10 minutes' walk — but every shop is sit-downable: Modernista's livehouse, 福荣记's Cantonese noodles, 露华行深's coffee. The way to do this lane is slowly.",
      sourceNote: "Xiaohongshu r002 (Baochao citywalk: 8-shop list + Bell Tower view, 1898 likes / 1939 saves)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Luhua Xingshen 露华行深",
              query: "露华行深 北京",
              linkType: "search",
              text: "The lane's coffee stop — the one that shows up most in the blogger's photos; good for a break"
            },
            {
              label: "Furongji 福荣记",
              query: "福荣记 宝钞胡同",
              linkType: "search",
              text: "Cantonese noodle shop — where the locals actually eat"
            },
            {
              label: "TBS Sandwich 三明治工坊",
              query: "TBS三明治 北京",
              linkType: "search",
              text: "Sandwich shop with a regular foreign crowd — for when your friends miss Western food"
            }
          ]
        },
        {
          title: "See & Shoot",
          items: [
            {
              label: "Bell Tower view 钟楼视角",
              linkType: "none",
              text: "Look down the western side alley — 『远方的钟楼耸立在眼前』, the framed Bell Tower shot the blogger caught foreigners taking"
            }
          ]
        },
        {
          title: "Nearby & Next",
          items: [
            {
              label: "Modernista",
              query: "Modernista 北京",
              linkType: "search",
              text: "Old-school Western bar + livehouse; evening shows make it the closing drink"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "South entrance 宝钞胡同南口",
          kind: "Arrive",
          duration: "5 min",
          googleQuery: "宝钞胡同",
          action: "Turn into Baochao Hutong from Gulou East Street and head north; the whole line is 700 m.",
          recommendationGroups: [],
          lat: 39.941604,
          lon: 116.399846
        },
        {
          order: 2,
          name: "Modernista & the 8 shops",
          kind: "Eat & browse",
          duration: "1-2 h",
          googleQuery: "宝钞胡同",
          action: "Pick by mood along the lane: coffee (露华行深 / 彼时), meals (福荣记 Cantonese / 大理人家 Yunnan), bakery (The Bake Shop / TBS sandwiches), Western & drinks (Toast at the Orchid / Modernista).",
          recommendationGroups: [
            {
              title: "Eat & Drink",
              items: [
                {
                  label: "Bishi 彼时",
                  query: "彼时咖啡 北京",
                  linkType: "search",
                  text: "Coffee by day, drinks by night, mostly locals"
                },
                {
                  label: "Dali Renjia 大理人家",
                  query: "大理人家 北京",
                  linkType: "search",
                  text: "Yunnan kitchen — rice noodles and wild mushrooms"
                },
                {
                  label: "The Bake Shop",
                  query: "The Bake Shop 北京",
                  linkType: "search",
                  text: "Tiny bakery — grab a loaf and keep walking"
                }
              ]
            },
            {
              title: "Tips",
              items: [
                {
                  label: "Opening hours",
                  linkType: "none",
                  text: "Small shops keep loose hours — check the name in AMap or Dianping before a special trip"
                }
              ]
            }
          ],
          lat: 39.944504,
          lon: 116.399647
        },
        {
          order: 3,
          name: "Zhonglouwan 钟楼湾",
          kind: "View & finish",
          duration: "20-30 min",
          googleQuery: "北京钟楼",
          action: "Cut through the western alley for the framed Bell Tower shot, then linger on Zhong-Gulou square — old men kicking shuttlecocks — before Shichahai or Gulou East Street.",
          recommendationGroups: [
            {
              title: "See & Shoot",
              items: [
                {
                  label: "Bell Tower 钟楼",
                  query: "北京钟楼",
                  linkType: "exact",
                  text: "The alley-framed Bell Tower is this walk's signature photo"
                }
              ]
            }
          ],
          lat: 39.942402,
          lon: 116.395844
        }
      ],
      lat: 39.941604,
      lon: 116.399846,
      didi: {
        lat: 39.9402,
        lon: 116.3936
      },
      distance: "~3.0 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "qianmen",
      categoryId: "hutong",
      name: "Qianmen St · Dashilan 前门大街·大栅栏",
      address: "Qianmen Street, Xicheng, Beijing",
      bestFor: "Souvenir headquarters: Zhang Yiyuan tea, Liubiju pickles and the Daoxiangcun flagship all within a walk.",
      feature: "The old shopping street under the Zhengyangmen gate — snacks, the dangdang tram, heritage brands in one line.",
      routePairing: "Walkable south of Tian'anmen; pairs with Temple of Heaven day",
      tags: [
        "souvenirs",
        "heritage shops",
        "food street"
      ],
      detailMode: "compact",
      playbookIntro: "Solve your entire 'gifts to take home' list here in one pass: tea, pickles, pastry and tea cookies — all the repeatedly recommended carry-on-able Beijing flavors.",
      sourceNote: "Xiaohongshu r027 (top-10 souvenirs: 张一元/六必居/稻香村零号店/吴裕泰, all 10 images read), r028 (Qianmen food street: duck/yogurt/pastry)",
      playbookGroups: [
        {
          title: "Buy & Take",
          items: [
            {
              label: "Zhang Yiyuan 张一元 (Qianmen flagship)",
              query: "张一元 前门",
              linkType: "exact",
              text: "Jasmine-tea house — gift the tinned 茉莉小珍珠 pearls; next door 吴裕泰's matcha and jasmine tea cookies 茶饼干 are cheap and packable too"
            },
            {
              label: "Liubiju 六必居",
              query: "六必居 前门",
              linkType: "exact",
              text: "Ming-dynasty pickle house — braised beef and small jarred pickle gift boxes travel well"
            },
            {
              label: "Daoxiangcun No.0 稻香村零号店",
              query: "北京稻香村零号店",
              linkType: "search",
              text: "The queue-worthy creative flagship — jujube pastry 枣花酥 and the 点心局 series make the best-received gifts"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Qianmen food street 前门小吃街",
              linkType: "none",
              text: "Roast duck, old-Beijing yogurt 老北京酸奶 and pastries as you walk; return the yogurt jar to the stall"
            }
          ]
        },
        {
          title: "See & Shoot",
          items: [
            {
              label: "Zhengyangmen 正阳门 + tram",
              query: "正阳门",
              linkType: "exact",
              text: "Catch the dangdang tram 铛铛车 passing under the gate tower — better after the lights come on"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Qianmen St & Dashilan 前门大街、大栅栏",
          kind: "Stroll & shop",
          duration: "2-3 h",
          googleQuery: "前门大街",
          action: "Walk south from the gate buying gifts on the main street, duck into Dashilan for the old apothecaries and cloth-shoe shops; the better food hides in the side lanes.",
          recommendationGroups: [],
          lat: 39.889301,
          lon: 116.398239
        }
      ],
      lat: 39.889301,
      lon: 116.398239,
      didi: {
        lat: 39.8879,
        lon: 116.392
      },
      distance: "~3.2 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "niujie",
      categoryId: "food",
      name: "Niujie Halal Street 牛街清真街",
      address: "Niujie, Xicheng, Beijing",
      bestFor: "Locals' pick for best value: halal copper-pot lamb hotpot and sticky-rice sweets.",
      feature: "The 'best value' entry in the English night-food guides — lamb hotpot and glutinous snacks concentrated on one street.",
      routePairing: "A meal-trip on its own; taxi-pairs with Temple of Heaven or Dashilan",
      tags: [
        "halal",
        "best value",
        "local crowd"
      ],
      detailMode: "compact",
      playbookIntro: "Few tourists, many locals. Come for copper-pot lamb 涮羊肉 and whichever sticky-rice stall has the longest queue — queue length is the menu here.",
      sourceNote: "Xiaohongshu r028 (six food streets: Niujie = halal / lamb hotpot / glutinous snacks; best value Niujie & Longfusi)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Lamb hotpot 涮羊肉",
              linkType: "none",
              text: "羊肉火锅、涮羊肉 in copper pots is the main event — modest prices, great for introducing visitors to gather-round-the-pot dining"
            },
            {
              label: "Sticky-rice snacks 糯米小吃",
              linkType: "none",
              text: "驴打滚 and rice cakes sold by the piece at street shops — buy from whichever has a queue"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Best value",
              linkType: "none",
              text: "牛街、隆福寺 are the two streets English guides rank best-value for local food"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Niujie 牛街",
          kind: "Eat",
          duration: "1.5-2 h",
          googleQuery: "牛街",
          action: "Walk the main street; hotpot houses for the meal, queues for the snacks.",
          recommendationGroups: [],
          lat: 39.886264,
          lon: 116.363695
        }
      ],
      lat: 39.886264,
      lon: 116.363695,
      didi: {
        lat: 39.8849,
        lon: 116.3575
      },
      distance: "~5.2 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "guijie",
      categoryId: "food",
      name: "Gui Street · 24h 簋街",
      address: "Dongzhimen Inner St, Dongcheng, Beijing",
      bestFor: "The only answer when you're hungry after midnight: spicy crayfish around the clock.",
      feature: "A street of red lanterns and big tables — crayfish, grilled fish and spicy pots, 24 hours.",
      routePairing: "5 minutes south of the Lama Temple by taxi; the supper stop after a Great Wall day",
      tags: [
        "24 hours",
        "crayfish",
        "late night"
      ],
      detailMode: "compact",
      playbookIntro: "The move with foreign friends: order 麻辣小龙虾 + grilled fish as twin mains, teach the gloves-on peel, and say 微辣 (mild) up front.",
      sourceNote: "Xiaohongshu r028 (Guijie: spicy crayfish, crab, grilled fish, 24/7), r022 ('Bu la' ordering tip)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Spicy crayfish 麻辣小龙虾",
              query: "",
              linkType: "none",
              text: "The street's signature, ordered by the jin; scared of spice? get garlic 蒜蓉 and spicy 麻辣 half-half"
            },
            {
              label: "Grilled fish 烤鱼",
              linkType: "none",
              text: "麻辣小龙虾、烤鱼 are the twin stars — charcoal fish over glass noodles is the reliable main"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Spice level",
              linkType: "none",
              text: "簋街 default heat runs hot for foreign palates — say 微辣 (the English notes teach 'Bu la' for none); take a queue number and wander the lanterns"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Gui Street 簋街",
          kind: "Supper",
          duration: "1.5-2 h",
          googleQuery: "簋街",
          action: "Pick along Dongzhimen Inner Street east to west — the denser the lanterns and crowds, the livelier the house.",
          recommendationGroups: [],
          lat: 39.940996,
          lon: 116.429534
        }
      ],
      lat: 39.940996,
      lon: 116.429534,
      didi: {
        lat: 39.9396,
        lon: 116.4233
      },
      distance: "~3.2 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "xingfu",
      categoryId: "food",
      name: "Xingfu St Morning Market 幸福大街·本地早市",
      address: "Xingfu Street, Dongcheng, Beijing",
      bestFor: "'Not for tourists': a real residents' market, full breakfast for about ¥20.",
      feature: "An English blogger's field find — corn buns, lamb offal soup, fresh-wrapped dumplings; the Beijing locals actually live in.",
      routePairing: "Market first, then enter Temple of Heaven by the east gate — one full morning",
      tags: [
        "morning market",
        "before 1 pm",
        "local"
      ],
      detailMode: "compact",
      playbookIntro: "Come in the morning: most stalls close by 1 pm. Few seats — plan to eat as you walk. Adventurous? lamb offal soup. Safe? corn buns and dumplings.",
      sourceNote: "Xiaohongshu r025 (Xingfu St market: 菜团子/羊杂汤/猪肉玉米饺/凉皮/煎饼, ~¥20, closes by 1 pm — 105-like English note)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Corn buns 菜团子",
              linkType: "none",
              text: "玉米面菜团子 — the blogger's top pick; buy them hot"
            },
            {
              label: "Dumpling stall 水饺摊",
              linkType: "none",
              text: "水饺摊推荐猪肉玉米馅 — pork & corn, wrapped and boiled on the spot; 凉皮、煎饼 are made fresh too"
            },
            {
              label: "Lamb offal soup 羊杂汤",
              linkType: "none",
              text: "猎奇向 — the dare dish: love-or-hate, but maximum talking points"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Hours",
              linkType: "none",
              text: "It's a morning market — stalls wind down by 1 pm. Follow locals with shopping bags to the entrance, or search 幸福大街 菜市场 in AMap"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Xingfu St market 幸福大街早市",
          kind: "Breakfast",
          duration: "40-60 min",
          googleQuery: "幸福大街 菜市场",
          action: "Arrive in the morning, find the busiest entrance, graze a full round, then walk to the Temple of Heaven east gate.",
          recommendationGroups: [],
          lat: 39.891494,
          lon: 116.428829
        }
      ],
      lat: 39.891494,
      lon: 116.428829,
      didi: {
        lat: 39.8901,
        lon: 116.4226
      },
      distance: "~3.1 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "wangfujing",
      categoryId: "food",
      name: "Wangfujing 王府井 (snacks + Peking opera)",
      address: "Wangfujing Street, Dongcheng, Beijing",
      bestFor: "One-stop city-center evening: snack street plus one act of Peking opera at Jixiang Theatre.",
      feature: "Candied hawthorn, jianbing and dare-you scorpions — then an opera that works even with zero Chinese.",
      routePairing: "The default evening if you stay central; walking distance from the Forbidden City",
      tags: [
        "city center",
        "Peking opera",
        "evening"
      ],
      detailMode: "compact",
      playbookIntro: "A field-tested combo: snack street at dusk, then into 吉祥大戏院 for highlight scenes — a blogger took a zero-Chinese Russian friend who raved anyway.",
      sourceNote: "Xiaohongshu r069 (Jixiang Theatre with a Russian friend), r070 (bilingual subtitle shows appearing), r028 (Wangfujing snack street)",
      playbookGroups: [
        {
          title: "Play",
          items: [
            {
              label: "Jixiang Theatre 吉祥大戏院",
              query: "吉祥大戏院",
              linkType: "exact",
              text: "Century-old theatre inside Wangfujing — pick a highlights program of one or two scenes; some shows now run Chinese-English subtitles 双语字幕, zero-barrier for guests"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Snack street 王府井小吃街",
              linkType: "none",
              text: "糖葫芦 and 煎饼 are the safe picks; 烤蝎子 scorpions are a photo-first dare"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Show times",
              linkType: "none",
              text: "吉祥大戏院、京剧 schedules — confirm dates ahead; subtitle shows and weekend slots sell out early 买票"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Wangfujing 王府井",
          kind: "Evening",
          duration: "2-3 h",
          googleQuery: "王府井",
          action: "Browse the pedestrian street and snack alley at dusk, enter the theatre by curtain time; walk or taxi home after.",
          recommendationGroups: [],
          lat: 39.916204,
          lon: 116.411344
        }
      ],
      lat: 39.916204,
      lon: 116.411344,
      didi: {
        lat: 39.9148,
        lon: 116.4051
      },
      distance: "~0.0 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "qingsong",
      categoryId: "food",
      name: "Qingsong Bieyuan 青松别院·日坛公园旁",
      address: "Beside Ritan Park, Chaoyang, Beijing",
      bestFor: "'Michelin-level' courtyard Beijing food at ~¥80 a head — staff in Qing costume, foreigners in the queue.",
      feature: "Push open the red wooden gate to koi and a courtyard; the zhajiang noodles and crispy duck are the named dishes.",
      routePairing: "Handy to the embassy district/CBD; same direction as 798",
      tags: [
        "courtyard",
        "~¥80 pp",
        "queues"
      ],
      detailMode: "compact",
      playbookIntro: "One meal that shows guests 'courtyard + Beijing cuisine' in a single sitting: signature zhajiang noodles + crispy 酥不腻 duck for a fraction of a duck-house bill.",
      sourceNote: "Xiaohongshu r054 (青松别院: 黑猪肉炸酱面/京院酥不腻烤鸭蘸白糖/炙子沙葱烤肥牛/老北京爆肚, 389 likes)",
      playbookGroups: [
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Crispy duck 京院酥不腻烤鸭",
              linkType: "none",
              text: "Duck skin dipped in white sugar 蘸白糖, melts on contact — Michelin-level at neighborhood prices"
            },
            {
              label: "Black-pork zhajiang noodles 黑猪肉炸酱面",
              linkType: "none",
              text: "Or the Angus-rib version — rich sauce over chewy noodles"
            },
            {
              label: "Griddled beef 炙子沙葱烤肥牛",
              linkType: "none",
              text: "Plus 老北京爆肚 tripe and shrimp-broth tofu — one table covers the Beijing canon; finish with plum-soaked tomatoes"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Queues",
              linkType: "none",
              text: "格格装小姐姐和外国人都在排队 — costumed staff and foreign guests alike; go off-peak or take a number and stroll Ritan Park 日坛公园 while you wait"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Qingsong Bieyuan 青松别院",
          kind: "Meal",
          duration: "1.5 h",
          googleQuery: "青松别院 北京",
          action: "Search 青松别院 in AMap to confirm the door; walk it off in Ritan Park after.",
          recommendationGroups: [],
          lat: 39.915577,
          lon: 116.443608
        }
      ],
      lat: 39.915577,
      lon: 116.443608,
      didi: {
        lat: 39.9142,
        lon: 116.4374
      },
      distance: "~2.8 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "art798",
      categoryId: "modern",
      name: "798 Art Zone 798艺术区",
      address: "4 Jiuxianqiao Rd, Chaoyang, Beijing",
      bestFor: "An afternoon of exhibitions, photos and small shops; 20 minutes from the airport — even a 1-hour layover-ish visit works.",
      feature: "Contemporary art in Bauhaus factory halls: UCCA and M WOODS-scale shows plus graffiti walls and the locomotive square.",
      routePairing: "Same direction as Qingsong Bieyuan / embassy district; the natural last stop before the airport",
      tags: [
        "exhibitions",
        "photogenic",
        "near airport"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "Main line: metro to Gaojiayuan station exit A or taxi to West Gate 4 on Jiuxianqiao Rd → Hyundai art center graffiti wall → 遇见博物馆 → UCCA → Bauhaus square 包豪斯广场 → locomotive square 火车头广场. Express 1 h; full visit with one show ~4 h.",
      playbookIntro: "Three versions by time: 1-hour express trunk line, 4-hour full wander, or camp half a day in one big show. Navigate inside by the park signboards; search shops and halls by name in AMap.",
      sourceNote: "Xiaohongshu r085 (core route, 2163 likes), r082 (afternoon citywalk 3356 likes: spots+shops+food), r083 (1-hour express + airport position), r086 (free shows)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "UCCA 尤伦斯当代艺术中心",
              query: "UCCA尤伦斯当代艺术中心",
              linkType: "exact",
              text: "China's flagship contemporary-art center — industrial halls, first-rate curation; ticket by current show"
            },
            {
              label: "M WOODS-style hits 遇见博物馆",
              query: "遇见博物馆 北京798",
              linkType: "search",
              text: "The blockbuster immersive-show museum (Monet/van Gogh-grade imports live here); book hot shows online ahead"
            },
            {
              label: "Locomotive square 火车头广场",
              query: "798火车头广场",
              linkType: "search",
              text: "The dark-green steam engine and vintage carriages — 798's signature photo spot"
            }
          ]
        },
        {
          title: "Eat & Drink",
          items: [
            {
              label: "Jiliu Island 激流岛",
              query: "激流岛蛋糕 798",
              linkType: "search",
              text: "French-style cake shop famous for Basque cheesecake, five arched windows of light; shoot the Hyundai graffiti wall before coming over"
            },
            {
              label: "Moye Malatang 墨爷麻辣烫",
              query: "墨爷麻辣烫",
              linkType: "search",
              text: "The park's name-checked malatang — the refuel stop when your feet give out"
            }
          ]
        },
        {
          title: "Buy & Take",
          items: [
            {
              label: "Spring Cameras",
              query: "Spring Cameras 798",
              linkType: "search",
              text: "Vintage film cameras and rolls — photographers disappear in here"
            },
            {
              label: "56 Flowers 五十六朵花",
              query: "五十六朵花 798",
              linkType: "search",
              text: "Handmade toys and folk-style small things — strong gift material"
            },
            {
              label: "Cat's Suitcase 猫的行李箱",
              query: "猫的行李箱 798",
              linkType: "search",
              text: "Precious little objects; the storefront itself is a photo stop"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Time budget",
              linkType: "none",
              text: "Express 1 h covers only the trunk line; full wander + one show ≈ 4 h; many small shows are free — see what you bump into"
            },
            {
              label: "Airport hack",
              linkType: "none",
              text: "798 is ~20 min from Capital Airport — the 1-hour express line fits before an evening flight out"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "798 Art Zone (West Gate 4) 798艺术区",
          kind: "Arrive",
          duration: "1-4 h",
          googleQuery: "798艺术区",
          action: "Enter at West Gate 4 and walk the trunk line: Hyundai graffiti wall → 遇见博物馆 → UCCA → Bauhaus square → locomotive square; book hot shows ahead; 树上咖啡's rooftop opposite UCCA for a break.",
          recommendationGroups: [],
          lat: 39.984053,
          lon: 116.496552
        }
      ],
      lat: 39.984053,
      lon: 116.496552,
      didi: {
        lat: 39.9828,
        lon: 116.4905
      },
      distance: "~10 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "olympic",
      categoryId: "modern",
      name: "Olympic Park 奥林匹克公园 (Bird's Nest · Water Cube)",
      address: "National Stadium, Chaoyang, Beijing",
      bestFor: "Drive-by icons: shoot the Bird's Nest and Water Cube exteriors, 5 minutes' walk apart.",
      feature: "The 2008 twin landmarks; guides slot them on the way back from the Great Wall or after the Summer Palace.",
      routePairing: "On the way back from the Wall / Summer Palace",
      tags: [
        "free exterior",
        "en route",
        "photos"
      ],
      detailMode: "compact",
      playbookIntro: "No tickets needed for the exteriors: loop the central plaza between the two venues with a camera — under an hour total.",
      sourceNote: "Xiaohongshu r017 (Bird's Nest/Water Cube 5-min walk + Wall-day slot), r044 (itinerary slot)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Bird's Nest 鸟巢",
              query: "鸟巢 国家体育场",
              linkType: "exact",
              text: "Frame it with the Water Cube — the standard two-icon shot, 5 minutes' walk apart"
            },
            {
              label: "Water Cube 水立方",
              query: "水立方",
              linkType: "exact",
              text: "5 minutes from the Nest; the bubble facade reads best from the plaza"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "En-route stop",
              linkType: "none",
              text: "鸟巢、水立方、长城回程或颐和园同日顺路 — exteriors are the point; no need to reserve half a day"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Olympic Park 奥林匹克公园 (Bird's Nest · Water Cube)",
          kind: "Photo stop",
          duration: "40-60 min",
          googleQuery: "奥林匹克公园",
          action: "Metro Line 8 to Olympic Sports Center; loop Bird's Nest → Water Cube with the camera out.",
          recommendationGroups: [],
          lat: 39.992804,
          lon: 116.396551
        }
      ],
      lat: 39.992804,
      lon: 116.396551,
      didi: {
        lat: 39.9914,
        lon: 116.3903
      },
      distance: "~8.6 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "natmuseum",
      categoryId: "indoor",
      name: "National Museum 国家博物馆·天安门东",
      address: "16 East Chang'an Ave, Dongcheng, Beijing",
      bestFor: "Free national-grade museum: first choice for rain or heat; pairs with Tian'anmen day.",
      feature: "A fixture on foreigner must-see lists — free, but tickets are harder to grab than the Forbidden City's.",
      routePairing: "East side of Tian'anmen Square — same day as the square / Forbidden City",
      tags: [
        "free",
        "book 7 days ahead",
        "closed Mondays"
      ],
      detailMode: "compact",
      playbookIntro: "Free but fiercely booked: tickets drop 7 days ahead at 17:00. If you miss out, swap your indoor backup to Xishiku Cathedral or a mall.",
      sourceNote: "Xiaohongshu r046 (free / 7-day 17:00 release / closed Mon), r044 (Day-1 with Tian'anmen), r013 (same booking flow)",
      playbookGroups: [
        {
          title: "Tips",
          items: [
            {
              label: "Tickets",
              linkType: "none",
              text: "Released 7 days ahead at 17:00 on the WeChat mini-program, passports accepted; closed Mondays; no large bags through security"
            }
          ]
        },
        {
          title: "Nearby & Next",
          items: [
            {
              label: "Tian'anmen 天安门",
              query: "天安门广场",
              linkType: "exact",
              text: "天安门、国博 share the square — stack them with the Forbidden City on one day"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "National Museum 国家博物馆",
          kind: "Exhibitions",
          duration: "2-3 h",
          googleQuery: "中国国家博物馆",
          action: "Book ahead, enter by the west gate after security, and give it 2-3 hours by interest.",
          recommendationGroups: [],
          lat: 39.905103,
          lon: 116.401642
        }
      ],
      lat: 39.905103,
      lon: 116.401642,
      didi: {
        lat: 39.9037,
        lon: 116.3954
      },
      distance: "~1.5 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    },
    {
      id: "xishiku",
      categoryId: "indoor",
      name: "Xishiku Cathedral 西什库教堂",
      address: "33 Xishiku St, Xicheng, Beijing",
      bestFor: "A free Gothic cathedral flanked by Chinese pavilions — rare anywhere in the world; a quiet rainy-day pick.",
      feature: "From a top local 'free hidden gems' list: called Beijing's most beautiful church — stained glass, weekend hymns.",
      routePairing: "West of Beihai — chains with Beihai / Shichahai for half a day",
      tags: [
        "free",
        "hidden gem",
        "architecture"
      ],
      detailMode: "compact",
      playbookIntro: "Gothic spires + Chinese glazed pavilions in one frame — visit quietly outside mass times; hymns on weekends.",
      sourceNote: "Xiaohongshu r010 (free hidden-gems list: 西什库教堂 = Beijing's most beautiful church / stained glass / weekend hymns, 16k likes)",
      playbookGroups: [
        {
          title: "See & Shoot",
          items: [
            {
              label: "Facade + pavilions 西什库教堂",
              query: "西什库教堂",
              linkType: "exact",
              text: "The Gothic front with the two Chinese stele pavilions — the one-frame shot is from the front courtyard's sides"
            }
          ]
        },
        {
          title: "Tips",
          items: [
            {
              label: "Weekend hymns",
              linkType: "none",
              text: "周末可静坐听圣歌 — sit in for hymns on weekends; opening hours vary, check on site"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "Xishiku Cathedral 西什库教堂",
          kind: "Visit",
          duration: "30-45 min",
          googleQuery: "西什库教堂",
          action: "Navigate by searching 西什库教堂 in AMap; afterwards walk to Beihai's north gate or Shichahai.",
          recommendationGroups: [],
          lat: 39.926593,
          lon: 116.384833
        }
      ],
      lat: 39.926593,
      lon: 116.384833,
      didi: {
        lat: 39.9252,
        lon: 116.3786
      },
      distance: "~2.5 km from Wangfujing",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    }
  ]
};
