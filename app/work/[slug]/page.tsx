import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, getCaseStudy } from "@/data/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: `${study.title} | PLOTO`,
      description: study.summary,
      images: [study.image]
    }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main>
      <section className="section pt-36 md:pt-44">
        <p className="eyebrow">
          {study.client} / {study.year}
        </p>
        <h1 className="max-w-6xl font-display text-6xl leading-[0.9] md:text-9xl">
          {study.title}
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.7fr]">
          <p className="max-w-3xl text-xl leading-relaxed text-bone">
            {study.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {study.services.map((service) => (
              <span
                key={service}
                className="border border-line px-3 py-2 text-xs uppercase text-smoke"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-14 md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/9]">
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="section pb-24 md:pb-36">
        <SectionHeading label="Case Study" index="01" />
        <div className="grid gap-px bg-line md:grid-cols-3">
          {[
            ["Brief", study.brief],
            ["Approach", study.approach],
            ["Outcome", study.outcome]
          ].map(([title, body]) => (
            <article key={title} className="bg-paper p-6 md:p-8">
              <h2 className="text-xs font-medium uppercase text-smoke">{title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-bone">{body}</p>
            </article>
          ))}
        </div>
        <Link href="/work" className="button-muted mt-10">
          Back to Work
        </Link>
      </section>
    </main>
  );
}
