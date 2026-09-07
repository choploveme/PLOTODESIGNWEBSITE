"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Showreel, ShowreelCategory } from "@/data/showreels";
import { showreelCategories } from "@/data/showreels";
import {
  filterShowreels,
  getAvailabilityLabel,
  getNextIndex,
  getPreviousIndex
} from "@/lib/showreels";

function ReelVisual({ item, priority = false }: { item: Showreel; priority?: boolean }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPlay = Boolean(item.video) && !videoFailed;

  return (
    <div
      className="absolute inset-0 bg-[#151515]"
      onPointerEnter={() => void videoRef.current?.play()}
      onPointerLeave={() => {
        const video = videoRef.current;
        if (!video) return;
        video.pause();
        video.currentTime = 0.01;
      }}
    >
      {canPlay ? (
        <video
          ref={videoRef}
          src={item.video ?? undefined}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
          onLoadedMetadata={(event) => {
            event.currentTarget.currentTime = 0.01;
          }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-700 ease-smooth group-hover:scale-[1.015]"
        />
      ) : (
        <Image
          src={item.poster}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-smooth group-hover:scale-[1.015]"
          style={{ objectPosition: item.posterPosition }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/5" />
    </div>
  );
}

export function ShowreelGallery({ items }: { items: Showreel[] }) {
  const [category, setCategory] = useState<ShowreelCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const filteredItems = useMemo(
    () => filterShowreels(items, category),
    [category, items]
  );
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  const closeViewer = () => {
    setActiveIndex(null);
    window.setTimeout(() => openerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => getNextIndex(index ?? 0, filteredItems.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => getPreviousIndex(index ?? 0, filteredItems.length));
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button, video");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filteredItems.length]);

  return (
    <>
      <div className="mt-16 flex gap-5 overflow-x-auto border-y border-white/15 py-4 md:mt-24 md:gap-8">
        {showreelCategories.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setCategory(option);
              setActiveIndex(null);
            }}
            className={`shrink-0 text-[11px] font-medium uppercase tracking-[0.1em] transition-opacity ${
              category === option
                ? "text-white"
                : "text-white/38 hover:text-white/75"
            }`}
            aria-pressed={category === option}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-5 gap-y-14 md:grid-cols-2 md:justify-items-stretch md:gap-y-16 lg:grid-cols-3 lg:gap-x-6">
        {filteredItems.map((item, index) => (
          <article
            key={item.id}
            className="w-full max-w-[28rem] md:max-w-none"
          >
            <button
              ref={(node) => {
                if (activeIndex === index && node) openerRef.current = node;
              }}
              type="button"
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#151515] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label={`${getAvailabilityLabel(item)}: ${item.title}`}
            >
              <ReelVisual item={item} priority={index < 2} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 md:p-7">
                <div>
                  <p className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-white/60">
                    {item.category} · {item.year}
                  </p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/55 bg-black/10 text-sm backdrop-blur-sm transition group-hover:bg-white group-hover:text-black">
                  {item.video ? "▶" : "+"}
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeItem ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="reel-viewer-title"
          tabIndex={-1}
          className="fixed inset-0 z-[80] grid bg-[#050505] outline-none md:grid-cols-[minmax(0,1fr)_24rem]"
        >
          <div className="relative min-h-[58vh] bg-black md:min-h-0">
            {activeItem.video ? (
              <video
                key={activeItem.id}
                src={activeItem.video}
                poster={activeItem.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <>
                <Image
                  src={activeItem.poster}
                  alt={`${activeItem.title} film poster`}
                  fill
                  sizes="(min-width: 768px) calc(100vw - 24rem), 100vw"
                  className="object-cover opacity-75"
                  style={{ objectPosition: activeItem.posterPosition }}
                />
                <div className="absolute inset-0 grid place-items-center bg-black/25">
                  <p className="border border-white/35 bg-black/25 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] backdrop-blur-md">
                    Film coming soon
                  </p>
                </div>
              </>
            )}
          </div>

          <aside className="flex flex-col border-l border-white/12 bg-[#0a0a0a] p-5 md:p-7">
            <button
              type="button"
              onClick={closeViewer}
              className="ml-auto text-3xl font-light leading-none text-white/72 transition hover:text-white"
              aria-label="Close viewer"
            >
              ×
            </button>
            <div className="my-auto py-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
                {activeItem.category} · {activeItem.year}
              </p>
              <h3
                id="reel-viewer-title"
                className="mt-4 text-5xl font-medium leading-[0.92] tracking-[-0.055em]"
              >
                {activeItem.title}
              </h3>
              <p className="mt-7 text-sm leading-relaxed text-white/55">
                {activeItem.description}
              </p>
            </div>
            <div className="grid grid-cols-2 border-t border-white/15 pt-5">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(getPreviousIndex(activeIndex ?? 0, filteredItems.length))
                }
                className="text-left text-xs font-medium uppercase tracking-[0.08em] text-white/58 hover:text-white"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(getNextIndex(activeIndex ?? 0, filteredItems.length))
                }
                className="text-right text-xs font-medium uppercase tracking-[0.08em] text-white/58 hover:text-white"
              >
                Next →
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
