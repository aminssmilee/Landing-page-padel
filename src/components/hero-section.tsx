import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });

      tl.fromTo('.hero-social', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.4');
    },
    {
      scope: container
    }
  );

  return (
    <section
      ref={container}
      className='relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#070e24] px-6 pt-28 pb-8 text-white sm:px-8 sm:pt-32 md:px-12 md:pb-10 lg:h-[100svh] lg:min-h-[90svh] lg:px-12 lg:pt-32 lg:pb-10'
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/images/hero-padel.png')] bg-cover bg-[65%_center] lg:bg-center" />

      {/* Overlay */}
      <div className='absolute inset-0 z-10' />

      {/* Main Content */}
      <div className='relative z-10 mx-auto flex w-full max-w-7xl grow items-center py-10 lg:py-0'>
        <div className='w-full max-w-5xl'>
          {/* Social */}
          <div className='hero-social mb-6 flex flex-col items-start gap-4 opacity-0 sm:mb-8 sm:flex-row sm:items-center sm:gap-6'>
            <div className='flex -space-x-2 sm:-space-x-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#070e24] bg-gradient-to-br from-indigo-500 to-purple-600 text-[10px] font-bold sm:h-10 sm:w-10 sm:text-xs'>
                JD
              </div>

              <div className='flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#070e24] bg-gradient-to-br from-emerald-400 to-teal-600 text-[10px] font-bold sm:h-10 sm:w-10 sm:text-xs'>
                AS
              </div>

              <div className='flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#070e24] bg-gradient-to-br from-amber-400 to-pink-500 text-[10px] font-bold sm:h-10 sm:w-10 sm:text-xs'>
                MK
              </div>
            </div>

            <p className='max-w-[280px] text-xs leading-relaxed text-gray-300 sm:max-w-md sm:text-sm'>
              Trusted by over <span className='text-primary font-semibold'>25,000+</span> players
              and <span className='text-primary font-semibold'>90+</span> premium padel clubs
              worldwide.
            </p>
          </div>

          {/* Badge */}
          <div className='hero-badge mb-5 self-start opacity-0'>
            <div className='text-primary inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-wider backdrop-blur-sm'>
              <span className='bg-primary h-2 w-2 animate-pulse rounded-full' />
              Where Passion Meets Precision
            </div>
          </div>

          {/* Heading */}
          <h1 className='hero-title font-display max-w-[900px] text-[2.2rem] leading-[1.1] font-extrabold tracking-tight text-white opacity-0 sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5.2rem] xl:text-[6rem]'>
            Play. Grow. Win.
            <br />
            Experience padel like
            <br />
            never before with <span className='text-primary'>Courtly</span>
          </h1>
        </div>
      </div>

      {/* Bottom */}
      <div className='relative z-20 mx-auto mt-8 flex w-full max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0'>
        <span className='text-[10px] font-medium tracking-[0.15em] text-gray-400 uppercase sm:text-[11px] sm:tracking-[0.25em]'>
          Scroll Down to Explore
        </span>

        <div className='flex gap-2'>
          <span className='bg-primary h-1 w-8 rounded-full' />
          <span className='h-1 w-2 rounded-full bg-white/20' />
          <span className='h-1 w-2 rounded-full bg-white/20' />
        </div>
      </div>
    </section>
  );
}
