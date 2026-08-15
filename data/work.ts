export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  services: string[];
  brief: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "editorial-stills-study",
    title: "Editorial Stills Study",
    client: "PLOTO Visual Study",
    year: "2026",
    category: "Stills & Key Visuals",
    image: "/assets/work-editorial-stills.png",
    imageAlt:
      "Fashion model in a sculptural cream suit standing in a surreal office scene",
    summary:
      "A fashion image study built around character, styling, and a surreal narrative environment.",
    services: ["Creative direction", "Stills & key visuals", "Custom AI models"],
    brief:
      "Explore how one strong image direction can establish character, atmosphere, and campaign potential before a full production begins.",
    approach:
      "PLOTO combined editorial styling, controlled casting, and a surreal office setting into a consistent still-image language.",
    outcome:
      "A flexible set of key visuals designed to extend across launch imagery, social crops, and visual-direction testing."
  },
  {
    slug: "fashion-in-motion",
    title: "Fashion in Motion",
    client: "PLOTO Visual Study",
    year: "2026",
    category: "AI Motion & Fashion Film",
    image: "/assets/work-fashion-motion.png",
    imageAlt:
      "Fashion model in a red tailored jacket captured mid-stride against a white studio background",
    summary:
      "A motion-led fashion study that turns a controlled studio look into a sequence with rhythm and continuity.",
    services: ["AI motion", "Fashion film", "Custom AI models"],
    brief:
      "Translate a still fashion identity into short-form movement without losing consistency in model, styling, or silhouette.",
    approach:
      "A repeatable character and styling system was developed first, then extended through sequential poses and movement-ready frames.",
    outcome:
      "A coherent set of motion assets suitable for fashion-film edits, campaign teasers, and social loops."
  },
  {
    slug: "product-beauty-worlds",
    title: "Product & Beauty Worlds",
    client: "PLOTO Visual Study",
    year: "2026",
    category: "Product & Beauty Visuals",
    image: "/assets/work-product-beauty.jpg",
    imageAlt:
      "Close-up beauty portrait with jeweled pink lip art and luminous skin",
    summary:
      "Beauty imagery that balances tactile product detail with a strong editorial point of view.",
    services: ["Beauty visuals", "Art direction", "Key visuals"],
    brief:
      "Create a beauty direction where texture, finish, and close-up detail can carry both product truth and brand storytelling.",
    approach:
      "PLOTO focused the frame on material detail, expressive makeup, and a precise color language built for high-impact crops.",
    outcome:
      "A hero-image direction that can expand into product stories, beauty campaigns, and social-first details."
  },
  {
    slug: "campaign-worldbuilding",
    title: "Campaign Worldbuilding",
    client: "PLOTO Visual Study",
    year: "2026",
    category: "Campaign Visuals",
    image: "/assets/work-campaign-worldbuilding.png",
    imageAlt:
      "Two fashion models staged around an airport security scanner with sculptural luggage",
    summary:
      "A complete campaign world connecting casting, styling, location, and narrative tension in one visual system.",
    services: ["Campaign visuals", "Creative direction", "AI moodboards"],
    brief:
      "Build a campaign concept that feels authored enough for a hero image and flexible enough to travel across formats.",
    approach:
      "PLOTO developed a cinematic airport setting, controlled cast, and styling language before translating the concept into final frames.",
    outcome:
      "A unified campaign direction prepared for hero imagery, social assets, and short-form narrative extensions."
  },
  {
    slug: "lineups-lookbooks",
    title: "Lineups & Lookbooks",
    client: "PLOTO / Lilly Sarti SS26",
    year: "2026",
    category: "Digital Lookbook",
    image: "/assets/work-lineups-lookbooks.png",
    imageAlt:
      "Model in a green look posed inside a transparent ice structure on a city street",
    summary:
      "A digital lookbook system that turns a collection concept into cohesive styling imagery and product sequences.",
    services: ["Lineups & lookbooks", "Creative direction", "Concept development"],
    brief:
      "Translate the Lilly Sarti Spring/Summer 2026 collection into a visual sequence that feels consistent across individual looks.",
    approach:
      "PLOTO established a controlled environment, styling logic, and image treatment to hold the collection together from look to look.",
    outcome:
      "A cohesive set of lineup and lookbook imagery designed for digital presentation, collection review, and brand storytelling."
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
