
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-32 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
      <div className="space-y-6">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter">youn_sic</h2>
        <p className="text-base md:text-lg opacity-50 font-mono">3D animator / 3D layout artist</p>
      </div>
      <div className="flex flex-col items-start lg:items-end gap-4 uppercase font-mono w-full lg:w-auto">
        <a href="mailto:cys010913@gmail.com" className="text-lg md:text-xl lg:text-2xl border-b border-white/20 pb-2 hover:border-white transition-all break-all md:break-normal">cys010913@gmail.com</a>
        <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] tracking-widest pt-4 opacity-50">
          <a href="https://www.instagram.com/youn_sic/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="https://www.youtube.com/@yeon.illust" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Youtube</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[9px] font-mono opacity-20 tracking-widest uppercase">
      <span>©2024 BY YOUN_SIC. ALL RIGHTS RESERVED.</span>
      <span>KOR / ENG / JP</span>
    </div>
  </footer>
);
