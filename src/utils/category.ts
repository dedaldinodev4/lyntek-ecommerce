import type { Category, ICustomerCategory } from "@/types/category";




export const customerCategory = (items: Category[]): ICustomerCategory[] => {
  const categories: ICustomerCategory[] = [];

  items.map((item) => {
    const {
      id, name,
    } = item; 

    categories.push({
      id, name, isRefined: true, 
      products: item?._count.products || 0
    })
  })

  return categories;
}