function SummaryItem({ value, label }) {
  return (
    <div className="flex flex-col items-center flex-1 sm:items-start">
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
    <section className="w-full max-w-2xl px-6 sm:px-10 py-8 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-center">
        <SummaryItem
          value={`$${totalPledged.toLocaleString()}`}
          label={`of ${goal.toLocaleString()} backed`}
        />
        <div className="w-20 sm:w-px h-px sm:h-[3.5em] mx-auto sm:mx-8 my-6 sm:my-0  bg-gray-200" />
        <SummaryItem value={backers.toLocaleString()} label="total backers" />
        <div className="w-20 sm:w-px h-px sm:h-[3.5em] mx-auto sm:mx-8 my-6 sm:my-0  bg-gray-200" />
        <SummaryItem value={daysLeft} label="days left" />
      </div>
    </section>
  );
}
