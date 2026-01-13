
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, ShoppingCart, CreditCard, Package, BarChart2, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const features = t.services.items.map((f, i) => ({
    ...f,
    icon: [
      <Palette className="w-5 h-5 lg:w-6 lg:h-6" />,
      <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />,
      <CreditCard className="w-5 h-5 lg:w-6 lg:h-6" />,
      <Package className="w-5 h-5 lg:w-6 lg:h-6" />,
      <BarChart2 className="w-5 h-5 lg:w-6 lg:h-6" />,
      <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
    ][i]
  }));

  return (
    <section id="features" className="py-20 lg:py-40 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:mb-6"
          >
            <Sparkles className={`w-3.5 h-3.5 text-clay ${isAr ? 'rotate-180' : ''}`} />
            <span className="text-clay text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em]">{t.services.label}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl md:text-6xl font-black mb-6 lg:mb-8 text-ink leading-tight text-center lg:text-left rtl:lg:text-right"
          >
            {t.services.title1} <br /><span className="text-accent opacity-90">{t.services.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base lg:text-xl text-ink/40 leading-relaxed font-normal max-w-2xl text-center lg:text-left rtl:lg:text-right mx-auto lg:mx-0"
          >
            {t.services.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="p-6 lg:p-8 bg-white rounded-[1.5rem] lg:rounded-[2rem] border border-border/40 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-surface flex items-center justify-center mb-5 lg:mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-black mb-2 lg:mb-3 tracking-tight text-ink group-hover:text-accent transition-colors duration-500">{f.title}</h3>
              <p className="text-xs lg:text-sm text-ink/40 leading-relaxed group-hover:text-ink/60 transition-colors duration-500 font-normal">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 lg:mt-28 text-center"
        >
          <p className="text-ink/40 font-black uppercase text-[10px] lg:text-[11px] tracking-[0.2em] mb-6 lg:mb-8">{t.services.actionLabel}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 lg:px-10 py-3.5 lg:py-4 border-[2px] border-accent text-accent font-black rounded-full hover:bg-accent hover:text-white transition-all duration-500 text-sm lg:text-base"
          >
            {t.services.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
