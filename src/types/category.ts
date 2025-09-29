export type Category = {
  id: string;
  name: string;
  slug: string | null;
  cover: string | null;
  created_at: Date;
  updated_at: Date;
};

export interface ICategoryFromSelect {
  label: string;
  value: string;
  id: string;
}