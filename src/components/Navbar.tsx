
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavName = (id: string, defaultName: string) => {
    switch (id) {
      case 'featured-reel': return t.nav.featuredReel;
      case 'profile': return t.nav.profile;
      case 'demoreel': return t.nav.motion;
      case 'scripting': return t.nav.tool;
      case 'technical': return t.nav.engine;
      case 'art': return t.nav.art;
      default: return defaultName;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-xl py-3 border-b border-black/[0.05]' : 'bg-white/50 backdrop-blur-md md:bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[18px] sm:text-xl uppercase font-bold tracking-[0.3em] font-mono mr-4"
        >
          youn_sic
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 overflow-x-auto no-scrollbar scroll-smooth px-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="text-[13px] tracking-widest font-bold opacity-40 hover:opacity-100 hover:tracking-tight transition-all duration-300 whitespace-nowrap py-1"
            >
              {getNavName(item.id, item.name)}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-2">
              {NAV_ITEMS.map((item) => (
                <a 
                   key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base sm:text-lg uppercase font-bold tracking-[0.4em] py-6 border-b border-black/[0.03] text-black/60 hover:text-black transition-colors"
                >
                  {getNavName(item.id, item.name)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

