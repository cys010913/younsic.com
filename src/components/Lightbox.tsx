
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { getImageUrl } from '../lib/drive';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
  item: ProjectItem;
  gallery: ProjectItem[];
  isScrollMode?: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, gallery, isScrollMode, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isScrollMode) {
        if (e.key === 'ArrowLeft') onPrev?.();
        if (e.key === 'ArrowRight') onNext?.();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, onClose, isScrollMode]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-6 z-[110]">
        {!isScrollMode && (
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 hidden md:block">
            Navigate with [←] [→] or [ESC]
          </div>
        )}
        {isScrollMode && (
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 hidden md:block">
            Scroll to view / Close with [ESC]
          </div>
        )}
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
        >
          <X size={24} />
        </button>
      </div>

      {!isScrollMode && onPrev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all backdrop-blur-sm z-50 group border border-white/5"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {!isScrollMode && onNext && (
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all backdrop-blur-sm z-50 group border border-white/5"
        >
          <ChevronRight size={32} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
      
      <div 
        className={`w-full h-full overflow-y-auto overflow-x-hidden ${isScrollMode ? 'py-12 md:py-24' : 'flex items-center justify-center p-4 md:p-20'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isScrollMode ? (
          <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-24 px-6">
            {gallery.map((gItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <img 
                  src={getImageUrl(gItem.image, 2000)} 
                  alt={gItem.title} 
                  className="w-full h-auto object-contain select-none shadow-2xl" 
                  referrerPolicy="no-referrer"
                />
                <div className="text-white border-l border-white/10 pl-6">
                  <h4 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-2">{gItem.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {gItem.tags?.map((tag: string, i: number) => (
                      <span key={i} className="text-[9px] font-bold tracking-widest uppercase text-white/40">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            key={item.image}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src={getImageUrl(item.image, 2000)} 
              alt={item.title} 
              className="max-w-full max-h-full object-contain select-none shadow-2xl" 
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white pointer-events-none">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag: string, i: number) => (
                      <span key={i} className="text-[9px] font-bold tracking-widest uppercase text-white/40 px-2 py-1 border border-white/10 rounded-sm">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
