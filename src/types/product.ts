export type Product = {
  id: string;
  name: string;
  description: string | null;
  brand: string;
  category: string;
  reviews: number;
  price: number;
  currency: string;
  discountedPrice: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
