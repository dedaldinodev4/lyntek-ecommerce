import type { Brand, ICustomerBrand } from "@/types/brand";




export const customerBrand = (items: Brand[]): ICustomerBrand[] => {
  const brands: ICustomerBrand[] = [];

  items.map((item) => {
    const {
      id, name,
    } = item; 

    brands.push({
      id, name, 
      products: item?._count.products || 0
    })
  })

  return brands;
}