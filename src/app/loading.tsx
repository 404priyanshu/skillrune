export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="h-10 w-48 animate-pulse rounded-full bg-[var(--warm-sand)]" />
      <div className="mt-6 h-20 max-w-2xl animate-pulse rounded-lg bg-[var(--warm-sand)]" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-64 animate-pulse rounded-lg border border-[var(--border)] bg-[var(--ivory)]"
          />
        ))}
      </div>
    </div>
  );
}
