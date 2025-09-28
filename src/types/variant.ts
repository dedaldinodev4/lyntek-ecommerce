export interface IProductVariant {
  id: string;
  sku: string;
  title: string;
  price: number;
  stock: number;
  currency: string;
  productId: string;
  created_at: Date;
  updated_at: Date;
}