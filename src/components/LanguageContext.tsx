import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja';

export interface Translation {
  nav: {
    featuredReel: string;
    profile: string;
    motion: string;
    tool: string;
    engine: string;
    art: string;
  };
  hero: {
    portfolioCollection: string;
    scrollToWork: string;
  };
  featuredReel: {
    title: string;
    subtitle: string;
    desc: string;
  };
  profile: {
    title: string;
    subtitle: string;
    name: string;
    birth: string;
    education: string;
    educationDetail: string;
    grades: string;
    currentRole: string;
    tools: string;
    language: string;
    contactInfo: string;
    experience: string;
    awards: string;
    certification: string;
  };
  experiences: { company: string; period: string }[];
  awards: { title: string; event: string; year: string }[];
  certifications: { title: string; category: string; date: string }[];
  projects: {
    demoreel: {
      title: string;
      subtitle: string;
      items: { title: string; desc: string }[];
    };
    storyboard: {
      title: string;
      subtitle: string;
      items: { title: string }[];
    };
    scripting: {
      title: string;
      subtitle: string;
      items: { title: string; desc: string }[];
    };
    technical: {
      title: string;
      subtitle: string;
      items: { title: string; desc: string }[];
    };
    art: {
      title: string;
      subtitle: string;
      items: { title: string }[];
    };
  };
}

const ko: Translation = {
  nav: {
    featuredReel: '2026 reel',
    profile: 'profile',
    motion: 'motion',
    tool: 'tool',
    engine: 'engine',
    art: 'art',
  },
  hero: {
    portfolioCollection: 'PORTFOLIO COLLECTION',
    scrollToWork: '작업물 보기',
  },
  featuredReel: {
    title: '2026 GAME ANIMATION REEL',
    subtitle: 'Main Showcase',
    desc: 'RIGGING & ANIMATION',
  },
  profile: {
    title: 'about me.',
    subtitle: 'Profile',
    name: '최연식',
    birth: '2001. 09. 13',
    education: 'Education',
    educationDetail: '청강문화산업대학교\n애니메이션 스쿨 4학년\n게임콘텐츠 스쿨 부전공',
    grades: 'Grades',
    currentRole: 'Current Role',
    tools: 'tools',
    language: 'language',
    contactInfo: 'Contact Info',
    experience: 'experience',
    awards: 'awards & nominations',
    certification: 'certification',
  },
  experiences: [
    { company: "사이버커넥트2 시네마틱 애니메이터", period: "2027" },
    { company: "펄어비스 PA 모션팀 2025 하계 현장실습 2개월 과정 수료", period: "2025" },
    { company: "2025 CKAF 사무국원", period: "2025" },
    { company: "UJEP(체코 우스티나트라벰 소재 대학교) 체코어 class 2개월 과정 수료", period: "2019" },
    { company: "UJEP(체코 우스티나트라벰 소재 대학교) IT class 2개월 과정 수료", period: "2019" },
    { company: "Poradna pro integraci 어학원 체코어 2개월 과정 수료", period: "2019" },
    { company: "체코 Adler IT Department 인턴십 3개월 과정 수료", period: "2019" }
  ],
  awards: [
    { title: "<GET BACK> 2025 Competition(Commissioned Films) Nominated", event: "프랑스 안시 국제 애니메이션 영화제", year: "2025" },
    { title: "<샴푸의 요정> 코미디상 수상", event: "CKAS 2025 내부시상식", year: "2024" }
  ],
  certifications: [
    { title: "GTQ 그래픽기술자격 2급", category: "Graphic Arts", date: "2019. 08" },
    { title: "ITQ MS워드 A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ 파워포인트 A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ 한글엑셀 A", category: "Business Tools", date: "2019. 08" },
    { title: "컴퓨터 활용능력 2급", category: "Computing", date: "2017. 11" },
    { title: "워드프로세서", category: "Computing", date: "2017. 09" },
    { title: "ITQ 아래한글 A", category: "Business Tools", date: "2017. 04" }
  ],
  projects: {
    demoreel: {
      title: "demoreel & personal work",
      subtitle: "MOTION",
      items: [
        { title: "2026 GAME ANIMATION REEL", desc: "리깅 및 애니메이션" },
        { title: "TREASURE HUNTER ( 2025 )", desc: "개인 작업" },
        { title: "SCHOOL WORK ( 2025 )", desc: "공격, 대기, 달리기, 비행, 페이셜 애니메이션" }
      ]
    },
    storyboard: {
      title: "work in progress / storyboard",
      subtitle: "STORYBOARD",
      items: [
        { title: "스토리보드 01" },
        { title: "스토리보드 02" },
        { title: "스토리보드 03" },
        { title: "스토리보드 04" },
        { title: "스토리보드 05" }
      ]
    },
    scripting: {
      title: "tool & script",
      subtitle: "TOOL",
      items: [
        { title: "FACIAL RIGGING", desc: "애니메이션 테스트" },
        { title: "COM tracker", desc: "파츠 궤적 / 파츠 선택 / 2D 궤적 맵 / 재생 속도 조절 / 구간 선택 / 스크러빙 / 루프 재생 / 스케치 및 어니언 스킨 기능 제공" },
        { title: "motion lab", desc: "키 복사 및 붙여넣기 / 애니메이션 정렬 / 키 데시메이션 / 프리셋 및 메모 기능 / 스크립트 컬렉터 기능 제공" }
      ]
    },
    technical: {
      title: "unreal & modeling",
      subtitle: "ENGINE",
      items: [
        { title: "DESERT TEMPLE", desc: "개인 작업" },
        { title: "red riding hood", desc: "배경 디자인 / 룩뎁 / 촬영 및 편집" },
        { title: "modeling", desc: "메카닉 및 신전 모델링" }
      ]
    },
    art: {
      title: "DRAWING &\nILLUSTRATION",
      subtitle: "ILLUSTRATION",
      items: [
        { title: "플로리스트" },
        { title: "바이올리니스트" },
        { title: "싱어" },
        { title: "미니" },
        { title: "겨울" },
        { title: "달" }
      ]
    }
  }
};

