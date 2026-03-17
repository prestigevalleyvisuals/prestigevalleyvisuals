export const SITE = {
  name: 'Prestige Valley Visuals',
  tagline: 'Cinematic visuals for real estate & modern brands',
  foundersPricing: 'Founders pricing (limited spots)',
  email: 'prestigevalleyvisuals@gmail.com',
  phone: '9569357771',
  phoneDisplay: '(956) 935-7771',
  calendly: {
    business: 'https://calendly.com/prestigevalleyvihsuals/30-minute-meeting-clone',
    realEstate: 'https://calendly.com/prestigevalleyvihsuals/30-minute-meeting-clone'
  },
  serviceArea: 'RGV & Surrounding Areas'
} as const;

export type ServicePackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  bestFor: string;
  description: string;
  includes: string[];
  whatIDo: string[];
  highlight?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export const BUSINESS_ONE_TIME: ServicePackage[] = [
  {
    id: 'biz-kickstart',
    name: 'Brand Kickstart',
    price: '$500',
    bestFor: 'New businesses that need a clean, consistent brand presence',
    description:
      'A polished foundation: logo, colors, social polish, and a first round of content you can post immediately.',
    includes: [
      'New logo or logo refresh (2 concepts + 2 revisions)',
      'Brand colors + typography direction',
      'Social profile optimization (Instagram + Facebook)',
      '10 branded post templates (Canva)',
      '1 content session (up to 1 hour)',
      '1 promo Reel (15–30s) — editing included',
      '10 edited photos (for web + social)'
    ],
    whatIDo: [
      'I plan the look + feel (moodboard + shot list)',
      'I film + photograph the session',
      'I edit the Reel (cuts, timing, music, color)',
      'I deliver everything ready to post'
    ],
    ctaLabel: 'Book a Business Consult',
    ctaHref: SITE.calendly.business
  },
  {
    id: 'biz-makeover',
    name: 'Full Brand Makeover',
    price: '$1,000',
    highlight: true,
    bestFor: 'Businesses ready to upgrade their image and start marketing consistently',
    description:
      'A full visual upgrade + a simple website presence. Perfect when your business is real, but your branding doesn’t reflect it yet.',
    includes: [
      'Full logo suite (primary + secondary + mark)',
      'Mini brand guide (colors, fonts, usage)',
      '1-page website (mobile-first, designed to convert)',
      'Calendly scheduling setup (if your business needs it)',
      'Google Business Profile optimization (if applicable)',
      '1 content session (up to 1.5 hours)',
      '2 promo Reels (15–45s) — editing included',
      '15 edited photos'
    ],
    whatIDo: [
      'I design/refine your brand identity',
      'I build your website (mobile-first)',
      'I connect forms + Calendly (optional)',
      'I film + edit your content for short-form'
    ],
    ctaLabel: 'Book a Business Consult',
    ctaHref: SITE.calendly.business
  },
  {
    id: 'biz-authority',
    name: 'Brand Authority + Website',
    price: '$1,500',
    bestFor: 'Established businesses that want a premium brand + a stronger online system',
    description:
      'Premium visuals, a stronger website, and enough content to support campaigns, launches, and daily marketing.',
    includes: [
      'Complete brand system (logo suite + brand guide)',
      'Multi-section website (3–5 pages as needed)',
      'SEO basics (titles, meta, image optimization)',
      'Calendly + lead capture forms + email routing',
      '1–2 content sessions (photo + video)',
      '4 Reels (15–60s) — editing included',
      '25 edited photos',
      'Launch checklist + handoff training'
    ],
    whatIDo: [
      'I map your site structure + build it',
      'I film and edit content to match the brand',
      'I set up scheduling + lead capture',
      'I deliver a clean system you can grow'
    ],
    priceNote:
      'Domain + hosting are paid by the client (or billed separately).',
    ctaLabel: 'Book a Business Consult',
    ctaHref: SITE.calendly.business
  }
];

