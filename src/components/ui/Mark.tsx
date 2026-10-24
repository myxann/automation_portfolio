export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6L26.6 5.4"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}
