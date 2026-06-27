import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Ethan Cole',
    role: 'Head Coach',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
    type: 'member'
  },
  {
    name: 'Marcus Silva',
    role: 'Senior Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    type: 'member'
  },
  {
    type: 'cta'
  },
  {
    name: 'Liam Taylor',
    role: 'Padel Coach',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
    type: 'member'
  },
  {
    name: 'Ava Tanaka',
    role: 'Padel Trainer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
    type: 'member'
  }
];

export default function TeamSection() {
  const containerReference = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.team-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: containerReference.current,
            start: 'top 80%'
          }
        }
      );

      // Members animation
      gsap.fromTo(
        '.team-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 75%'
          }
        }
      );
    },
    { scope: containerReference }
  );

  return (
    <section
      ref={containerReference}
      className='bg-[#fafaf9] px-6 py-10 text-[#1a1c23] md:px-12 lg:px-12'
    >
      <div className='mx-auto max-w-7xl'>
        {/* Header Block */}
        <div className='team-header mx-auto mb-16 max-w-3xl text-center opacity-0'>
          <h2 className='font-display text-3xl leading-tight font-extrabold tracking-tight text-black md:text-4xl lg:text-5xl'>
            Meet the Dedicated Pro Team
          </h2>
          <p className='mt-4 text-sm text-gray-500 md:text-base'>
            The people behind the passion — driving padel forward with expertise, heart, and
            championship experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className='team-grid mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {team.map((member) => {
            if (member.type === 'cta') {
              return (
                <div
                  key='join-crew'
                  className='team-card group flex min-h-[300px] flex-col justify-between rounded-[2rem] border border-white/5 bg-black p-6 text-white opacity-0 shadow-lg transition-all duration-300 hover:scale-[1.02]'
                >
                  <div className='flex flex-col'>
                    <h3 className='font-display text-xl leading-snug font-extrabold'>
                      Join A Passionate Team: Redefining Padel?
                    </h3>
                  </div>
                  <a
                    href='#careers'
                    className='hover:text-primary mt-8 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors'
                  >
                    Join Our Crew{' '}
                    <span className='text-xs transition-transform group-hover:translate-x-1'>
                      ↗
                    </span>
                  </a>
                </div>
              );
            }

            return (
              <div
                key={member.name}
                className='team-card group flex cursor-pointer flex-col items-center text-center opacity-0'
              >
                {/* Photo Container */}
                <div className='mb-4 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-md'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                {/* Text details */}
                <h4 className='mb-1 text-base leading-tight font-extrabold text-gray-900'>
                  {member.name}
                </h4>
                <p className='text-xs font-semibold tracking-wider text-gray-400 uppercase'>
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
