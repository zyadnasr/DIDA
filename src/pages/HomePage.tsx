import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Features from '../components/Features';
import ContactLocation from '../components/ContactLocation';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <About />
      <Features />
      <ContactLocation />
      <FAQ />
    </main>
  );
}
