
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
      <Palette className="w-6 h-6" />,
      <ShoppingCart className="w-6 h-6" />,
      <CreditCard className="w-6 h-6" />,
      <Package className="w-6 h-6" />,
      <BarChart2 className="w-6 h-6" />,
      <MessageCircle className="w-6 h-6" />
    ][i]
  }));

  return (
    <section id="features" className="py-40 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <Sparkles className={`w-4 h-4 text-clay ${isAr ? 'rotate-180' : ''}`} />
            <span className="text-clay text-[11px] font-bold uppercase tracking-[0.4em]">{t.services.label}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-8 text-ink leading-tight"
          >
            {t.services.title1} <br /><span className="font-serif italic text-accent font-normal">{t.services.title2}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-ink/40 leading-relaxed font-medium max-w-2xl"
          >
            {t.services.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -10 }}
              className="p-12 bg-white rounded-[2.5rem] border border-border/40 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700"
            >
              <motion.div 
                whileHover={{ rotate: isAr ? -8 : 8, scale: 1.1 }}
                className="w-16 h-16 rounded-3xl bg-surface flex items-center justify-center mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-ink group-hover:text-accent transition-colors duration-500">{f.title}</h3>
              <p className="text-ink/40 leading-relaxed group-hover:text-ink/60 transition-colors duration-500 font-medium">
                {f.desc}
              </p>
              
              <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                <Sparkles className="w-5 h-5 text-accent/10" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-28 text-center"
        >
          <p className="text-ink/40 font-bold uppercase text-[11px] tracking-[0.2em] mb-8">{t.services.actionLabel}</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(58, 77, 57, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-5 border-[2.5px] border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-500"
          >
            {t.services.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
