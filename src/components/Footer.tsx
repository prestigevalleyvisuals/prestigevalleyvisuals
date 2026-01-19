import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="pvv-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/mark.png" alt="PVV" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="font-semibold tracking-wide">{SITE.name}</div>
                <div className="text-sm text-white/60">{SITE.tagline}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Premium photo & video for listings, plus full branding, websites, and monthly content for small businesses.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link className="text-white/70 hover:text-white" href="/real-estate">Real Estate</Link>
              <Link className="text-white/70 hover:text-white" href="/business">Business</Link>
              <Link className="text-white/70 hover:text-white" href="/portfolio">Portfolio</Link>
              <Link className="text-white/70 hover:text-white" href="/contact">Contact</Link>
              <Link className="text-white/70 hover:text-white" href="/book">Book</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-3">Contact</div>
            <div className="text-sm text-white/70 space-y-2">
              <div>
                <span className="text-white/50">Phone:</span>{' '}
                <a className="hover:text-white" href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
              </div>
              <div>
                <span className="text-white/50">Email:</span>{' '}
                <a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div>
                <span className="text-white/50">Service Area:</span> {SITE.serviceArea}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a className="pvv-button-primary" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">
                Book Real Estate
              </a>
              <a className="pvv-button-ghost" href={SITE.calendly.business} target="_blank" rel="noreferrer">
                Business Consult
              </a>
            </div>
          </div>
        </div>

        <div className="pvv-divider" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>
            Drone work is subject to weather and airspace restrictions. Website domain & hosting are paid by the client.
          </div>
        </div>
      </div>
    </footer>
  );
}
