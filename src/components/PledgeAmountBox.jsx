import Button from "./Button";

export default function PledgeAmountBox({
  min = 0,
  amount,
  setAmount,
  onConfirm,
  error,
}) {
  return (
    <form onSubmit={onConfirm}>
      <div className="flex flex-col gap-4">
        <label className="text-preset-8--regular text-gray-500">
          Enter your pledge
        </label>
        <div>
          <div className="px-3 py-2 border border-gray-200 rounded-full">
            <span className="text-preset-8-bold text-gray-200">$</span>
            <input
              type="number"
              inputMode="numeric"
              className=" text-preset-8--bold text-black"
              min={min}
              placeholder={String(min)}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label={`Pledge amount (minimum $${min})`}
            />
          </div>
          <Button type="submit">Continue</Button>
          {/* upravit Button className a submit */}
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}
