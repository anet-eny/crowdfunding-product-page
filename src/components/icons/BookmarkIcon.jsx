export default function BookmarkIcon({ variant, size = 56 }) {
  const variants = {
    inactive: { circle: "oklch(0.3052 0 0)", path: "oklch(0.7604 0 0)" },
    active: { circle: "oklch(0.437 0.078 188.216)", path: "oklch(1 0 0)" },
  };
  const { circle, path } = variants[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <circle fill={circle} cx="28" cy="28" r="28" />
        <path fill={path} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
