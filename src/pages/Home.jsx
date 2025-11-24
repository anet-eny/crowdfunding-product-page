import { useContext } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CampaignSummary from "../components/CampaignSummary";
import RewardList from "../components/RewardList";
import { CrowdfundingContext } from "../context/CrowdfundingContext";

export default function Home() {
  const { state: data } = useContext(CrowdfundingContext);

  const { totalPledged, goal, backers, daysLeft } = data;

  return (
    <section>
      <Header />
      <main className="px-6 flex flex-col items-center gap-6">
        <Hero />
        <CampaignSummary {...{ totalPledged, goal, backers, daysLeft }} />
        <RewardList />
      </main>
    </section>
  );
}
