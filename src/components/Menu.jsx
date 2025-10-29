import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

export default function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="fixed inset-0 z-10 mt-8">
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent to-black/30"
        onClick={closeMenu}
      ></div>
      <div className="relative max-w-[90%] mx-auto mt-8">
        <div className="bg-white rounded-lg">
          <nav className="flex flex-col px-5 divide-y divide-gray-200 text-preset-5--medium text-black">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
              className="py-5"
            >
              About
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
              className="py-5"
            >
              Discover
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
              className="py-5"
            >
              Get started
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
