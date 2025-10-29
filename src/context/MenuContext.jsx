import { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 40rem)");

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen && !isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen, isMenuOpen]);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, isSmallScreen, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}
