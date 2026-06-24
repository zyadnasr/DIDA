import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Where is your store located?",
    answer: "We are located at 9 El Deeb St, Montazah, Zagazig First, El Sharkeya. You can drop by to explore our premium collections in person during our working hours."
  },
  {
    question: "What types of sportswear do you offer?",
    answer: "We specialize in premium women's sportswear including activewear sets, gym wear, yoga wear, running apparel, high-quality sports leggings, and supportive sports bras."
  },
  {
    question: "Can I place an order online or through WhatsApp?",
    answer: "Yes, you can easily place an order by sending us a message on WhatsApp at 01067451891. Our friendly team will assist you with sizing, availability, and delivery options."
  },
  {
    question: "What are your store opening hours?",
    answer: "Our Zagazig store is open from Monday to Saturday, from 9:00 AM to 9:00 PM. We are closed on Sundays."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl text-beige-100 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-24 bg-beige-800 mx-auto"
          ></motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/10 glass-panel hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
              >
                <span className={`font-sans font-medium text-sm md:text-base uppercase tracking-widest transition-colors duration-300 ${openIndex === index ? 'text-beige-100' : 'text-beige-300 group-hover:text-beige-200'}`}>
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === index ? 'border-beige-100 bg-beige-100/10' : 'border-white/10 group-hover:border-white/30'}`}>
                  <ChevronDown 
                    className={`w-4 h-4 transition-all duration-500 ${openIndex === index ? 'rotate-180 text-beige-100' : 'text-beige-300'}`} 
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-beige-200 font-light leading-relaxed text-sm md:text-base mix-blend-screen">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
