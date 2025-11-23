import { useState } from "react";
import logo from "../assets/logo-mastercraft.svg";
import Button from "./Button";
import BookmarkButton from "./BookmarkButton";
import BackProjectModal from "./BackProjectModal";
import SuccessModal from "./SuccessModal";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useEscapeToClose } from "../hooks/useEscapeToClose";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useLockBodyScroll(isModalOpen || isSuccessOpen);

  useEscapeToClose(isModalOpen || isSuccessOpen, () => {
    if (isSuccessOpen) {
      setIsSuccessOpen(false);
      return;
    }
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  });

  return (
    <section className="relative flex flex-col text-center w-full max-w-2xl -mt-10 px-6 sm:px-10 pt-12 pb-8 bg-white border border-gray-200 rounded-lg">
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
      <div className="flex justify-between gap-2">
        <Button onClick={() => setIsModalOpen(true)}>Back this project</Button>
        <BookmarkButton />
      </div>

      <BackProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsModalOpen(false);
          setIsSuccessOpen(true);
        }}
      />
      {isSuccessOpen && (
        <SuccessModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setIsSuccessOpen(false);
          }}
        />
      )}
    </section>
  );
}
