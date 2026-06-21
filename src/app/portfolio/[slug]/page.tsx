import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { portfolioEvents, portfolioEditions } from "@/data/portfolio";

export function generateStaticParams() {
  const slugs = new Set<string>();
  [...portfolioEvents, ...portfolioEditions].forEach((e) => slugs.add(e.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function PortfolioEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event =
    portfolioEvents.find((e) => e.slug === slug) ||
    portfolioEditions.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <div className="bg-secondary">
      <PageLayout>
        <PortfolioDetail event={event} />
      </PageLayout>
    </div>
  );
}
