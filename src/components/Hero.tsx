import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-black pt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Women in sportswear"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          <div className="overflow-hidden mb-6">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-beige-300 tracking-[0.3em] text-xs md:text-sm font-medium uppercase relative"
            >
              <span className="absolute -left-12 top-1/2 w-8 h-px bg-beige-300/50 hidden md:block"></span>
              Zagazig, Egypt
              <span className="absolute -right-12 top-1/2 w-8 h-px bg-beige-300/50 hidden md:block"></span>
            </motion.p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mb-8">
            <h1 className="font-serif text-[15vw] md:text-[10vw] lg:text-[11rem] leading-[0.85] tracking-tighter text-beige-100 text-glow relative z-10 uppercase select-none">
              DIDA<span className="block text-[8vw] md:text-[5vw] lg:text-[6rem] text-beige-300 italic font-light mt-2 transform -translate-y-4 md:-translate-y-8">Sports Wear</span>
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto text-beige-200 text-lg md:text-xl mb-12 font-light leading-relaxed mix-blend-screen"
          >
            Discover our premium collection of women's sportswear, designed for elegant movement, 
            unmatched comfort, and everyday performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <Link 
              to="/products"
              className="group relative w-full sm:w-auto px-10 py-5 bg-beige-100 text-brand-black font-medium tracking-[0.15em] uppercase text-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></div>
              <span className="relative flex items-center justify-center gap-3">
                Explore Collection
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-beige-300/50">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-beige-300/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
