import { useQuery } from "@tanstack/react-query";
import { api } from '@/lib/api';


export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await api.get(`/reviews`)
      return data.data;
    }
  })
}