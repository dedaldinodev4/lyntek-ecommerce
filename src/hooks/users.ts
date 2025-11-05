import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";

export const useUserHook = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await api.get(`users/${id}`);
      if (!response) throw new Error("Failed to fetch product");
      const { data } = response.data
      return data;
    },
  });
};

export const useUsersHook = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get(`users`);
      if (!response) throw new Error("Failed to fetch product");
      const { data } = response.data
      return data;
    },
  });
};
