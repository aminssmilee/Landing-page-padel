import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const year = new Date().getFullYear();

export default function Footer() {
  const footerReference = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.footer-content',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerReference.current,
            start: 'top 95%'
          }
        }
      );
    },
    { scope: footerReference }
  );

  return (
    <footer
      ref={footerReference}
      className='border-t border-gray-200/80 bg-[#f3f3f1] px-6 pt-20 pb-10 text-[#1a1c23] md:px-12 lg:px-12'
    >
      <div className='footer-content mx-auto max-w-7xl opacity-0'>
        {/* Top Area: Subscribe & Info */}
        <div className='mb-16 grid items-start gap-12 lg:grid-cols-12'>
          {/* Left Side: Subscribe */}
          <div className='flex max-w-xl flex-col items-start lg:col-span-7'>
            <h3 className='font-display mb-4 text-5xl font-extrabold text-black'>Subscribe</h3>
            <p className='mb-6 text-sm leading-relaxed text-gray-500'>
              Stay connected with the latest matches, exclusive offers, and community events —
              straight to your inbox.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className='flex w-full flex-col gap-3 sm:flex-row'
            >
              <input
                type='email'
                placeholder='Enter your email address'
                required
                className='flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm transition-all focus:border-black focus:ring-1 focus:ring-black focus:outline-none'
              />
              <button
                type='submit'
                className='hover:bg-primary flex items-center justify-center gap-1 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow transition-all duration-300 hover:text-black'
              >
                Subscribe <span>↗</span>
              </button>
            </form>
          </div>

          {/* Right Side: Headquarters info */}
          <div className='flex flex-col text-left lg:col-span-5 lg:items-end lg:text-right'>
            <div className='max-w-xs'>
              <h4 className='font-display mb-4 text-base font-extrabold tracking-wider text-gray-900 uppercase'>
                Courtly Headquarters
              </h4>
              <p className='mb-4 text-sm leading-relaxed text-gray-500'>
                12 Padel Avenue, Sant Martí District, Barcelona 08005, Spain
              </p>
              <div className='space-y-1.5 text-sm'>
                <a
                  href='mailto:support@courtlyclub.com'
                  className='block font-medium text-gray-600 transition-colors hover:text-black'
                >
                  support@courtlyclub.com
                </a>
                <span className='block font-medium text-gray-600'>+34 902 123 456</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area: Copyright */}
        <div className='flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs font-semibold tracking-widest text-gray-400 uppercase sm:flex-row'>
          <p>© {year} Courtly Club. All rights reserved.</p>
          <p>Designed by Courtly Team</p>
        </div>
      </div>
    </footer>
  );
}
