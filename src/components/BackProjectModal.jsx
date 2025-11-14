import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useEscapeToClose } from "../hooks/useEscapeToClose";
import { usePledgeSelection } from "../hooks/usePledgeSelection";
import { useContext } from "react";
import { CrowdfundingContext } from "../context/CrowdfundingContext";
import iconCloseModal from "../assets/icon-close-modal.svg";

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
      <div className="relative z-10 flex flex-col text-left w-full max-w-2xl mt-20 mx-auto p-6 sm:px-10 pt-4 sm:pt-6 bg-white rounded-lg shadow-2xl">
        <button
          className="ml-auto -mr-2 sm:-mr-4 cursor-pointer"
          aria-label="Close modal"
          onClick={onClose}
        >
          <img src={iconCloseModal} alt="Close modal" />
        </button>
        <h2 className="text-preset-5--bold sm:text-preset-3 text-black">
          Back this project
        </h2>
        <p className="mt-4 text-preset-8--regular sm:text-preset-6--regular text-gray-500">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
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
