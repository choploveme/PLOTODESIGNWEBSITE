import type { Metadata } from "next";
import { PageIntro } from "@/components/animated";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected PLOTO work across AI-assisted fashion campaign visuals, launch films, and brand worldbuilding."
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Work"
        title="Selected campaigns, visual systems, and synthetic fashion worlds."
        body="Each project is built as a directed image system: editorial enough to hold attention, structured enough to scale."
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
