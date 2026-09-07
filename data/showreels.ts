export const showreelCategories = [
  "All",
  "Collection Campaign",
  "Creative Direction",
  "Beauty",
  "Product"
] as const;

export type ShowreelCategory = (typeof showreelCategories)[number];

export type Showreel = {
  id: string;
  title: string;
  category: Exclude<ShowreelCategory, "All">;
  year: string;
  description: string;
  poster: string;
  posterPosition?: string;
  video: string | null;
  featured?: boolean;
};

export const showreels: Showreel[] = [
  {
    id: "reel-01",
    title: "01",
    category: "Product",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/ploto-home-hero.jpg",
    posterPosition: "52% 50%",
    video: "/videos/reel-01.mp4",
    featured: true
  },
  {
    id: "reel-02",
    title: "02",
    category: "Creative Direction",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/latest-campaign.png",
    posterPosition: "50% 44%",
    video: "/videos/reel-02.mp4"
  },
  {
    id: "reel-03",
    title: "03",
    category: "Creative Direction",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/collection-motion.png",
    posterPosition: "52% 50%",
    video: "/videos/reel-03.mp4"
  },
  {
    id: "reel-04",
    title: "04",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/collection-botanical.png",
    posterPosition: "46% 50%",
    video: "/videos/reel-04.mp4"
  },
  {
    id: "reel-05",
    title: "05",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/hero-studio.png",
    posterPosition: "50% 46%",
    video: "/videos/reel-05.mp4",
    featured: true
  },
  {
    id: "reel-06",
    title: "06",
    category: "Beauty",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/collection-motion.png",
    posterPosition: "30% 52%",
    video: "/videos/reel-06.mp4"
  },
  {
    id: "reel-07",
    title: "07",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/collection-botanical.png",
    posterPosition: "68% 48%",
    video: "/videos/reel-07.mp4"
  },
  {
    id: "reel-08",
    title: "08",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/latest-campaign.png",
    posterPosition: "30% 48%",
    video: "/videos/reel-08.mp4"
  },
  {
    id: "reel-09",
    title: "09",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/ploto-home-hero.jpg",
    posterPosition: "38% 50%",
    video: "/videos/reel-09.mp4"
  },
  {
    id: "reel-10",
    title: "10",
    category: "Creative Direction",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/hero-studio.png",
    posterPosition: "65% 50%",
    video: "/videos/reel-10.mp4"
  },
  {
    id: "reel-11",
    title: "11",
    category: "Collection Campaign",
    year: "2026",
    description: "PLOTO moving-image study for fashion, culture, and visual storytelling.",
    poster: "/assets/collection-botanical.png",
    posterPosition: "32% 50%",
    video: "/videos/reel-11.mp4"
  }
];
