import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animated";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/services";
import { caseStudies } from "@/data/work";

export default function HomePage() {
  const featuredStudies = caseStudies.slice(0, 3);
  const featured = featuredStudies[0];

  return (
    <main>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-line px-4 pb-8 pt-32 md:px-8 md:pb-12">
        <Image
          src="/assets/ploto-home-hero.jpg"
          alt="Model reclining in a sculptural pale garment beside a white car"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_center] opacity-75 md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.05),rgba(8,8,8,0.35)_48%,rgba(8,8,8,0.92))]" />
        <div className="relative mx-auto w-full max-w-site">
          <FadeIn>
            <p className="eyebrow">New York Perspective · Creative Direction · Generative Production</p>
            <h1 className="max-w-7xl text-balance font-display text-6xl leading-[0.88] md:text-9xl lg:text-[11rem]">
              Crafting Visual Narratives That Move Brands Forward.
            </h1>
            <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between">
              <p className="max-w-2xl text-lg leading-relaxed text-bone md:text-xl">
                From creative strategy and fashion storytelling to generative
                production, we build distinctive, scalable visual systems for
                brands ready to speak globally.
              </p>
              <Link href="/work" className="button w-fit">
                View Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20 md:py-32">
        <SectionHeading
          label="Selected Work"
          index="01"
          title="Visual systems built to move from one strong idea across every format."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <CaseStudyCard study={featured} priority />
          <div className="grid gap-10 md:grid-cols-2 lg:block lg:space-y-12">
            {featuredStudies.slice(1).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-20 md:pb-32">
        <SectionHeading label="Studio Practice" index="02" />
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            One clear direction, built to travel.
          </h2>
          <div className="grid gap-8">
            <p className="text-xl leading-relaxed text-bone">
              PLOTO brings creative direction, fashion fluency, and generative
              technology into one production-ready visual system—from concept
              and casting to stills, motion, and social content.
            </p>
            <div className="grid gap-px bg-line md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="bg-paper p-6">
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-smoke">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-24 md:pb-36">
        <div className="relative min-h-[70svh] overflow-hidden">
          <Image
            src="/assets/work-campaign-worldbuilding.png"
            alt="Fashion campaign staged around an airport security scanner"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.78),rgba(8,8,8,0.12))]" />
          <div className="relative flex min-h-[70svh] max-w-2xl flex-col justify-end p-5 md:p-10">
            <p className="eyebrow">Campaign Visuals</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              One coherent brand world, from concept to campaign.
            </h2>
            <Link href="/work/campaign-worldbuilding" className="button mt-8 w-fit">
              View the Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
