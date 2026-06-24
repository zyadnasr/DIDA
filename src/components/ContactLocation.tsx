import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 space-y-16"
          >
            <div>
              <h2 className="font-serif text-5xl md:text-6xl text-beige-100 mb-6 tracking-tighter">Visit Us</h2>
              <p className="text-beige-300 font-light text-lg mix-blend-screen leading-relaxed">
                Ready to upgrade your sportswear? Experience the quality of DIDA SPORTS WEAR in person or reach out today.
              </p>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-beige-800/50 via-beige-800/20 to-transparent"></div>
              
              <div className="flex items-start gap-8 text-beige-200 relative group">
                <div className="w-6 h-6 shrink-0 mt-1 flex items-center justify-center bg-brand-dark rounded-full z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-beige-300" />
                </div>
                <div>
                  <h4 className="font-sans font-medium mb-2 text-beige-100 uppercase tracking-widest text-xs">Store Location</h4>
                  <p className="font-light text-sm leading-relaxed text-beige-300/80">
                    9 El Deeb St, Montazah,<br />
                    Zagazig First, El Sharkeya,<br />
                    Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 text-beige-200 relative group">
                <div className="w-6 h-6 shrink-0 mt-1 flex items-center justify-center bg-brand-dark rounded-full z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-beige-300" />
                </div>
                <div>
                  <h4 className="font-sans font-medium mb-2 text-beige-100 uppercase tracking-widest text-xs">Opening Hours</h4>
                  <p className="font-light text-sm text-beige-300/80">
                    Mon - Sat: 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 text-beige-200 relative group">
                <div className="w-6 h-6 shrink-0 mt-1 flex items-center justify-center bg-brand-dark rounded-full z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-beige-300" />
                </div>
                <div>
                  <h4 className="font-sans font-medium mb-2 text-beige-100 uppercase tracking-widest text-xs">Phone & WhatsApp</h4>
                  <p className="font-light text-sm text-beige-300/80">
                    01067451891
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 text-beige-200 relative group">
                <div className="w-6 h-6 shrink-0 mt-1 flex items-center justify-center bg-brand-dark rounded-full z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-beige-300" />
                </div>
                <div>
                  <h4 className="font-sans font-medium mb-2 text-beige-100 uppercase tracking-widest text-xs">Email</h4>
                  <a href="mailto:zyadnasrn204@gmail.com" className="font-light text-sm text-beige-300/80 hover:text-beige-100 transition-colors">
                    zyadnasrn204@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a 
                href="https://wa.me/201067451891"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-beige-100 text-brand-black font-medium text-xs uppercase tracking-[0.2em] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></div>
                <span className="relative flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </span>
              </a>
            </div>
          </motion.div>

          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12 h-[500px] lg:h-auto min-h-[600px] relative overflow-hidden group"
          >
            {/* Visual placeholder for map to keep it looking elegant */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 grayscale group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"></div>
            
            <div className="absolute inset-6 md:inset-12 bg-brand-black/60 flex items-center justify-center flex-col text-center p-8 md:p-12 glass-panel backdrop-blur-md border border-white/5 shadow-2xl">
              <MapPin className="w-12 h-12 text-beige-300 mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
              <h3 className="font-serif text-3xl md:text-4xl text-beige-100 mb-4 tracking-tight">Find Us in Zagazig</h3>
              <p className="text-beige-300/80 font-light mb-12 max-w-sm text-sm md:text-base leading-relaxed">
                9 El Deeb St, Montazah, Zagazig First
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 border border-beige-300/30 text-beige-100 font-medium text-xs uppercase tracking-[0.2em] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-beige-100 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"></div>
                <span className="relative text-beige-100 group-hover:text-brand-black transition-colors duration-500">
                  Open in Google Maps
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
