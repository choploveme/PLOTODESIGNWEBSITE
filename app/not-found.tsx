import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section flex min-h-[80svh] flex-col justify-end pb-20 pt-36">
      <p className="eyebrow">404</p>
      <h1 className="max-w-4xl font-display text-6xl leading-none md:text-8xl">
        This page has moved out of frame.
      </h1>
      <Link href="/" className="button mt-8 w-fit">
        Return Home
      </Link>
    </main>
  );
}