const en: Translation = {
  nav: {
    featuredReel: '2026 reel',
    profile: 'profile',
    motion: 'motion',
    tool: 'tool',
    engine: 'engine',
    art: 'art',
  },
  hero: {
    portfolioCollection: 'PORTFOLIO COLLECTION',
    scrollToWork: 'Scroll to work',
  },
  featuredReel: {
    title: '2026 GAME ANIMATION REEL',
    subtitle: 'Main Showcase',
    desc: 'RIGGING & ANIMATION',
  },
  profile: {
    title: 'about me.',
    subtitle: 'Profile',
    name: 'Yeonsik Choi',
    birth: '2001. 09. 13',
    education: 'Education',
    educationDetail: 'Chungkang College of Cultural Industries\nAnimation School, 4th Year\nGame Contents School, Minor',
    grades: 'Grades',
    currentRole: 'Current Role',
    tools: 'tools',
    language: 'language',
    contactInfo: 'Contact Info',
    experience: 'experience',
    awards: 'awards & nominations',
    certification: 'certification',
  },
  experiences: [
    { company: "CyberConnect2 Cinematic Animator", period: "2027" },
    { company: "Completed Pearl Abyss PA Motion Team 2-month summer internship program (2025)", period: "2025" },
    { company: "2025 CKAF Secretariat Member", period: "2025" },
    { company: "Completed 2-month Czech language class at UJEP (Ústí nad Labem, Czech Republic)", period: "2019" },
    { company: "Completed 2-month IT class at UJEP (Ústí nad Labem, Czech Republic)", period: "2019" },
    { company: "Completed 2-month Czech course at Poradna pro integraci language academy", period: "2019" },
    { company: "Completed 3-month internship in Czech Adler IT Department", period: "2019" }
  ],
  awards: [
    { title: "<GET BACK> 2025 Competition (Commissioned Films) Nominated", event: "Annecy International Animation Film Festival, France", year: "2025" },
    { title: "<The Fairy of Shampoo> Won Comedy Award", event: "CKAS 2025 Internal Ceremony", year: "2024" }
  ],
  certifications: [
    { title: "GTQ Graphic Technology Qualification, Grade 2", category: "Graphic Arts", date: "2019. 08" },
    { title: "ITQ MS Word, Grade A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ PowerPoint, Grade A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ Excel, Grade A", category: "Business Tools", date: "2019. 08" },
    { title: "Computer Literacy, Grade 2", category: "Computing", date: "2017. 11" },
    { title: "Word Processor", category: "Computing", date: "2017. 09" },
    { title: "ITQ Hangul Word, Grade A", category: "Business Tools", date: "2017. 04" }
  ],
  projects: {
    demoreel: {
      title: "demoreel & personal work",
      subtitle: "MOTION",
      items: [
        { title: "2026 GAME ANIMATION REEL", desc: "rigging & animation" },
        { title: "TREASURE HUNTER ( 2025 )", desc: "individual work" },
        { title: "SCHOOL WORK ( 2025 )", desc: "attack, idle, run, fly, facial animation" }
      ]
    },
    storyboard: {
      title: "work in progress / storyboard",
      subtitle: "STORYBOARD",
      items: [
        { title: "Storyboard 01" },
        { title: "Storyboard 02" },
        { title: "Storyboard 03" },
        { title: "Storyboard 04" },
        { title: "Storyboard 05" }
      ]
    },
    scripting: {
      title: "tool & script",
      subtitle: "TOOL",
      items: [
        { title: "FACIAL RIGGING", desc: "animation test" },
        { title: "COM tracker", desc: "part trajectory / part selection / 2D trajectory map / playback speed / range selection / scrubbing / loop playback / sketch and onion skin" },
        { title: "motion lab", desc: "key copy & paste / anim align / key decimation / preset & memo / scripts collector" }
      ]
    },
    technical: {
      title: "unreal & modeling",
      subtitle: "ENGINE",
      items: [
        { title: "DESERT TEMPLE", desc: "individual work" },
        { title: "red riding hood", desc: "background design / look dev / shooting & editing" },
        { title: "modeling", desc: "mechanic and temple modeling" }
      ]
    },
    art: {
      title: "DRAWING &\nILLUSTRATION",
      subtitle: "ILLUSTRATION",
      items: [
        { title: "Florist" },
        { title: "Violinist" },
        { title: "Singer" },
        { title: "Mini" },
        { title: "Winter" },
        { title: "Moon" }
      ]
    }
  }
};

