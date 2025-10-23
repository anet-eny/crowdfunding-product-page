import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-hamburger.svg";
import imageMobile from "../assets/image-hero-mobile.jpg";
import imageDesktop from "../assets/image-hero-desktop.jpg";

export default function Header({ onOpenMenu }) {
  return (
    <header className="relative min-h-[300px] px-6 pt-8">
      <picture className="absolute inset-0 w-full h-full ">
        <source srcSet={imageDesktop} media="(min-width: 40rem)" />
        <img
          src={imageMobile}
          alt="Desktop computer on a wooden stand"
          className="object-cover bg-black/25"
        />
      </picture>

      <div className="relative flex items-center justify-between">
        <img src={logo} alt="Crowdfund logo" />
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="cursor-pointer"
        >
          <img src={iconMenu} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
