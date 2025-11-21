import { usePledgeSelection } from "../hooks/usePledgeSelection";
import { useContext } from "react";
import { CrowdfundingContext } from "../context/CrowdfundingContext";
import iconCloseModal from "../assets/icon-close-modal.svg";
import PledgeOption from "./PledgeOption";

export default function BackProjectModal({ isOpen, onClose, onSuccess }) {
  const {
    state: { pledges },
    makePledge,
  } = useContext(CrowdfundingContext);

  const {
    selectedId,
    amount,
    error,
    firstRadioRef,
    handleSelect,
    handleConfirm,
    setAmount,
  } = usePledgeSelection({ pledges, makePledge, onClose, isOpen });

  function onConfirmWrapper(e) {
    const res = handleConfirm(e);
    if (res && res.ok) {
      onSuccess?.();
    }
    return res;
  }

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
          <div className="flex flex-col gap-6 my-8">
            {pledges.map((p, i) => (
              <PledgeOption
                key={p.id}
                pledge={p}
                isSelected={selectedId === p.id}
                onSelect={() => handleSelect(p.id, p.min)}
                firstRadioRef={i === 0 ? firstRadioRef : null}
                amount={amount}
                setAmount={setAmount}
                onConfirm={onConfirmWrapper}
                error={error}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
