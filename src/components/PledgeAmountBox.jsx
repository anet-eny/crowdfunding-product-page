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
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-t border-gray-200 p-6 pb-0 mt-6">
        <label className="text-preset-8--regular text-gray-500">
          Enter your pledge
        </label>
        <div className="flex gap-4 justify-between">
          <div className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full max-w-25">
            <span className="text-preset-8-bold text-gray-200">$</span>
            <input
              type="number"
              inputMode="numeric"
              className="text-preset-8--bold text-black"
              min={min}
              placeholder={String(min)}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label={`Pledge amount (minimum $${min})`}
            />
          </div>
          <Button type="submit">Continue</Button>
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}
