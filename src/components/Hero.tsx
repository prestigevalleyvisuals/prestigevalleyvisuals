import Link from 'next/link';
import { SITE } from '@/lib/site';

type CTA = {
  label: string;
  href: string;
  external?: boolean;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  videoSrc?: string;
  videoPoster?: string;
};

function HeroLink({ cta, variant }: { cta: CTA; variant: 'primary' | 'ghost' }) {
  const className = variant === 'primary' ? 'pvv-button-primary' : 'pvv-button-ghost';

  if (cta.external) {
    return (
      <a className={className} href={cta.href} target="_blank" rel="noreferrer">
        {cta.label}
      </a>
    );
  }

  return (
    <Link className={className} href={cta.href}>
      {cta.label}
    </Link>
  );
}

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, videoSrc, videoPoster }: Props) {
  return (
    <section className="relative overflow-hidden">
      {videoSrc && (
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
      )}

      <div className="relative pvv-container py-20 md:py-28">
        {eyebrow && <div className="pvv-pill mb-4 text-white/80">{eyebrow}</div>}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          <span className="pvv-grad-text">{title}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-base md:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <HeroLink cta={primaryCta} variant="primary" />
          {secondaryCta && <HeroLink cta={secondaryCta} variant="ghost" />}
        </div>

        {SITE.foundersPricing && (
          <div className="mt-4">
            <span className="pvv-pill text-white/70">{SITE.foundersPricing}</span>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-2">
          <span className="pvv-pill text-white/70">Drone Available</span>
          <span className="pvv-pill text-white/70">Editing Included</span>
          <span className="pvv-pill text-white/70">Fast Turnaround</span>
        </div>
      </div>
    </section>
  );
}
