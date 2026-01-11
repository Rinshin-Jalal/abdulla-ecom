
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-canvas text-ink pt-20 pb-10 lg:pt-32 lg:pb-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
               <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">V</div>
               <span className="text-xl lg:text-2xl font-black tracking-tight">Vite</span>
            </div>
            <p className="text-ink/50 text-base lg:text-lg leading-relaxed max-w-sm mb-6 font-normal">
              {t.footer.desc}
            </p>
          </div>

          <div className="text-center lg:text-left rtl:lg:text-right">
            <h4 className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] mb-6 lg:mb-8 text-ink/30">{t.footer.company}</h4>
            <ul className="space-y-4 lg:space-y-5 text-sm font-black">
              {t.footer.links.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left rtl:lg:text-right">
             <h4 className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] mb-6 lg:mb-8 text-ink/30">{t.footer.location}</h4>
             <p className="text-lg lg:text-xl font-black text-ink">brand@vitecol.xyz</p>
             <p className="text-ink/40 font-normal italic">{t.footer.location}</p>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-ink/20 text-center">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6 lg:gap-10">
             {t.footer.legal.map((link, i) => (
               <a key={i} href="#" className="hover:text-ink transition-colors">{link}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
