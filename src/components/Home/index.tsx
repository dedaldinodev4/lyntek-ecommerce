"use client"
import React from "react";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { getCategories } from "@/redux/features/categories-slice";
import { getBrands } from "@/redux/features/brands-slice";
import { RootState, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import Brands from "./Brands";
import { getProducts } from "@/redux/features/product-slice";

const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useAppSelector((state: RootState) => state.categoryReducer);
  const {  brands } = useAppSelector((state: RootState) => state.brandReducer);
  const { products } = useAppSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getBrands());
    console.log(categories, brands, products)
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <Categories items={categories} />
      <NewArrival items={products} />
      <PromoBanner />
      <Brands items={brands} />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
