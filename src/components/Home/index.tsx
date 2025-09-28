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

const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useAppSelector((state: RootState) => state.categoryReducer);
  const {  brands } = useAppSelector((state: RootState) => state.brandReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands())
    console.log(categories, brands)
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <Categories items={categories} />
      <NewArrival />
      <PromoBanner />
      <Brands items={brands} />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
