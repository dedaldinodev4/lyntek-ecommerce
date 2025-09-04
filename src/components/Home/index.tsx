"use client"
import React from "react";
import { useEffect } from "react";
import {  useAppSelector } from "@/redux/store";
import { getProducts } from "@/redux/features/product-slice";
import { RootState, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useAppSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
    console.log(items)
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
