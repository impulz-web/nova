import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { Features } from '@/components/sections/Features';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { Benefits } from '@/components/sections/Benefits';
import { Statistics } from '@/components/sections/Statistics';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <ProductShowcase />
        <Benefits />
        <Statistics />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
