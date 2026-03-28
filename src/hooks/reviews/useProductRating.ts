import { useQuery } from "@tanstack/react-query";
import { reviewsService } from "@/services/review.service";

export const useProductRating = (productId: string) => {
  return useQuery({
    queryKey: ["review", productId],
    queryFn: () => reviewsService.getProductsRating(productId),
  })
}