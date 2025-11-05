export const calculatePriceDiscount = (percent: number, price: number): number => {
  const result = price - (price * percent / 100);
  return result;
} 
