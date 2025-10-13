"use client"

import React,{ useEffect, useState } from "react";
import { api } from "@/services";
import type { Product } from "@/types/product";
import { customerOnlyProduct } from "@/utils/product";
import ShopDetailsPage from "@/components/ShopDetails";



export default function ShopDetails({ params }) {

  const [product, setProduct] = useState<Product | null>(null)
  const { id } = React.use(params)

  useEffect(() => {

    const getProductData = async () => {
      const response = await api.get(`products/${id}`);
      const { data } = response.data;
      const result = customerOnlyProduct(data);
      setProduct(result)
      console.log(result)
    }

    getProductData();
  }, [])

  return (
    <>
      {product && <ShopDetailsPage product={product} />}

    </>
  )
}