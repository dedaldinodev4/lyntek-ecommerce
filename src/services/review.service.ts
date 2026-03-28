import { api } from "@/lib/api";

export const reviewsService = { 

  async create(payload: unknown) {
    const { data } = await api.post("/reviews", payload);
    return data.data;
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

  async getProductsRating(productId: string ) {
    const { data } = await api.get(`/reviews/product-rating/${productId}`);
    return data.data;
  },

  async delete(id: string ) {
    const { data } = await api.delete(`/reviews/${id}`);
    return data.data;
  },

}
