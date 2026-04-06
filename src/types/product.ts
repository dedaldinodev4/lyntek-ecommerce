import { Brand } from "./brand";
import { IProductDetail } from "./productDetail";
import { IProductImage } from "./productImage";
import { IReview } from "./review";
import { Segment } from "./segment";
import { IProductVariant } from "./variant";

export interface IProduct {
  id: string;
  name: string;
  description: string | null;
  brandId: string;
  brand: Brand;
  segmentId: string;
  segment: Segment;
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
  segment: string;
  subCategory: string;
  sku: string;
  reviews: number;
  price: number;
  stock: number;
  currency: string;
  discountedPrice: number;
  offerExpires_at: Date | null;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
