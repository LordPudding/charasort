dataSetVersion = "2019-03-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Mobile Suit Gundam", tooltip: "0079", key: "0079" },
      { name: "Mobile Suit Zeta Gundam", tooltip: "Zeta", key: "zeta" },
      { name: "Mobile Suit ZZ Gundam", tooltip: "Double Zeta", key: "zz" },
      { name: "Char's Counterattack", tooltip: "CCA", key: "cca" },
      { name: "Beltorchika's Children", tooltip: "CCA novel", key: "ccabc" },
      { name: "08th MS Team", tooltip: "08th MS Team", key: "08th" },
      { name: "War in the Pocket", tooltip: "0080", key: "0080" },
      { name: "Stardust Memory", tooltip: "0083", key: "0083" },
      { name: "Mobile Suit Gundam F91", tooltip: "F91", key: "f91" },
      { name: "Mobile Suit Crossbone Gundam", tooltip: "Crossbone", key: "crossbone" },
      { name: "Mobile Suit Victory Gundam", tooltip: "Stand up to the Victory", key: "victory" },
      { name: "G-Saviour", tooltip: "The movie.", key: "gsav" },
      { name: "Gundam Sentinel", tooltip: "Deep Striker", key: "sentinel" },
      { name: "Blue Destiny", tooltip: "Blue", key: "blued" },
      { name: "Advance of Zeta", tooltip: "AoZ", key: "aoz" },
      { name: "Missing Link", tooltip: "Pale Rider", key: "mlink" },
      { name: "Mobile Suit Gundam Unicorn", tooltip: "UC", key: "unicorn" },
      { name: "The Origin", tooltip: "Char", key: "msgo" },
      { name: "Gundam Thunderbolt", tooltip: "psycho", key: "thunderbolt" },
      { name: "Mobile Suit Narrative Gundam", tooltip: "Z'gok Stein", key: "narrative" },
      { name: "Gundam Moon", tooltip: "Varguil", key: "moon" },
      { name: "Mobile Fighter G Gundam", tooltip: "Shining Finger", key: "god" },
      { name: "Mobile Suit Gundam Wing", tooltip: "Just Communication", key: "wing" },
      { name: "Endless Waltz", tooltip: "Wing OVAs", key: "wingew" },
      { name: "After War Gundam X", tooltip: "HG Leopard when?", key: "xgundam" },
      { name: "Turn A Gundam", tooltip: "Torn Ay", key: "turna" },
      { name: "Mobile Suit Gundam SEED", tooltip: "Kira", key: "seed" },
      { name: "Mobile Suit Gundam SEED Destiny", tooltip: "Shinn", key: "destiny" },
      { name: "Gundam SEED Astray", tooltip: "Nippon Steel", key: "astray" },
      { name: "SEED C.E. 73: Stargazer", tooltip: "stars", key: "stargazer" },
      { name: "Mobile Suit Gundam 00", tooltip: "Raiser", key: "00gundam" },
      { name: "A Wakening of the Trailblazer", tooltip: "quanta", key: "00movie" },
      { name: "Gundam 00F", tooltip: "no", key: "00f" },
      { name: "00V: Battlefield Record", tooltip: "1.5", key: "00v" },
      { name: "Mobile Suit Gundam AGE", tooltip: "AGEism", key: "age" },
      { name: "Reconguista in G", tooltip: "G-Reco", key: "greco" },
      { name: "Iron-Blooded Orphans", tooltip: "IBO", key: "ibo" },
      { name: "Iron-Blooded Orphans Gekko", tooltip: "manga", key: "ibogekko" },
      { name: "Gunpla Builders", tooltip: "Beginning", key: "beginning" },
      { name: "Gundam Build Fighters", tooltip: "Sei", key: "gbf" },
      { name: "Gundam Build Fighters Try", tooltip: "Sekai", key: "gbftry" },
      { name: "GM's Counterattack", tooltip: "CCA of GBF", key: "gmcca" },
      { name: "GBFT Island Wars", tooltip: "Try OVA", key: "gbtiw" },
      { name: "GBF Battlouge", tooltip: "fun", key: "battlouge" },
      { name: "GBF Amazing", tooltip: "amazing?", key: "amazing" },
      { name: "GBF Honoo Try", tooltip: "Fire", key: "honoo" },
      { name: "Gundam Build Divers", tooltip: "Momokapool", key: "divers" }
    ]
  },
  {
    name: "Filter by Timeline",
    key: "timeline",
    tooltip: "Check this to restrict to suits that appear in certain timelines.",
    checked: false,
    sub: [ { name: "Universal Century", tooltip: "OG timeline", key: "uc" }, { name: "Future Century", tooltip: "G Gundam", key: "fc" }, { name: "After Colony", tooltip: "Wing", key: "ac" }, { name: "After War", tooltip: "Gundam X", key: "aw" }, { name: "Cosmic Era", tooltip: "SEED", key: "ce" }, { name: "Anno Domini", tooltip: "00 series", key: "ad" }, { name: "Reguild Century", tooltip: "G-Reco", key: "reguild" }, { name: "Post Disaster", tooltip: "IBO", key: "pd" }, { name: "Build Series", key: "bs" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "RX-78-2 Gundam",
    img: "kJfYzt9.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Char's Zaku II",
    img: "aRMBV69.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"]
    }
  },
  {
    name: "GM",
    img: "SdcYq80.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zaku II",
    img: "ZjgXxTI.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gouf",
    img: "idYyFWm.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon",
    img: "b5uDBjG.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gyan",
    img: "z5U7nkI.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guntank",
    img: "kCBrKnQ.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gelgoog",
    img: "ZjgXxTI.png",
    opts: {
      series: [ "0079" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Zaku I",
    img: "6Azz0cl.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Z'gok",
    img: "AMzQQ4j.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Acguy",
    img: "QpvsfDO.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zock",
    img: "MeEt1Rh.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gogg",
    img: "BWNYk6u.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Dom",
    img: "1slXOQF.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zeong",
    img: "9z1gVw9.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Ball",
    img: "09m7bz8.png",
    opts: {
      series: ["0079"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Mk-II [A.E.U.G.]",
    img: "ZGAEw7Q.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
	name: "Gundam Mk-II [Titans]",
	img: "Wxzo6kC.png",
	opts: {
	  series: ["zeta"],
	  timeline: ["uc"]
	}
  },
  {
    name: "Hizack",
    img: "FSGok1H.png",
    opts: {
      series: [ "zeta" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Asshimar",
    img: "Nqpi39p.png",
    opts: {
      series: [ "zeta" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Dijeh",
    img: "gIBa9SD.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Methuss",
    img: "4L9RVwJ.png",
    opts: {
      series: [ "zeta" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Hyaku-Shiki",
    img: "yOTt0vY.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "The O",
    img: "YJuEPLe.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Rick Dias",
    img: "YOWDALT.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Qubeley",
    img: "SOrxcIJ.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Nemo",
    img: "CyReGBs.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Galbaldy Beta",
    img: "x4tBugm.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Palace Athene",
    img: "nmnfhpr.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Marasai",
    img: "dY83hYn.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zeta Gundam",
    img: "moDaXeU.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Psyco Gundam",
    img: "UXiuLlh.png",
    opts: {
      series: [ "zeta" ],
      timeline: ["uc"]
    }
  },
  {
    name: "Gaplant",
    img: "gYnotAf.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Byarlant",
    img: "WAql8be.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Hambrabi",
    img: "YVYdt6R.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Messala",
    img: "AWkOAyc.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Barzam",
    img: "2gERBZ9.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Mk-III",
    img: "LDcn1zc.png",
    opts: {
      series: ["zeta"],
      timeline: ["uc"]
    }
  },
  {
    name: "ZZ Gundam",
    img: "BZCqz0e.png",
    opts: {
      series: ["zz"]
      timeline: ["uc"]
    }
  },
  {
    name: "R-Jarja",
    img: "QLjn9dF.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Schuzrum Dias",
    img: "rlRSjEy.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zaku III",
    img: "sGso8TA.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Hamma-Hamma",
    img: "J9MrAaA.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "GM III",
    img: "DLK1TtK.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Bawoo",
    img: "bgnJkMq.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Doven Wolf",
    img: "TII3tD3.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Dreissen",
    img: "uZ85GQI.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "EWAC Zack",
    img: "kkFIoZm.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Juaggu",
    img: "DRHTvgP.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zogok",
    img: "pSQaxoV.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Elpeo Ple's Qubeley Mk-II",
    img: "SmUM0Z9.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Geymalk",
    img: "4DS3Z5E.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Ple Two's Qubeley Mk-II",
    img: "zBgPiJ0.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Full Armor ZZ Gundam",
    img: "nX8DsXw.png",
    opts: {
      series: ["zz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Geara Doga",
    img: "XIPguxZ.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Jegan",
    img: "QvQbWwf.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Re-GZ",
    img: "xBLd1mo.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gyunei Guss' Jagd Doga",
    img: "MAaEP0O.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Quess Paraya's Jagd Doga",
    img: "4PDVG2H.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "v Gundam",
    img: "lWOJNo2.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Sazabi",
    img: "5GgBm48.png",
    opts: {
      series: ["cca"],
      timeline: ["uc"]
    }
  },
  {
    name: "Hi-v Gundam",
    img: "tablDs3.png",
    opts: {
      series: ["ccabc"],
      timeline: ["uc"]
    }
  },
  {
    name: "Nightingale",
    img: "Ui3xZ6j.png",
    opts: {
      series: ["ccabc"],
      timeline: ["uc"]
    }
  },
  {
    name: "GM [Ground Type]",
    img: "rCf6TJ4.png",
    opts: {
      series: ["08th"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guntank [Mass Production Type]",
    img: "Z6DO9M5.png",
    opts: {
      series: ["08th"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Ez8",
    img: "uORpMYx.png",
    opts: {
      series: ["08th"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gouf Custom",
    img: "pVdJBjs.png",
    opts: {
      series: ["08th"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam [Ground Type]",
    img: "N6LBRQi.png",
    opts: {
      series: ["08th"],
      timeline: ["uc"]
    }
  },
  {
    name: "Hygogg",
    img: "bEQX81B.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
	name: "GM [Cold District Type]",
	img: "uae7hXc.png",
	opts: {
	  series: ["0080"],
	  timeline: ["uc"]
	}
  },
  {
    name: "Zaku II FZ",
    img: "gH9ng6F.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "GM Sniper II",
    img: "VCzz3gk.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "GM Cannon II",
    img: "aVFijeW.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon [Mass Production Type]",
    img: "LEQmWNX.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "Kampfer",
    img: "hY32GOM.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Alex",
    img: "rGM0QlW.png",
    opts: {
      series: ["0080"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Zephyranthes",
    img: "y7kEtVn.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Full Armor Gundam Zephyranthes",
    img: "3T7yn3L.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Zephyranthes Full Burnern",
    img: "g63cyI5.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Gerbera",
    img: "LsQi19b.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Physalis",
    img: "qhb41Qz.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Geminass 01",
    img: "kioNdpv.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Dendrobium Stamen",
    img: "vblvcUF.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Dendrobium",
    img: "xmocvJl.png",
    opts: {
      series: ["0083"],
      timeline: ["uc"]
    }
  },
  {
    name: "Heaygun",
    img: "5mlkmyN.png",
    opts: {
      series: ["f91"],
      timeline: ["uc"]
    }
  },
  {
    name: "Vigna Ghina",
    img: "KJKDBA0.png",
    opts: {
      series: ["f91"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam F91",
    img: "gWVJ5rw.png",
    opts: {
      series: ["f91"],
      timeline: ["uc"]
    }
  },
  {
    name: "Crossbone Gundam X-1",
    img: "0fvPl6d.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Crossbone Gundam X-2",
    img: "rzC55Ur.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Crossbone Gundam X-1 Full Cloth",
    img: "2cdOifg.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Crossbone Gundam X-0",
    img: "y7XffWj.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Phantom Gundam",
    img: "wTyD0TX.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Ghost Gundam",
    img: "GLkHWZt.png",
    opts: {
      series: ["crossbone"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gun-EZ",
    img: "cP0RKBe.png",
    opts: {
      series: ["victory"],
      timeline: ["uc"]
    }
  },
  {
    name: "Rig Shokew",
    img: "oGDnNgr.png",
    opts: {
      series: ["victory"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zoloat",
    img: "kApiFV4.png",
    opts: {
      series: ["victory"],
      timeline: ["uc"]
    }
  },
  {
    name: "Victory Gundam",
    img: "A5Lngbi.png",
    opts: {
      series: ["victory"],
      timeline: ["uc"]
    }
  },
  {
    name: "V2 Gundam",
    img: "g2iy104.png",
    opts: {
      series: ["victory"],
      timeline: ["uc"]
    }
  },
  {
    name: "G-Saviour [Space Mode]",
    img: "70wuJ9a.png",
    opts: {
      series: ["gsav"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zeta Plus",
    img: "f0xaIXW.png",
    opts: {
      series: ["sentinel"],
      timeline: ["uc"]
    }
  },
  { 
    name: "Xekuiens",
    img: "y871ck9.png", 
    opts: {
      series: ["sentinel"],
      timeline: ["uc"]
    } 
  },
  {
    name: "S Gundam",
    img: "ufWgZRk.png",
    opts: {
      series: ["sentinel"],
      timeline: ["uc"]
    }
  },
  {
    name: "Ex-S Gundam",
    img: "CNBQ4NS.png",
    opts: {
      series: ["sentinel"],
      timeline: ["uc"]
    }
  },
  {
    name: "Deep Striker",
    img: "sxWwAfv.png",
    opts: {
      series: ["sentinel"],
      timeline: ["uc"]
    }
  },
  {
    name: "Efreet Custom",
    img: "I4GGbid.png",
    opts: {
      series: ["blued"],
      timeline: ["uc"]
    }
  },
  {
    name: "Blue Destiny Unit 1",
    img: "CZlFvb8.png",
    opts: {
      series: ["blued"],
      timeline: ["uc"]
    }
  },
  {
    name: "Blue Destiny Unit 2",
    img: "rprCv4E.png",
    opts: {
      series: ["blued"],
      timeline: ["uc"]
    }
  },
  {
    name: "Blue Destiny Unit 3",
    img: "WTROWLm.png",
    opts: {
      series: ["blued"],
      timeline: ["uc"]
    }
  },
  {
    name: "GM Quel",
    img: "vNNizvy.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"],
    }
  },
  {
    name: "Gundam TR-1 [Hazel Custom]",
    img: "Q0i4ID3.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam TR-1 [Hazel II]",
    img: "0N72UH4.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam TR-1 [Advanced Hazel]",
    img: "3QWEBDF.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gaplant TR-5 [Hrairoo]",
    img: "8uH0UGz.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam TR-6 [Woundwort]",
    img: "PolfzwJ.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam TR-6 [Hazel II]",
    img: "8Kdv3Rm.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam [Kestrel]",
    img: "Uo04X7E.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam [Gullinbursti]",
    img: "rWFMpS3.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"]
    }
  },
  {
    name: "Ga-Zowmn [Marine Type]",
    img: "K5llkR4.png",
    opts: {
      series: ["aoz"],
      timeline: ["uc"],
    }
  },
  { name: "Pale Rider", 
    img: "UNXxCik.png", 
	opts: {
      series: ["mlink"],
      timeline: ["uc"]
    } },
  {
    name: "[HADES] Todesritter",
    img: "xT42fq5.png",
    opts: {
      series: ["mlink"],
      timeline: ["uc"]
    }
  },
  {
    name: "Kshatriya",
    img: "hBAJB5E.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Stark Jegan",
    img: "kwlqAML.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Anksha",
    img: "kVSg4MM.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Geara Zulu",
    img: "LiZgVIE.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Jesta",
    img: "liyqw5Q.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Jesta Cannon",
    img: "IxS50jd.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gustav Karl",
    img: "uAtHWzP.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zee Zulu",
    img: "ftLvhoh.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "ReZEL",
    img: "I1eDBro.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"],
      pc98: true
    }
  },
  {
    name: "ReZEL Type-C",
    img: "eYD64SV.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Nemo [Unicorn Ver.]",
    img: "Gqgmvuf.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Nemo [Desert Ver.]",
    img: "EzB78hU.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Zeta Plus [Unicorn Ver.]",
    img: "nDM5aB6.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Delta Plus",
    img: "rjU0RY9.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"],
      pc98: true
    }
  },
  {
    name: "Loto",
    img: "npjMqny.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  { name: "Rozen Zulu", 
    img: "9SCwDc5.png", 
	opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    } 
  },
  {
    name: "Unicorn Gundam [Unicorn Mode]",
    img: "EqLZT5Y.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Unicorn Gundam [Destroy Mode]",
    img: "yvMzifQ.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Banshee [Unicorn Mode]",
    img: "rEU6Xdv.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Banshee [Destroy Mode]",
    img: "s2pqdPA.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Sinanju",
    img: "GpHpReX.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Banshee Norn [Unicorn Mode]",
    img: "NNmOB5S.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Banshee Norn [Destroy Mode]",
    img: "LW7UuON.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Full Armor Unicorn Gundam",
    img: "T4iFspk.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Delta Gundam",
    img: "goaSOWj.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Gundam Delta Kai",
    img: "EN4ztaS.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Silver Bullet",
    img: "WFPdThn.png",
    opts: {
      series: ["unicorn"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon Detector",
    img: "T6vDLiB.png",
    opts: {
      series: ["msgo"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon Early Type [Iron Cavalry Squad]",
    img: "FYQh5jy.png",
    opts: {
      series: ["msgo"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon Firepower Test Type",
    img: "ws8Lz49.png",
    opts: {
      series: ["msgo"],
      timeline: ["uc"]
    }
  },
  {
    name: "Guncannon Mobility Test Type",
    img: "VYQ8AP0.png",
    opts: {
      series: ["msgo"],
      timeline: ["uc"]
    }
  },
  {
    name: "Act Zaku [Kycilia's Forces]",
    img: "Vgfd69U.png",
    opts: {
      series: ["msgo"],
      timeline: ["uc"]
    }
  },
  {
	name: "Ramba Ral's Bugu",
	img: "NUT8rn0.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "GM Guard Custom",
	img: "tYYkVTZ.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "GM Intercept Custom",
	img: "Z1ah1pt.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Gundam FSD",
	img: "39otLvk.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Gundam Local Type [North American Type]",
	img: "8SGFnpj.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Gundam Local Type",
	img: "wRAEyYd.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Guntank Early Type",
	img: "Abh2XJk.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Prototype Gouf",
	img: "B7jC7u0.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Waff",
	img: "a4GlvX1.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Dom Test Type",
	img: "bXJOLIk.png",
	opts: {
	  series: ["msgo"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Full Armor Gundam",
	img: "F9GJwN4.png",
	opts: {
	  series: ["thunderbolt"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Psycho Zaku",
	img: "VWR53rG.png",
	opts: {
	  series: ["thunderbolt"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Gundam [Ground Type S]",
	img: "vre7vrO.png",
	opts: {
	  series: ["thunderbolt"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Atlas Gundam",
	img: "KuRgvBT.png",
	opts: {
	  series: ["thunderbolt"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Phenex [Destroy Mode]",
	img: "DceHnzM.png",
	opts: {
	  series: ["narrative"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Sinanju Stein",
	img: "gQOkRzZ.png",
	opts: {
	  series: ["narrative"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Narrative Gundam [C-Packs]",
	img: "LLwyxBm.png",
	opts: {
	  series: ["narrative"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Moon Gundam",
	img: "KL8p4Ll.png",
	opts: {
	  series: ["moon"],
	  timeline: ["uc"]
	}
  },
  {
	name: "Varguil",
	img: "OKXdYe8.png",
	opts: {
	  series: ["moon"],
	  timeline: ["uc"]
	}
  },
  {
	name: "God Gundam",
	img: "Jd8Ddhx.png",
	opts: {
	  series: ["god"],
	  timeline: ["fc"]
	}
  },
  {
	name: "Master Gundam",
	img: "xNe3SMG.png",
	opts: {
	  series: ["god"],
	  timeline: ["fc"]
	}
  },
  {
	name: "Nobell Gundam",
	img: "yJBlsxg.png",
	opts: {
	  series: ["god"],
	  timeline: ["fc"]
	}
  },
  {
	name: "Shining Gundam",
	img: "kYQAVHN.png",
	opts: {
	  series: ["god"],
	  timeline: ["fc"]
	}
  },
  {
	name: "Leo",
	img: "EOFKaJc.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Leo [Space Type]",
	img: "Jz7VCDr.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Leo [Flight Type]",
	img: "rYWrwKe.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  
  {
	name: "Aries",
	img: "5v0fMTG.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Cancer",
	img: "J96Asr3.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Pisces",
	img: "YbQZ5OF.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Taurus",
	img: "W1HecIl.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Maganac",
	img: "RQ4aP4M.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Wing Gundam",
	img: "2gbOMNq.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Deathscythe",
	img: "g3pDjjw.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Sandrock",
	img: "5LxLp9I.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Heavyarms",
	img: "PdyeBoP.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Shenlong",
	img: "ThYmvvV.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Epyon",
	img: "2ae7g8f.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Wing Gundam Zero",
	img: "LTXf2bs.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Deathscythe Hell",
	img: "d3ppVac.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Sandrock Custom",
	img: "ggSFGkx.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Heavyarms Custom",
	img: "FioSyzB.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Altron",
	img: "o2co732.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Tallgeese",
	img: "xMtWF7h.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Tallgeese II",
	img: "h7qM7KG.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Tallgeese III",
	img: "ZYqNzLE.png",
	opts: {
	  series: ["wing"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Wing Gundam EW",
	img: "KKmvlox.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Deathscythe EW",
	img: "0s6QveI.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Sandrock EW",
	img: "MdnrVjM.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Heavyarms EW",
	img: "CAX2UOA.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Shenlong EW",
	img: "UhCvw8h.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Deathscythe Hell EW",
	img: "kewgSiR.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Sandrock Custom EW",
	img: "glNIFGz.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Heavyarms Custom EW",
	img: "VdezrqG.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Altron EW",
	img: "LZqP6Ke.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Wing Gundam Proto Zero EW",
	img: "OtTibuK.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam Epyon EW",
	img: "6T3HTY1.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Wing Gundam Zero EW",
	img: "xMpjnue.png",
	opts: {
	  series: ["wingew"],
	  timeline: ["ac"]
	}
  },
  {
	name: "Gundam X",
	img: "QFD0kUX.png",
	opts: {
	  series: ["xgundam"],
	  timeline: ["aw"]
	}
  },
  {
	name: "Gundam Airmaster",
	img: "EmIYpfS.png",
	opts: {
	  series: ["xgundam"],
	  timeline: ["aw"]
	}
  },
  {
	name: "Gundam X Divider",
	img: "WUM8JSh.png",
	opts: {
	  series: ["xgundam"],
	  timeline: ["aw"]
	}
  },
  {
	name: "Gundam Double X",
	img: "7I8AIYF.png",
	opts: {
	  series: ["xgundam"],
	  timeline: ["aw"]
	}
  },
  {
	name: "Kapool",
	img: "MKqV1Es.png",
	opts: {
	  series: ["turna"],
	  timeline: ["cc"]
	}
  },
  {
	name: "∀ Gundam",
	img: "Y8RS0hh.png",
	opts: {
	  series: ["turna"],
	  timeline: ["cc"]
	}
  },
  {
	name: "Turn X",
	img: "EMUMypA.png",
	opts: {
	  series: ["turna"],
	  timeline: ["cc"]
	}
  },
  {
	name: "Aegis Gundam",
	img: "eg004ca.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Aile Strike Gundam",
	img: "PgA1GgM.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Blitz Gundam",
	img: "7tPHbMY.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "BuCUE",
	img: "4HjlLGs.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Buster Gundam",
	img: "j3M9Jwf.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Calamity Gundam",
	img: "sbk8uwn.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Forbidden Gundam",
	img: "rlJ1vNK.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Freedom Gundam",
	img: "IcBKr76.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Duel Gundam",
	img: "1ArovI3.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Justice Gundam",
	img: "5kuPm86.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Dagger",
	img: "dLMu0LU.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "LaGOWE",
	img: "ns1BXFH.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Providence Gundam",
	img: "6GlWIuf.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Raider Gundam",
	img: "HddcYIR.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Perfect Strike Gundam",
	img: "uCTjTxm.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "M1 Astray",
	img: "BdEWDT6.png",
	opts: {
	  series: ["seed"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Abyss Gundam",
	img: "eBH6ydc.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Akatsuki Gundam",
	img: "7Fa6BaT.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Blast Impulse Gundam",
	img: "pL2QCzn.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Chaos Gundam",
	img: "UWnD7eU.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Destiny Gundam",
	img: "bbNUsmY.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Force Impulse Gundam",
	img: "yKD9C5i.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gaia Gundam",
	img: "on5jaBp.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Infinite Justice Gundam",
	img: "aLkol6l.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Legend Gundam",
	img: "fhkAPvD.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Saviour Gundam",
	img: "uDJL0rI.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Strike Freedom Gundam",
	img: "STDiR22.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Sword Impulse Gundam",
	img: "7edjxDm.png",
	opts: {
	  series: ["destiny"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Strike Rogue Gundam IWSP",
	img: "Tg9ZTsu.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Hyperion Gundam",
	img: "1k1wmni.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Dreadnought Gundam",
	img: "CnAyskK.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Red Frame",
	img: "ulJEmoi.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Red Frame Kai",
	img: "vgB4QLr.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Blue Frame",
	img: "DfwoIO5.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Blue Frame Second L",
	img: "a6qKzZA.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Blue Frame D",
	img: "0jIYxKD.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Gold Frame",
	img: "GWaDQ42.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Gold Frame Amatsu Mina",
	img: "ovYUAgg.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Gundam Astray Green Frame",
	img: "G1o4hKn.png",
	opts: {
	  series: ["astray"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Blu Duel Gundam",
	img: "iLed9Pw.png",
	opts: {
	  series: ["stargazer"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Verde Buster Gundam",
	img: "jTWb1Ej.png",
	opts: {
	  series: ["stargazer"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Strike Noir Gundam",
	img: "IEPVBb5.png",
	opts: {
	  series: ["stargazer"],
	  timeline: ["ce"]
	}
  },
  {
	name: "Stargazer Gundam",
	img: "9LeVozq.png",
	opts: {
	  series: ["stargazer"],
	  timeline: ["ce"]
	}
  },
  {
    name: "Tieren Taozi",
    img: "cUrAiFm.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Tieren [All Region Type]",
    img: "5YCm2kD.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Tieren [Space Commander Type]",
    img: "jyAtyHS.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "00 Raiser",
    img: "9fVhnxr.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "00 XN Raiser",
    img: "IToHw5n.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Artemie",
    img: "zgkEhv3.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Rasiel",
    img: "Cuymdas.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Cherudim Gundam SAGA",
    img: "Cuymdas.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Garazzo",
    img: "NX45X4l.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gaddess",
    img: "daLhmJW.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "AEU Hellion Perpetuum",
    img: "SOk9Jn1.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Masurao",
    img: "BMSIdMK.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "GN-XIII",
    img: "1wGk5NI.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Cherudim Gundam GNHW/R",
    img: "Un2R3Sk.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Alvaroon",
    img: "kxHERdE.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Union Flag Custom II [GN Flag]",
    img: "Rx7H4jw.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Over Flag",
    img: "pqsRbgn.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "00 Gundam Seven Sword/G",
    img: "Rn7Hjhy.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "00 Gundam",
    img: "8zcqYpc.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "00 Raiser + GN Sword III",
    img: "G7Za7pO.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "0 Gundam",
    img: "AFqrEKF.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Ahead",
    img: "b8XljVe.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Arche Gundam",
    img: "OlvMOHY.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Arios Gundam",
    img: "YRv6V5R.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Arios Gundam GNHW/M",
    img: "rWkLqjX.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Cherudim Gundam",
    img: "cE9DSYK.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Dynames",
    img: "ftBfX87.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "AEU Enact",
    img: "ajiA9D9.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Exia",
    img: "jZhJC3f.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Union Flag",
    img: "N6vfERZ.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gadessa",
    img: "BDBSSt1.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "GN-X",
    img: "fYUte0N.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "GN Archer",
    img: "wr6qxdz.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Kyrios",
    img: "lrtdwZG.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Nadleeh",
    img: "969PL5a.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Reborns Gundam",
    img: "A5EG7m2.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Seravee Gundam GNHW/B",
    img: "Q4knbuG.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Seraphim Gundam",
    img: "Y9PEZUh.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Seravee Gundam",
    img: "HdmXfQh.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Throne Drei",
    img: "YlcX8Il.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Tieren [Ground Type]",
    img: "Y5oXUec.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Susanowo",
    img: "WdIvKUf.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Throne Eins",
    img: "6a0E1EV.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Virtue",
    img: "jYL6cBZ.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
{
    name: "Gundam Throne Zwei",
    img: "T9k5gdM.png",
    opts: {
      series: [ "00gundam" ],
      timeline: ["ad"]
    }
  },
  {
	name: "Gundam AGE-1 Normal",
	img: "2MyjSVF.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-1 Titus",
	img: "DsW5glz.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-1 Spallow",
	img: "eGf9UDp.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-1 Razor",
	img: "BNrJfAv.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-1 Full Glansa",
	img: "NAyUNS9.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-2 Normal",
	img: "ZZo2P9G.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-2 Double Bullet",
	img: "tvCXDey.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-2 Dark Hound",
	img: "pTSUUvd.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-3 Normal",
	img: "TXfcq6o.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-3 Orbital",
	img: "vdsLtxV.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-3 Fortress",
	img: "f5JzRkd.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam AGE-FX",
	img: "zBHrWAr.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam Legilis",
	img: "EkXAYSB.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Genoace",
	img: "Xpkxgrk.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gafran",
	img: "YCkXA50.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Danazine",
	img: "5ar3Grp.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Genoace Custom",
	img: "izfJLIO.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Zedas",
	img: "FuhED1b.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Farsia",
	img: "MxPmhmw.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Baqto",
	img: "8WlXj1d.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Genoace II",
	img: "255z7Iu.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Dorado",
	img: "wRnprHN.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Shaldoll Custom",
	img: "3BjomhI.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "G-Exes",
	img: "c9oZihq.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Zedas R",
	img: "yfF2z6Z.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Ghirarga",
	img: "6x9piiK.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "G-Bouncer",
	img: "y7b1wy4.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Adele",
	img: "5Wk2oxd.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Clanche",
	img: "j6mjVb8.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Clanche Custom",
	img: "sTIPsif.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Zeydra",
	img: "EF0Fn9m.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Shaldoll Rogue",
	img: "dNVcMcd.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "G-Xiphos",
	img: "54gc2aD.png",
	opts: {
	  series: ["age"],
	  timeline: ["ag"]
	}
  },
  {
	name: "Gundam G-Self",
	img: "gIDef0Q.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Grimoire",
	img: "ggL5zBS.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Montero",
	img: "c1nkYxN.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gundam G-Arcane",
	img: "gAOjdvV.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Jahannam Space Type",
	img: "5qX1ciR.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Elf Bullock",
	img: "Cdbuu6D.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gaeon",
	img: "LHVKIX7.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Mack Knife",
	img: "XXfLxkl.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gundam G-Lucifer",
	img: "o2kg2oK.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gundam G-Self [Assault Pack]",
	img: "wIxt7k2.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Catsith",
	img: "HQct9BZ.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Dahack",
	img: "BuLxU8t.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gastima",
	img: "66KXYWx.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Kabakali",
	img: "ndvQNve.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gundam G-Self [Perfect Pack]",
	img: "Mcevgt7.png",
	opts: {
	  series: ["greco"],
	  timeline: ["reguild"]
	}
  },
  {
	name: "Gundam Barbatos",
	img: "w8ohuyn.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Graze",
	img: "67qEAHX.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "McGillis' Schwalbe Graze",
	img: "kYec5mM.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Graze Custom",
	img: "wY3ROFR.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Hyakuri",
	img: "O1ZcrTZ.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Hyakuren",
	img: "4VyhAd9.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Man Rodi",
	img: "C2rpwHr.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Gusion",
	img: "Nnr03ST.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Amida's Hyakuren",
	img: "MFhTEZu.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Kimaris",
	img: "l3N6lMi.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Ryusei-Go",
	img: "t7LMLvp.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Gusion Rebake",
	img: "0bF7O13.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Grimgerde",
	img: "5GJ107f.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Barbatos 6th Form",
	img: "6hUNckW.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Kimaris Trooper",
	img: "5ErsH9M.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Graze Ritter",
	img: "zYpCRSS.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Carta's Graze Ritter",
	img: "5TbFwNb.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Graze Ein",
	img: "liCCC00.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Rouei",
	img: "AVIxYQQ.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Barbatos Lupus",
	img: "f7NmU9x.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Hugo",
	img: "TcPTUTH.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Gusion Rebake Full City",
	img: "p31oDMj.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Julieta's Reginlaze",
	img: "mVXuoyc.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "IO Frame Shiden",
	img: "dvq7tQ3.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Geirail",
	img: "tnZKAD9.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Vidar",
	img: "c4Y5xBH.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Flauros [Ryusei-Go]",
	img: "uHGtrGL.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Hekija",
	img: "FhXSEBk.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Helmwige Reincar",
	img: "ka62N3D.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Barbatos Lupus Rex",
	img: "TTqJjT2.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Reginlaze Julia",
	img: "qLVNTwp.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Kimaris Vidar",
	img: "SuOF3Ti.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Bael",
	img: "Kt1QgI3.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Geirail Scharfrichter",
	img: "Tx1CVdW.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Astaroth",
	img: "RNUKNmT.png",
	opts: {
	  series: ["ibogekko"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Dantalion",
	img: "zMlO1Os.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Astaroth Origin",
	img: "vuutY7C.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Vual",
	img: "bYZKrbt.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Gundam Astaroth Rinascimento",
	img: "VInhZ59.png",
	opts: {
	  series: ["ibo"],
	  timeline: ["pd"]
	}
  },
  {
	name: "Beginning Gundam",
	img: "DiNGz8W.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Super Custom Zaku F2000",
	img: "pQB2ZsK.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Forever Gundam",
	img: "qIKw2cl.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Beginning 30 Gundam",
	img: "h8AlX0A.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Beginning D Gundam",
	img: "cI88snI.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Beginning J Gundam",
	img: "k0db12O.png",
	opts: {
	  series: ["beginning"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Build Strike Gundam Full Package",
	img: "F9c2fQI.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Zaku Amazing",
	img: "R8QcZ9v.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Build Gundam Mk-II",
	img: "VUznzNQ.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Wing Gundam Fenice",
	img: "WTOrGot.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam X Maoh",
	img: "z4GfDZz.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Sengoku Astray",
	img: "za7MYlz.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Kampfer Amazing",
	img: "DrMiQ9e.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "GM Sniper K9",
	img: "GDqe2CV.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Star Build Strike Gundam",
	img: "z4GfDZz.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Qubeley Papillon",
	img: "rG37zRY.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Miss Sazabi",
	img: "FpzUdYm.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Exia Dark Matter",
	img: "bq2LI5n.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Amazing Exia",
	img: "lfBdSUR.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Wing Gundam Fenice Rinascita",
	img: "G59FhBc.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Crossbone Gundam Maoh",
	img: "oJdWWd3.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gouf R35",
	img: "ywY7U2h.png",
	opts: {
	  series: ["gbf"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Build Burning Gundam",
	img: "RWai49l.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Powered GM Cardigan",
	img: "vjMmEpW.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Lightning Gundam",
	img: "dDWbjBN.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Ez-SR",
	img: "hF7xNUF.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "R-Gyagya",
	img: "7BscvyJ.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Mega-Shiki",
	img: "k3cWtv3.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Amazing Red Warrior",
	img: "sepquyZ.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Hi-Mock",
	img: "O9yWEid.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Try Burning Gundam",
	img: "fRXcoTY.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Portent",
	img: "36TUIwV.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Transient Gundam",
	img: "P49bEmZ.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Crossbone Gundam Full Cloth Type.GBFT",
	img: "4vxVTKf.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam The End",
	img: "41Ogq0V.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Denial Gundam",
	img: "RvVHN6U.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Tryon 3",
	img: "3PAE2y0.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Dom R35",
	img: "8VTeOZq.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Kamiki Burning Gundam",
	img: "e8SfMFT.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Leopard Da Vinci",
	img: "7HrstwP.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Lightning Zeta Gundam",
	img: "5uPgsmg.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Star Winning Gundam",
	img: "SeGteZ4.png",
	opts: {
	  series: ["gbftry"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Star Burning Gundam",
	img: "vOnY0dD.png",
	opts: {
	  series: ["gmcca"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Ninpulse Gundam",
	img: "l88AV37.png",
	opts: {
	  series: ["gmcca"],
	  timeline: ["bs"]
	}
  },
  {
	name: "GM/GM",
	img: "Vye66fu.png",
	opts: {
	  series: ["gmcca"],
	  timeline: ["bs"]
	}
  },
  {
	name: "ZZII",
	img: "bMvzZLK.png",
	opts: {
	  series: ["gbtiw"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Scramble Gundam",
	img: "HSQtL4t.png",
	opts: {
	  series: ["gbtiw"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gyancelot",
	img: "R2t9JKW.png",
	opts: {
	  series: ["gbtiw"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam 00 Shia Qan[T]",
	img: "0JiPOkO.png",
	opts: {
	  series: ["gbtiw"],
	  timeline: ["bs"]
	}
  },
  {
	name: "A-Z Gundam",
	img: "d2xO2ch.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Build Strike Galaxy Cosmos",
	img: "oZPBPal.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Cherudim Gundam SAGA Type.GBF",
	img: "gnaeyw0.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Lightning Black Warrior",
	img: "Zufq4ly.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Striker GN-X",
	img: "1INZnvw.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Reversible Gundam",
	img: "kIytCRH.png",
	opts: {
	  series: ["battlouge"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Transient Gundam Glacier",
	img: "6Eona8p.png",
	opts: {
	  series: ["honoo"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Wing Gundam Zero Honoo",
	img: "tqzqaPV.png",
	opts: {
	  series: ["honoo"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Amazing Strike Freedom Gundam",
	img: "359pI4e.png",
	opts: {
	  series: ["amazing"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Schwarzritter",
	img: "2lbMJyl.png",
	opts: {
	  series: ["amazing"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Hi-v Gundam Vrabe",
	img: "bfYY6vj.png",
	opts: {
	  series: ["amazing"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Lunagazer Gundam",
	img: "XAnVmZn.png",
	opts: {
	  series: ["amazing"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam 00 Diver",
	img: "miSbGBq.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam AGEII Magnum",
	img: "wHQuXgn.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "GM III Beam Master",
	img: "aK4BkcI.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Grimoire Red Beret",
	img: "6DS2wxj.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Momokapool",
	img: "93dd6zO.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Ogre GN-X",
	img: "daqmRlH.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Seravee Gundam Scheherazade",
	img: "xVSRNCn.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam 00 Diver Ace",
	img: "IdPVIpw.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Galbaldy Rebake",
	img: "N0xbPiq.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Geara Ghirarga",
	img: "OlOvmHi.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Jiyan Altron",
	img: "ZAw4xHo.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam No-Name Astray",
	img: "HXhU6b1.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam 00 Sky",
	img: "pJkMe5c.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Jegan Blast Master",
	img: "T0cUhnR.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Impulse Gundam Arc",
	img: "TohlGwi.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Impulse Gundam Lancier",
	img: "8e7Frsx.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Love Phantom",
	img: "bTPtLtP.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam AGE II Magnum SV",
	img: "5bBUqGI.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "GBN Guard Frame",
	img: "sY6c6Ur.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Leo NPD",
	img: "J6cAEwv.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "GBN-Base Gundam",
	img: "nqL1qSG.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Shining Break",
	img: "5G3sWab.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
  {
	name: "Gundam Zerachiel",
	img: "XKOvXAV.png",
	opts: {
	  series: ["divers"],
	  timeline: ["bs"]
	}
  },
];
