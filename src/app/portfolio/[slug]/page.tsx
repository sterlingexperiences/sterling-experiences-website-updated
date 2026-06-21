import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { portfolioEvents, portfolioEditions } from "@/data/portfolio";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  const slugs = new Set<string>();
  [...portfolioEvents, ...portfolioEditions].forEach((e) => slugs.add(e.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const event =
    portfolioEvents.find((e) => e.slug === slug) ||
    portfolioEditions.find((e) => e.slug === slug);

  if (!event) return {};

  return {
    title: event.name,
    description: event.description.slice(0, 160),
    openGraph: {
      title: event.name,
      description: event.description.slice(0, 160),
      images: event.coverImage
        ? [{ url: `${SITE.url}${event.coverImage}`, width: 1200, height: 630, alt: event.name }]
        : undefined,
    },
  };
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
