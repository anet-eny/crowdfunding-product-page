import { initialState } from "../data/initialState";
import RewardItem from "./RewardItem";

export default function RewardList() {
  return (
    <section className="w-full max-w-2xl border border-gray-200 rounded-xl px-6 py-10 sm:p-10">
      <h2 className="text-preset-4">About this project</h2>
      <p className="text-preset-6--regular text-gray-500 mt-4 sm:mt-6">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <br />
      <p className="text-preset-6--regular text-gray-500">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-6 mt-6 md:mt-8">
        {initialState.pledges.map((pledge) => (
          <RewardItem
            key={pledge.id}
            title={pledge.title}
            min={pledge.min}
            description={pledge.description}
            remaining={pledge.remaining}
          />
        ))}
      </div>
    </section>
  );
}
