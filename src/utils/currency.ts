
export const formattedCurrency = (amount: number): string =>{
  const formatted = new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
    minimumFractionDigits: 2,
  }).format(amount)
  return formatted;
};