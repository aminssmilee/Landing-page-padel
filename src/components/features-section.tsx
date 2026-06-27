import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    category: 'COURT ARENA',
    title: 'Premium Indoor & Outdoor Padel Courts With Surfaces',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800'
  },
  {
    category: 'LOUNGE & CAFE',
    title: 'Relax, Recharge, And Connect With Fellow Players',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800'
  },
  {
    category: 'TRAINING HUB',
    title: 'Modern Fitness Zone Tailored For Padel Performance',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800'
  },
  {
    category: 'GEAR SHOP',
    title: 'Gear Up With The Best Padel Equipment And Apparel',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800'
  }
];

export default function FeaturesSection() {
  const sectionReference = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.facilities-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionReference.current,
            start: 'top 80%'
          }
        }
      );

      // Staggered cards animation
      gsap.fromTo(
        '.facility-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.facilities-grid',
            start: 'top 75%'
          }
        }
      );
    },
    { scope: sectionReference }
  );

  return (
    <section
      ref={sectionReference}
      id='facilities'
      className='bg-white px-6 py-8 text-[#1a1c23] md:px-12 lg:px-12'
    >
      <div className='mx-auto max-w-7xl'>
        {/* Header Block */}
        <div className='facilities-header mb-12 flex flex-col justify-between gap-6 opacity-0 md:flex-row md:items-end'>
          <div className='max-w-2xl'>
            {/* Eyebrow */}
            <div className='mb-4'>
              <span className='inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-black'>
                <span className='h-1.5 w-1.5 rounded-full bg-black' />
                Our World-Class Facilities
              </span>
            </div>
            {/* Title */}
            <h2 className='font-display text-3xl leading-tight font-extrabold tracking-tight text-black md:text-4xl lg:text-5xl'>
              Where every match, moment, and memory is shaped by excellence.
            </h2>
          </div>

          {/* Search bar & View All */}
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search Something Here'
                className='w-56 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 pr-10 text-xs transition-all focus:border-black focus:bg-white focus:outline-none md:w-100'
              />
              <span className='absolute top-1/2 right-4 -translate-y-1/2 text-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.825 5.825a7.65 7.65 0 0 0 10.825 10.825Z'
                  />
                </svg>
              </span>
            </div>
            <button className='hover:bg-primary inline-flex items-center gap-1.5 rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:text-black'>
              View All
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className='facilities-grid mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {facilities.map((fac) => (
            <div
              key={fac.category}
              className='facility-card group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-3xl opacity-0 shadow-md'
            >
              {/* Background Image */}
              <img
                src={fac.image}
                alt={fac.title}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5' />

              {/* Arrow Badge (Top Right or inline) */}
              <div className='group-hover:bg-primary group-hover:border-primary absolute right-5 bottom-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:text-black'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>

              {/* Text content (Bottom) */}
              <div className='absolute right-6 bottom-6 left-6 flex flex-col text-white'>
                <span className='text-primary mb-2 text-[10px] font-bold tracking-widest uppercase'>
                  {fac.category}
                </span>
                <h3 className='text-base leading-snug font-bold tracking-tight text-white/95 transition-colors duration-300 group-hover:text-white'>
                  {fac.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info underneath Grid */}
        <div className='flex flex-col justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row md:items-center'>
          {/* Slider Controls */}
          <div className='flex items-center gap-3'>
            <button className='flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-black hover:text-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>
            <button className='hover:bg-primary hover:border-primary flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-black text-white transition-colors hover:border-black hover:text-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>

          {/* Description text */}
          <p className='max-w-lg font-medium text-black md:text-right md:text-lg'>
            Because greatness starts with the space you play in — every serve, every swing, and
            every victory begins in an environment.
          </p>
        </div>
      </div>
    </section>
  );
}
