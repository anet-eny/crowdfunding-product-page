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
    <section>
      <div className="flex flex-col sm:flex-row">
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