const ja: Translation = {
  nav: {
    featuredReel: '2026 reel',
    profile: 'profile',
    motion: 'motion',
    tool: 'tool',
    engine: 'engine',
    art: 'art',
  },
  hero: {
    portfolioCollection: 'PORTFOLIO COLLECTION',
    scrollToWork: '作品を見る',
  },
  featuredReel: {
    title: '2026 GAME ANIMATION REEL',
    subtitle: 'Main Showcase',
    desc: 'RIGGING & ANIMATION',
  },
  profile: {
    title: 'about me.',
    subtitle: 'Profile',
    name: 'チェ・ヨンシク',
    birth: '2001. 09. 13',
    education: 'Education',
    educationDetail: '清江文化産業大学\nアニメーションスクール 4年生\nゲームコンテンツスクール 副専攻',
    grades: 'Grades',
    currentRole: 'Current Role',
    tools: 'tools',
    language: 'language',
    contactInfo: 'Contact Info',
    experience: 'experience',
    awards: 'awards & nominations',
    certification: 'certification',
  },
  experiences: [
    { company: "サイバーコネクトツー（CyberConnect2）シネマティックアニメーター", period: "2027" },
    { company: "PEARL ABYSS PAモーションチーム 2025夏季現場実習 2ヶ月課程修了", period: "2025" },
    { company: "2025 CKAF 事務局員", period: "2025" },
    { company: "UJEP（チェコ・ウスティ・ナド・ラベム所在大学）チェコ語クラス 2ヶ月課程修了", period: "2019" },
    { company: "UJEP（チェコ・ウスティ・ナド・ラベム所在大学）ITクラス 2ヶ月課程修了", period: "2019" },
    { company: "Poradna pro integraci 語学学校 チェコ語 2ヶ月課程修了", period: "2019" },
    { company: "チェコ Adler IT Department インターンシップ 3ヶ月課程修了", period: "2019" }
  ],
  awards: [
    { title: "「GET BACK」2025 Competition (Commissioned Films) ノミネート", event: "フランス アヌシー国際アニメーション映画祭", year: "2025" },
    { title: "「シャンプーの妖精」コメディ賞受賞", event: "CKAS 2025 内部授賞式", year: "2024" }
  ],
  certifications: [
    { title: "GTQ グラフィック技術資格 2級", category: "Graphic Arts", date: "2019. 08" },
    { title: "ITQ MSワード A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ パワーポイント A", category: "Business Tools", date: "2019. 08" },
    { title: "ITQ ハングルエクセル A", category: "Business Tools", date: "2019. 08" },
    { title: "コンピュータ活用能力 2級", category: "Computing", date: "2017. 11" },
    { title: "ワードプロセッサ", category: "Computing", date: "2017. 09" },
    { title: "ITQ アレアハングル A", category: "Business Tools", date: "2017. 04" }
  ],
  projects: {
    demoreel: {
      title: "demoreel & personal work",
      subtitle: "MOTION",
      items: [
        { title: "2026 GAME ANIMATION REEL", desc: "リギング & アニメーション" },
        { title: "TREASURE HUNTER ( 2025 )", desc: "個人制作" },
        { title: "SCHOOL WORK ( 2025 )", desc: "攻撃、待機、走行、飛行、フェイシャルアニメーション" }
      ]
    },
    storyboard: {
      title: "work in progress / storyboard",
      subtitle: "STORYBOARD",
      items: [
        { title: "絵コンテ 01" },
        { title: "絵コンテ 02" },
        { title: "絵コンテ 03" },
        { title: "絵コンテ 04" },
        { title: "絵コンテ 05" }
      ]
    },
    scripting: {
      title: "tool & script",
      subtitle: "TOOL",
      items: [
        { title: "FACIAL RIGGING", desc: "アニメーションテスト" },
        { title: "COM tracker", desc: "パーツ軌跡 / パーツ選択 / 2D軌跡マップ / 再生速度調整 / 区間選択 / スクラブ再生 / ループ再生 / スケッチ＆オニオンスキン機能を提供" },
        { title: "motion lab", desc: "キーコピペ / アニメアライン / キーデシメーション / プリセット＆メモ / スクリプトコレクター機能を提供" }
      ]
    },
    technical: {
      title: "unreal & modeling",
      subtitle: "ENGINE",
      items: [
        { title: "DESERT TEMPLE", desc: "個人制作" },
        { title: "red riding hood", desc: "背景デザイン / ルックデヴ / 撮影 & 編集" },
        { title: "modeling", desc: "メカニック＆神殿モデリング" }
      ]
    },
    art: {
      title: "DRAWING &\nILLUSTRATION",
      subtitle: "ILLUSTRATION",
      items: [
        { title: "フローリスト" },
        { title: "バイオリニスト" },
        { title: "シンガー" },
        { title: "ミニ" },
        { title: "冬" },
        { title: "月" }
      ]
    }
  }
};

const translations: Record<Language, Translation> = { ko, en, ja };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lng');
    return (saved as Language) || 'ko';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lng', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
