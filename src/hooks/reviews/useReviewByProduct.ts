import { useQuery } from "@tanstack/react-query";
import { reviewsService } from "@/services/review.service";

export const useReviewByProduct = (productId: string, limit: number) => {
  return useQuery({
    queryKey: ["reviews", productId, limit],
    queryFn: () => reviewsService.getReviewByProduct(productId, limit),
  })
}