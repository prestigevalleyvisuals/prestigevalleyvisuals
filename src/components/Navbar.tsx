'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/real-estate', label: 'Real Estate' },
  { href: '/business', label: 'Business' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="pvv-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
          <Image
            src="/brand/mark.png"
            alt="Prestige Valley Visuals"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-wide">Prestige Valley Visuals</div>
            <div className="text-xs text-white/60">Real Estate • Business • Content</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="pvv-button-primary">
            Book
          </Link>
        </nav>

        <button
          className="md:hidden pvv-button-ghost px-4 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="pvv-container py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-white/90 hover:bg-white/5 border border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="pvv-button-primary w-full">
              Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
