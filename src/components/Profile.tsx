
import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { useLanguage } from './LanguageContext';

export const Profile: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="profile" className="py-8 md:py-10 lg:py-16 px-6 border-b border-black/[0.05] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.profile.title} subtitle={t.profile.subtitle} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:h-full">
            <div className="lg:h-full lg:flex lg:flex-col lg:justify-between space-y-12 lg:space-y-0">
              <div className="space-y-10 lg:space-y-12">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-8 gap-y-2">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase"
                  >
                    {t.profile.name}
                  </motion.h3>
                  <p className="text-[10px] sm:text-xs font-mono font-bold opacity-30 tracking-[0.2em]">{t.profile.birth}</p>
                </div>
                
                <div className="space-y-8 lg:space-y-10">
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-widest font-bold opacity-20 font-mono">{t.profile.education}</p>
                    <p className="text-xl lg:text-2xl font-medium text-black/90 break-keep leading-tight lg:leading-snug whitespace-pre-line">
                      {t.profile.educationDetail}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-widest font-bold opacity-20 font-mono">{t.profile.grades}</p>
                    <p className="text-sm lg:text-base font-bold text-black/40 font-mono italic">
                      GPA 3.79 / 4.0
                    </p>
                  </div>
                </div>
 
                <div className="inline-flex flex-col gap-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-20 font-mono mb-1">{t.profile.currentRole}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase italic">3D animator</span>
                    <span className="px-3 py-1.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase italic">3D layout artist</span>
                  </div>
                </div>
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:contents gap-x-8 gap-y-8 pt-8 lg:pt-0 border-t border-black/10 lg:border-t-0">
                <div className="space-y-3 lg:space-y-4 lg:border-t lg:border-black/10 lg:pt-8 lg:w-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-30 font-mono">{t.profile.tools}</p>
                  <ul className="text-sm sm:text-base lg:text-lg font-medium text-black/90 font-mono grid grid-cols-2 gap-y-3 lg:gap-y-4 gap-x-4 uppercase italic leading-normal">
                    <li>maya</li>
                    <li>3ds max</li>
                    <li>unreal engine</li>
                    <li>photoshop</li>
                    <li>illustrator</li>
                    <li>premiere pro</li>
                    <li>clip studio</li>
                    <li>davinci resolve</li>
                  </ul>
                </div>
                <div className="space-y-3 lg:space-y-4 lg:border-t lg:border-black/10 lg:pt-8 lg:w-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-30 font-mono">{t.profile.language}</p>
                  <ul className="text-sm sm:text-base lg:text-lg font-medium text-black/70 font-mono italic space-y-3 lg:space-y-4 leading-normal">
                    <li className="flex justify-between items-baseline sm:block">
                      <span>JLPT N1 150</span>
                      <span className="not-italic font-bold opacity-40 text-[10px] sm:text-xs ml-2">2024.01</span>
                    </li>
                    <li className="flex justify-between items-baseline sm:block">
                      <span>JPT 805</span>
                      <span className="not-italic font-bold opacity-40 text-[10px] sm:text-xs ml-2">2023.07</span>
                    </li>
                    <li className="flex justify-between items-baseline sm:block">
                      <span>TOEIC 755</span>
                      <span className="not-italic font-bold opacity-40 text-[10px] sm:text-xs ml-2">2023.07</span>
                    </li>
                  </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 space-y-4 pt-8 border-t border-black/10 sm:border-t-0 lg:border-t lg:pt-8 lg:w-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-30 font-mono">{t.profile.contactInfo}</p>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-black/90 font-mono border-b border-black/10 pb-1 w-fit">
                      cys010913@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 font-mono">{t.profile.experience}</p>
                <div className="h-px flex-1 bg-black/[0.08] ml-6"></div>
              </div>
              <div className="divide-y divide-black/[0.08]">
                {t.experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group py-4 lg:py-5 flex flex-col md:flex-row md:items-baseline justify-between items-start transition-all hover:bg-black/[0.01] px-4 -mx-4 gap-3 lg:gap-4"
                  >
                    <span className="text-base md:text-xl font-display font-medium uppercase break-keep transition-all group-hover:translate-x-2 leading-tight max-w-2xl">
                      {exp.company}
                    </span>
                    <span className="text-[10px] font-mono font-bold opacity-30 whitespace-nowrap mt-2 md:mt-0 tracking-[0.2em]">
                      // {exp.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 font-mono">{t.profile.awards}</p>
                <div className="h-px flex-1 bg-black/[0.08] ml-6"></div>
              </div>
              <div className="divide-y divide-black/[0.08]">
                {t.awards.map((award, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group py-4 lg:py-5 flex flex-col md:flex-row md:items-baseline justify-between items-start transition-all hover:bg-black/[0.01] px-4 -mx-4 gap-3 lg:gap-4"
                  >
                    <div className="flex flex-col gap-1 max-w-2xl">
                      <span className="text-base md:text-xl font-display font-medium uppercase break-keep transition-all group-hover:translate-x-2 leading-tight">
                        {award.title}
                      </span>
                      <span className="text-xs text-black/40 break-keep font-display font-bold transition-all group-hover:translate-x-2">
                        {award.event}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold opacity-30 whitespace-nowrap mt-2 md:mt-0 tracking-[0.2em]">
                      // {award.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 font-mono">{t.profile.certification}</p>
                <div className="h-px flex-1 bg-black/[0.08] ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-6">
                {t.certifications.map((cert, i) => (
                  <div key={i} className="group border-l border-black/10 pl-6 hover:border-black transition-colors py-2">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <p className="text-base font-bold text-black/80 leading-snug break-keep group-hover:text-black transition-colors">
                        {cert.title}
                      </p>
                      {cert.date && (
                        <span className="text-[10px] font-mono font-bold opacity-30 whitespace-nowrap mt-1">
                          {cert.date}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 font-mono italic">{cert.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

