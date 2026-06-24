import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-2xl shadow-black/50' : 'px-2'
          }`}>
            <Link to="/" className="font-serif text-2xl lg:text-3xl text-beige-100 tracking-widest relative z-50">
              DIDA<span className="text-beige-800">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-xs font-medium text-beige-300 hover:text-beige-100 uppercase tracking-[0.2em] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-beige-100 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <a 
                href="https://wa.me/201067451891"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-beige-300/30 text-beige-100 text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] hover:bg-beige-100 hover:text-brand-black transition-all duration-300 rounded-full"
              >
                WhatsApp Order
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden text-beige-100 relative z-50 w-12 h-12 flex items-center justify-center rounded-full transition-colors ${isMenuOpen ? 'bg-transparent' : isScrolled ? 'bg-white/5' : 'bg-transparent'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-brand-black/90 flex flex-col justify-center items-center gap-10"
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to={item.path} 
                  className="text-5xl font-serif text-beige-100 italic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.a 
              href="https://wa.me/201067451891"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 px-12 py-5 bg-beige-100 text-brand-black text-sm font-medium uppercase tracking-[0.2em] rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
