export default function BookmarkIcon({ variant = "inactive", size = 56 }) {
  const variants = {
    inactive: {
      circle: {
        base: "oklch(0.3052 0 0)",
      },
      path: {
        base: "oklch(0.7604 0 0)",
      },
    },
    active: {
      circle: { base: "oklch(0.437 0.078 188.216)" },
      path: { base: "oklch(1 0 0)" },
    },
  };

  const c = variants[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-200 ${
        variant === "inactive"
          ? "hover:[&>g>circle]:fill-[oklch(0.552_0.016_285.938)]"
          : ""
      }`}
    >
      <g fill="none" fillRule="evenodd">
        <circle fill={c.circle.base} cx="28" cy="28" r="28" />
        <path fill={c.path.base} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
