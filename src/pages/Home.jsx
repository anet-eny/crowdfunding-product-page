import Header from "../components/Header";
import Hero from "../components/Hero";
import CampaignSummary from "../components/CampaignSummary";

export default function Home() {
  return (
    <section>
      <Header />
      <main className="px-6 flex flex-col items-center gap-6">
        <Hero />
        <CampaignSummary
          totalPledged={89914}
          goal={100000}
          backers={5007}
          daysLeft={56}
        />
      </main>
    </section>
  );
}
