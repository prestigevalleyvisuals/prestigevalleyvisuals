import SectionHeader from '@/components/SectionHeader';
import PortfolioGrid from '@/components/PortfolioGrid';
import { PORTFOLIO } from '@/lib/site';

export const metadata = {
  title: 'Portfolio'
};

export default function PortfolioPage() {
  return (
    <div className="pvv-container py-16">
      <SectionHeader
        eyebrow="Work"
        title="Portfolio"
        subtitle="A small preview of my real estate listings and business content work."
      />

      <div className="grid gap-12">
        <div>
          <SectionHeader title="Real Estate" subtitle="Photos + walkthrough previews." />
          <PortfolioGrid items={PORTFOLIO.realEstate} />
        </div>

        <div>
          <SectionHeader title="Business" subtitle="Brand content + social-ready visuals." />
          <PortfolioGrid items={PORTFOLIO.business} />
        </div>
      </div>
    </div>
  );
}
