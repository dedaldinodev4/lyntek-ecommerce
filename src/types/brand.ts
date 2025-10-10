export type Brand = {
  id: string;
  name: string;
  slug: string | null;
  cover: string | null;
  created_at: Date;
  updated_at: Date;
};



export interface ICustomerBrand {
  id: string;
  name: string;
  products: number;
}