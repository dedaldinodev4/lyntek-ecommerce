import type { Brand } from "./brand";
import type { Category } from "./category";
import type { IProductDetail } from "./productDetail";
import type { IProductImage } from "./productImage";
import type { IReview } from "./review";
import type { IProductVariant } from "./variant";

export interface IProduct {
  id: string;
  name: string;
  description: string | null;
  brandId: string;
  brand: Brand;
  categoryId: string;
  category: Category;
  images: IProductImage[];
  variants: IProductVariant[];
  reviews: IReview[];
  productDetails: IProductDetail[];
  status: boolean;
  created_at: Date;
  updated_at: Date;
};


export type Product = {
  id: string;
  name: string;
  description: string | null;
  brand: string;
  category: string;
  reviews: number;
  price: number;
  stock: number;
  currency: string;
  discountedPrice: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
