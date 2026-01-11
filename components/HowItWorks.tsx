
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section id="how-it-works" className="py-40 bg-canvas relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-start">
          
          <div className="lg:w-2/5 lg:sticky lg:top-44 h-fit z-10">
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <span className="text-clay text-[11px] font-bold uppercase tracking-[0.5em] mb-6 block">{t.howItWorks.label}</span>
              <h2 className={`text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-ink ${isAr ? 'font-sans' : ''}`}>
                {isAr ? (
                  <>
                    كيف <br />
                    <span className="font-serif italic font-normal text-accent relative inline-block py-2">
                      نعمل.
                      <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute right-0 -bottom-1 h-[2.5px] bg-clay/20"
                      ></motion.span>
                    </span>
                  </>
                ) : (
                  <>
                    How it <br />
                    <span className="font-serif italic font-normal text-accent relative inline-block py-2">
                      works.
                      <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute left-0 -bottom-1 h-[2.5px] bg-clay/20"
                      ></motion.span>
                    </span>
                  </>
                )}
              </h2>
              <p className="text-ink/40 text-xl leading-relaxed mt-12 max-w-sm font-medium">
                {t.howItWorks.desc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-12 bg-white rounded-[3rem] border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] hidden lg:block hover:shadow-2xl transition-all duration-700 group"
            >
               <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent/50 mb-3">{t.howItWorks.soundGood}</p>
               <h3 className="text-2xl font-bold text-ink mb-8 transition-colors duration-500 group-hover:text-accent">{t.howItWorks.makeItHappen}</h3>
               <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-accent text-white font-bold rounded-full transition-all duration-500 shadow-xl shadow-accent/5 hover:shadow-accent/20"
               >
                 {t.howItWorks.cta}
               </motion.button>
            </motion.div>
          </div>

          <div className="lg:w-3/5 space-y-12 relative">
            {t.howItWorks.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: idx * 0.15 }}
                whileHover={{ x: isAr ? -12 : 12 }}
                className="flex flex-col sm:flex-row gap-10 p-12 rounded-[3.5rem] bg-white border border-border/40 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-700 group cursor-default"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-full bg-surface border border-border/50 flex items-center justify-center text-4xl font-serif italic text-clay group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500 shadow-sm"
                  >
                    {isAr ? `٠${idx + 1}` : `0${idx + 1}`}
                  </motion.div>
                </div>
                <div className="pt-4">
                  <h3 className="text-3xl font-bold mb-5 tracking-tight text-ink group-hover:text-accent transition-colors duration-500">{step.title}</h3>
                  <p className="text-ink/40 text-xl leading-relaxed group-hover:text-ink/60 transition-colors duration-500 font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Mobile-only secondary CTA */}
            <div className="lg:hidden pt-8">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-accent text-white font-bold rounded-full shadow-xl"
              >
                {t.howItWorks.mobileCta}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
