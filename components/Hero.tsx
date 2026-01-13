
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <section className="relative pt-24 pb-12 lg:pt-56 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 text-center lg:text-left rtl:lg:text-right"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 text-accent mb-6 lg:mb-8 px-3 lg:px-4 py-1.5 bg-accent/5 rounded-full border border-accent/10"
            >
              <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={item}
              className={`text-huge mb-6 lg:mb-8 text-ink leading-[1.05]`}
            >
              {isAr ? (
                <>
                  <span className="text-clay">{t.hero.title}</span> <br />
                  الخاص
                </>
              ) : (
                <>
                  Your Own <br />
                  <span className="text-clay">Online Store</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base lg:text-2xl text-ink/60 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 lg:px-10 py-3.5 lg:py-4 bg-accent text-white font-black text-sm rounded-full shadow-lg shadow-accent/10 transition-all flex items-center justify-center gap-3"
              >
                {t.hero.cta} <ArrowRight className={`w-4 h-4 lg:w-4.5 lg:h-4.5 ${isAr ? 'rotate-180' : ''}`} />
              </motion.button>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[9px] lg:text-[10px] font-black text-ink/30 uppercase tracking-[0.2em]">{t.hero.liveAt}</span>
                <span className="text-base lg:text-lg font-bold text-accent opacity-80 italic">yourstore.vite.me</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="bg-white rounded-[1.25rem] lg:rounded-[2rem] overflow-hidden shadow-sm border border-border/60 group/mockup"
            >
              <div className="p-4 lg:p-6 bg-white flex items-center justify-between border-b border-border/50">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 bg-clay rounded-full" />
                  <span className="text-xs lg:text-sm font-black tracking-tight uppercase opacity-70">C COZY HOME</span>
                </div>
                <div className="flex gap-2 lg:gap-4">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-surface flex items-center justify-center cursor-pointer">
                    <ShoppingBag className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent" />
                  </div>
                </div>
              </div>

              <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 bg-surface/30">
                <div className="relative h-40 lg:h-60 rounded-xl lg:rounded-2xl overflow-hidden group/img">
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/img:scale-105" alt="Furniture" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 lg:p-8 flex flex-col justify-end">
                    <span className="text-[8px] lg:text-[10px] font-black text-white/80 uppercase tracking-widest mb-1">✨ {t.hero.newCollection}</span>
                    <h3 className="text-lg lg:text-2xl font-black text-white mb-1 lg:mb-2">{t.hero.comfortAwaits}</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 lg:px-6 py-1.5 lg:py-2.5 bg-white text-black text-[9px] lg:text-[11px] font-black rounded-full w-fit hover:bg-accent hover:text-white transition-all duration-300 shadow-lg mt-2"
                    >
                      {t.hero.shopNow}
                    </motion.button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4 pb-2">
                  {[
                    { id: 1, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400", title: lang === 'en' ? "Cloud Velvet Sofa" : "أريكة سحاب مخملية", price: isAr ? "١,٢٩٩ ر.س" : "﷼1,299", oldPrice: isAr ? "١,٦٩٩ ر.س" : "﷼1,699", badge: t.hero.bestseller },
                    { id: 2, img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400", title: lang === 'en' ? "Cozy Reading Chair" : "كرسي القراءة المريح", price: isAr ? "٥٤٩ ر.س" : "﷼549", oldPrice: null, badge: null }
                  ].map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl shadow-sm border border-border/40 transition-all duration-500 hover:shadow-xl group/card"
                    >
                      <div className="relative aspect-square rounded-lg lg:rounded-xl overflow-hidden mb-2 lg:mb-4">
                        <img src={product.img} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                        {product.badge && (
                          <span className={`absolute top-1 ${isAr ? 'left-1' : 'right-1'} lg:top-2 lg:right-2 bg-accent text-white text-[6px] lg:text-[8px] px-1.5 lg:px-2.5 py-0.5 lg:py-1 rounded-full font-black shadow-lg`}>
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-[9px] lg:text-[11px] font-black uppercase mb-0.5 lg:mb-1 opacity-80 line-clamp-1">{product.title}</h4>
                      <p className="text-accent font-black text-[10px] lg:text-sm">
                        {product.price} {product.oldPrice && <span className="text-ink/30 line-through text-[8px] lg:text-[10px] font-normal mx-1">{product.oldPrice}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Indicators - Scaled down for mobile */}
            <motion.div
              initial={{ x: isAr ? -10 : 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -top-4 ${isAr ? '-left-2' : '-right-2'} lg:-top-8 lg:-right-8 z-20 scale-75 lg:scale-100`}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-3 lg:p-5 rounded-2xl lg:rounded-3xl soft-shadow border border-border/50 flex items-center gap-3 lg:gap-4"
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-accent/10 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[10px] font-black text-ink/30 uppercase tracking-widest mb-0.5">{t.hero.salesToday}</p>
                  <p className="text-base lg:text-xl font-black text-ink tracking-tight">{isAr ? '+٤٧٪' : '+47%'}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: isAr ? 10 : -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -bottom-6 ${isAr ? '-right-2' : '-left-2'} lg:-bottom-10 lg:-left-6 z-20 scale-75 lg:scale-100`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="bg-white p-3 lg:p-5 rounded-2xl lg:rounded-3xl soft-shadow border border-border/50 flex items-center gap-3 lg:gap-4"
              >
                <div className={`flex ${isAr ? 'flex-row-reverse -space-x-reverse' : '-space-x-3'}`}>
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-[2px] lg:border-[3px] border-white bg-surface overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-clay fill-clay" />)}
                  </div>
                  <p className="text-[9px] lg:text-[11px] font-bold text-ink/30">{t.hero.rating}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
