import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="section border-t border-line py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="text-3xl font-semibold">
            PLOTO
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke">
            New York perspective, creative direction, and generative production
            for fashion and culture.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs font-medium uppercase text-bone">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.socials.map((social) =>
            "href" in social ? (
              <a key={social.label} href={social.href}>
                {social.label}
              </a>
            ) : (
              <span key={social.label}>{social.label}</span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
