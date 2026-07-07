import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/work";

export function CaseStudyCard({
  study,
  priority = false
}: {
  study: CaseStudy;
  priority?: boolean;
}) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite md:aspect-[5/6]">
        <Image
          src={study.image}
          alt={`${study.title} campaign visual`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover transition duration-700 ease-smooth group-hover:scale-105"
        />
      </div>
      <div className="mt-5 grid gap-3 border-t border-line pt-4 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs uppercase text-smoke">
            {study.client} / {study.year}
          </p>
          <h2 className="mt-2 text-2xl font-medium">{study.title}</h2>
        </div>
        <p className="text-xs uppercase text-bone md:text-right">{study.category}</p>
      </div>
      <p className="mt-4 max-w-xl leading-relaxed text-smoke">{study.summary}</p>
    </Link>
  );
}
