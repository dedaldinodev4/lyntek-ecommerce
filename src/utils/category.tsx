import type { Category, ICategoryFromSelect } from "@/types/category"

export const getCategoryFromSelect = (categories: Category[]): ICategoryFromSelect[] => {
  const items: ICategoryFromSelect[] = [
    { id: '', label: 'Categories', value: '0'}
  ];

  categories.map((item) => {
    const { id, name, slug } = item;
    items.push({ id, label: name, value: slug })
  })

  return items;
}