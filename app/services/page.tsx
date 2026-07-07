import type { Metadata } from "next";
import { PageIntro } from "@/components/animated";
import { SectionHeading } from "@/components/section-heading";
import { process, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PLOTO services include fashion creative direction, AI-assisted campaign visuals, brand worldbuilding, and artist collaborations."
};

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Services"
        title="Creative direction for fashion brands entering an AI-native visual era."
        body="PLOTO pairs editorial taste with generative workflows, giving brands a visual system that is expressive, controllable, and built to travel."
      />
      <section className="section pb-20 md:pb-32">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="bg-paper p-6 md:p-10">
              <h2 className="font-display text-4xl leading-none md:text-5xl">
                {service.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section pb-24 md:pb-36">
        <SectionHeading label="Process" index="01" title="A directed system from concept to final image." />
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step, index) => (
            <article key={step} className="border-t border-line pt-5">
              <p className="text-xs uppercase text-smoke">0{index + 1}</p>
              <p className="mt-6 text-xl leading-relaxed text-bone">{step}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
