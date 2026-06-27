import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionReference = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.pricing-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionReference.current,
            start: 'top 80%'
          }
        }
      );

      // Cards stagger
      gsap.fromTo(
        '.pass-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.passes-grid',
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
      id='membership'
      className='bg-[#f7f7f5] px-6 py-8 text-[#1a1c23] md:px-12 md:py-12 lg:px-12'
    >
      <div className='mx-auto max-w-7xl'>
        {/* Header Block */}
        {/*  */}

        {/* Passes Grid */}
        <div className='passes-grid mx-auto grid max-w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-4'>
          {/* Card 1: VIP Pass */}
          <div className='pass-card group relative mx-auto flex min-h-[500px] w-full max-w-md flex-col justify-between overflow-hidden rounded-[2rem] bg-black p-6 text-white opacity-0 shadow-2xl transition-transform duration-300 hover:scale-[1.02] sm:min-h-[540px] sm:p-8 md:mx-0 md:min-h-[580px] md:max-w-none md:rounded-[2.5rem] md:p-10 lg:min-h-[640px]'>
            {/* Background Accent Gradients */}
            <div className='bg-primary/10 pointer-events-none absolute -top-[30%] -right-[30%] h-72 w-72 rounded-full blur-[100px]' />
            <div className='pointer-events-none absolute -bottom-[30%] -left-[30%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]' />

            {/* Top Row: Badge & Avatars */}
            <div className='relative z-10 flex items-start justify-between'>
              <span className='rounded-full border border-white/10 bg-white px-3 py-1.5 text-[9px] font-bold tracking-widest text-black uppercase sm:px-4 sm:py-2 sm:text-[10px]'>
                Most Popular
              </span>
              <div className='flex -space-x-2'>
                <img
                  src='/images/member-elite.png'
                  alt='VIP Member'
                  className='h-7 w-7 rounded-full border-2 border-[#0c1223] object-cover sm:h-8 sm:w-8'
                />
                <img
                  src='/images/community-man.png'
                  alt='VIP Member'
                  className='h-7 w-7 rounded-full border-2 border-[#0c1223] object-cover sm:h-8 sm:w-8'
                />
                <div className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0c1223] bg-orange-400 text-[9px] font-bold text-black sm:h-8 sm:w-8 sm:text-[10px]'>
                  +2k
                </div>
              </div>
            </div>

            {/* Center Info */}
            <div className='relative z-10 flex flex-1 flex-col items-center justify-center text-center'>
              {/* Label */}
              <span className='mb-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase sm:mb-3 sm:text-[11px] sm:tracking-[0.25em]'>
                Monthly Access
              </span>

              {/* Title */}
              <h3 className='font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:leading-[1.05] md:text-4xl lg:text-5xl'>
                Courtly Club
                <br />
                VIP Pass
              </h3>

              {/* Description */}
              <p className='mt-4 max-w-[260px] text-xs leading-relaxed text-gray-400 sm:mt-5 sm:max-w-[280px] sm:text-sm sm:leading-7'>
                Unlimited court bookings and personal performance training for padel players.
              </p>

              {/* Price Card */}
              <div className='mt-8 sm:mt-10'>
                <div className='flex items-center gap-4 rounded-full bg-white px-5 py-3 text-black sm:gap-6 sm:px-7 sm:py-4'>
                  <div className='text-left'>
                    <h4 className='font-display text-2xl leading-none font-black tracking-tight text-black sm:text-3xl'>
                      $129
                    </h4>
                  </div>
                  <button className='text-sm font-bold text-black transition-colors hover:text-gray-600 sm:text-base'>
                    Join Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Price & Action */}
            <div className='relative z-10 flex w-full items-center justify-end'>
              <button className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='h-5 w-5 sm:h-6 sm:w-6'
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

          {/* Card 2: VVIP Elite Pass */}
          <div className='pass-card group relative mx-auto flex min-h-[500px] w-full max-w-md flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-white opacity-0 shadow-2xl transition-transform duration-300 hover:scale-[1.02] sm:min-h-[540px] sm:p-8 md:mx-0 md:min-h-[580px] md:max-w-none md:rounded-[2.5rem] md:p-10 lg:min-h-[640px]'>
            {/* Background Image of the Lounge */}
            <div className="absolute inset-0 bg-[url('/images/member-elite.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            {/* Soft Green-Olive Dark Overlay */}
            <div className='absolute inset-0 bg-gradient-to-tr from-[#1b2615]/95 via-[#23301a]/85 to-[#3b4c30]/55' />

            {/* Top Row: Badge & Avatars */}
            <div className='relative z-10 flex items-start justify-between'>
              <span className='rounded-full border border-white/20 bg-white px-3 py-1.5 text-[9px] font-bold tracking-widest text-black uppercase sm:px-4 sm:py-2 sm:text-[10px]'>
                Best Value
              </span>
              <div className='flex -space-x-2'>
                <img
                  src='/images/member-elite.png'
                  alt='VIP Member'
                  className='h-7 w-7 rounded-full border-2 border-[#23301a] object-cover sm:h-8 sm:w-8'
                />
                <img
                  src='/images/community-man.png'
                  alt='VIP Member'
                  className='h-7 w-7 rounded-full border-2 border-[#23301a] object-cover sm:h-8 sm:w-8'
                />
                <div className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#23301a] bg-orange-400 text-[9px] font-bold text-black sm:h-8 sm:w-8 sm:text-[10px]'>
                  +2k
                </div>
              </div>
            </div>

            {/* Center Info */}
            <div className='relative z-10 flex flex-1 flex-col items-center justify-center text-center'>
              {/* Label */}
              <span className='mb-2 text-[10px] font-bold tracking-[0.2em] text-gray-200 uppercase sm:mb-3 sm:text-[11px] sm:tracking-[0.25em]'>
                Annual Membership
              </span>

              {/* Title */}
              <h3 className='font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:leading-[1.05] md:text-4xl lg:text-5xl'>
                Courtly VVIP
                <br />
                Elite Pass
              </h3>

              {/* Description */}
              <p className='mt-4 max-w-[260px] text-xs leading-relaxed text-gray-200 sm:mt-5 sm:max-w-[280px] sm:text-sm sm:leading-7'>
                Full access to all luxury facilities, premium courts, and private club tournaments.
              </p>

              {/* Price Card */}
              <div className='mt-8 sm:mt-10'>
                <div className='flex items-center gap-4 rounded-full bg-white px-5 py-3 text-black sm:gap-6 sm:px-7 sm:py-4'>
                  <div className='text-left'>
                    <h4 className='font-display text-2xl leading-none font-black tracking-tight text-black sm:text-3xl'>
                      $249
                    </h4>
                  </div>
                  <button className='text-sm font-bold text-black transition-colors hover:text-gray-600 sm:text-base'>
                    Join Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Price & Action */}
            <div className='relative z-10 flex w-full items-center justify-end'>
              <button className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='h-5 w-5 sm:h-6 sm:w-6'
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
        </div>
      </div>
    </section>
  );
}
