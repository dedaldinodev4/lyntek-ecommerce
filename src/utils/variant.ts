import { IProductVariant } from "@/types/variant";

export const getVariantPrice = (variant: IProductVariant) => {
  const {
    price, currency, stock, sku,
    discountPercent, offerExpires_at } = variant;

  if (discountPercent &&
    offerExpires_at &&
    offerExpires_at > new Date()
  ) {
    const discount = Number(price) * (discountPercent / 100);
    return {
      originalPrice: price,
      finalPrice: Number(price) - discount,
      discountPercent: discountPercent,
      sku,
      currency,
      stock,
      offerExpires_at
    }
  }

  return {
    originalPrice: price,
    finalPrice: price,
    discountPercent: discountPercent,
    sku,
    currency,
    stock,
    offerExpires_at
  }
}