import type { Metadata } from "next";
import { PageIntro } from "@/components/animated";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected PLOTO work across editorial stills, motion, beauty, campaigns, and digital lookbooks."
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Work"
        title="Selected visual worlds, built from one clear direction."
        body="Each project connects concept, casting, styling, and generative production into imagery that can move across formats."
      />
      <section className="section pb-24 md:pb-36">
        <div className="grid gap-14 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} priority={index < 2} />
          ))}
        </div>
      </section>
    </main>
  );
}
