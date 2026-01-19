import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { BUSINESS_A_LA_CARTE, BUSINESS_MONTHLY, BUSINESS_ONE_TIME, SITE } from '@/lib/site';

export const metadata = {
  title: 'Business Services'
};

export default function BusinessPage() {
  return (
    <div>
      <Hero
        eyebrow="Business Services"
        title="Brand makeovers + content that builds an empire"
        subtitle="New logos, full brand upgrades, websites, and monthly content—filmed and edited in a premium style so your business looks expensive and stays consistent online."
        primaryCta={{ label: 'Book a Business Consult', href: SITE.calendly.business, external: true }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
        videoSrc="/media/hero-business.mp4"
        videoPoster="/media/hero-business-poster.jpg"
      />

      <section className="pvv-container py-16">
        <SectionHeader
          eyebrow="One-time"
          title="Brand + Website Packages"
          subtitle="Choose a package based on how big of a transformation you want. Editing is included for every video deliverable."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {BUSINESS_ONE_TIME.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}
        </div>

        <div className="pvv-divider" />

        <SectionHeader
          eyebrow="Monthly"
          title="Monthly Content Packages"
          subtitle="Stay consistent online with monthly content you don’t have to think about. Build an Empire starts at $1,000/mo."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {BUSINESS_MONTHLY.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}
        </div>

        <div className="pvv-divider" />

        <SectionHeader
          eyebrow="A la carte"
          title="Add-ons & One-off Services"
          subtitle="Perfect if you want to build your package or just need one thing done."
        />

        <div className="pvv-card p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {BUSINESS_A_LA_CARTE.map((item) => (
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
            <a className="pvv-button-primary" href={SITE.calendly.business} target="_blank" rel="noreferrer">
              Get a Quote
            </a>
            <Link className="pvv-button-ghost" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="pvv-divider" />

        <div className="pvv-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <div className="text-xl font-semibold">Websites & systems note</div>
              <p className="mt-2 text-sm text-white/70">
                Website domain + hosting are paid by the client (or billed separately). I can connect Calendly scheduling, contact forms, and email routing based on your business needs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a className="pvv-button-primary" href={SITE.calendly.business} target="_blank" rel="noreferrer">Book a Consult</a>
              <a className="pvv-button-ghost" href={`mailto:${SITE.email}`}>Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
