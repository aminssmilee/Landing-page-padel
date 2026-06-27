import { BrowserRouter } from 'react-router-dom';

import AboutSection from './components/about-section';
import CommunitySection from './components/community-section';
import FeaturesSection from './components/features-section';
import Footer from './components/footer';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import PricingSection from './components/pricing-section';
import TeamSection from './components/team-section';
import TestimonialsSection from './components/testimonials-section';

function App() {
  return (
    <BrowserRouter>
      <div className='flex min-h-dvh flex-col bg-white'>
        <Navbar />
        <main className='flex flex-1 flex-col'>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <CommunitySection />
          <TestimonialsSection />
          <PricingSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
