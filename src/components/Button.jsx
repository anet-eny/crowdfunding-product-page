export default function Button({ variant = "active", onClick, children }) {
  const baseStyles =
    "text-preset-8--bold text-white px-6 py-3 rounded-full transition-colors duration-200";

  const variants = {
    active: "bg-teal-500 hover:bg-teal-800 cursor-pointer",
    disabled: "bg-gray-500 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={variant === "active" ? onClick : undefined}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
}
