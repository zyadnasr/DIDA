import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, MessageCircle, MapPin, Smile } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Modern & Stylish",
    description: "Trend-forward activewear that transitions seamlessly from the gym to the street."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Everyday Movement",
    description: "Comfortable, breathable designs engineered for your daily active lifestyle."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Versatile Performance",
    description: "Expertly tailored suits and separates suitable for gym, running, and yoga."
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Easy Ordering",
    description: "Quick and seamless ordering process directly through our WhatsApp."
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Local Excellence",
    description: "Conveniently located store in Zagazig for an in-person premium experience."
  },
  {
    icon: <Smile className="w-5 h-5" />,
    title: "Dedicated Support",
    description: "Friendly, personalized customer service to help you find your perfect fit."
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beige-800/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl text-beige-100 mb-6"
          >
            Why Choose DIDA
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-24 bg-beige-800 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 border border-white/5 bg-brand-dark/30 hover:bg-brand-dark transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-beige-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-beige-800/10 text-beige-200 mb-8 rounded-full group-hover:bg-beige-100 group-hover:text-brand-black transition-colors duration-500 shadow-[0_0_15px_rgba(180,165,145,0.1)] group-hover:shadow-[0_0_30px_rgba(180,165,145,0.4)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-beige-100 mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-beige-300/60 font-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
