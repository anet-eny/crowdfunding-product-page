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
      <div className="relative z-10 w-full max-w-2xl mt-20 mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col text-left max-h-[calc(100vh-8rem)] p-6 sm:px-10 pt-4 sm:pt-6 overflow-y-auto">
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
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <form className="flex flex-col gap-6 my-8" onSubmit={handleConfirm}>
            {pledges.map((p, i) => {
              const available = p.remaining === null || p.remaining > 0;
              return (
                <fieldset
                  key={p.id}
                  className={`border border-gray-200 rounded-lg p-4 ${
                    !available ? "opacity-50" : ""
                  }`}
                >
                  <label className="w-full cursor-pointer">
                    <div className="flex gap-4">
                      <input
                        ref={i === 0 ? firstRadioRef : null}
                        type="radio"
                        name="pledge"
                        value={p.id}
                        checked={selectedId === p.id}
                        onChange={() => handleSelect(p.id, p.min)}
                        disabled={!available}
                      />
                      <div className="grow">
                        <h3 className="text-preset-8--bold">{p.title}</h3>
                        <span className="text-preset-8--medium mt-2 sm:mt-0 text-teal-400">
                          Pledge ${p.min} or more
                        </span>
                      </div>
                    </div>
                    <p className="text-preset-8-regular text-gray-500 mt-4">
                      {p.description}
                    </p>
                    {p.remaining !== null && (
                      <div className="flex items-center gap-1.5 mt-4">
                        <span className="text-preset-5--bold text-black">
                          {p.remaining}
                        </span>
                        <span className="text-preset-7--regular text-gray-500">
                          left
                        </span>
                      </div>
                    )}
                  </label>
                </fieldset>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
}
