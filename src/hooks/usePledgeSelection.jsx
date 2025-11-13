import { useState, useEffect, useRef } from "react";
import { validatePledge } from "../utils/validatePledge";

export function usePledgeSelection({
  pledges = [],
  makePledge,
  onClose,
  isOpen,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const firstRadioRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedId(null);
      setAmount("");
      setError("");
      setTimeout(() => firstRadioRef.current?.focus(), 0);
    }
  }, [isOpen]);

  function handleSelect(id, min) {
    setSelectedId(id);
    setAmount(min > 0 ? String(min) : "");
    setError("");
  }

  function handleConfirm(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    const pledge = pledges.find((p) => p.id === selectedId);
    const validationError = validatePledge(pledge, amount);
    if (validationError) {
      setError(validationError);
      return { ok: false, error: validationError };
    }
    const numeric = Number(amount || 0);

    makePledge(selectedId, numeric || 0);

    onClose?.();

    setSelectedId(null);
    setAmount("");
    setError("");
    return { ok: true };
  }
  return {
    selectedId,
    setSelectedId,
    amount,
    setAmount,
    error,
    setError,
    firstRadioRef,
    handleSelect,
    handleConfirm,
  };
}
