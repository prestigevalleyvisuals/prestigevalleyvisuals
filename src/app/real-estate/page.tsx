import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { REAL_ESTATE_ADD_ONS, REAL_ESTATE_ONE_TIME, REAL_ESTATE_SUBSCRIPTIONS, SITE } from '@/lib/site';

export const metadata = {
  title: 'Real Estate Services'
};

export default function RealEstatePage() {
  return (
    <div>
      <Hero
        eyebrow="Real Estate Services"
        title="Clean visuals that sell homes"
        subtitle="MLS-ready photos, walkthrough videos, drone, and social Reels—edited in a cinematic style so your listings stand out and your brand looks premium."
        primaryCta={{ label: 'Book Real Estate', href: SITE.calendly.realEstate, external: true }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
        videoSrc="/media/hero-realestate.mp4"
        videoPoster="/media/hero-realestate-poster.jpg"
      />

      <section className="pvv-container py-16">
        <SectionHeader
          eyebrow="One-time"
          title="Listing Packages"
          subtitle="Fast turnaround, clean edits, and social-ready deliverables. Video editing is included in every package that contains video."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {REAL_ESTATE_ONE_TIME.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}
        </div>

        <div className="pvv-divider" />

        <SectionHeader
          eyebrow="Subscriptions"
          title="Monthly Subscriptions"
          subtitle="Pick a tier based on your listing volume. Subscribers get priority scheduling and member pricing on add-ons."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {REAL_ESTATE_SUBSCRIPTIONS.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}

          <div className="pvv-card pvv-card-hover p-6">
            <div className="text-lg font-semibold">How it works</div>
            <p className="mt-3 text-sm text-white/70">
              Book a quick call and we’ll match a plan to your listing volume. Subscribers get priority dates and discounted add-ons.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex gap-2"><span className="text-pvv-gold">•</span><span>Priority availability</span></li>
              <li className="flex gap-2"><span className="text-pvv-gold">•</span><span>Consistent look across your listings</span></li>
              <li className="flex gap-2"><span className="text-pvv-gold">•</span><span>More content for social, every month</span></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="pvv-button-primary" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">Book</a>
              <Link className="pvv-button-ghost" href="/contact">Questions?</Link>
            </div>
          </div>
        </div>

        <div className="pvv-divider" />

        <SectionHeader
          eyebrow="Add-ons"
          title="Extras"
          subtitle="Use these to customize any shoot. Drone is always subject to weather and airspace restrictions."
        />

        <div className="pvv-card p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {REAL_ESTATE_ADD_ONS.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  {item.note && <div className="text-xs text-white/60 mt-1">{item.note}</div>}
                </div>
                <div className="font-semibold pvv-grad-text whitespace-nowrap">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <a className="pvv-button-primary" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">Book Real Estate</a>
            <Link className="pvv-button-ghost" href="/portfolio">See Work</Link>
          </div>
        </div>

        <div className="pvv-divider" />

        <div className="text-sm text-white/60">
          <span className="text-white/70 font-semibold">Note:</span> For larger homes, multi-property days, or builder campaigns, request a custom quote.
        </div>
      </section>
    </div>
  );
}
