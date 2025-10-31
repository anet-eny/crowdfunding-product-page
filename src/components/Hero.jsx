import logo from "../assets/logo-mastercraft.svg";
import Button from "./Button";
import BookmarkButton from "./BookmarkButton";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center max-w-3xl -mt-10 px-6 pt-12 pb-8 bg-white border border-gray-200 rounded-lg">
      <img
        src={logo}
        className="absolute -top-7 max-w-14"
        alt="Mastercraft logo"
      />
      <h1 className="text-preset-4 mb-4">Mastercraft Bamboo Monitor Riser</h1>
      <p className="text-preset-8--regular text-gray-500 mb-8">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div>
        <Button>Back this project</Button>
        <BookmarkButton />
      </div>
    </section>
  );
}
