import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { portfolioEvents } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default async function PortfolioEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = portfolioEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <div className="bg-secondary">
      <PageLayout>
        <PortfolioDetail event={event} />
      </PageLayout>
    </div>
  );
}
