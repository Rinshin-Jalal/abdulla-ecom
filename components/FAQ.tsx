
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <div className="border-b border-border/60 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-2xl font-bold ${isAr ? 'pl-12' : 'pr-12'} transition-colors duration-500 text-ink group-hover:text-accent tracking-tight`}>{question}</span>
        <motion.div 
          animate={{ 
            rotate: isOpen ? 180 : 0, 
            backgroundColor: isOpen ? 'var(--accent)' : 'var(--surface)',
            color: isOpen ? '#FFFFFF' : '#1C1C1C50'
          }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-colors shadow-sm"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-10 text-ink/40 text-xl leading-relaxed max-w-4xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-40 bg-surface/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 text-center lg:text-left rtl:lg:text-right"
          >
            <span className="text-clay text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">{t.faq.label}</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink">{t.faq.title}</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-border/50 hover:shadow-2xl transition-shadow duration-1000"
          >
            {t.faq.items.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
