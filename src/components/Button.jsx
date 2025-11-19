export default function Button({
  variant = "active",
  onClick,
  children,
  type = "button",
  className = "",
}) {
  const baseStyles =
    "text-preset-6 font-bold text-white px-6 py-4 rounded-full transition-colors duration-200 flex-shrink-0 ";

  const variants = {
    active: "bg-teal-500 hover:bg-teal-800 cursor-pointer",
    disabled: "bg-gray-500 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={variant === "active" ? onClick : undefined}
      disabled={variant === "disabled"}
      type={type}
    >
      {children}
    </button>
  );
}
