import logo from "../assets/logo-mastercraft.svg";
import Button from "./Button";
import BookmarkButton from "./BookmarkButton";

export default function Hero() {
  return (
    <section className="relative flex flex-col text-center max-w-3xl -mt-10 px-6 sm:px-12 pt-12 pb-8 bg-white border border-gray-200 rounded-lg">
      <img
        src={logo}
        className="absolute -top-7 max-w-14 self-center"
        alt="Mastercraft logo"
      />
      <h1 className="text-preset-4 sm:text-preset-2 mb-4">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-preset-8--regular sm:text-preset-6--regular text-gray-500 mb-8">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between gap-2 overflow-x-auto">
        <Button>Back this project</Button>
        <BookmarkButton />
      </div>
    </section>
  );
}
