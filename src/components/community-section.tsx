import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunitySection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.community-left',
        {
          x: -80,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo(
        '.community-right > *',
        {
          x: 60,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 75%'
          }
        }
      );
    },
    {
      scope: container
    }
  );

  return (
    <section ref={container} className='bg-black px-6 py-8 md:px-12 lg:px-12'>
      <div className='mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-black lg:grid-cols-2'>
        {/* LEFT */}

        <div className='community-left relative opacity-0'>
          <img
            src='/images/community-man.png'
            alt=''
            className='h-full min-h-[420px] w-full rounded-xl object-cover p-2 lg:min-h-[560px]'
          />

          {/* floating card */}

          {/* Floating Coaching Card */}
          <div className='absolute top-[70%] left-1/2 z-20 w-[88%] max-w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]'>
            {/* Header */}
            <div className='mb-4 flex items-center justify-between'>
              <span className='text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
                Coaching Network
              </span>

              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  className='h-5 w-5 text-black'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 17l6-6 4 4 8-8' />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M14 7h7v7' />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className='flex items-end justify-between'>
              <span className='text-5xl leading-none font-bold text-black'>300k+</span>

              <div className='text-right'>
                <p className='text-xs leading-5 text-gray-500'>Certified</p>

                <p className='text-xs leading-5 text-gray-500'>Trainers &</p>

                <p className='text-xs leading-5 text-gray-500'>Mentors</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className='community-right relative flex flex-col justify-center overflow-hidden px-0 py-10 sm:px-6 md:px-10 lg:px-16 lg:py-16'>
          {/* Background Shape */}

          <div className='absolute -right-28 bottom-0 h-[260px] w-[360px] rounded-full bg-neutral-800/40 blur-2xl' />

          {/* Heading */}

          <h2 className='font-display relative z-10 max-w-lg text-4xl leading-[1.05] font-bold text-white md:text-5xl lg:text-6xl'>
            Join a Global
            <br />
            Community
            <br />
            Lives for Game
          </h2>

          {/* Description */}

          <p className='relative z-10 mt-6 max-w-md text-sm leading-7 text-neutral-400 md:text-base'>
            Padel is a shared experience. Our community unites players, coaches, and fans.
            Tournaments fuel your journey to excel on and off the court.
          </p>

          {/* CTA */}

          <button className='relative z-10 mt-8 w-fit rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:scale-105'>
            Become A Member
          </button>

          {/* Stats */}

          <div className='relative z-10 mt-14 space-y-6'>
            {' '}
            {/* Member */}
            <div>
              <div className='mb-2 flex items-center justify-between text-sm'>
                <span className='text-neutral-300'>Member</span>

                <span className='font-semibold text-white'>300+</span>
              </div>

              <div className='h-2 overflow-hidden rounded-full bg-neutral-800'>
                <div className='h-full w-[72%] rounded-full bg-gradient-to-r from-orange-400 to-orange-500' />
              </div>
            </div>
            {/* Graduated */}
            <div>
              <div className='mb-2 flex items-center justify-between text-sm'>
                <span className='text-neutral-300'>Graduated</span>

                <span className='font-semibold text-white'>160k</span>
              </div>

              <div className='h-2 overflow-hidden rounded-full bg-neutral-800'>
                <div className='h-full w-[58%] rounded-full bg-gradient-to-r from-sky-400 to-blue-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
