import { useQuery } from "@tanstack/react-query";
import { api } from '../lib/api';


export const useProductsByCategory = () => {
  return useQuery({
    queryKey: ['products-category'],
    queryFn: async () => {
      const { data } = await api.get(`/categories/products-total`)
      return data.data;
    }
  })
}