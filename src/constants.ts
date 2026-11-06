
export const NAV_ITEMS = [
  { name: '2026 reel', id: 'featured-reel' },
  { name: 'profile', id: 'profile' },
  { name: 'motion', id: 'demoreel' },
  { name: 'tool', id: 'scripting' },
  { name: 'engine', id: 'technical' },
  { name: 'art', id: 'art' },
];

export const EXPERIENCES = [
  { company: "사이버커넥트2 시네마틱 애니메이터", period: "2027" },
  { company: "펄어비스 PA 모션팀 2025 하계 현장실습 2개월 과정 수료", period: "2025" },
  { company: "2025 CKAF 사무국원", period: "2025" },
  { company: "UJEP(체코 우스티나트라벰 소재 대학교) 체코어 class 2개월 과정 수료", period: "2019" },
  { company: "UJEP(체코 우스티나트라벰 소재 대학교) IT class 2개월 과정 수료", period: "2019" },
  { company: "Poradna pro integraci 어학원 체코어 2개월 과정 수료", period: "2019" },
  { company: "체코 Adler IT Department 인턴십 3개월 과정 수료", period: "2019" }
];

export const AWARDS = [
  { title: "<GET BACK> 2025 Competition(Commissioned Films) Nominated", event: "프랑스 안시 국제 애니메이션 영화제", year: "2025" },
  { title: "<샴푸의 요정> 코미디상 수상", event: "CKAS 2025 내부시상식", year: "2024" }
];

export const CERTIFICATIONS = [
  { title: "GTQ 그래픽기술자격 2급", category: "Graphic Arts", date: "2019. 08" },
  { title: "ITQ MS워드 A", category: "Business Tools", date: "2019. 08" },
  { title: "ITQ 파워포인트 A", category: "Business Tools", date: "2019. 08" },
  { title: "ITQ 한글엑셀 A", category: "Business Tools", date: "2019. 08" },
  { title: "컴퓨터 활용능력 2급", category: "Computing", date: "2017. 11" },
  { title: "워드프로세서", category: "Computing", date: "2017. 09" },
  { title: "ITQ 아래한글 A", category: "Business Tools", date: "2017. 04" }
];

export const PROJECTS_DATA = {
  demoreel: {
    title: "demoreel & personal work",
    subtitle: "MOTION",
    items: [
      { 
        title: "2026 GAME ANIMATION REEL", 
        desc: "rigging&animation", 
        image: "https://youtu.be/QMLSycRSha0", 
        tags: ["3DS MAX", "MAYA"] 
      },
      { 
        title: "TREASURE HUNTER ( 2025 )", 
        desc: "individual", 
        image: "https://youtu.be/11bOSDxa4is",
        tags: ["Maya"],
        link: {
          text: "View Storyboard",
          url: "#storyboard"
        }
      },
      { 
        title: "SCHOOL WORK ( 2025 )", 
        desc: "attack, idle, run, fly, facial", 
        image: "https://youtu.be/y0-JxFORQvQ", 
        tags: ["Maya", "3ds Max"] 
      }
    ]
  },
  storyboard: {
    title: "work in progress / storyboard",
    subtitle: "STORYBOARD",
    items: [
      {
        title: "Storyboard 01",
        image: "https://drive.google.com/file/d/1dk8Ol875Yqw6bT4UaktZtXV_OGBLYKb5/view?usp=drive_link",
        tags: ["Storyboard"]
      },
      {
        title: "Storyboard 02",
        image: "https://drive.google.com/file/d/1pPi7PmxtOFSvveNza3_ebHWrIXxO9HOS/view?usp=drive_link",
        tags: ["Storyboard"]
      },
      {
        title: "Storyboard 03",
        image: "https://drive.google.com/file/d/19KzuzvtQJh81XobeyonEatcDzMQ5gZKf/view?usp=drive_link",
        tags: ["Storyboard"]
      },
      {
        title: "Storyboard 04",
        image: "https://drive.google.com/file/d/1uonzJE-qVQedOBlQDgKmAb1mZa_PXUbf/view?usp=drive_link",
        tags: ["Storyboard"]
      },
      {
        title: "Storyboard 05",
        image: "https://drive.google.com/file/d/1KfT2H_z14UT10ejNNCf57GMrwFcEsqQy/view?usp=drive_link",
        tags: ["Storyboard"]
      }
    ]
  },
  scripting: {
    title: "tool & script",
    subtitle: "TOOL",
    items: [
      { 
        title: "FACIAL RIGGING", 
        desc: "animation test", 
        image: "https://youtu.be/8mTBqeCCAlY",
        tags: ["Tool", "Script"]
      },
      { 
        title: "COM tracker", 
        desc: "part trajectory / part selection / 2D trajectory map / playback speed / range selection / scrubbing / loop playback / sketch and onion skin", 
        image: "https://youtu.be/p79AmEc6euo",
        tags: ["Tool", "Script"]
      },
      { 
        title: "motion lab", 
        desc: "key copy & paste / anim align / key decimation / preset & memo / scripts collector", 
        image: "https://youtu.be/7N1zCga5hqM",
        tags: ["Tool", "Script"]
      }
    ]
  },
  technical: {
    title: "unreal & modeling",
    subtitle: "ENGINE",
    items: [
      { 
        title: "DESERT TEMPLE", 
        desc: "individual", 
        image: "https://youtu.be/XVeRtnbC0Mg",
        tags: ["Unreal Engine"] 
      },
      { 
        title: "red riding hood", 
        desc: "background design / look dev / shooting & editing", 
        image: "https://youtu.be/KaoBiGpdyg4", 
        tags: ["Unreal Engine"] 
      },
      { 
        title: "modeling", 
        desc: "mechanic and temple", 
        image: "https://youtu.be/NGJ0q9sSjF4",
        tags: ["MAYA"] 
      }
    ]
  },
  art: {
    title: "DRAWING &\nILLUSTRATION",
    subtitle: "ILLUSTRATION",
    items: [
      { 
        title: "florist", 
        image: "https://drive.google.com/file/d/1CJ_pBXy1spZH84ckkqgph2scyUxn91Xp/view?usp=drive_link",
        tags: ["drawing"] 
      },
      { 
        title: "violinist", 
        image: "https://drive.google.com/file/d/1wzRvRokTehGbNZxa3x_R2owRopT7a_C0/view?usp=drive_link",
        tags: ["drawing"] 
      },
      { 
        title: "singer", 
        image: "https://drive.google.com/file/d/1CtHNY2mEUrsqcy0yFVDhaz2L7hzWWj6R/view?usp=drive_link",
        tags: ["drawing"] 
      },
      { 
        title: "mini", 
        image: "https://drive.google.com/file/d/16n-M86CTc31_tpHqboYOyxEsIhJTJgTg/view?usp=drive_link",
        tags: ["drawing"] 
      },
      { 
        title: "winter", 
        image: "https://drive.google.com/file/d/1hleNYGIOaS3CBpR_sDORbGrMSGgzhIc1/view?usp=drive_link",
        tags: ["drawing"] 
      },
      { 
        title: "moon", 
        image: "https://drive.google.com/file/d/11AKn0rYAgzsaBJijCK4EACiUOt0R5NSp/view?usp=sharing",
        tags: ["drawing"] 
      }
    ]
  }
};
