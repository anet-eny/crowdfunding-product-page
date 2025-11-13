import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useEscapeToClose } from "../hooks/useEscapeToClose";
import { usePledgeSelection } from "../hooks/usePledgeSelection";
import { useContext } from "react";
import { CrowdfundingContext } from "../context/CrowdfundingContext";

export default function BackProjectModal({ isOpen, onClose }) {
  const {
    state: { pledges },
    makePledge,
  } = useContext(CrowdfundingContext);

  useLockBodyScroll(isOpen);

  useEscapeToClose(isOpen, onClose);

  const {
    selectedId,
    amount,
    error,
    firstRadioRef,
    handleSelect,
    handleConfirm,
    setAmount,
  } = usePledgeSelection({ pledges, makePledge, onClose, isOpen });

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center p-6"
    >
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl mt-20 mx-auto bg-white rounded-lg shadow-2xl">
        <button aria-label="Close modal" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-preset-5--bold sm:text-preset-3 text-black">
          Back this project
        </h2>
        <p className="text-preset-8--regular sm:text-preset-6--regular text-gray-500"></p>
        {/* <form onSubmit={handleConfirm}>
            {pledges.map((p, i) => {
              const available = p.remaining === null || p.remaining > 0;
              return (
                <fieldset
                  key={p.id}
                  className={`border rounded-lg p-4 ${
                    available ? "opacity-50" : ""
                  }`}
                ></fieldset>
              );
            })}
          </form> */}
      </div>
    </div>
  );
}
