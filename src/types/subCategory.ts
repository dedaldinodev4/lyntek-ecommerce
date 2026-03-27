import { Category } from "./category";

export type SubCategory = {
  id: string;
  name: string;
  cover: string | null;
  slug: string | null;
  categoryId: string;
  category?: Category;
  created_at: Date;
  updated_at: Date;
}
