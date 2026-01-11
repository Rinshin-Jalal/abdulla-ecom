
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const CTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="py-40 bg-canvas px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="container mx-auto bg-white text-ink rounded-[4.5rem] p-16 lg:p-28 text-center relative overflow-hidden border border-border/60 shadow-[0_4px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_60px_100px_rgba(0,0,0,0.08)] transition-all duration-1000"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} w-[500px] h-[500px] bg-accent rounded-full ${isAr ? '-ml-40' : '-mr-40'} -mt-40 blur-[120px] pointer-events-none`}
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.12, 0.03],
            x: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute bottom-0 ${isAr ? 'right-0' : 'left-0'} w-[500px] h-[500px] bg-clay rounded-full ${isAr ? '-mr-40' : '-ml-40'} -mb-40 blur-[120px] pointer-events-none`}
        ></motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-clay text-[11px] font-bold uppercase tracking-[0.7em] mb-12"
          >
            {t.cta.label}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-8xl font-bold tracking-tight mb-12 leading-[1.1] text-ink ${isAr ? 'font-sans' : ''}`}
          >
            {t.cta.title1} <br /><span className="font-serif italic font-normal text-accent">{t.cta.title2}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-ink/40 text-xl md:text-2xl font-medium mb-20 max-w-2xl mx-auto leading-relaxed"
          >
            {t.cta.desc}
          </motion.p>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 50px -12px rgba(58, 77, 57, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-7 bg-accent text-white font-bold rounded-full shadow-2xl shadow-accent/10 transition-all duration-500 text-lg"
            >
              {t.cta.btn}
            </motion.button>
            <div className="flex flex-col items-start gap-4">
              {t.cta.perks.map((label, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-ink/30"
                >
                   <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-clay' : 'bg-accent'} rounded-full`}
                   ></motion.div> {label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