export const BUSINESS_MONTHLY: ServicePackage[] = [
  {
    id: 'biz-monthly-presence',
    name: 'Monthly Presence',
    price: '$400 / mo',
    bestFor: 'Small businesses that want consistent, professional content every month',
    description:
      'A simple monthly plan to keep your business visible with clean, edited content.',
    includes: [
      '1 monthly content session (up to 1 hour)',
      '2 short-form videos (Reels/TikToks) — editing included',
      '10 edited photos',
      'Delivery ready for posting'
    ],
    whatIDo: [
      'I plan a quick shot list for your business',
      'I film + photograph your content session',
      'I edit everything (cuts, music, color)',
      'I deliver an organized folder ready to post'
    ],
    ctaLabel: 'Book a Business Consult',
    ctaHref: SITE.calendly.business
  },
  {
    id: 'biz-monthly-growth',
    name: 'Monthly Growth',
    price: '$650 / mo',
    highlight: true,
    bestFor: 'Businesses that want more content variety and stronger consistency',
    description:
      'More shoots, more deliverables, and faster momentum—without hiring a team.',
    includes: [
      '2 content sessions per month (up to 1 hour each)',
      '4 short-form videos — editing included',
      '20 edited photos',
      'Priority turnaround'
    ],
    whatIDo: [
      'I batch-capture content to build variety',
      'I edit videos with clean pacing + premium color',
      'I keep your look consistent month-to-month',
      'I deliver content ready for IG/TikTok'
    ],
    ctaLabel: 'Book a Business Consult',
    ctaHref: SITE.calendly.business
  },
  {
    id: 'biz-empire',
    name: 'Build an Empire',
    price: 'Starting at $1,000 / mo',
    bestFor: 'Brands that want a real content system + ongoing support',
    description:
      'A premium monthly partnership: higher output, stronger consistency, and brand support that grows with you.',
    includes: [
      'Content capture frequency based on your goals (scope-based)',
      '8 short-form videos — editing included',
      '25 edited photos',
      'Monthly content direction (what to post + why)',
      'Light website/booking support as needed (scope-based)'
    ],
    whatIDo: [
      'I build a simple content system around your offers',
      'I capture enough variety to post consistently',
      'I edit everything (cuts, music, color)',
      'I keep your website/booking flow aligned when needed'
    ],
    ctaLabel: 'Start Build an Empire',
    ctaHref: SITE.calendly.business
  }
];

export const BUSINESS_A_LA_CARTE: { name: string; price: string; note?: string }[] = [
  { name: 'Logo design', price: '$300', note: '1 primary concept + 2 revisions' },
  { name: 'Logo suite (primary + secondary + mark)', price: '$500' },
  { name: 'Mini brand guide', price: '$250' },
  { name: 'Landing page website', price: '$700', note: 'Domain + hosting paid by client' },
  { name: '5-page website', price: '$1,500', note: 'Domain + hosting paid by client' },
  { name: 'Content session (photo/video) — 1 hour', price: '$350' },
  { name: '1 promo Reel (15–60s) — editing included', price: '$150' },
  { name: '3 Reels bundle — editing included', price: '$375' },
  { name: '15 edited photos', price: '$150' }
];

export const REAL_ESTATE_ONE_TIME: ServicePackage[] = [
  {
    id: 're-photo',
    name: 'Photo Essentials',
    price: '$150',
    bestFor: 'Clean listing photos with fast delivery',
    description:
      'Professional interiors/exteriors edited for MLS + social.',
    includes: [
      'Up to 25 edited photos',
      'Interior + exterior coverage',
      'MLS-ready exports + social versions',
      '24–48 hour delivery'
    ],
    whatIDo: [
      'I shoot angles that sell the space',
      'I correct color + straighten lines',
      'I deliver MLS + social sizes',
      'I keep turnaround fast'
    ],
    ctaLabel: 'Book Real Estate',
    ctaHref: SITE.calendly.realEstate
  },
  {
    id: 're-photo-reel',
    name: 'Photo + Reel',
    price: '$275',
    highlight: true,
    bestFor: 'Agents who want photos + a short-form video for social',
    description:
      'A clean photo set plus a vertical Reel that helps you get more eyes on the listing.',
    includes: [
      'Up to 30 edited photos',
      '1 vertical Reel (15–30s) — editing included',
      'Social-ready delivery (IG/TikTok)',
      '24–72 hour delivery'
    ],
    whatIDo: [
      'I capture a smooth walkthrough',
      'I edit the Reel with pacing + music',
      'I color-correct to match the home',
      'I deliver ready-to-post'
    ],
    ctaLabel: 'Book Real Estate',
    ctaHref: SITE.calendly.realEstate
  },
  {
    id: 're-cinematic',
    name: 'Cinematic Listing',
    price: '$395',
    bestFor: 'Higher-end listings that need a full visual story',
    description:
      'A full set of visuals: photos + a longer video + drone (when allowed).',
    includes: [
      'Up to 40 edited photos',
      '1 cinematic walkthrough video (60–90s) — editing included',
      'Drone shots (weather + airspace permitting)',
      'Vertical Reel cut-down (15–30s)',
      '48–96 hour delivery'
    ],
    whatIDo: [
      'I plan the flow of the walkthrough',
      'I film smooth interior/exterior clips',
      'I color-grade and edit the final video',
      'I deliver multiple formats for MLS + social'
    ],
    ctaLabel: 'Book Real Estate',
    ctaHref: SITE.calendly.realEstate
  },
  {
    id: 're-newbuild',
    name: 'New Build Showcase',
    price: '$450',
    bestFor: 'Builders & new construction marketing',
    description:
      'Showcase the craftsmanship with photo + video + drone to help your build stand out online.',
    includes: [
      'Up to 45 edited photos (detail-focused)',
      '1 cinematic video (60–120s) — editing included',
      'Drone shots (weather + airspace permitting)',
      '1 vertical Reel cut-down',
      'Optional builder branding overlay'
    ],
    whatIDo: [
      'I capture details that buyers notice',
      'I edit with a clean, premium style',
      'I provide marketing-ready exports',
      'I help you show consistency across projects'
    ],
    ctaLabel: 'Book Real Estate',
    ctaHref: SITE.calendly.realEstate
  }
];

