export function SectionHeading({
  label,
  index,
  title
}: {
  label: string;
  index: string;
  title?: string;
}) {
  return (
    <div className="mb-10 border-t border-line pt-4 md:mb-16">
      <div className="flex items-center justify-between gap-6 text-xs font-medium uppercase text-smoke">
        <span>{label}</span>
        <span>{index}</span>
      </div>
      {title ? (
        <h2 className="mt-6 max-w-4xl text-balance font-display text-4xl leading-none md:text-6xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
