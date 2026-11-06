
import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { ProjectItem } from '../types';
import { getImageUrl, isDriveVideo } from '../lib/drive';
import { VideoPlayer } from './VideoPlayer';

import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  id: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
  onImageClick?: (item: ProjectItem) => void;
  onLinkClick?: (url: string) => boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ id, title, subtitle, items, onImageClick, onLinkClick }) => {
  return (
    <section id={id} className="py-8 md:py-10 px-6 border-b border-black/[0.03] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 md:gap-y-32">
          {items.map((item, idx) => {
            const isArtSection = id === 'art';
            const videoMode = !isArtSection && isDriveVideo(item.image);
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div 
                   className={`aspect-video bg-black/[0.03] mb-6 md:mb-8 overflow-hidden relative border border-black/[0.05] group/media ${!videoMode ? 'cursor-zoom-in' : ''}`}
                  onClick={() => {
                    if (!videoMode) {
                      onImageClick?.(item);
                    }
                  }}
                >
                  {videoMode ? (
                      <VideoPlayer url={item.image} title={item.title} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/[0.01]">
                      <img 
                        src={getImageUrl(item.image)} 
                        alt={item.title} 
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono opacity-20">PROJECT_{idx+1}</span>
                    <div className="h-px w-8 bg-black/10"></div>
                    <div className="flex gap-2">
                       {item.tags?.map((tag: string, i: number) => (
                        <span key={i} className="text-[9px] font-bold tracking-widest uppercase opacity-40 px-2 py-0.5 border border-black/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide">{item.title}</h4>
                    {item.link && (
                      <a 
                        href={item.link.url}
                        target={item.link.url.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (onLinkClick?.(item.link!.url)) {
                            e.preventDefault();
                          }
                        }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-black/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:scale-95 transition-all w-fit group mt-2"
                      >
                        {item.link.text}
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-sm text-black/60 leading-relaxed max-w-md break-keep">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
