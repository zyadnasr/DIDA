import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <main className="py-32 relative z-10 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-beige-300 hover:text-beige-100 uppercase tracking-widest text-xs font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl text-beige-100 tracking-tight"
            >
              All Collection
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-24 bg-beige-800 mt-6"
            ></motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-beige-300 font-light max-w-sm text-sm leading-relaxed"
          >
            Explore our complete range of premium women's sportswear. Designed for performance, crafted for elegance.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-8 gap-y-12 sm:gap-y-20">
          {products.map((product, index) => {
            const hasDiscount = product.salePrice && product.salePrice < product.price;
            const discountPercentage = hasDiscount 
              ? Math.round(((product.price - product.salePrice!) / product.price) * 100)
              : null;

            const currentPrice = product.salePrice || product.price;
            const priceText = currentPrice ? ` (Sale Price: ${currentPrice} EGP)` : '';
            const categoryText = product.category ? ` Category: ${product.category}.` : '';
            const whatsappMessage = `I want to order: ${product.name} from DIDA Sports Wear.${categoryText}${priceText} Please provide more details.`;
            const whatsappUrl = `https://wa.me/201067451891?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <motion.a
                key={product.id}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-3 sm:mb-6 bg-brand-dark">
                  {hasDiscount && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                      <span className="inline-flex items-center justify-center px-2 sm:px-4 py-1 sm:py-1.5 bg-beige-100 text-brand-black text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                        -{discountPercentage}%
                      </span>
                    </div>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1] mix-blend-luminosity group-hover:mix-blend-normal"
                    loading="lazy"
                  />
                  
                  {/* Quick Shop Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-8 z-20">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex items-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-2.5 sm:py-4 bg-beige-100 text-brand-black font-medium text-[9px] sm:text-xs uppercase tracking-widest sm:tracking-[0.2em]">
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Order on WhatsApp
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow px-1 sm:px-2">
                  <h3 className="font-sans font-medium text-[11px] sm:text-sm md:text-base text-beige-100 mb-1 uppercase tracking-widest line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-beige-300/60 font-light mb-2 sm:mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mt-auto">
                    {currentPrice ? (
                      <span className="text-xs sm:text-sm md:text-base font-medium text-beige-200">
                        {currentPrice.toLocaleString()} EGP
                      </span>
                    ) : null}
                    
                    {hasDiscount && (
                      <span className="text-[9px] sm:text-xs md:text-sm font-light text-beige-300/40 line-through">
                        {product.price.toLocaleString()} EGP
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </main>
  );
}
