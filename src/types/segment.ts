import type { SubCategory } from "./subCategory";

export type Segment = {
  id: string;
  name: string;
  slug: string | null;
  subCategoryId: string;
  subCategory?: SubCategory;
  created_at: Date;
  updated_at: Date;
}
