import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsService } from "@/services/review.service";

export function useCreateReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reviewsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
  });
}