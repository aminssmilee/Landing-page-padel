import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';
import gsap from 'gsap';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-actions',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className='bg-background relative w-full overflow-hidden py-24 md:py-32 lg:py-40'
    >
      {/* Background ambient light effects */}
      <div className='absolute inset-0 z-0'>
        <div className='bg-primary/20 absolute -top-[20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]' />
      </div>

      <div className='relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8'>
        {/* Eyebrow badge */}
        <div className='hero-badge mb-8 flex justify-center opacity-0'>
          <div className='border-border bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-foreground flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors'>
            <IconSparkles className='text-primary h-4 w-4' />
            <span>Discover the Next Generation</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className='hero-title text-foreground mx-auto max-w-4xl text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl'>
          Build Faster, Design{' '}
          <span className='from-primary bg-gradient-to-r to-blue-500 bg-clip-text text-transparent'>
            Better
          </span>
        </h1>

        {/* Subheadline */}
        <p className='hero-subtitle text-muted-foreground mx-auto mt-6 max-w-2xl text-lg opacity-0 sm:text-xl'>
          Empower your workflow with cutting-edge AI tools and modern web technologies. Experience
          the perfect blend of performance, aesthetics, and developer experience.
        </p>

        {/* Call to Actions */}
        <div className='hero-actions mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row'>
          <Button size='lg' className='group h-12 gap-2 rounded-full px-8 text-base'>
            Get Started Free
            <IconArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Button>
          <Button size='lg' variant='outline' className='h-12 rounded-full px-8 text-base'>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
