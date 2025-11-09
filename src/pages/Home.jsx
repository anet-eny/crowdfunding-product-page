import Header from "../components/Header";
import Hero from "../components/Hero";
import CampaignSummary from "../components/CampaignSummary";
import RewardList from "../components/RewardList";
import { initialState } from "../data/initialState";

export default function Home() {
  const { totalPledged, goal, backers, daysLeft } = initialState;
  return (
    <section>
      <Header />
      <main className="px-6 flex flex-col items-center gap-6">
        <Hero />
        <CampaignSummary
          totalPledged={totalPledged}
          goal={goal}
          backers={backers}
          daysLeft={daysLeft}
        />
        <RewardList />
      </main>
    </section>
  );
}
