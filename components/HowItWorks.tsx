
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section id="how-it-works" className="py-20 lg:py-40 bg-canvas relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-40 items-start">

          <div className="w-full lg:w-2/5 lg:sticky lg:top-44 h-fit z-10 text-center lg:text-left rtl:lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10 lg:mb-14"
            >
              <span className="text-clay text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] mb-4 lg:mb-6 block">{t.howItWorks.label}</span>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tight leading-[0.95] text-ink">
                {isAr ? (
                  <>
                    كيف <br />
                    <span className="text-accent relative inline-block py-2">
                      نعمل.
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute right-0 -bottom-1 h-[2px] lg:h-[2.5px] bg-clay/20"
                      ></motion.span>
                    </span>
                  </>
                ) : (
                  <>
                    How it <br />
                    <span className="text-accent relative inline-block py-2">
                      works.
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute left-0 -bottom-1 h-[2px] lg:h-[2.5px] bg-clay/20"
                      ></motion.span>
                    </span>
                  </>
                )}
              </h2>
              <p className="text-ink/40 text-base lg:text-xl leading-relaxed mt-6 lg:mt-12 max-w-sm font-normal mx-auto lg:mx-0">
                {t.howItWorks.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-12 bg-white rounded-[2rem] lg:rounded-[3rem] border border-border soft-shadow hidden lg:block"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/50 mb-3">{t.howItWorks.soundGood}</p>
              <h3 className="text-2xl font-black text-ink mb-8 transition-colors duration-500 group-hover:text-accent">{t.howItWorks.makeItHappen}</h3>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-accent text-white font-black rounded-full transition-all duration-500 shadow-xl shadow-accent/10 hover:shadow-accent/30"
              >
                {t.howItWorks.cta}
              </motion.button>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/5 space-y-6 lg:space-y-12 relative">
            {t.howItWorks.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: idx * 0.15 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-10 p-8 lg:p-12 rounded-[2rem] lg:rounded-[3.5rem] bg-white border border-border/40 soft-shadow text-center sm:text-left rtl:sm:text-right"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-surface border border-border/50 flex items-center justify-center text-2xl lg:text-4xl font-black text-clay shadow-sm">
                    {isAr ? `٠${idx + 1}` : `0${idx + 1}`}
                  </div>
                </div>
                <div className="sm:pt-2 lg:pt-4">
                  <h3 className="text-xl lg:text-3xl font-black mb-3 lg:mb-5 tracking-tight text-ink">{step.title}</h3>
                  <p className="text-ink/40 text-sm lg:text-xl leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="lg:hidden pt-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent text-white font-black text-sm rounded-full shadow-xl"
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
