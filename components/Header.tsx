
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]' : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 flex items-center justify-between">
        <motion.div 
          whileHover={{ x: lang === 'en' ? 4 : -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-2 lg:gap-3 group cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-xl"
          >
            V
          </motion.div>
          <span className="text-xl lg:text-2xl font-black tracking-tight text-ink">Vite</span>
        </motion.div>
        
        <nav className="hidden lg:flex items-center gap-10">
          <motion.a 
            href="#features" 
            className="link-underline text-[13px] font-bold text-ink/40 hover:text-ink transition-colors duration-300"
          >
            {t.nav.features}
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="link-underline text-[13px] font-bold text-ink/40 hover:text-ink transition-colors duration-300"
          >
            {t.nav.howItWorks}
          </motion.a>
          <motion.a 
            href="#" 
            className="link-underline text-[13px] font-bold text-ink/40 hover:text-ink transition-colors duration-300"
          >
            {t.nav.testimonials}
          </motion.a>
        </nav>

        <div className="flex items-center gap-3 lg:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-ink/40 hover:text-accent transition-colors py-2"
          >
            <Globe className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 lg:px-8 py-2 lg:py-3 bg-accent text-white text-[11px] lg:text-[13px] font-black rounded-full shadow-lg shadow-accent/10 hover:shadow-accent/30 transition-all duration-300"
          >
            {t.buttons.getStarted}
          </motion.button>
        </div>
      </div>
    </header>
  );
};
