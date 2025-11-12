import { useEffect } from "react";

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (locked) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous ?? "";
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}
