export const formatCurrency = (amount: number) => {
  const amountString = amount.toString();
  const parts = amountString.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};
