
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedReel } from './components/FeaturedReel';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Lightbox } from './components/Lightbox';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './constants';
import { ProjectItem } from './types';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

function PortfolioApp() {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<{item: ProjectItem, gallery: ProjectItem[], isScrollMode?: boolean} | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = selectedItem.gallery.findIndex(i => i.image === selectedItem.item.image);
    const prevIndex = (currentIndex - 1 + selectedItem.gallery.length) % selectedItem.gallery.length;
    setSelectedItem({ item: selectedItem.gallery[prevIndex], gallery: selectedItem.gallery });
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = selectedItem.gallery.findIndex(i => i.image === selectedItem.item.image);
    const nextIndex = (currentIndex + 1) % selectedItem.gallery.length;
    setSelectedItem({ item: selectedItem.gallery[nextIndex], gallery: selectedItem.gallery });
  };

  const handleLinkClick = (url: string) => {
    if (url.startsWith('#')) {
      const sectionId = url.substring(1);
      const section = PROJECTS_DATA[sectionId as keyof typeof PROJECTS_DATA];
      if (section && (sectionId === 'art' || sectionId === 'storyboard')) {
        const transSection = t.projects[sectionId as keyof typeof t.projects];
        const translatedItems = section.items.map((item, idx) => ({
          ...item,
          title: transSection?.items[idx]?.title || item.title,
          desc: (transSection as any)?.items[idx]?.desc || item.desc
        }));

        setSelectedItem({ 
          item: translatedItems[0], 
          gallery: translatedItems,
          isScrollMode: sectionId === 'storyboard'
        });
        return true; // handled
      }
    }
    return false; // not handled
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#F9F9F7] flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs uppercase tracking-[0.5em] font-bold"
        >
          Loading
        </motion.div>
      </div>
    );
  }

  // Multi-language data mapping
  const projectsToRender = [
    { id: 'demoreel', trans: t.projects.demoreel, orig: PROJECTS_DATA.demoreel },
    { id: 'scripting', trans: t.projects.scripting, orig: PROJECTS_DATA.scripting },
    { id: 'technical', trans: t.projects.technical, orig: PROJECTS_DATA.technical },
    { id: 'art', trans: t.projects.art, orig: PROJECTS_DATA.art },
  ];

  return (
    <div className="relative selection:bg-black selection:text-white bg-[#F9F9F7] overflow-x-hidden">
      <Navbar />
      
      <main>
        <FeaturedReel />
        <Hero />
        <Profile />
        
        {projectsToRender.map(({ id, trans, orig }) => {
          const transItems = orig.items.map((item, idx) => ({
            ...item,
            title: trans.items[idx]?.title || item.title,
            desc: (trans as any).items[idx]?.desc || ('desc' in item ? (item as any).desc : undefined)
          }));

          return (
            <Projects 
              key={id}
              id={id}
              title={trans.title}
              subtitle={trans.subtitle}
              onImageClick={(item) => setSelectedItem({ item, gallery: transItems })}
              onLinkClick={handleLinkClick}
              items={transItems}
            />
          );
        })}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem.item} 
            gallery={selectedItem.gallery}
            isScrollMode={selectedItem.isScrollMode}
            onClose={() => setSelectedItem(null)} 
            onPrev={!selectedItem.isScrollMode && selectedItem.gallery.length > 1 ? handlePrev : undefined}
            onNext={!selectedItem.isScrollMode && selectedItem.gallery.length > 1 ? handleNext : undefined}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}

