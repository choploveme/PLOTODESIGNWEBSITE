export type ReelLike = {
  category: string;
  video: string | null;
};

export function filterShowreels<T extends ReelLike>(items: T[], category: string) {
  return category === "All"
    ? items
    : items.filter((item) => item.category === category);
}

export function getAvailabilityLabel(item: Pick<ReelLike, "video">) {
  return item.video ? "Play film" : "Film coming soon";
}

export function getNextIndex(currentIndex: number, length: number) {
  return length > 0 ? (currentIndex + 1) % length : -1;
}

export function getPreviousIndex(currentIndex: number, length: number) {
  return length > 0 ? (currentIndex - 1 + length) % length : -1;
}
