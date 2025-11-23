import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";

export default function SuccessModal({ isOpen = true, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center p-6"
    >
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative flex flex-col items-center gap-8 z-10 w-full max-w-lg mt-20 mx-auto px-6 sm:px-10 py-8 bg-white rounded-lg shadow-2xl overflow-hidden">
        <img src={iconCheck} alt="Checkmark icon" />
        <h3 className="text-preset-5--bold text-black">
          Thanks for your support!
        </h3>
        <p className="text-preset-8--regular text-gray-500">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button type="button" onClick={onClose}>
          Got it!
        </Button>
      </div>
    </div>
  );
}
