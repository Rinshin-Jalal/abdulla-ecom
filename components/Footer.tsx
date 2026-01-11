
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-canvas text-ink pt-32 pb-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-serif italic text-sm">V</div>
               <span className="text-2xl font-bold tracking-tight">Vite</span>
            </div>
            <p className="text-ink/50 text-lg leading-relaxed max-w-sm mb-12">
              {t.footer.desc}
            </p>
          </div>

          <div className="lg:ps-20">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8 text-ink/30">{t.footer.company}</h4>
            <ul className="space-y-5 text-sm font-bold">
              {t.footer.links.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8 text-ink/30">{t.footer.location}</h4>
             <p className="text-xl font-bold text-ink">brand@vitecol.xyz</p>
             <p className="text-ink/40 font-medium italic">Riyadh, Saudi Arabia</p>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold uppercase tracking-[0.3em] text-ink/20">
          <p>{t.footer.rights}</p>
          <div className="flex gap-10">
             {t.footer.legal.map((link, i) => (
               <a key={i} href="#" className="hover:text-ink transition-colors">{link}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
