import { sleep } from "@/helpers/sleep";
import { api } from "@/lib/api";
import { CreateReviewDTO } from "@/types/review";

export const reviewsService = { 

  async create(data: CreateReviewDTO) {
    const response = await api.post("/reviews", data);
    await sleep(2000)
    return response.data;
  },

  async getReviews() {
    const { data } = await api.get(`/reviews`);
    return data.data;
  },

  async update({id, payload, }: { id: string; payload: unknown;}) {
    const { data } = await api.put(`/reviews/${id}`, payload);
    return data.data;
  },

  async getOne(id: string ) {
    const { data } = await api.get(`/reviews/${id}`);
    return data.data
  },

  async getReviewByProduct(productId: string, limit: number) {
    const { data } = await api.get(`/reviews/by-product/${productId}?limit=${limit}`);
    return data.data;
  },

  async getProductsRating(productId: string ) {
    const { data } = await api.get(`/reviews/product-rating/${productId}`);
    return data.data;
  },

  async delete(id: string ) {
    const { data } = await api.delete(`/reviews/${id}`);
    return data.data;
  },

}
