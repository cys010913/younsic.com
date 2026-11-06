
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-6 md:mb-10">
    <div className="flex items-center gap-4 mb-4 md:mb-6">
      <div className="h-px w-6 md:w-8 bg-black/20"></div>
      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 font-mono">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter uppercase leading-[0.85] md:leading-none break-keep whitespace-pre-line">{title}</h2>
  </div>
);
