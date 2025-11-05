
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";

export const useProductDetails = (productId: string) => {
  return useQuery({
    queryKey: ["productDetails", productId],
    queryFn: async () => {
      const response = await api.get(`products_details/byProduct/${productId}`);
      if (!response) throw new Error("Failed to fetch product");
      const { data } = response.data
      return {
        productDetail: data
      }
    },
  });
};

