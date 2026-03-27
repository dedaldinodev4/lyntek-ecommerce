import { IProduct, Product } from "@/types/product";


export const customerProducts = (items: IProduct[]): Product[] => {
  const products: Product[] = [];

  items.map((item) => {
    const result = customerOnlyProduct(item)
    products.push(
      result
    )
  })

  return products;
}

export const customerOnlyProduct = (item: IProduct): Product => {
  let product: Product;
  const {
    id, brand, segment, images, name, reviews, description, variants
  } = item;

  const { subCategory } = segment;
  const { category } = subCategory;

  product = {
    id, name, description, brand: brand.name,
    segment: segment.name, subCategory: subCategory.name,
    category: category.name, price: variants[0].price,
    currency: variants[0].currency, discountedPrice: variants[0].discountPercent,
    offerExpires_at: variants[0].offerExpires_at,
    reviews: reviews.length, stock: variants[0].stock,
    imgs: {
      previews: [images[0].url, images[1].url],
      thumbnails: [images[0].url, images[1].url]
    }
  }

  return product;

}