
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';

export const Hero: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="relative flex flex-col justify-center px-6 border-b border-black/[0.03] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] font-bold tracking-[0.5em] opacity-30 font-mono block mb-10 lg:mb-8">
            {t.hero.portfolioCollection}
          </span>
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] font-display font-black uppercase tracking-tighter mb-16 md:mb-16">
            Yeonsik<br/>Choi
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            <div className="flex items-center gap-4 text-base md:text-xl font-medium max-w-sm leading-tight text-black/80 font-mono">
              <button
                onClick={() => setLanguage('ko')}
                className={`transition-all duration-300 hover:opacity-100 hover:scale-105 ${
                  language === 'ko'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'opacity-40 text-black/60 font-normal'
                }`}
                title="한국어"
              >
                KOR
              </button>
              <span className="opacity-20">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all duration-300 hover:opacity-100 hover:scale-105 ${
                  language === 'en'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'opacity-40 text-black/60 font-normal'
                }`}
                title="English"
              >
                ENG
              </button>
              <span className="opacity-20">/</span>
              <button
                onClick={() => setLanguage('ja')}
                className={`transition-all duration-300 hover:opacity-100 hover:scale-105 ${
                  language === 'ja'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'opacity-40 text-black/60 font-normal'
                }`}
                title="日本語"
              >
                JP
              </button>
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('demoreel');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-4 md:gap-4 group cursor-pointer w-fit"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 shrink-0">
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                {t.hero.scrollToWork}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

