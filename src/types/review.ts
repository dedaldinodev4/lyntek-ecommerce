

export type IReview = {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  display_name: string;
  comment: string | null;
  created_at: Date;
  updated_at: Date;
}

export type CreateReviewDTO = Omit<IReview, "id" | "created_at" | "updated_at">


