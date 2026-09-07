import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShowreelGallery } from "@/components/showreel-gallery";
import { showreels } from "@/data/showreels";

export const metadata: Metadata = {
  title: "Showreel",
  description:
    "PLOTO motion studies, fashion films, campaign worlds, and generative moving image."
};

export default function ShowreelPage() {
  return (
    <main className="overflow-hidden bg-[#070707] text-white">
      <section
        className="relative min-h-[58dvh] overflow-hidden md:min-h-[68dvh] md:max-h-[760px]"
        aria-labelledby="showreel-title"
      >
        <Image
          src="/images/showreel-banner-grain.png"
          alt="PLOTO fashion film portrait in a night parking structure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_38%] md:object-[center_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/75" />
        <div className="section relative z-10 flex min-h-[58dvh] flex-col justify-end pb-8 pt-24 md:min-h-[68dvh] md:max-h-[760px] md:pb-10">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                Motion archive · 2025—26
              </p>
              <h1
                id="showreel-title"
                className="mt-4 max-w-5xl text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.8] tracking-[-0.07em]"
              >
                SHOWREEL
              </h1>
            </div>
            <a
              href="#films"
              className="inline-flex w-fit items-center gap-3 border-b border-white pb-1 text-xs font-medium uppercase tracking-[0.08em]"
            >
              Explore films <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section id="films" className="section py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Visual narratives, designed to move.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/58 md:text-lg">
            Fashion films, campaign worlds, and motion studies shaped through
            creative direction and generative production.
          </p>
        </div>

        <ShowreelGallery items={[...showreels].reverse()} />
      </section>

      <section className="border-t border-white/15">
        <div className="section grid min-h-[62vh] content-between gap-20 py-16 md:py-24">
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Have a collection, campaign, or visual world ready to move?
          </p>
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Let&apos;s make the next frame.
            </h2>
            <Link
              href="/contact"
              className="shrink-0 border-b border-white pb-1 text-xs font-medium uppercase tracking-[0.08em]"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
