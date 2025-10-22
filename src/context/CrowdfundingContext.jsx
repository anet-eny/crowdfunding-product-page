import { createContext, useState, useEffect } from "react";
import { initialState } from "../data/initialState";

export const CrowdfundingContext = createContext();

export function CrowdfundingProvider({ children }) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem("crowdfunding-data");
    return stored ? JSON.parse(stored) : initialState;
  });

  function makePledge(id, amount) {
    setState((prev) => {
      const updatedPledges = prev.pledges.map((pledge) => {
        if (
          pledge.id === id &&
          pledge.remaining !== null &&
          pledge.remaining !== 0
        ) {
          return { ...pledge, remaining: pledge.remaining - 1 };
        }
        return pledge;
      });

      return {
        ...prev,
        totalPledged: prev.totalPledged + amount,
        backers: prev.backers + 1,
        pledges: updatedPledges,
      };
    });
  }

  function toggleBookmark() {
    setState((prev) => ({ ...prev, bookmarked: !prev.bookmarked }));
  }

  function resetData() {
    localStorage.removeItem("crowdfunding-data");
    setState(initialState);
  }

  useEffect(() => {
    localStorage.setItem("crowdfunding-data", JSON.stringify(state));
  }, [state]);

  return (
    <CrowdfundingContext.Provider
      value={{ state, makePledge, toggleBookmark, resetData }}
    >
      {children}
    </CrowdfundingContext.Provider>
  );
}
