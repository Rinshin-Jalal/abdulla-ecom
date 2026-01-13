
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
        className="w-full py-6 lg:py-10 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-lg lg:text-2xl font-black ${isAr ? 'pl-4 lg:pl-12' : 'pr-4 lg:pr-12'} transition-colors duration-500 text-ink group-hover:text-accent tracking-tight leading-snug`}>{question}</span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? 'var(--accent)' : 'var(--surface)',
            color: isOpen ? '#FFFFFF' : 'var(--ink)'
          }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm"
        >
          <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 lg:pb-10 text-ink/40 text-sm lg:text-xl leading-relaxed max-w-4xl font-normal">
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
    <section className="py-20 lg:py-40 bg-surface/20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-10 lg:mb-20 text-center lg:text-left rtl:lg:text-right"
          >
            <span className="text-clay text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] mb-3 lg:mb-4 block">{t.faq.label}</span>
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight text-ink">{t.faq.title}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="bg-white p-6 md:p-14 rounded-[2rem] lg:rounded-[3.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-border/50"
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
