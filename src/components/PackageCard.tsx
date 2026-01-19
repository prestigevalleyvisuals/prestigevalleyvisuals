import Link from 'next/link';
import { ServicePackage } from '@/lib/site';

export default function PackageCard({ pack }: { pack: ServicePackage }) {
  return (
    <div
      className={`pvv-card pvv-card-hover p-6 flex flex-col ${pack.highlight ? 'border-pvv-gold/40 shadow-glow' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{pack.name}</div>
          <div className="mt-1 text-sm text-white/60">Best for: {pack.bestFor}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold pvv-grad-text">{pack.price}</div>
          {pack.priceNote && <div className="mt-1 text-xs text-white/50">{pack.priceNote}</div>}
        </div>
      </div>

      <p className="mt-4 text-sm text-white/75">{pack.description}</p>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {pack.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-pvv-gold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <details className="mt-5 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
        <summary className="cursor-pointer text-sm font-semibold text-white/90 select-none">
          What I do
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          {pack.whatIDo.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-pvv-gold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </details>

      {pack.ctaLabel && pack.ctaHref && (
        <div className="mt-6">
          {pack.ctaHref.startsWith('http') ? (
            <a
              className={pack.highlight ? 'pvv-button-primary w-full' : 'pvv-button-ghost w-full'}
              href={pack.ctaHref}
              target="_blank"
              rel="noreferrer"
            >
              {pack.ctaLabel}
            </a>
          ) : (
            <Link className={pack.highlight ? 'pvv-button-primary w-full' : 'pvv-button-ghost w-full'} href={pack.ctaHref}>
              {pack.ctaLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
