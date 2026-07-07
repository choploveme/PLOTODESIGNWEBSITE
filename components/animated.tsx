"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
  className
}: {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <section className={cn("section pt-36 md:pt-44", className)}>
      <FadeIn>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-6xl text-balance font-display text-6xl leading-[0.9] md:text-8xl lg:text-[10rem]">
          {title}
        </h1>
        {body ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone md:ml-auto md:text-xl">
            {body}
          </p>
        ) : null}
      </FadeIn>
    </section>
  );
}
