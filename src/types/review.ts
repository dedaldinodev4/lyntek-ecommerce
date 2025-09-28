

export interface IReview {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string | null;
  created_at: Date;
  updated_at: Date;
}
