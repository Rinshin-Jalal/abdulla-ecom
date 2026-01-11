
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const CTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="py-20 lg:py-40 bg-canvas px-4 lg:px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="container mx-auto bg-white text-ink rounded-[2.5rem] lg:rounded-[4.5rem] p-8 lg:p-28 text-center relative overflow-hidden border border-border/60 shadow-[0_4px_40px_rgba(0,0,0,0.02)]"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-accent rounded-full ${isAr ? '-ml-20 lg:-ml-40' : '-mr-20 lg:-mr-40'} -mt-20 lg:-mt-40 blur-[80px] lg:blur-[120px] pointer-events-none`}
        ></motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-clay text-[9px] lg:text-[11px] font-black uppercase tracking-[0.6em] mb-8 lg:mb-12"
          >
            {t.cta.label}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-3xl lg:text-8xl font-black tracking-tight mb-8 lg:mb-12 leading-[1.1] text-ink`}
          >
            {t.cta.title1} <br /><span className="text-accent">{t.cta.title2}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-ink/40 text-base lg:text-2xl font-normal mb-12 lg:mb-20 max-w-2xl mx-auto leading-relaxed"
          >
            {t.cta.desc}
          </motion.p>
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 50px -12px rgba(58, 77, 57, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-auto px-10 lg:px-16 py-5 lg:py-7 bg-accent text-white font-black rounded-full shadow-2xl shadow-accent/10 transition-all duration-500 text-base lg:text-lg"
            >
              {t.cta.btn}
            </motion.button>
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-4">
              {t.cta.perks.map((label, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: isAr ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex items-center gap-2 lg:gap-3 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-ink/30"
                >
                   <div className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-clay' : 'bg-accent'} rounded-full`} />
                   {label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
