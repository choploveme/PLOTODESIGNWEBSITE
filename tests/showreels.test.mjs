import test from "node:test";
import assert from "node:assert/strict";

import {
  filterShowreels,
  getAvailabilityLabel,
  getNextIndex,
  getPreviousIndex
} from "../lib/showreels.ts";
import { showreels, showreelCategories } from "../data/showreels.ts";

const films = [
  { id: "one", category: "Fashion Film", video: "/films/one.mp4" },
  { id: "two", category: "Campaign", video: null },
  { id: "three", category: "Fashion Film", video: null }
];

test("All keeps the complete curated reel order", () => {
  assert.deepEqual(filterShowreels(films, "All"), films);
});

test("a category returns only matching reels", () => {
  assert.deepEqual(
    filterShowreels(films, "Fashion Film").map((film) => film.id),
    ["one", "three"]
  );
});

test("a missing video is described as coming soon", () => {
  assert.equal(getAvailabilityLabel(films[1]), "Film coming soon");
  assert.equal(getAvailabilityLabel(films[0]), "Play film");
});

test("viewer navigation wraps at both ends", () => {
  assert.equal(getNextIndex(2, 3), 0);
  assert.equal(getPreviousIndex(0, 3), 2);
  assert.equal(getNextIndex(0, 0), -1);
  assert.equal(getPreviousIndex(0, 0), -1);
});

test("the complete Drive folder is represented by playable reel records", () => {
  assert.equal(showreels.length, 11);
  assert.equal(new Set(showreels.map((film) => film.id)).size, 11);
  assert.deepEqual(
    showreels.map((film) => film.video),
    Array.from({ length: 11 }, (_, index) =>
      `/videos/reel-${String(index + 1).padStart(2, "0")}.mp4`
    )
  );
});

test("reels use only the four client-facing content categories", () => {
  assert.deepEqual(
    [...new Set(showreels.map((film) => film.category))].sort(),
    ["Beauty", "Collection Campaign", "Creative Direction", "Product"]
  );
});

test("the filter bar exposes all work followed by the four categories", () => {
  assert.deepEqual(showreelCategories, [
    "All",
    "Product",
    "Beauty",
    "Creative Direction",
    "Collection Campaign"
  ]);
});
