import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close-menu.svg";
import imageMobile from "../assets/image-hero-mobile.jpg";
import imageDesktop from "../assets/image-hero-desktop.jpg";
import Menu from "./Menu";

export default function Header() {
  const { isMenuOpen, toggleMenu, isSmallScreen } = useContext(MenuContext);

  return (
    <header className="relative overflow-hidden min-h-[280px] sm:min-h-[180px] px-6 pt-8">
      <picture className="absolute inset-0 w-full h-full ">
        <source srcSet={imageDesktop} media="(min-width: 40rem)" />
        <img
          src={imageMobile}
          alt="Desktop computer on a wooden stand"
          className="object-cover bg-black/25"
        />
      </picture>

      <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto">
        <a href="/">
          <img src={logo} alt="Crowdfund logo" />
        </a>
        <button
          type="button"
          aria-label="Open menu"
          onClick={toggleMenu}
          className="sm:hidden cursor-pointer"
        >
          <img
            src={isMenuOpen ? iconClose : iconMenu}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            aria-hidden="true"
          />
        </button>

        <nav
          aria-label="Main navigation"
          className="hidden sm:block text-white text-preset-9--medium"
        >
          <ul className="flex gap-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#discover">Discover</a>
            </li>
            <li>
              <a href="#get-started">Get started</a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && isSmallScreen && <Menu />}
    </header>
  );
}
