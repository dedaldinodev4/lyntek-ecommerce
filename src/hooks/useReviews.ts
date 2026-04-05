import { useQuery } from "@tanstack/react-query";

import { reviewsService } from "@/services/review.service";

export const useReviews = (limit: number) => {
  return useQuery({
    queryKey: ['reviews', limit],
    queryFn: () => reviewsService.getReviews(limit),
  })
}