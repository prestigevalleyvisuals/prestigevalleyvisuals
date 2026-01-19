'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Item = {
  id: string;
  title: string;
  kind: 'image' | 'video';
  src: string;
  poster?: string;
};

export default function PortfolioGrid({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = useMemo(() => items.find((i) => i.id === openId) ?? null, [items, openId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setOpenId(item.id)}
            className="text-left pvv-card pvv-card-hover overflow-hidden"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={item.kind === 'video' ? (item.poster ?? item.src) : item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {item.kind === 'video' && (
                <div className="absolute top-3 right-3 pvv-pill text-white/80">Video</div>
              )}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-xs text-white/70">Click to view</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-4xl">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="font-semibold">{active.title}</div>
              <button className="pvv-button-ghost" onClick={() => setOpenId(null)} aria-label="Close">
                Close
              </button>
            </div>

            <div className="pvv-card overflow-hidden">
              <div className="relative w-full bg-black">
                {active.kind === 'video' ? (
                  <video
                    className="w-full max-h-[75vh] object-contain"
                    controls
                    playsInline
                    preload="none"
                    poster={active.poster}
                  >
                    <source src={active.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={active.src}
                    alt={active.title}
                    width={1400}
                    height={900}
                    className="w-full max-h-[75vh] object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
