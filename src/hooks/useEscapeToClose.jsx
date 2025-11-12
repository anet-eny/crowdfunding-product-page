import { useEffect } from "react";

export function useEscapeToClose(enabled, onClose) {
  useEffect(() => {
    if (!enabled) return;

    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enabled, onClose]);
}
