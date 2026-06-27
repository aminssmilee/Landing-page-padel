import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerReference = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Left side elements (image media)
      gsap.fromTo(
        '.about-media',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerReference.current,
            start: 'top 80%'
          }
        }
      );

      // Right side elements (eyebrow, title, stats, button)
      gsap.fromTo(
        '.about-content-animate',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerReference.current,
            start: 'top 75%'
          }
        }
      );
    },
    { scope: containerReference }
  );

  return (
    <section
      id='about'
      ref={containerReference}
      className='w-full bg-[#f9f9f9] px-6 py-12 text-[#1a1c23] md:px-12 md:py-20 lg:px-10 lg:py-20'
    >
      <div className='mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:items-end lg:gap-16'>
        {/* Left Column: Image with Play Badge */}
        <div className='mx-auto w-full max-w-sm lg:col-span-4 lg:mx-0'>
          {/* Eyebrow */}
          <div className='mb-8'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-black'>
              <span className='h-1.5 w-1.5 rounded-full bg-black' />
              More About Courtly
            </span>
          </div>

          {/* Media Card */}
          <div className='about-media relative aspect-[4/5] w-full overflow-hidden rounded-2xl opacity-0 shadow-lg'>
            <img
              src='/images/about-woman.png'
              alt='Woman playing padel'
              className='h-full w-full object-cover'
            />
            {/* Play video overlay button */}
            <div className='absolute inset-0 flex items-center justify-center bg-black/5'>
              <button className='flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-110'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='ml-1 h-6 w-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className='flex flex-col justify-center lg:col-span-7 lg:col-start-6'>
          {/* Heading */}
          <h2 className='about-content-animate font-display mb-12 text-3xl leading-tight font-extrabold tracking-tight text-black md:text-4xl lg:text-5xl'>
            Built for players who live and breathe padel — Courtly connects passion, performance,
            and premium facilities experience.
          </h2>

          {/* Stats Grid */}
          <div className='mb-12 grid grid-cols-3 gap-4 md:gap-8'>
            <div className='about-content-animate flex flex-col opacity-0'>
              <span className='mb-1 font-sans text-3xl font-light text-black sm:text-5xl md:text-6xl lg:text-7xl'>
                120+
              </span>
              <span className='mb-1 text-[11px] leading-tight font-semibold text-gray-900 sm:text-base'>
                Global Presence
              </span>
              <span className='max-w-[180px] text-[10px] leading-normal text-gray-500 sm:text-xs sm:leading-relaxed'>
                World-class padel courts partnered globally
              </span>
            </div>
            <div className='about-content-animate flex flex-col opacity-0'>
              <span className='mb-1 font-sans text-3xl font-light text-black sm:text-5xl md:text-6xl lg:text-7xl'>
                25K+
              </span>
              <span className='mb-1 text-[11px] leading-tight font-semibold text-gray-900 sm:text-base'>
                Active Community
              </span>
              <span className='max-w-[180px] text-[10px] leading-normal text-gray-500 sm:text-xs sm:leading-relaxed'>
                Active members improving their game daily
              </span>
            </div>
            <div className='about-content-animate flex flex-col opacity-0'>
              <span className='mb-1 font-sans text-3xl font-light text-black sm:text-5xl md:text-6xl lg:text-7xl'>
                98%
              </span>
              <span className='mb-1 text-[11px] leading-tight font-semibold text-gray-900 sm:text-base'>
                Trusted Experience
              </span>
              <span className='max-w-[180px] text-[10px] leading-normal text-gray-500 sm:text-xs sm:leading-relaxed'>
                Member satisfaction rate from our annual survey
              </span>
            </div>
          </div>

          {/* Button */}
          <div className='about-content-animate opacity-0'>
            <button className='rounded-full bg-black px-12 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-neutral-800'>
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
