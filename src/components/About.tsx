import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/50 z-0 hidden lg:block"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative h-[600px] md:h-[800px] flex items-center justify-center">
            <motion.div style={{ y: y1 }} className="absolute left-0 w-[70%] aspect-[3/4] z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Movement in style"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute right-0 top-[15%] w-[55%] aspect-[4/5] z-0 opacity-50">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Fitness confidence"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-beige-300 tracking-[0.3em] text-xs font-medium uppercase mb-6"
            >
              Our Philosophy
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl text-beige-100 mb-10 tracking-tighter leading-[1.1]"
            >
              Movement with <br />
              <span className="italic text-beige-300 font-light">Confidence</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 text-beige-200 font-light text-lg leading-relaxed relative pl-6"
            >
              <div className="absolute left-0 top-2 w-px h-[90%] bg-gradient-to-b from-beige-800 to-transparent"></div>
              <p>
                DIDA SPORTS WEAR offers premium women's sportswear designed specifically for elegant movement, unwavering comfort, and everyday performance.
              </p>
              <p>
                We believe that activewear should empower you. Whether you are running miles, flowing through a yoga sequence, or simply navigating your busy day, our apparel is crafted to make you feel confident and perform at your highest level.
              </p>
              <p className="text-beige-300 font-serif italic text-2xl pt-6 leading-snug">
                "Located in the heart of Zagazig, bringing high-end, stylish athletic fashion directly to you."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
