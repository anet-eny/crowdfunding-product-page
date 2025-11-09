import Button from "./Button";

export default function RewardItem({ title, min, description, remaining }) {
  const available = remaining === null || remaining > 0;

  return (
    <div
      className={`border border-gray-200 rounded-lg p-6 ${
        available ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-preset-5--bold">{title}</h3>
        <p className="text-preset-7--medium text-teal-400">
          Pledge ${min} or more
        </p>
      </div>
      <p className="text-preset-6--regular">{description}</p>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <span className="text-preset-1">{remaining}</span>
          <span className="text-preset-7--regular">left</span>
        </div>
        <Button variant={available ? "active" : "disabled"}>
          {available ? "Select Reward" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
}
