import { useState } from "react";
import Button from "./Button";

export default function PledgeAmountBox({
  min = 0,
  amount,
  setAmount,
  onConfirm,
  error,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const effectivePlaceholder = !isFocused && amount === "" ? String(min) : "";

  return (
    <form onSubmit={onConfirm}>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-t border-gray-200 p-6 pb-0 mt-6">
        <label className="text-preset-8--regular text-gray-500">
          Enter your pledge
        </label>
        <div className="flex gap-4 justify-between">
          <div className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full w-25">
            <span className="text-preset-8-bold text-gray-200">$</span>
            <input
              type="text"
              inputMode="numeric"
              className="flex-1 min-w-0 text-preset-8--bold text-black bg-transparent outline-none appearance-textfield placeholder:text-gray-400"
              min={min}
              placeholder={effectivePlaceholder}
              value={amount}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") {
                  setAmount("");
                  return;
                }
                const cleaned = raw.replace(/[^\d]/g, "");
                setAmount(cleaned);
              }}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              aria-label={`Pledge amount (minimum $${min})`}
            />
          </div>
          <Button type="submit">Continue</Button>
        </div>
        {error && (
          <div className="text-preset-8--regular text-gray-500">{error}</div>
        )}
      </div>
    </form>
  );
}
