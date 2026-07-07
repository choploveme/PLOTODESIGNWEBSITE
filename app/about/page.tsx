import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/animated";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "PLOTO is a U.S.-based AI fashion creative studio focused on visual storytelling, brand worlds, and collaborations."
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="A fashion creative studio built for the new image economy."
        body="Based in the U.S., PLOTO works with emerging and established brands to create authored campaign visuals with AI as part of the creative process."
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
              We believe AI changes the pace of fashion imagery, but not the
              need for taste, restraint, and a clear creative point of view.
              PLOTO exists to make generative work feel directed, tactile, and
              culturally specific.
            </p>
          </div>
        </div>
      </section>
      <section className="section pb-24 md:pb-36">
        <div className="grid gap-px bg-line md:grid-cols-3">
          {[
            ["01", "Human authorship remains the source of the work."],
            ["02", "Generative systems should be edited with discipline."],
            ["03", "Fashion worlds must feel memorable before they become scalable."]
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
