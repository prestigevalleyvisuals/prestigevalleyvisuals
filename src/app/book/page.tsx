import SectionHeader from '@/components/SectionHeader';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Book'
};

export default function BookPage() {
  return (
    <div className="pvv-container py-16">
      <SectionHeader
        eyebrow="Book"
        title="Pick your booking link"
        subtitle="Use the correct Calendly link based on what you’re booking for."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="pvv-card pvv-card-hover p-6">
          <div className="text-xl font-semibold">Real Estate</div>
          <p className="mt-2 text-sm text-white/70">
            Listing photos, walkthrough video, drone, reels, and subscription clients.
          </p>
          <div className="mt-6">
            <a className="pvv-button-primary w-full" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">
              Book Real Estate
            </a>
          </div>
        </div>

        <div className="pvv-card pvv-card-hover p-6">
          <div className="text-xl font-semibold">Business</div>
          <p className="mt-2 text-sm text-white/70">
            Brand makeovers, new logos, websites, Calendly setup, monthly content.
          </p>
          <div className="mt-6">
            <a className="pvv-button-primary w-full" href={SITE.calendly.business} target="_blank" rel="noreferrer">
              Book Business Consult
            </a>
          </div>
        </div>
      </div>

      <div className="pvv-divider" />

      <div className="pvv-card p-6 md:p-8">
        <div className="text-lg font-semibold">Need help choosing?</div>
        <p className="mt-2 text-sm text-white/70">
          If you’re not sure which package fits, book a business consultation and tell me what you’re trying to accomplish. I’ll recommend the fastest path.
        </p>
      </div>
    </div>
  );
}
