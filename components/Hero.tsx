
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 text-accent mb-8 px-4 py-1.5 bg-accent/5 rounded-full border border-accent/10"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-widest">{t.hero.badge}</span>
            </motion.div>
            
            <motion.h1
              variants={item}
              className={`text-huge mb-8 text-ink leading-[1.05] ${isAr ? 'text-6xl lg:text-8xl' : ''}`}
            >
              {isAr ? (
                <>
                  <span className="text-clay">{t.hero.title}</span> <br />
                  {lang === 'ar' ? 'الخاص' : ''}
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
              className="text-xl md:text-2xl text-ink/60 mb-10 max-w-xl leading-relaxed font-normal"
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-accent text-white font-black text-sm rounded-full shadow-xl shadow-accent/10 hover:shadow-accent/30 transition-all flex items-center justify-center gap-3"
              >
                {t.hero.cta} <ArrowRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
              </motion.button>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-ink/30 uppercase tracking-[0.2em]">{t.hero.liveAt}</span>
                <span className="text-lg font-bold text-accent opacity-80 italic">yourstore.vite.me</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="bg-white rounded-[2.5rem] overflow-hidden soft-shadow border border-border/60 group/mockup"
            >
              <div className="p-6 bg-white flex items-center justify-between border-b border-border/50">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-clay rounded-full"
                  ></motion.div>
                  <span className="text-sm font-black tracking-tight uppercase opacity-70">C COZY HOME</span>
                </div>
                <div className="flex gap-4">
                   <motion.div 
                    whileHover={{ scale: 1.1, rotate: isAr ? 8 : -8 }}
                    className="w-8 h-8 rounded-full bg-surface flex items-center justify-center cursor-pointer"
                   >
                     <ShoppingBag className="w-3.5 h-3.5 text-accent" />
                   </motion.div>
                </div>
              </div>
              
              <div className="p-6 space-y-6 bg-surface/30">
                 <div className="relative h-60 rounded-2xl overflow-hidden group/img">
                   <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/img:scale-110" alt="Furniture" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                     <span className="text-[10px] font-black text-white/80 uppercase tracking-widest mb-1">✨ {t.hero.newCollection}</span>
                     <h3 className="text-2xl font-black text-white mb-2">{t.hero.comfortAwaits}</h3>
                     <p className="text-white/70 text-xs mb-5 font-normal">{lang === 'en' ? 'Discover our handpicked pieces' : 'اكتشف قطعنا المختارة بعناية'}</p>
                     <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white text-black text-[11px] font-black rounded-full w-fit hover:bg-accent hover:text-white transition-colors duration-300 shadow-lg"
                     >
                      {t.hero.shopNow}
                     </motion.button>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 pb-2">
                   {[
                     { id: 1, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400", title: lang === 'en' ? "Cloud Velvet Sofa" : "أريكة سحاب مخملية", price: isAr ? "١,٢٩٩ ر.س" : "﷼1,299", oldPrice: isAr ? "١,٦٩٩ ر.س" : "﷼1,699", badge: t.hero.bestseller },
                     { id: 2, img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400", title: lang === 'en' ? "Cozy Reading Chair" : "كرسي القراءة المريح", price: isAr ? "٥٤٩ ر.س" : "﷼549", oldPrice: null, badge: null }
                   ].map((product) => (
                    <motion.div 
                      key={product.id}
                      whileHover={{ y: -6 }}
                      className="bg-white p-3.5 rounded-2xl shadow-sm border border-border/40 transition-all duration-500 hover:shadow-xl group/card"
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                          <img src={product.img} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                          {product.badge && (
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1, type: "spring" }}
                              className={`absolute top-2 ${isAr ? 'left-2' : 'right-2'} bg-accent text-white text-[8px] px-2.5 py-1 rounded-full font-black shadow-lg`}
                            >
                              {product.badge}
                            </motion.span>
                          )}
                      </div>
                      <h4 className="text-[11px] font-black uppercase mb-1 opacity-80">{product.title}</h4>
                      <p className="text-accent font-black text-sm">
                        {product.price} {product.oldPrice && <span className="text-ink/30 line-through text-[10px] font-normal mx-1">{product.oldPrice}</span>}
                      </p>
                    </motion.div>
                   ))}
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: isAr ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -top-8 ${isAr ? '-left-8' : '-right-8'} z-20`}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-5 rounded-3xl soft-shadow border border-border/50 flex items-center gap-4 hover:shadow-2xl transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-ink/30 uppercase tracking-widest mb-0.5">{t.hero.salesToday}</p>
                  <p className="text-xl font-black text-ink tracking-tight">{isAr ? '+٤٧٪' : '+47%'}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ x: isAr ? 20 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -bottom-10 ${isAr ? '-right-6' : '-left-6'} z-20`}
            >
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                className="bg-white p-5 rounded-3xl soft-shadow border border-border/50 flex items-center gap-4 hover:shadow-2xl transition-all duration-500 cursor-default"
              >
                <div className={`flex ${isAr ? 'flex-row-reverse -space-x-reverse' : '-space-x-3'}`}>
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-surface overflow-hidden transition-all duration-300 hover:scale-125 hover:z-10 hover:shadow-lg">
                       <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" />
                     </div>
                   ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-clay fill-clay" />)}
                  </div>
                  <p className="text-[11px] font-bold text-ink/30">{t.hero.rating}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
