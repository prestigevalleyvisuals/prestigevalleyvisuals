import SectionHeader from '@/components/SectionHeader';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="pvv-container py-16">
      <SectionHeader
        eyebrow="Let’s talk"
        title="Contact"
        subtitle="Tell me what you need and I’ll point you to the best package (or build a custom quote)."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="pvv-card pvv-card-hover p-6">
          <div className="text-lg font-semibold">Quick Contact</div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <div>
              <div className="text-white/50">Phone</div>
              <a className="hover:text-white" href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </div>
            <div>
              <div className="text-white/50">Email</div>
              <a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div>
              <div className="text-white/50">Service Area</div>
              <div>{SITE.serviceArea}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a className="pvv-button-primary" href={`mailto:${SITE.email}`}>Email Me</a>
            <a className="pvv-button-ghost" href={`tel:${SITE.phone}`}>Call</a>
          </div>

          <div className="mt-6 text-xs text-white/50">
            Booking is confirmed once your date/time is reserved. Drone work is subject to weather and airspace restrictions.
          </div>
        </div>

        <div className="pvv-card pvv-card-hover p-6">
          <div className="text-lg font-semibold">Book a call</div>
          <p className="mt-3 text-sm text-white/70">
            Pick the lane you’re booking for:
          </p>

          <div className="mt-5 grid gap-3">
            <a className="pvv-button-primary" href={SITE.calendly.realEstate} target="_blank" rel="noreferrer">
              Real Estate Booking
            </a>
            <a className="pvv-button-ghost" href={SITE.calendly.business} target="_blank" rel="noreferrer">
              Business Consultation
            </a>
          </div>

          <div className="mt-6 text-sm text-white/70">
            Want a full brand makeover (logo + website + content) or a builder campaign? Book the business consultation and we’ll map it out.
          </div>
        </div>
      </div>
    </div>
  );
}
