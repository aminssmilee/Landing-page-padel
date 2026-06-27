import { BrowserRouter } from 'react-router-dom';

import AboutSection from './components/about-section';
import CommunitySection from './components/community-section';
import FeaturesSection from './components/features-section';
import Footer from './components/footer';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import PricingSection from './components/pricing-section';
import RootProvider from './components/providers/root';
import TeamSection from './components/team-section';
import TestimonialsSection from './components/testimonials-section';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <div className='flex min-h-dvh flex-col'>
          <Navbar />
          <main className='flex-1 flex flex-col'>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CommunitySection />
            <PricingSection />
            <TeamSection />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
