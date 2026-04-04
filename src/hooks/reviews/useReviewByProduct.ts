import { useQuery } from "@tanstack/react-query";
import { reviewsService } from "@/services/review.service";

export const useReviewByProduct = (productId: string) => {
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => reviewsService.getReviewByProduct(productId),
  })
}