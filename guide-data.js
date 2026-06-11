window.TRAVEL_GUIDE = {
  title: "北京·带外国朋友玩手机地图",
  goldProfile: {
    expectedOverviewPlaces: 20,
    expectedCategories: 6,
    expectedMinHtml: 24
  },
  subtitle: "从王府井市中心参考点出发；按想做什么选地点，再进每个点的玩法页。大馆需微信小程序+护照提前预约，多数周一闭馆。",
  anchor: {
    name: "市中心参考点·王府井（可换成你的酒店）",
    shortName: "王府井",
    address: "北京市东城区王府井大街步行街",
    lat: 39.916204,
    lon: 116.411344
  },
  categories: [
    {
      id: "royal",
      title: "皇城地标/必去",
      summary: "故宫、天坛、颐和园、雍和宫：先约票再排天，多数周一闭馆。",
      color: "#b03a2e"
    },
    {
      id: "wall",
      title: "长城一日",
      summary: "慕田峪人少有滑道，八达岭高铁直达好汉坡，按时间和体力二选一。",
      color: "#7d6608"
    },
    {
      id: "hutong",
      title: "老城胡同 Citywalk",
      summary: "什刹海、南锣、宝钞胡同、前门：老外最爱钻的胡同与老字号带。",
      color: "#7b5aa6"
    },
    {
      id: "food",
      title: "小吃/夜市/京味餐厅",
      summary: "牛街、簋街、早市与四合院京菜：按时段选——早市/正餐/深夜。",
      color: "#b24f37"
    },
    {
      id: "modern",
      title: "现代艺术/新北京",
      summary: "798 与奥运地标：拍照、看展、机场顺路。",
      color: "#1f618d"
    },
    {
      id: "indoor",
      title: "博物馆/雨天备用",
      summary: "免费大馆与教堂：下雨、酷暑或行程空档的室内选择。",
      color: "#2f64a3"
    }
  ],
  places: [
    {
      id: "gugong",
      categoryId: "royal",
      name: "故宫+景山公园",
      address: "北京市东城区景山前街4号",
      bestFor: "首访必去：皇城核心+万春亭全景，建议约上午场留足时间",
      feature: "午门进中轴线三大殿，神武门出对面登景山万春亭俯瞰整个紫禁城。",
      routePairing: "上午故宫→景山，下午接南锣鼓巷或什刹海",
      tags: [
        "必去",
        "提前7天约票",
        "周一闭馆"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "外国人参观故宫的关键在预约和入口：提前 7 天晚 20:00（中国时间）放票，微信小程序可加护照同行人；入园走人工通道最稳。",
      sourceNote: "小红书 r013（外国人预约实操）、r017（中轴线顺序+景山机位）、r053/r056（四季民福烤鸭）、r046（周一闭馆）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "太和殿中轴线",
              query: "故宫太和殿",
              linkType: "exact",
              text: "午门、太和殿、保和殿一路向北，租英文讲解器边走边听"
            },
            {
              label: "景山万春亭",
              query: "景山公园万春亭",
              linkType: "exact",
              text: "出神武门过马路登景山，万春亭是拍故宫全景的最佳机位"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "四季民福·故宫店",
              query: "四季民福烤鸭店 故宫店",
              linkType: "exact",
              text: "逛完故宫去吃烤鸭：实测带外国家人两只鸭子光盘，椒盐鸭架、烤鸭都别错过；饭点排队可先取号"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "约票",
              linkType: "none",
              text: "提前 7 天晚 20:00（中国时间）放票，热门日秒空：海外要算时差定闹钟，微信小程序『故宫博物院』可添加护照同行人"
            },
            {
              label: "周一闭馆",
              linkType: "none",
              text: "故宫周一闭馆；门口纪念品可用支付宝（绑外卡，满 200 元收手续费），外国人微信收转账受限"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "午门",
          kind: "到达",
          duration: "20-30 分钟",
          googleQuery: "故宫午门",
          action: "安检后从午门验票进入；外国护照机器常刷不过，直接排有工作人员的人工通道，手机出示订单+护照即可。",
          recommendationGroups: [
            {
              title: "提醒",
              items: [
                {
                  label: "人工通道",
                  linkType: "none",
                  text: "护照入园走人工通道最快，避免在闸机前浪费时间"
                },
                {
                  label: "上午场",
                  linkType: "none",
                  text: "想完整看完建议约上午场，外国朋友普遍想多看，下午场时间不够"
                }
              ]
            }
          ],
          lat: 39.913502,
          lon: 116.397842
        },
        {
          order: 2,
          name: "太和殿—中轴线三大殿",
          kind: "核心参观",
          duration: "1.5-2 小时",
          googleQuery: "故宫太和殿",
          action: "沿中轴线看太和殿、中和殿、保和殿；入口可租英文语音讲解器，英文导游服务也很普及。",
          recommendationGroups: [
            {
              title: "看/拍",
              items: [
                {
                  label: "太和殿广场",
                  query: "故宫太和殿",
                  linkType: "exact",
                  text: "太和殿广场是第一张『到此一游』大片位，早进场人少"
                }
              ]
            }
          ],
          lat: 39.917301,
          lon: 116.397042
        },
        {
          order: 3,
          name: "神武门",
          kind: "出口",
          duration: "10 分钟",
          googleQuery: "故宫神武门",
          action: "从北门神武门出，过景山前街马路就是景山公园南门，步行约 5 分钟。",
          recommendationGroups: [
            {
              title: "商家/顺路",
              items: [
                {
                  label: "景山公园",
                  query: "景山公园",
                  linkType: "exact",
                  text: "出神武门直接接景山，别绕回午门方向"
                }
              ]
            }
          ],
          lat: 39.922302,
          lon: 116.396843
        },
        {
          order: 4,
          name: "景山公园万春亭",
          kind: "观景收尾",
          duration: "40-60 分钟",
          googleQuery: "景山公园万春亭",
          action: "登景山中峰万春亭俯瞰故宫金顶全景，黄昏光线最好；下山后接什刹海或南锣鼓巷。",
          recommendationGroups: [
            {
              title: "看/拍",
              items: [
                {
                  label: "万春亭",
                  query: "景山公园万春亭",
                  linkType: "exact",
                  text: "正对故宫中轴线的全景机位，外国朋友公认的『北京第一眼』"
                }
              ]
            },
            {
              title: "吃/喝",
              items: [
                {
                  label: "四季民福·故宫店",
                  query: "四季民福烤鸭店 故宫店",
                  linkType: "exact",
                  text: "故宫周边外国人扎堆的烤鸭老店，椒盐鸭架、烤鸭都值得，逛完直接走过去"
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
      distance: "距王府井直线约 1.2 km",
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
      name: "天安门广场",
      address: "北京市东城区长安街",
      bestFor: "与故宫/国博同日：清晨人最少，照片最经典",
      feature: "免费但需预约安检；持当日故宫票可免单独预约。",
      routePairing: "天安门→故宫→景山一条线，或配国家博物馆",
      tags: [
        "免费",
        "需预约",
        "早起"
      ],
      detailMode: "compact",
      playbookIntro: "天安门本身 30-60 分钟足够：拍城楼和广场，重点是把预约和安检时间算进行程。",
      sourceNote: "小红书 r017（早到避人流）、r046（免费微信预约/故宫票可免）、r044（与国博同日）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "天安门城楼",
              query: "天安门",
              linkType: "exact",
              text: "清晨到场人最少，城楼正面照最经典；升旗仪式、安检都要预留时间"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "预约+护照",
              linkType: "none",
              text: "免费但要微信预约+护照安检；已有当日故宫门票可不用单独约广场"
            }
          ]
        },
        {
          title: "商家/顺路",
          items: [
            {
              label: "国家博物馆",
              query: "中国国家博物馆",
              linkType: "exact",
              text: "就在广场东侧，免费但要提前 7 天约，周一闭馆"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "天安门广场",
          kind: "打卡",
          duration: "30-60 分钟",
          googleQuery: "天安门广场",
          action: "安检入场拍照，之后向北接故宫或向东进国博。",
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
      distance: "距王府井直线约 1.8 km",
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
      name: "天坛",
      address: "北京市东城区天坛路甲1号",
      bestFor: "半天：祈年殿是仅次于故宫的皇家建筑照片位",
      feature: "祈年殿+圜丘坛，买联票最划算；周边有本地早市可顺路。",
      routePairing: "上午天坛+幸福大街早市，下午接前门大街",
      tags: [
        "联票",
        "周一部分关闭",
        "英文讲解多"
      ],
      detailMode: "compact",
      playbookIntro: "买联票看祈年殿和圜丘坛即可；想看『非游客北京』，早上先去东边幸福大街早市吃一轮再进园。",
      sourceNote: "小红书 r046（联票/周一）、r033/r036（祈年殿、圜丘英文讲解）、r025（幸福大街早市顺路）、r044（行程位置）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "祈年殿",
              query: "天坛祈年殿",
              linkType: "exact",
              text: "三重檐圆顶是北京最上镜的古建之一，正面台阶下仰拍最出片"
            },
            {
              label: "圜丘坛",
              query: "天坛圜丘",
              linkType: "exact",
              text: "天心石、回音壁这类回音互动是外国朋友最爱玩的"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "幸福大街早市",
              query: "幸福大街 菜市场",
              linkType: "search",
              text: "天坛东边的本地早市，菜团子+羊杂汤约 20 元吃饱，13 点前收摊"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "联票",
              linkType: "none",
              text: "祈年殿等景点要联票才进得去，只买门票会白跑；周一部分殿座关闭，微信预约带护照"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "天坛",
          kind: "参观",
          duration: "2-3 小时",
          googleQuery: "天坛公园",
          action: "东门或南门进，祈年殿→回音壁→圜丘一条线；公园里晨练的本地人也是外国朋友爱看的风景。",
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
      distance: "距王府井直线约 3.9 km",
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
      name: "颐和园",
      address: "北京市海淀区新建宫门路19号",
      bestFor: "半天到一天：皇家园林+昆明湖，走路多体力消耗大",
      feature: "北宫门进可少走路；长廊和昆明湖游船是外国攻略公认重点。",
      routePairing: "在西北郊，单独半天；回程可顺奥林匹克公园看夜景",
      tags: [
        "皇家园林",
        "走路多",
        "游船"
      ],
      detailMode: "compact",
      playbookIntro: "面积很大，别贪全图：北宫门进，苏州街—长廊—昆明湖一线最省腿；夏天游船、冬天冰面各有玩法。",
      sourceNote: "小红书 r017（北宫门省腿/长廊+游船）、r003（省钱高效路线）、r046（当日或提前7天约）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "长廊",
              query: "颐和园长廊",
              linkType: "exact",
              text: "长廊、昆明湖、游船是攻略公认重点；728 米彩绘梁画慢慢走"
            },
            {
              label: "昆明湖",
              query: "颐和园昆明湖",
              linkType: "exact",
              text: "坐一段游船，万寿山、佛香阁全景一眼收，比绕湖走省力得多"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "入口选择",
              linkType: "none",
              text: "北宫门进比东宫门少走很多路；当日可约但旺季建议提前，护照+微信小程序"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "颐和园（北宫门）",
          kind: "参观",
          duration: "3-4 小时",
          googleQuery: "颐和园北宫门",
          action: "北宫门进→苏州街→长廊→昆明湖游船，按体力取舍；出园打车或地铁回城。",
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
      distance: "距王府井直线约 15 km",
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
      name: "雍和宫（+周边小吃带）",
      address: "北京市东城区雍和宫大街12号",
      bestFor: "藏传佛教寺庙+出门就是小吃带，宗教体验和吃可以一次完成",
      feature: "『逛完雍和宫出来全是好吃的』——周边步行圈老店密度极高。",
      routePairing: "雍和宫→五道营/北新桥一带小吃→晚上接簋街",
      tags: [
        "每日开放",
        "上香",
        "小吃带"
      ],
      detailMode: "compact",
      playbookIntro: "寺庙本体 1-1.5 小时；真正的隐藏玩法是出门后的小吃带：从雍和宫到北新桥步行圈内全是被本地人反复安利的老店。",
      sourceNote: "小红书 r026（雍和宫18件套：同日升/奶油老生/六面寿/烤肉宛/红星前进，图片多模态提取）、r046（每日开放）、r044（行程位置）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "雍和宫",
              query: "雍和宫",
              linkType: "exact",
              text: "香火最旺的藏传佛教寺庙；每日开放，微信预约带护照"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "六面寿",
              query: "六面寿 雍和宫",
              linkType: "search",
              text: "雍和宫对面的打卤面店，可以无限续面续卤，便宜家常"
            },
            {
              label: "奶油老生",
              query: "奶油老生 北京",
              linkType: "search",
              text: "现点现炸的奶油炸糕，外皮金黄酥脆蘸白糖，北京小孩的童年味道"
            },
            {
              label: "同日升粮行",
              query: "同日升粮行",
              linkType: "search",
              text: "石磨现打的二八酱（二分芝麻八分花生），可以买一罐带走拌面"
            }
          ]
        },
        {
          title: "买/带走",
          items: [
            {
              label: "红星前进面包牛奶公司",
              query: "红星前进面包牛奶公司",
              linkType: "search",
              text: "能买到印当天日期的吐司+玻璃瓶牛奶，生日纪念日来买很有意义，拍照也好看"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "店铺分布",
              linkType: "none",
              text: "小吃店散在雍和宫、北新桥、交道口一带；烤肉宛、同日升等老店有多家分店，出发前按店名在高德确认"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "雍和宫",
          kind: "参观+觅食",
          duration: "2-3 小时",
          googleQuery: "雍和宫",
          action: "上午进殿上香参观，中午沿雍和宫大街向南找六面寿/奶油老生这批老店，吃完可逛旁边五道营胡同。",
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
      distance: "距王府井直线约 3.5 km",
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
      name: "慕田峪长城",
      address: "北京市怀柔区慕田峪村",
      bestFor: "人少景美+滑道下山，外国游客比例高、氛围松弛——多数外国攻略的首选",
      feature: "植被覆盖 90%+，缆车上 14 号台走到 20 号好汉坡，再滑道冲下山。",
      routePairing: "整天行程；回城晚上接簋街小龙虾或奥体夜景",
      tags: [
        "全天",
        "滑道",
        "外国人多",
        "防黑车"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "标准动线：市区正规大巴出发 → 游客中心买门票 40 元+摆渡车 15 元 → 缆车上 14 号敌楼 → 沿城墙走到 20 号好汉坡 → 折回 6 号台滑道下山，山上全程约 3-4 小时。",
      playbookIntro: "选段结论：要清静、要滑道、带娃→慕田峪；要高铁直达和『好汉坡名场面』→八达岭。慕田峪交通靠大巴/包车，务必走正规渠道。敌楼点位现场跟指示牌走，本页不放园内地图。",
      sourceNote: "小红书 r061（交通/票价/最佳组合/避坑）、r066（三种登城组合价格）、r063（八达岭对比/外国朋友多）、r046（官方人少+缆车滑道）、r060/r062/r064/r065/r067（亲子互证）",
      playbookGroups: [
        {
          title: "玩",
          items: [
            {
              label: "滑道下山",
              linkType: "none",
              text: "从 6 号敌楼乘滑道下山，手动控速像长城过山车，5-8 分钟，是外国朋友最兴奋的环节；1.2 米以下需成人同乘，雨雪天停开"
            }
          ]
        },
        {
          title: "看/拍",
          items: [
            {
              label: "20号台好汉坡",
              linkType: "none",
              text: "慕田峪最高点，城墙蜿蜒到天边；体力弱在 14/15 号台拍照即可，风景差别不大"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "正规大巴",
              linkType: "none",
              text: "前门『北京旅游集散中心』往返 80 元（7:00-11:00 流水发车，13:00-16:00 集合返程）；和平西桥『巴士达』往返 115 元含摆渡车+门票；别坐黑车，慢公交换乘多耗 2 小时以上；自驾导航『慕田峪P4停车场』"
            },
            {
              label: "登城组合",
              linkType: "none",
              text: "缆车（封闭轿厢，上 14 号敌楼）或索道+滑道（开放式，6 号台上下）各 140 往返；最优玩法缆车上 14 号→走到 20 号好汉坡→回 6 号滑道下；雨雪天滑道停开，1.2 米以下需成人同乘"
            },
            {
              label: "8点前到",
              linkType: "none",
              text: "避开 9-11 点人流高峰拍照没人挡；山顶简餐贵，自带水和干粮；穿运动鞋"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "慕田峪游客中心",
          kind: "到达",
          duration: "全天",
          googleQuery: "慕田峪长城",
          action: "大巴/包车到游客中心，门票 40 元（18 岁以下免票）+摆渡车 15 元，摆渡到登城口后按『缆车上 14 号→20 号好汉坡→6 号滑道下』走。",
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
      distance: "距王府井直线约 59 km",
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
      name: "八达岭长城",
      address: "北京市延庆区八达岭镇",
      bestFor: "时间紧/带老人：高铁 30 分钟直达，缆车上好汉坡全程 1.5 小时搞定",
      feature: "课本里的长城——『不到长城非好汉』的北八楼就在这里。",
      routePairing: "半天到大半天；回程高铁到北京北站接什刹海",
      tags: [
        "高铁直达",
        "好汉坡",
        "人多"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "标准动线：北京北站乘高铁 30 分钟到八达岭长城站 → 出站进景区乘缆车至北七楼 → 步行 20 分钟到北八楼好汉坡拍照 → 原路返回，全程约 1.5 小时在墙上。",
      playbookIntro: "八达岭赢在交通：北京北站高铁 30 分钟出站就是景区。人多是常态，早班高铁+缆车直上能避开大部队。",
      sourceNote: "小红书 r063（高铁/缆车/北八楼/免票政策）、r017（高铁或德胜门877路）、r046（微信约票+大巴联订）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "北八楼好汉坡",
              linkType: "none",
              text: "缆车到北七楼走 20 分钟即到，城墙蜿蜒到天边的名场面就在这里"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "高铁票",
              linkType: "none",
              text: "北京北→八达岭长城站车次有限，提前在 12306 买好往返；节假日 877 公交容易堵车"
            },
            {
              label: "免票",
              linkType: "none",
              text: "18 岁以下、60 岁以上免门票（缆车另算单程 100/往返 140）"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "八达岭长城",
          kind: "到达",
          duration: "大半天",
          googleQuery: "八达岭长城",
          action: "北京北站乘京张高铁 30 分钟直达（提前买票，备选德胜门 877 路）；微信约票（票+景区大巴联订免排队），缆车至北七楼后步行 20 分钟到北八楼好汉坡。",
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
      distance: "距王府井直线约 60 km",
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
      name: "什刹海·烟袋斜街·鼓楼",
      address: "北京市西城区地安门外大街",
      bestFor: "黄昏到夜晚最佳：湖面+斜街+鼓楼一条线，夜里变酒吧烤串带",
      feature: "外国攻略的标准傍晚线：前海湖畔→银锭桥→烟袋斜街→登鼓楼。",
      routePairing: "接在故宫/景山或南锣鼓巷之后，傍晚开走",
      tags: [
        "黄昏",
        "湖景",
        "夜生活"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "这条线 1.5-2 小时走完但值得放慢：湖边看本地人遛弯下棋，斜街淘小店，最后登鼓楼看暮色里的老城天际线。",
      sourceNote: "小红书 r017（Shichahai→Yandai Xiejie→Drum Tower 顺序+现场购票）、r028（什刹海/后海夜市烤串）、r044（行程位置）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "银锭桥",
              query: "银锭桥",
              linkType: "exact",
              text: "前海、后海交界的小石桥，桥上望西山是经典视角"
            },
            {
              label: "鼓楼",
              query: "北京鼓楼",
              linkType: "exact",
              text: "登楼看击鼓表演、老北京天际线；现场购票，注意末场场次"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "后海",
              linkType: "none",
              text: "夜里湖边一圈烤串、豆汁、卤煮，想猎奇就挑战豆汁"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "登楼场次",
              linkType: "none",
              text: "鼓楼、钟楼：门票现场买即可，注意击鼓表演的末场时间"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "什刹海湖畔",
          kind: "到达",
          duration: "30-40 分钟",
          googleQuery: "什刹海",
          action: "地安门外大街入口下车沿前海湖畔走，看本地人钓鱼下棋；夏天可划船，冬天湖面变冰场。",
          recommendationGroups: [
            {
              title: "看/拍",
              items: [
                {
                  label: "前海湖面",
                  linkType: "none",
                  text: "黄昏湖面逆光+柳树剪影最出片"
                }
              ]
            }
          ],
          lat: 39.937402,
          lon: 116.396344
        },
        {
          order: 2,
          name: "银锭桥",
          kind: "打卡",
          duration: "10-15 分钟",
          googleQuery: "银锭桥",
          action: "走到前海后海交界的银锭桥，桥上拍湖景；这里也是酒吧带的起点。",
          recommendationGroups: [],
          lat: 39.939,
          lon: 116.393442
        },
        {
          order: 3,
          name: "烟袋斜街",
          kind: "逛街",
          duration: "20-30 分钟",
          googleQuery: "烟袋斜街",
          action: "北京最老的斜街之一，800 米小店淘烟袋、葫芦、文创小物，出口正对鼓楼。",
          recommendationGroups: [
            {
              title: "买/带走",
              items: [
                {
                  label: "斜街小店",
                  linkType: "none",
                  text: "小店流动性大，看中就买；大件别在这里买，质量现场确认"
                }
              ]
            }
          ],
          lat: 39.939101,
          lon: 116.394843
        },
        {
          order: 4,
          name: "鼓楼",
          kind: "登楼收尾",
          duration: "40-60 分钟",
          googleQuery: "北京鼓楼",
          action: "登鼓楼看击鼓表演和老城屋顶天际线；下楼后夜宵接后海烤串或打车去簋街。",
          recommendationGroups: [
            {
              title: "吃/喝",
              items: [
                {
                  label: "后海夜市带",
                  linkType: "none",
                  text: "烤串、豆汁、卤煮都在湖边一圈，适合收尾夜宵"
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
      distance: "距王府井直线约 2.7 km",
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
      name: "南锣鼓巷",
      address: "北京市东城区南锣鼓巷",
      bestFor: "800 年胡同主街+小吃纪念品，首访胡同的低门槛入口",
      feature: "人多但方便：糖葫芦边走边吃，支巷里才是安静的老北京。",
      routePairing: "故宫/景山出来步行可达，接什刹海正好",
      tags: [
        "顺路",
        "小吃",
        "人多"
      ],
      detailMode: "compact",
      playbookIntro: "主街 20 分钟走完，别只走主街：东西两侧支巷（帽儿胡同、雨儿胡同）才有胡同生活的样子。",
      sourceNote: "小红书 r017（Nanluogu Lane 800-year hutongs/糖葫芦）、r044（行程位置）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "糖葫芦",
              linkType: "none",
              text: "主街边走边吃糖葫芦、煎饼，山楂经典款先试"
            }
          ]
        },
        {
          title: "看/拍",
          items: [
            {
              label: "帽儿胡同、雨儿胡同",
              linkType: "none",
              text: "拐进支巷看四合院门墩和老门牌，人少安静才好拍"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "错峰",
              linkType: "none",
              text: "周末和节假日主街非常挤；工作日或晚上来，配糖葫芦、煎饼边走边吃更松弛"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "南锣鼓巷",
          kind: "逛街",
          duration: "1-1.5 小时",
          googleQuery: "南锣鼓巷",
          action: "南口进北口出，主街吃小吃，支巷看生活；北口出来向西步行 10 分钟就是什刹海。",
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
      distance: "距王府井直线约 2.0 km",
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
      name: "宝钞胡同 citywalk",
      address: "北京市东城区宝钞胡同",
      bestFor: "『老外就爱钻的胡同』本尊：700 米 8 家小店，咖啡西餐云南菜混着老北京",
      feature: "本地博主实拍：歪果仁一溜烟拐进小巷拍钟楼，巷子像熨斗能抚平焦虑。",
      routePairing: "和钟鼓楼、什刹海同一片，适合下午茶时段",
      tags: [
        "小众",
        "咖啡",
        "出片"
      ],
      detailMode: "sequence",
      internalMap: true,
      playbookIntro: "全程不到 700 米步行 10 分钟，但每家店都能坐：Modernista 的 livehouse、福荣记的粤菜、露华行深的咖啡——这条线的玩法是『慢』。",
      sourceNote: "小红书 r002（宝钞胡同 citywalk：8 家小店名单+钟楼视角，1898赞/1939收藏）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "露华行深",
              query: "露华行深 北京",
              linkType: "search",
              text: "胡同里的咖啡店，博主实拍里最常出现的一家，适合歇脚"
            },
            {
              label: "福荣记",
              query: "福荣记 宝钞胡同",
              linkType: "search",
              text: "胡同里的粤菜面馆，本地人吃饭首选"
            },
            {
              label: "TBS三明治工坊",
              query: "TBS三明治 北京",
              linkType: "search",
              text: "外国面孔常驻的三明治店，适合外国朋友想念西餐时"
            }
          ]
        },
        {
          title: "看/拍",
          items: [
            {
              label: "钟楼视角",
              linkType: "none",
              text: "西侧小巷望过去『远方的钟楼耸立在眼前』，就是博主说老外都在拍的机位"
            }
          ]
        },
        {
          title: "商家/顺路",
          items: [
            {
              label: "Modernista",
              query: "Modernista 北京",
              linkType: "search",
              text: "西餐+livehouse 老店，晚上有演出，收尾喝一杯"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "宝钞胡同南口",
          kind: "到达",
          duration: "5 分钟",
          googleQuery: "宝钞胡同",
          action: "从鼓楼东大街拐进宝钞胡同南口向北走，整条线 700 米。",
          recommendationGroups: [],
          lat: 39.941604,
          lon: 116.399846
        },
        {
          order: 2,
          name: "Modernista 等 8 家小店",
          kind: "逛吃",
          duration: "1-2 小时",
          googleQuery: "宝钞胡同",
          action: "沿线 8 家小店按状态选：咖啡（露华行深/彼时）、吃饭（福荣记粤菜/大理人家云南菜）、烘焙（The Bake Shop/TBS三明治）、西餐酒（Toast at the Orchid/Modernista）。",
          recommendationGroups: [
            {
              title: "吃/喝",
              items: [
                {
                  label: "彼时",
                  query: "彼时咖啡 北京",
                  linkType: "search",
                  text: "白天咖啡晚上酒，本地客为主"
                },
                {
                  label: "大理人家",
                  query: "大理人家 北京",
                  linkType: "search",
                  text: "云南菜，想吃米线和菌子时的选项"
                },
                {
                  label: "The Bake Shop",
                  query: "The Bake Shop 北京",
                  linkType: "search",
                  text: "烘焙小店，买个面包边走边吃"
                }
              ]
            },
            {
              title: "提醒",
              items: [
                {
                  label: "营业时间",
                  linkType: "none",
                  text: "小店作息不定，想专程去某家先在高德/大众点评确认当天营业"
                }
              ]
            }
          ],
          lat: 39.944504,
          lon: 116.399647
        },
        {
          order: 3,
          name: "钟楼湾",
          kind: "观景收尾",
          duration: "20-30 分钟",
          googleQuery: "北京钟楼",
          action: "从西侧小巷穿出正对钟楼拍照，走到钟鼓楼广场看大爷踢毽下棋，接什刹海或鼓楼东大街。",
          recommendationGroups: [
            {
              title: "看/拍",
              items: [
                {
                  label: "钟楼",
                  query: "北京钟楼",
                  linkType: "exact",
                  text: "巷口框景拍钟楼是这条线的标志性照片"
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
      distance: "距王府井直线约 3.0 km",
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
      name: "前门大街·大栅栏",
      address: "北京市西城区前门大街",
      bestFor: "买伴手礼的主场：张一元、六必居、稻香村零号店都在步行圈",
      feature: "正阳门下的老商业街——小吃、铛铛车、老字号一条龙。",
      routePairing: "天安门以南步行可达，和天坛同日顺路",
      tags: [
        "伴手礼",
        "老字号",
        "小吃街"
      ],
      detailMode: "compact",
      playbookIntro: "把『离京前的购物清单』放在这里一次解决：茶叶、酱菜、糕点、茶饼干都是被反复安利的带得走的北京味。",
      sourceNote: "小红书 r027（十大伴手礼图集：张一元/六必居/稻香村零号店/吴裕泰，10图全读）、r028（前门小吃街：烤鸭/酸奶/糕点）",
      playbookGroups: [
        {
          title: "买/带走",
          items: [
            {
              label: "张一元（前门总店）",
              query: "张一元 前门",
              linkType: "exact",
              text: "茉莉花茶老字号，伴手礼买『茉莉小珍珠』这类听装；旁边吴裕泰的抹茶、茉莉茶饼干小罐装同样便宜好带"
            },
            {
              label: "六必居",
              query: "六必居 前门",
              linkType: "exact",
              text: "明代酱菜老号，酱牛肉和小罐酱菜礼盒带得走"
            },
            {
              label: "北京稻香村零号店",
              query: "北京稻香村零号店",
              linkType: "search",
              text: "创意京式糕点排队店，枣花酥和『点心局』系列当伴手礼最受欢迎"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "前门小吃街",
              linkType: "none",
              text: "烤鸭、老北京酸奶、糕点边走边吃；酸奶喝完瓶子要退还摊主"
            }
          ]
        },
        {
          title: "看/拍",
          items: [
            {
              label: "正阳门+铛铛车",
              query: "正阳门",
              linkType: "exact",
              text: "城楼前拍铛铛车驶过的复古照片，傍晚亮灯后更好看"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "前门大街、大栅栏",
          kind: "逛买",
          duration: "2-3 小时",
          googleQuery: "前门大街",
          action: "正阳门下从北往南逛主街买伴手礼，拐进大栅栏看老药铺布鞋店；吃的在两侧支巷更地道。",
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
      distance: "距王府井直线约 3.2 km",
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
      name: "牛街清真街",
      address: "北京市西城区牛街",
      bestFor: "本地人公认性价比最高的小吃街之一：清真涮肉+糯食",
      feature: "英文夜市攻略里 Best value 担当——羊肉火锅、糯米小吃集中地。",
      routePairing: "单独半顿饭行程；可与天坛/大栅栏打车串联",
      tags: [
        "清真",
        "性价比",
        "本地人多"
      ],
      detailMode: "compact",
      playbookIntro: "游客少本地人多：来这里的目标是清真涮羊肉和门口排队的糯食铺子，按队伍长短选店基本不会错。",
      sourceNote: "小红书 r028（六大夜市街：牛街=halal/lamb hot pot/glutinous rice snacks，Best value: Niujie）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "涮羊肉",
              linkType: "none",
              text: "羊肉火锅、涮羊肉的铜锅是牛街正餐主角，人均不高"
            },
            {
              label: "糯米小吃",
              linkType: "none",
              text: "驴打滚、年糕这类糯食在街边铺子按个买，哪家排队买哪家"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "性价比",
              linkType: "none",
              text: "牛街、隆福寺：英文攻略眼里性价比最高的两条本地小吃街"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "牛街",
          kind: "逛吃",
          duration: "1.5-2 小时",
          googleQuery: "牛街",
          action: "沿牛街主路逛，正餐进涮肉馆，小吃跟着本地人的队伍买。",
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
      distance: "距王府井直线约 5.2 km",
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
      name: "簋街 · 24 小时夜宵",
      address: "北京市东城区东直门内大街",
      bestFor: "深夜还想吃的唯一答案：麻辣小龙虾 24 小时不打烊",
      feature: "一条街全是红灯笼大排档——小龙虾、烤鱼、麻辣香锅的主场。",
      routePairing: "雍和宫向南打车 5 分钟；长城回城后的夜宵局",
      tags: [
        "24小时",
        "小龙虾",
        "夜宵"
      ],
      detailMode: "compact",
      playbookIntro: "带外国朋友来这里的正确姿势：点麻辣小龙虾+烤鱼双主角，教他们戴手套剥虾，辣度提前说『微辣』。",
      sourceNote: "小红书 r028（Guijie: Spicy crayfish, crab, grilled fish, 24/7 营业）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "麻辣小龙虾",
              linkType: "none",
              text: "簋街招牌，按斤点；外国朋友怕辣就蒜蓉和麻辣各来一份"
            },
            {
              label: "烤鱼",
              linkType: "none",
              text: "麻辣小龙虾、烤鱼是簋街双主角；炭火烤鱼配宽粉是稳妥主食"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "辣度",
              linkType: "none",
              text: "簋街、深夜档默认偏辣，点单先说『微辣』（英文笔记教的 Bu la）；取号后可在街上逛"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "簋街",
          kind: "夜宵",
          duration: "1.5-2 小时",
          googleQuery: "簋街",
          action: "东直门内大街从东往西挑店，红灯笼越密人越多的位置越热闹。",
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
      distance: "距王府井直线约 3.2 km",
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
      name: "幸福大街·本地早市",
      address: "北京市东城区幸福大街",
      bestFor: "『Not for tourists』的本地早市：20 元吃饱一上午",
      feature: "英文博主实测推荐——菜团子、羊杂汤、现包水饺，居民买菜的真实北京。",
      routePairing: "早市→天坛东门进园，一上午完整动线",
      tags: [
        "早市",
        "13点前",
        "本地"
      ],
      detailMode: "compact",
      playbookIntro: "上午来：多数摊位 13 点前收摊。座位少，按『边走边吃』准备；想猎奇选羊杂汤，稳妥选菜团子和水饺。",
      sourceNote: "小红书 r025（幸福大街本地早市：菜团子/羊杂汤/猪肉玉米饺/凉皮/煎饼，¥20 吃饱，13点前收摊，105赞英文笔记）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "菜团子",
              linkType: "none",
              text: "玉米面菜团子，博主首推，热乎的先买"
            },
            {
              label: "水饺摊",
              linkType: "none",
              text: "水饺摊推荐猪肉玉米馅，现包现煮；凉皮、煎饼也是现做"
            },
            {
              label: "羊杂汤",
              linkType: "none",
              text: "猎奇向、想挑战的点羊杂汤，接受度两极但话题感拉满"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "营业时间",
              linkType: "none",
              text: "早市属性，13 点前收摊；具体市场位置进街后跟着拎菜的本地人走，或高德搜『幸福大街 菜市场』"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "幸福大街早市",
          kind: "早餐",
          duration: "40-60 分钟",
          googleQuery: "幸福大街 菜市场",
          action: "上午到，沿街找最热闹的市场入口，边走边吃一轮后步行去天坛东门。",
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
      distance: "距王府井直线约 3.1 km",
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
      name: "王府井（小吃街+京剧晚场）",
      address: "北京市东城区王府井大街",
      bestFor: "市中心晚间一站式：小吃打卡+吉祥大戏院看一折京剧",
      feature: "糖葫芦煎饼烤蝎子猎奇小吃，加一场对零中文外国人也成立的京剧。",
      routePairing: "住市中心的晚间默认选项，离故宫步行可达",
      tags: [
        "市中心",
        "京剧",
        "夜逛"
      ],
      detailMode: "compact",
      playbookIntro: "实测可行的组合：傍晚小吃街开吃，晚上进吉祥大戏院看折子戏——博主带完全不懂中文的俄罗斯朋友看完仍『赞不绝口』。",
      sourceNote: "小红书 r069（吉祥大戏院《秦琼卖马》《朱砂痣》带俄罗斯朋友实测）、r070（出现中英双语字幕场次）、r028（王府井小吃街：糖葫芦/煎饼/烤蝎子）",
      playbookGroups: [
        {
          title: "玩",
          items: [
            {
              label: "吉祥大戏院",
              query: "吉祥大戏院",
              linkType: "exact",
              text: "王府井里的百年戏院，挑折子戏专场看一两出；现在部分场次配中英双语字幕，带外国朋友零门槛"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "王府井小吃街",
              linkType: "none",
              text: "糖葫芦和煎饼是稳妥款；烤蝎子属于猎奇打卡，拍照意义大于味道"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "演出场次",
              linkType: "none",
              text: "吉祥大戏院、京剧场次提前确认；双语字幕场要提前买票"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "王府井步行街",
          kind: "夜逛+演出",
          duration: "2-3 小时",
          googleQuery: "王府井",
          action: "傍晚逛步行街和小吃街，按开场时间进吉祥大戏院；散场后步行或打车回住地。",
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
      distance: "距王府井直线约 0.0 km",
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
      name: "青松别院·日坛公园旁",
      address: "北京市朝阳区日坛公园旁",
      bestFor: "人均 80 的『米其林水准』四合院京菜——格格装与外国客人一起排队",
      feature: "推开朱红木门锦鲤庭院，炸酱面和酥不腻烤鸭都被点名。",
      routePairing: "使馆区/CBD 顺路；与 798 同方向可串联",
      tags: [
        "四合院",
        "人均80",
        "排队"
      ],
      detailMode: "compact",
      playbookIntro: "想让外国朋友一顿饭看完『庭院+京菜』就来这里：招牌炸酱面+酥不腻烤鸭组合人均不到一只烤鸭店的零头。",
      sourceNote: "小红书 r054（青松别院：黑猪肉炸酱面/安格斯牛肋条炸酱面/京院酥不腻烤鸭蘸白糖/炙子沙葱烤肥牛/老北京爆肚/虾汤柴火豆腐，389赞）",
      playbookGroups: [
        {
          title: "吃/喝",
          items: [
            {
              label: "京院酥不腻烤鸭",
              linkType: "none",
              text: "鸭皮蘸白糖入口即化，米其林水准但价格亲民"
            },
            {
              label: "黑猪肉炸酱面",
              linkType: "none",
              text: "和安格斯牛肋条炸酱面二选一，肉香裹满筋道面条"
            },
            {
              label: "炙子沙葱烤肥牛",
              linkType: "none",
              text: "配老北京爆肚和虾汤柴火豆腐，一桌京味全齐；收尾点话梅小番茄解腻"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "排队",
              linkType: "none",
              text: "格格装小姐姐和外国人都在排队，建议错峰或先取号，等位时去日坛公园转一圈"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "青松别院",
          kind: "正餐",
          duration: "1.5 小时",
          googleQuery: "青松别院 北京",
          action: "高德搜『青松别院』确认到店；饭后可在日坛公园消食。",
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
      distance: "距王府井直线约 2.8 km",
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
      name: "798 艺术区",
      address: "北京市朝阳区酒仙桥路4号",
      bestFor: "看展+拍照+淘小店的下午；离首都机场近，航班前 1 小时也能逛精华",
      feature: "包豪斯厂房里的当代艺术：UCCA、遇见博物馆加涂鸦墙火车头。",
      routePairing: "与青松别院/使馆区同方向；机场顺路最后一站",
      tags: [
        "看展",
        "出片",
        "机场顺路"
      ],
      detailMode: "compact",
      internalMap: false,
      actionSummary: "主干线：地铁高家园站 A 口/打车到酒仙桥路西 4 门进园 → 现代汽车文化中心涂鸦墙 → 遇见博物馆 → UCCA → 包豪斯广场 → 火车头广场；极速 1 小时，完整逛+看展约 4 小时。",
      playbookIntro: "三个版本按时间选：1 小时极速主干线、4 小时完整线、或挑一个大展泡半天；园内按路牌和导览图走，店和馆都用高德搜名字即可。",
      sourceNote: "小红书 r085（核心路线 2163赞）、r082（下午citywalk 3356赞：机位+小店+吃）、r083（1小时极速线+机场区位）、r086（免费展）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "UCCA尤伦斯当代艺术中心",
              query: "UCCA尤伦斯当代艺术中心",
              linkType: "exact",
              text: "中国当代艺术地标，工业风建筑+先锋布展，按当期展览决定是否买票"
            },
            {
              label: "遇见博物馆",
              query: "遇见博物馆 北京798",
              linkType: "search",
              text: "沉浸式大展扛把子（莫奈/梵高级引进展常驻），热门展提前线上购票"
            },
            {
              label: "火车头广场",
              query: "798火车头广场",
              linkType: "search",
              text: "墨绿色老火车头+复古车厢，798 标志性出片位"
            }
          ]
        },
        {
          title: "吃/喝",
          items: [
            {
              label: "激流岛",
              query: "激流岛蛋糕 798",
              linkType: "search",
              text: "法式蛋糕店，巴斯克出名，五扇拱形落地窗采光绝佳；进园先拍现代汽车文化中心的涂鸦大墙再过来"
            },
            {
              label: "墨爷麻辣烫",
              query: "墨爷麻辣烫",
              linkType: "search",
              text: "园区里被点名的麻辣烫，逛累了的正餐补给"
            }
          ]
        },
        {
          title: "买/带走",
          items: [
            {
              label: "Spring Cameras",
              query: "Spring Cameras 798",
              linkType: "search",
              text: "复古胶片相机和胶卷，摄影爱好者会逛很久"
            },
            {
              label: "五十六朵花艺术空间",
              query: "五十六朵花 798",
              linkType: "search",
              text: "手工玩具和民族风小物，礼物属性强"
            },
            {
              label: "猫的行李箱",
              query: "猫的行李箱 798",
              linkType: "search",
              text: "精致小物店，门口本身就是拍照点"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "时间预算",
              linkType: "none",
              text: "极速 1 小时只走主干道；完整逛+看一个展约 4 小时；很多小展免费，撞到什么看什么"
            },
            {
              label: "机场顺路",
              linkType: "none",
              text: "798 离首都机场约 20 分钟车程，回国航班前的空档可以来走 1 小时极速线"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "798 艺术区（西4门）",
          kind: "到达",
          duration: "1-4 小时",
          googleQuery: "798艺术区",
          action: "西 4 门进园走主干线：现代汽车文化中心→遇见博物馆→UCCA→包豪斯广场→火车头广场；遇见博物馆热门展提前线上购票，树上咖啡在 UCCA 马路对面可歇脚。",
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
      distance: "距王府井直线约 10 km",
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
      name: "奥林匹克公园（鸟巢·水立方）",
      address: "北京市朝阳区国家体育场",
      bestFor: "顺路打卡：鸟巢水立方外观拍照，两馆步行 5 分钟",
      feature: "2008 奥运双地标，外国攻略普遍排在长城回程或颐和园同日。",
      routePairing: "长城/颐和园回城顺路打卡",
      tags: [
        "免费外观",
        "顺路",
        "拍照"
      ],
      detailMode: "compact",
      playbookIntro: "看外观不用买票：在中轴广场两馆之间走一圈拍照即可，前后 1 小时内解决。",
      sourceNote: "小红书 r017（Bird's Nest/Water Cube 步行5分钟+长城日收尾）、r044（行程位置）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "鸟巢",
              query: "鸟巢 国家体育场",
              linkType: "exact",
              text: "和水立方同框拍外观是标准构图，两馆步行 5 分钟"
            },
            {
              label: "水立方",
              query: "水立方",
              linkType: "exact",
              text: "从鸟巢走 5 分钟就到，外观拍照即可"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "顺路安排",
              linkType: "none",
              text: "鸟巢、水立方、长城回程或颐和园同日顺路看外观即可，不必单独留半天"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "奥林匹克公园（鸟巢·水立方）",
          kind: "打卡",
          duration: "40-60 分钟",
          googleQuery: "奥林匹克公园",
          action: "地铁 8 号线奥体中心站出，鸟巢→水立方走一圈拍照。",
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
      distance: "距王府井直线约 8.6 km",
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
      name: "国家博物馆·天安门东",
      address: "北京市东城区东长安街16号",
      bestFor: "免费的国家级大馆：雨天/酷暑首选，配天安门同日",
      feature: "外国攻略必去清单常客，免费但票比故宫还难抢。",
      routePairing: "天安门广场东侧，和故宫/天安门排同一天",
      tags: [
        "免费",
        "提前7天约",
        "周一闭馆"
      ],
      detailMode: "compact",
      playbookIntro: "免费但票比故宫还难抢：提前 7 天下午 17:00 放票，约不上就把室内备份换成西什库教堂或商场。",
      sourceNote: "小红书 r046（免费/7天前17:00放票/周一闭馆）、r044（Day1 与天安门同日）、r013（国家博物馆预约同流程）",
      playbookGroups: [
        {
          title: "提醒",
          items: [
            {
              label: "抢票",
              linkType: "none",
              text: "提前 7 天 17:00 微信小程序放票，护照可约；周一闭馆；安检不能带大包"
            }
          ]
        },
        {
          title: "商家/顺路",
          items: [
            {
              label: "天安门",
              query: "天安门广场",
              linkType: "exact",
              text: "天安门、国博就在同一个广场，和故宫排同一天最顺"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "国家博物馆",
          kind: "看展",
          duration: "2-3 小时",
          googleQuery: "中国国家博物馆",
          action: "提前约票后从西门安检进馆，留 2-3 小时按兴趣挑展厅。",
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
      distance: "距王府井直线约 1.5 km",
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
      name: "西什库教堂",
      address: "北京市西城区西什库大街33号",
      bestFor: "免费的中西合璧哥特教堂：彩窗+中式碑亭同框，雨天小众备用",
      feature: "本地高赞免费清单里的『北京最美教堂』，周末可静坐听圣歌。",
      routePairing: "在北海西侧，和北海/什刹海半日可串",
      tags: [
        "免费",
        "小众",
        "建筑"
      ],
      detailMode: "compact",
      playbookIntro: "哥特式教堂配中式琉璃碑亭，这种组合全世界少见；非弥撒时段安静参观，周末有圣歌。",
      sourceNote: "小红书 r010（免费小众清单：西什库教堂=北京最美教堂/彩窗/周末圣歌，1.6万赞）",
      playbookGroups: [
        {
          title: "看/拍",
          items: [
            {
              label: "教堂正立面+碑亭",
              query: "西什库教堂",
              linkType: "exact",
              text: "哥特尖顶和中式碑亭同框的角度在前院左右两侧"
            }
          ]
        },
        {
          title: "提醒",
          items: [
            {
              label: "周末圣歌",
              linkType: "none",
              text: "周末可静坐听圣歌；开放时间以现场为准"
            }
          ]
        }
      ],
      steps: [
        {
          order: 1,
          name: "西什库教堂",
          kind: "参观",
          duration: "30-45 分钟",
          googleQuery: "西什库教堂",
          action: "高德搜『西什库教堂』导航；看完可步行去北海北门或什刹海。",
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
      distance: "距王府井直线约 2.5 km",
      sourceFiles: [
        "report.md",
        "analyses.jsonl",
        "plan.json",
        "detail-notes.md"
      ]
    }
  ]
};
