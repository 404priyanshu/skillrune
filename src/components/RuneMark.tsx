export function RuneMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand)] text-[var(--ivory)] ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <path
          d="M20 48 32 10l12 38M24 35h16M32 10v44"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
    </span>
  );
}