export const REAL_ESTATE_SUBSCRIPTIONS: ServicePackage[] = [
  {
    id: 're-silver',
    name: 'Silver Subscription',
    price: '$399 / mo',
    bestFor: 'Agents who want consistent content at a predictable monthly price',
    description:
      'A starter monthly plan to keep you active on social and ready for new listings.',
    includes: [
      '2 vertical listing Reels (15–30s) — editing included',
      'Priority scheduling for subscribers',
      'Member pricing on add-ons (drone, twilight, extra reels)'
    ],
    whatIDo: [
      'I keep your visuals consistent month-to-month',
      'I film quick, smooth listing clips',
      'I edit for clean pacing + music + color',
      'I deliver ready-to-post files'
    ],
    ctaLabel: 'Join Silver',
    ctaHref: SITE.calendly.realEstate
  },
  {
    id: 're-gold',
    name: 'Gold Subscription',
    price: '$699 / mo',
    highlight: true,
    bestFor: 'Active agents that want more listings covered each month',
    description:
      'More volume, more consistency, and better member perks—built for agents who list regularly.',
    includes: [
      '4 vertical listing Reels (15–30s) — editing included',
      'Drone included on 2 listings (weather/airspace permitting)',
      'Priority scheduling + faster turnaround',
      'Member pricing on add-ons'
    ],
    whatIDo: [
      'I reserve priority spots for subscribers',
      'I keep your brand visuals consistent across listings',
      'I edit and deliver fast so you can post consistently',
      'I help you stay visible between closings'
    ],
    ctaLabel: 'Join Gold',
    ctaHref: SITE.calendly.realEstate
  },
  {
    id: 're-black',
    name: 'Black Subscription',
    price: '$899 / mo',
    bestFor: 'Agents and teams who want the most coverage + highest priority',
    description:
      'High-volume support and priority scheduling for agents who want to dominate locally.',
    includes: [
      'Up to 6 vertical listing Reels (15–30s) — editing included',
      'Drone included (weather/airspace permitting)',
      'Highest priority scheduling + fastest turnaround',
      'Member pricing on add-ons'
    ],
    whatIDo: [
      'I operate like your content partner',
      'I film listings efficiently and consistently',
      'I edit with a clean premium style',
      'I keep you stocked with content all month'
    ],
    ctaLabel: 'Join Black',
    ctaHref: SITE.calendly.realEstate
  }
];

export const REAL_ESTATE_ADD_ONS: { name: string; price: string; note?: string }[] = [
  { name: 'Drone add-on', price: '$100', note: 'Weather + airspace permitting' },
  { name: 'Twilight photos', price: '$75' },
  { name: 'Additional Reel (15–30s) — editing included', price: '$100' },
  { name: 'Rush delivery', price: '$50', note: 'Subject to availability' }
];

export const PORTFOLIO = {
  business: [
    {
      id: 'biz-1',
      title: 'Lifestyle / Nightlife Content',
      kind: 'video' as const,
      src: '/portfolio/business/port1.mp4',
      poster: '/portfolio/business/port1-poster.jpg'
    },
    {
      id: 'biz-2',
      title: 'Social Photo (Portrait)',
      kind: 'image' as const,
      src: '/portfolio/business/port2.jpg'
    },
    {
      id: 'biz-3',
      title: 'Social Photo (Portrait)',
      kind: 'image' as const,
      src: '/portfolio/business/port3.jpg'
    }
  ],
  realEstate: [
    {
      id: 're-1',
      title: 'Listing Walkthrough (Preview)',
      kind: 'video' as const,
      src: '/portfolio/realestate/house1.mp4',
      poster: '/portfolio/realestate/house1-poster.jpg'
    },
    {
      id: 're-2',
      title: 'Exterior Photo (Day)',
      kind: 'image' as const,
      src: '/portfolio/realestate/house2.jpg'
    },
    {
      id: 're-3',
      title: 'Exterior Photo (Night / Mood)',
      kind: 'image' as const,
      src: '/portfolio/realestate/house3.png'
    },
    {
      id: 're-4',
      title: 'Listing Walkthrough (Preview)',
      kind: 'video' as const,
      src: '/portfolio/realestate/house4.mp4',
      poster: '/portfolio/realestate/house4-poster.jpg'
    }
  ]
};
