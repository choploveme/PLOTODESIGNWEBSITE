import type { Metadata } from "next";
import { PageIntro } from "@/components/animated";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PLOTO for AI-assisted fashion creative direction, campaign visuals, brand worlds, and collaborations."
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Start a campaign, collaboration, or visual world."
        body="Share the shape of the project, the ambition, and any timing you already know. PLOTO will respond with next steps."
      />
      <section className="section pb-24 md:pb-36">
        <div className="grid gap-12 border-t border-line pt-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase text-smoke">Studio</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-2xl text-bone transition hover:text-ink"
            >
              {site.email}
            </a>
            <p className="mt-8 max-w-sm leading-relaxed text-smoke">
              Available for fashion campaigns, AI visual systems, brand
              worldbuilding, launch films, and artist-led collaborations.
            </p>
          </div>
          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="grid gap-5"
          >
            {[
              ["Name", "name"],
              ["Email", "email"],
              ["Brand / Studio", "brand"]
            ].map(([label, name]) => (
              <label key={name} className="grid gap-2 text-xs uppercase text-smoke">
                {label}
                <input
                  name={name}
                  className="min-h-14 border border-line bg-transparent px-4 text-base normal-case text-ink outline-none transition focus:border-ink"
                />
              </label>
            ))}
            <label className="grid gap-2 text-xs uppercase text-smoke">
              Project
              <textarea
                name="project"
                rows={7}
                className="resize-none border border-line bg-transparent p-4 text-base normal-case text-ink outline-none transition focus:border-ink"
              />
            </label>
            <button type="submit" className="button w-fit">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
