function SummaryItem({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-preset-1 text-black">{value}</div>
      <div className="text-preset-8--regular text-gray-500">{label}</div>
    </div>
  );
}

export default function CampaignSummary({
  totalPledged,
  goal,
  backers,
  daysLeft,
}) {
  const percent = Math.min(100, Math.round((totalPledged / goal) * 100));
  return (
    <section className="w-full max-w-2xl px-6 sm:px-12 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-center">
        <SummaryItem
          value={`$${totalPledged.toLocaleString()}`}
          label={`of ${goal.toLocaleString()} backed`}
        />
        <SummaryItem value={backers.toLocaleString()} label="total backers" />
        <SummaryItem value={daysLeft} label="days left" />
      </div>
    </section>
  );
}
