import Button from "./Button";
import PledgeAmountBox from "./PledgeAmountBox";

export default function PledgeOption({
  pledge,
  isSelected,
  onSelect,
  firstRadioRef,
  amount,
  setAmount,
  onConfirm,
  error,
}) {
  const available = pledge.remaining === null || pledge.remaining > 0;
  return (
    <fieldset
      className={`border border-gray-200 rounded-lg py-6 ${
        !available ? "opacity-50" : ""
      }`}
    >
      <label className="flex flex-col w-full cursor-pointer">
        <div className="flex gap-4 px-6">
          <input
            ref={firstRadioRef}
            type="radio"
            name="pledge"
            value={pledge.id}
            checked={isSelected}
            onChange={onSelect}
            disabled={!available}
          />
          <div className="sm:flex gap-4">
            <h3 className="text-preset-8--bold">{pledge.title}</h3>
            <span className="text-preset-8--medium mt-2 sm:mt-0 text-teal-400">
              Pledge ${pledge.min} or more
            </span>
          </div>
        </div>
        <p className="text-preset-8-regular text-gray-500 mt-4 px-6 sm:pl-13">
          {pledge.description}
        </p>
        {pledge.remaining !== null && (
          <div className="flex items-center gap-1.5 mt-4 px-6">
            <span className="text-preset-5--bold text-black">
              {pledge.remaining}
            </span>
            <span className="text-preset-7--regular text-gray-500">left</span>
          </div>
        )}
        {isSelected && pledge.min > 0 && (
          <div>
            <PledgeAmountBox
              min={pledge.min}
              amount={amount}
              setAmount={setAmount}
              onConfirm={onConfirm}
              error={error}
            />
          </div>
        )}
        {isSelected && pledge.min === 0 && (
          <Button
            className="ml-auto mt-6 mr-6"
            type="button"
            onClick={onConfirm}
          >
            Continue
          </Button>
        )}
      </label>
    </fieldset>
  );
}
