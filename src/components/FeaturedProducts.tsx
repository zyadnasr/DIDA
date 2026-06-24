import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "Premium Black Leggings",
    originalPrice: 850,
    salePrice: 650,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Performance Sports Bra",
    originalPrice: 700,
    salePrice: 520,
    image: "https://images.unsplash.com/photo-1608228079968-c76817031b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Women's Training Set",
    originalPrice: 1450,
    salePrice: 1090,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Yoga Flex Leggings",
    originalPrice: 780,
    salePrice: 590,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Active Running Top",
    originalPrice: 650,
    salePrice: 490,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "High Waist Gym Leggings",
    originalPrice: 900,
    salePrice: 680,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Seamless Workout Set",
    originalPrice: 1600,
    salePrice: 1250,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Women's Fitness Jacket",
    originalPrice: 1100,
    salePrice: 850,
    image: "https://images.unsplash.com/photo-1616847250684-257a6e191983?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Everyday Activewear Set",
    originalPrice: 1350,
    salePrice: 990,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-6xl text-beige-100 mb-6 tracking-tight"
            >
              Featured<br/><span className="italic text-beige-300">Collections</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-beige-300 font-light text-lg max-w-md mix-blend-screen"
            >
              Discover stylish and comfortable activewear designed for confidence, performance, and everyday movement.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to="/products"
              className="group flex items-center gap-3 text-beige-100 uppercase tracking-[0.2em] text-xs font-medium"
            >
              <span className="relative pb-1 overflow-hidden">
                View All Products
                <span className="absolute bottom-0 left-0 w-full h-px bg-beige-100 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-8 gap-y-12 sm:gap-y-20">
          {products.map((product, index) => {
            const discountPercentage = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col ${index % 3 === 1 ? 'lg:mt-16' : index % 3 === 2 ? 'lg:mt-32' : ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-3 sm:mb-6 bg-brand-dark">
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                    <span className="inline-flex items-center justify-center px-2 sm:px-4 py-1 sm:py-1.5 bg-beige-100 text-brand-black text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                      -{discountPercentage}%
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Quick Shop Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-8 z-20">
                    <a 
                      href={`https://wa.me/201067451891?text=Hi, I am interested in the ${product.name} (Sale Price: ${product.salePrice} EGP)`}
                      target="_blank"
                      rel="noreferrer"
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex items-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-2.5 sm:py-4 bg-beige-100 text-brand-black font-medium text-[9px] sm:text-xs uppercase tracking-widest sm:tracking-[0.2em] hover:bg-white"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Shop Now
                    </a>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow px-1 sm:px-2">
                  <h3 className="font-sans font-medium text-[11px] sm:text-sm md:text-base text-beige-100 mb-1 sm:mb-2 uppercase tracking-widest line-clamp-2">{product.name}</h3>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-4 mt-auto">
                    <span className="text-xs sm:text-sm md:text-base font-medium text-beige-200">
                      {product.salePrice.toLocaleString()} EGP
                    </span>
                    <span className="text-[9px] sm:text-xs md:text-sm font-light text-beige-300/40 line-through">
                      {product.originalPrice.toLocaleString()} EGP
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
