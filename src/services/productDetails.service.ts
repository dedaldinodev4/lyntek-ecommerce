import { api } from "@/lib/api";

export const productDetailsService = { 

  async getOne(id: string ) {
    const { data } = await api.get(`/products_details/${id}`);
    return data.data
  },

  async getProductDetailByProduct(productId: string ) {
    const { data } = await api.get(`/products_details/byProduct/${productId}`);
    return data.data;
  },
}
