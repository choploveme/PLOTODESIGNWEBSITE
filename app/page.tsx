import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animated";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/services";
import { caseStudies } from "@/data/work";

export default function HomePage() {
  const featured = caseStudies[0];

  return (
    <main>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-line px-4 pb-8 pt-32 md:px-8 md:pb-12">
        <Image
          src="/assets/hero-studio.png"
          alt="Cinematic AI fashion studio environment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.05),rgba(8,8,8,0.35)_48%,rgba(8,8,8,0.92))]" />
        <div className="relative mx-auto w-full max-w-site">
          <FadeIn>
            <p className="eyebrow">AI-powered fashion creative studio</p>
            <h1 className="max-w-7xl text-balance font-display text-6xl leading-[0.88] md:text-9xl lg:text-[11rem]">
              Fashion imagery with machine imagination and human taste.
            </h1>
            <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between">
              <p className="max-w-2xl text-lg leading-relaxed text-bone md:text-xl">
                PLOTO directs AI-assisted campaigns, brand worlds, visual
                systems, and collaborations for fashion labels moving at the
                speed of culture.
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
          title="Campaign worlds shaped for editorial presence and digital velocity."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <CaseStudyCard study={featured} priority />
          <div className="grid gap-10 md:grid-cols-2 lg:block lg:space-y-12">
            {caseStudies.slice(1).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-20 md:pb-32">
        <SectionHeading label="Studio Practice" index="02" />
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            AI as a creative instrument, not a shortcut.
          </h2>
          <div className="grid gap-8">
            <p className="text-xl leading-relaxed text-bone">
              We design the visual logic behind the image: references, prompts,
              set worlds, material studies, feedback loops, and production
              outputs that stay coherent across every touchpoint.
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
            src="/assets/collection-botanical.png"
            alt="AI-assisted botanical fashion worldbuilding study"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.78),rgba(8,8,8,0.12))]" />
          <div className="relative flex min-h-[70svh] max-w-2xl flex-col justify-end p-5 md:p-10">
            <p className="eyebrow">Brand Worldbuilding</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              A visual universe before the first asset is made.
            </h2>
            <Link href="/services" className="button mt-8 w-fit">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
