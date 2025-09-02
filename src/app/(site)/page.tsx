import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyntek",
  description: "Lyntek Ecommerce",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
