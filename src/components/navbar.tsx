import { useState } from 'react';

import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      title: 'About',
      href: '#about'
    },
    {
      title: 'Programs',
      href: '#programs'
    },
    {
      title: 'Facilities',
      href: '#facilities'
    },
    {
      title: 'Membership',
      href: '#membership'
    }
  ];

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-white sm:h-18 sm:px-8 lg:h-20 lg:px-12'>
        {/* Logo */}
        <a href='/' className='font-display text-2xl font-bold tracking-tight'>
          Courtly
        </a>

        {/* Desktop Menu */}
        <nav className='hidden items-center gap-8 lg:flex'>
          {menus.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className='hover:text-primary text-sm font-medium transition-colors'
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Side Desktop */}
        <div className='hidden items-center gap-5 lg:flex'>
          <a href='#contact' className='hover:text-primary text-sm font-medium transition-colors'>
            Contact
          </a>

          <a
            href='#book'
            className='hover:bg-primary inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:text-black'
          >
            Book A Court
            <span>↗</span>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 lg:hidden'
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-[#070e24]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='flex flex-col px-6 py-6'>
          {menus.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => {
                setOpen(false);
              }}
              className='border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-lime-400'
            >
              {item.title}
            </a>
          ))}

          <a
            href='#contact'
            onClick={() => {
              setOpen(false);
            }}
            className='border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-lime-400'
          >
            Contact
          </a>

          <a
            href='#book'
            onClick={() => {
              setOpen(false);
            }}
            className='mt-6 flex justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]'
          >
            Book A Court
          </a>
        </nav>
      </div>
    </header>
  );
}
