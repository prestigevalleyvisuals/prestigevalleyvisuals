import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import PackageCard from '@/components/PackageCard';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_MONTHLY, REAL_ESTATE_ONE_TIME, SITE } from '@/lib/site';

export default function HomePage() {
  const featuredRealEstate = REAL_ESTATE_ONE_TIME.find((p) => p.id === 're-photo-reel')!;
  const featuredBusiness = BUSINESS_MONTHLY.find((p) => p.id === 'biz-monthly-growth')!;

  return (
    <div>
      <Hero
        eyebrow="RGV • Flagship Real Estate • Business Branding"
        title="Elevate your listings. Build your brand."
        subtitle="Premium photo & video for real estate — plus full brand makeovers, websites, and monthly content packages for small businesses. Everything is filmed and edited by Prestige Valley Visuals."
        primaryCta={{ label: 'Book Now', href: '/book' }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
        videoSrc="/media/hero-realestate.mp4"
        videoPoster="/media/hero-realestate-poster.jpg"
      />

      <section className="pvv-container py-16">
        <SectionHeader
          eyebrow="Choose your focus"
          title="Two service lanes. One premium standard."
          subtitle="Real estate agents get fast turnaround visuals that sell the home. Businesses get branding + content that looks expensive and performs."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="pvv-card pvv-card-hover overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/media/hero-realestate-poster.jpg"
                alt="Real estate visuals"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xl font-semibold">Real Estate</div>
                <div className="text-sm text-white/70">Photos • Walkthrough video • Drone • Reels</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-white/70">
                Clean, consistent, MLS-ready visuals — plus social reels that help you win listings.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="pvv-button-primary" href="/real-estate">View Packages</Link>
                <a className="pvv-button-ghost" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">Book Now</a>
              </div>
            </div>
          </div>

          <div className="pvv-card pvv-card-hover overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/media/hero-business-poster.jpg"
                alt="Business branding and content"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xl font-semibold">Business</div>
                <div className="text-sm text-white/70">Branding • Websites • Monthly content</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-white/70">
                Full brand makeovers, new logos, websites, and content that makes your business look premium.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="pvv-button-primary" href="/business">View Packages</Link>
                <a className="pvv-button-ghost" href={SITE.calendly.business} target="_blank" rel="noreferrer">Business Consult</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pvv-container">
        <SectionHeader
          eyebrow="Featured"
          title="Most booked packages"
          subtitle="Two popular options that get clients fast results — with editing included."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <PackageCard pack={featuredRealEstate} />
          <PackageCard pack={featuredBusiness} />
        </div>

        <div className="pvv-divider" />

        <div className="pvv-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <div className="text-xl font-semibold">Want custom pricing or a custom content plan?</div>
              <p className="mt-2 text-sm text-white/70">
                Not every listing or business is the same. If you want a custom quote (events, multi-locations, bigger builds, or a full marketing system), book a quick call.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a className="pvv-button-primary" href={SITE.calendly.business} target="_blank" rel="noreferrer">Business Consult</a>
              <a className="pvv-button-ghost" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">Real Estate Booking</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
