import { useQuery } from "@tanstack/react-query";

import { reviewsService } from "@/services/review.service";

export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: () => reviewsService.getReviews(),
  })
}