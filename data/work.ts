export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  image: string;
  summary: string;
  services: string[];
  brief: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "signal-collection",
    title: "Signal Collection",
    client: "Independent Fashion Label",
    year: "2026",
    category: "Campaign Visual System",
    image: "/assets/latest-campaign.png",
    summary:
      "A synthetic campaign language for a capsule collection moving between film, social, and retail environments.",
    services: ["Creative direction", "AI image system", "Motion prompts", "Launch assets"],
    brief:
      "The label needed a campaign that felt cinematic and collectible without the cost and rigidity of a large physical set build.",
    approach:
      "PLOTO developed a controlled visual world: reflective interiors, sculptural silhouettes, precise lighting references, and prompt rules that allowed the campaign to expand without losing authorship.",
    outcome:
      "The final system delivered hero stills, moving-image prompts, social crops, e-commerce atmosphere frames, and a reusable visual bible for future drops."
  },
  {
    slug: "motion-atlas",
    title: "Motion Atlas",
    client: "Performance Wear Studio",
    year: "2026",
    category: "Launch Film Direction",
    image: "/assets/collection-motion.png",
    summary:
      "A kinetic AI-assisted world for sculptural fabric, body movement, and ambient launch content.",
    services: ["Film concept", "Generative set design", "Look development", "Asset direction"],
    brief:
      "The studio wanted a launch direction that could make technical apparel feel sensorial, elegant, and alive.",
    approach:
      "We built a sequence of material studies and motion frames, then translated them into a consistent visual grammar for film, stills, and teaser loops.",
    outcome:
      "The campaign established a refined movement language that could be adapted across launch film, creator previews, and retail screens."
  },
  {
    slug: "botanical-index",
    title: "Botanical Index",
    client: "Luxury Accessories Brand",
    year: "2025",
    category: "Brand Worldbuilding",
    image: "/assets/collection-botanical.png",
    summary:
      "A surreal object-study series connecting accessories, glass botanicals, and AI-authored material references.",
    services: ["Worldbuilding", "Object studies", "Art direction", "Collaboration toolkit"],
    brief:
      "The brand needed a poetic visual universe for accessories that could support both product storytelling and artist collaboration.",
    approach:
      "PLOTO designed a quiet world of botanical structures, translucent surfaces, and gallery-like compositions, then systemized it for future creators.",
    outcome:
      "The work became a flexible campaign kit spanning editorial imagery, social story formats, product vignettes, and collaboration references."
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
