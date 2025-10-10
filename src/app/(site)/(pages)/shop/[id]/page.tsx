"use client"

import { use, useEffect, useState } from "react";
import { api } from "@/services";
import type { Product } from "@/types/product";
import { customerOnlyProduct } from "@/utils/product";
import ShopDetailsPage from "@/components/ShopDetails";

interface ShopDetailsProps {
  params: {
    id: string;
  }
}

export default function ShopDetails({ params }: ShopDetailsProps) {

  const [product, setProduct] = useState<Product | null>(null)
  const paramId = params.id || 0

  useEffect(() => {

    const getProductData = async () => {
      const response = await api.get(`products/${paramId}`);
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