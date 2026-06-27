import { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    id: 0,
    title1: 'Training',
    title2: 'Experience',
    quote:
      'The training programs here completely transformed my game. The coaches are top-tier and give personalized feedback that really works.',
    author: 'Alex Mercer',
    role: 'Member since 2021',
    initials: 'AM',
    image: '/images/hero-padel.png',
    rating: '4.9',
    metric: 'Avg Rating',
    stars: 5
  },
  {
    id: 1,
    title1: 'Community',
    title2: 'Vibes',
    quote:
      "What I love most about Courtly is the people. Everyone's friendly, passionate, and supportive. You feel part of something bigger than just a club.",
    author: 'Mira Sjaline',
    role: 'Member since 2023',
    initials: 'MS',
    image: '/images/community-group.png',
    rating: '126K',
    metric: 'Happy Players',
    stars: 4
  },
  {
    id: 2,
    title1: 'Facility',
    title2: 'Quality',
    quote:
      'The courts are always in pristine condition. Having access to such high-quality facilities makes every match feel professional and enjoyable.',
    author: 'Sarah Chen',
    role: 'Pro Player',
    initials: 'SC',
    image: '/images/community-man.png',
    rating: '100%',
    metric: 'Premium Courts',
    stars: 5
  },
  {
    id: 3,
    title1: 'Satisfaction',
    title2: '',
    quote:
      "I've tried many clubs, but none come close to the overall experience here. From booking to playing, everything is absolutely seamless.",
    author: 'David Kim',
    role: 'Weekend Warrior',
    initials: 'DK',
    image: '/images/member-elite.png',
    rating: '98%',
    metric: 'Satisfaction Rate',
    stars: 5
  }
];

export default function TestimonialsSection() {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useGSAP(
    () => {
      gsap.fromTo(
        '.testimonial-left-item',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 75%' }
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 75%' }
        }
      );
    },
    { scope: container }
  );

  const activeData = testimonialsData[activeIndex] || testimonialsData[0];

  return (
    <section
      ref={container}
      className='w-full overflow-hidden bg-[#f7f7f5] px-6 py-8 md:px-12 md:py-12 lg:px-20'
    >
      <div className='mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2'>
        {/* LEFT — vertical typography list */}
        <div className='testimonial-left flex flex-col gap-6 lg:gap-8'>
          {testimonialsData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type='button'
                className='testimonial-left-item flex cursor-pointer items-start gap-5 text-left transition-all duration-300 hover:opacity-80'
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {isActive && <span className='mt-5 block h-[2px] w-12 shrink-0 bg-black' />}
                <h2
                  className={`font-display text-[42px] leading-[0.95] tracking-tight transition-colors duration-300 md:text-[64px] lg:text-[74px] ${
                    isActive ? 'font-semibold text-black' : 'font-light text-neutral-300'
                  }`}
                >
                  {item.title1}
                  {item.title2 && (
                    <>
                      <br />
                      {item.title2}
                    </>
                  )}
                </h2>
              </button>
            );
          })}
        </div>

        {/* RIGHT — testimonial card */}
        <div className='testimonial-card flex flex-col opacity-0'>
          {/* Eyebrow */}
          <div className='mb-6'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-black'>
              <span className='h-1.5 w-1.5 rounded-full bg-black' />
              What Our Players Say
            </span>
          </div>

          {/* Image + Rating card side by side */}
          <div className='flex items-stretch gap-4'>
            {/* Image */}
            <div className='overflow-hidden rounded-2xl'>
              <img
                key={activeData.image} // Add key to force re-render/animation if needed, or just let React update src
                src={activeData.image}
                alt='Testimonial'
                className='h-[320px] w-[220px] object-cover transition-all duration-500 md:h-[360px] md:w-[260px]'
              />
            </div>

            {/* Rating Card */}
            <div className='w-[160px] overflow-hidden rounded-2xl sm:w-[180px] md:w-[200px] lg:w-[220px]'>
              <div className='flex h-[180px] flex-col items-center justify-center rounded-2xl bg-black px-5 py-6 text-center shadow-2xl'>
                <span className='text-[10px] font-semibold tracking-[0.18em] text-neutral-400 uppercase'>
                  Rating
                </span>

                <div>
                  <h3 className='text-4xl leading-none font-bold text-white'>
                    {activeData.rating}
                  </h3>
                  <p className='mt-1 text-xs text-neutral-500'>{activeData.metric}</p>
                </div>

                <div className='mt-8 flex gap-1.5'>
                  {[1, 2, 3, 4, 5].map((starId, index) => (
                    <span
                      key={starId}
                      className={`h-2 w-2 rounded-full ${
                        index < activeData.stars ? 'bg-orange-400' : 'bg-neutral-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <p className='mt-8 max-w-sm text-[15px] leading-7 text-neutral-600 transition-opacity duration-300'>
            &ldquo;{activeData.quote}&rdquo;
          </p>

          {/* Author */}
          <div className='mt-6 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold text-black'>
              {activeData.initials}
            </div>
            <div>
              <h4 className='text-sm leading-tight font-semibold text-black'>
                {activeData.author}
              </h4>
              <p className='text-xs text-neutral-400'>{activeData.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
