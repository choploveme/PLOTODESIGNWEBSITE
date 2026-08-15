import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/animated";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "PLOTO is a New York-based fashion creative and brand visual studio working across creative direction, visual strategy, and generative production."
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="A New York–based fashion creative and brand visual studio."
        body="PLOTO brings creative direction, fashion fluency, and generative technology into one production-ready visual system."
      />
      <section className="section pb-20 md:pb-32">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/hero-studio.png"
              alt="PLOTO studio visual research environment"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading label="Position" index="01" />
            <p className="text-2xl leading-relaxed text-bone md:text-3xl">
              We work across creative direction, visual strategy, and
              generative production to create distinctive brand worlds for
              fashion and culture. From concept development, casting, and
              styling to still imagery, motion, and social content, we
              translate one clear idea across every format.
            </p>
          </div>
        </div>
      </section>
      <section className="section pb-24 md:pb-36">
        <div className="grid gap-px bg-line md:grid-cols-3">
          {[
            ["01", "Creative direction gives every image a point of view."],
            ["02", "Visual systems keep one idea coherent across formats."],
            ["03", "Generative production expands what a brand world can become."]
          ].map(([number, text]) => (
            <article key={number} className="bg-paper p-6 md:p-8">
              <p className="text-xs uppercase text-smoke">{number}</p>
              <p className="mt-8 text-xl leading-relaxed text-bone">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
