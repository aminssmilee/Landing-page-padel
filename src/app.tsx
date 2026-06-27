import { BrowserRouter } from 'react-router-dom';

import FeaturesSection from './components/features-section';
import Footer from './components/footer';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import PricingSection from './components/pricing-section';
import RootProvider from './components/providers/root';
import TestimonialsSection from './components/testimonials-section';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <div className='flex min-h-dvh flex-col'>
          <Navbar />
          <main className='flex-1 flex flex-col'>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <PricingSection />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
