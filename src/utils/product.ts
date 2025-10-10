import type { IProduct, Product } from "@/types/product";



export const customerProducts = (items: IProduct[]): Product[] => {
  const products: Product[] = [];

  items.map((item) => {
    const {
      id, brand, category, images, name, reviews, description,
      variants
    } = item;

    products.push({
      id, name, description, brand: brand.name,
      category: category.name, price: variants[0].price,
      currency: variants[0].currency, discountedPrice: 0,
      reviews: reviews.length, stock: variants[0].stock,
      imgs: {
        previews: [images[0].url, images[1].url],
        thumbnails: [images[0].url, images[1].url]
      }
    })
  })

  return products;
}

export const customerOnlyProduct = (item: IProduct): Product => {
  let product: Product;
  const {
    id, brand, category, images, name, reviews, description, variants
  } = item;

  product = {
    id, name, description, brand: brand.name,
    category: category.name, price: variants[0].price,
    currency: variants[0].currency, discountedPrice: 0,
    reviews: reviews.length, stock: variants[0].stock,
    imgs: {
      previews: [images[0].url, images[1].url],
      thumbnails: [images[0].url, images[1].url]
    }
  }

  return product;

}