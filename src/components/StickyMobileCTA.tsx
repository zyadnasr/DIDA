import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          exit={{ y: 150 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[999] md:hidden"
        >
          <div className="glass-panel rounded-full p-2 flex items-center shadow-2xl shadow-black/50 border border-white/10">
            <a 
              href="https://wa.me/201067451891"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-beige-100 text-brand-black py-3.5 rounded-full font-medium text-[10px] uppercase tracking-widest shadow-inner"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
            <a 
              href="tel:01067451891"
              className="w-12 h-12 ml-2 flex items-center justify-center border border-white/10 rounded-full text-beige-100 hover:bg-white/5 transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span className="sr-only">Call Store</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
