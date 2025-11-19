import Button from "./Button";

export default function RewardItem({ title, min, description, remaining }) {
  const available = remaining === null || remaining > 0;

  return (
    <div
      className={`border border-gray-200 rounded-lg p-6 ${
        available ? "opacity-100" : "opacity-40"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-preset-5--bold">{title}</h3>
        <p className="text-preset-7--medium mt-2 sm:mt-0 text-teal-400">
          Pledge ${min} or more
        </p>
      </div>
      <p className="text-preset-6--regular text-gray-500 mt-4 sm:mt-6">
        {description}
      </p>
      <div className="flex flex-col gap-2 items-start sm:flex-row sm:items-center sm:justify-between mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-preset-1">{remaining}</span>
          <span className="text-preset-7--regular text-gray-500">left</span>
        </div>
        <Button
          className="min-w-40"
          variant={available ? "active" : "disabled"}
        >
          {available ? "Select Reward" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
}
