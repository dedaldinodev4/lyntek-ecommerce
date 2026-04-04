import { useQuery } from "@tanstack/react-query";
import { productDetailsService } from "@/services/productDetails.service";

export const useProductDetails = (productId: string) => {
  return useQuery({
    queryKey: ["details", productId],
    queryFn: () => productDetailsService
      .getProductDetailByProduct(productId),
  })
}