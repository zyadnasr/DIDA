import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-beige-800/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5 lg:col-span-6">
            <h2 className="font-serif text-3xl text-beige-100 mb-6 tracking-wide">DIDA.</h2>
            <p className="text-beige-300 font-light max-w-sm mb-8 leading-relaxed mix-blend-screen">
              Premium women's sportswear designed for elegant movement, confidence, and everyday performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-beige-300 hover:bg-beige-100 hover:text-brand-black transition-all duration-300">
                <span className="sr-only">Instagram</span>
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-beige-300 hover:bg-beige-100 hover:text-brand-black transition-all duration-300">
                <span className="sr-only">Facebook</span>
                FB
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-6 flex flex-col sm:flex-row gap-12 sm:justify-end">
            <div>
              <h3 className="font-sans font-medium text-beige-100 uppercase tracking-widest text-xs mb-8">Contact</h3>
              <ul className="space-y-6">
                <li>
                  <a href="tel:01067451891" className="text-beige-300 hover:text-beige-100 transition-colors font-light flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 opacity-50" /> 01067451891
                  </a>
                </li>
                <li>
                  <a href="mailto:zyadnasrn204@gmail.com" className="text-beige-300 hover:text-beige-100 transition-colors font-light flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 opacity-50" /> zyadnasrn204@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-medium text-beige-100 uppercase tracking-widest text-xs mb-8">Location</h3>
              <ul className="space-y-6">
                <li className="text-beige-300 font-light flex items-start gap-3 text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-50" />
                  <span>
                    9 El Deeb St, Montazah,<br />
                    Zagazig First, El Sharkeya
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Massive Typography Footer End */}
        <div className="w-full text-center overflow-hidden mb-8">
          <h1 className="font-serif text-[20vw] leading-[0.7] tracking-tighter text-transparent select-none bg-clip-text bg-gradient-to-b from-beige-100/10 to-transparent">
            DIDA
          </h1>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-beige-300/40 text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} DIDA SPORTS WEAR. All rights reserved.
          </p>
          <div className="text-beige-300/40 text-[10px] uppercase tracking-widest">
            Zagazig, Egypt
          </div>
        </div>
      </div>
    </footer>
  );
}
