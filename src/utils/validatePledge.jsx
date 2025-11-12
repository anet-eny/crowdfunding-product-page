export function validatePledge(pledge, amount) {
  if (!pledge) {
    return "Please select a pledge option.";
  }

  const min = Number(pledge.min ?? 0);
  const numeric = Number(amount || 0);

  if (min > 0) {
    if (Number.isNaN(numeric)) return `Please enter a valid number.`;
    if (numeric < min) return `Please enter an amount of at least $${min}.`;
  }

  if (pledge.remaining !== null && pledge.remaining <= 0) {
    return "This pledge is out of stock.";
  }
  return null;
}
