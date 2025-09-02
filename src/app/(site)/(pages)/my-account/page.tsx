import MyAccount from "@/components/MyAccount";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Meu Perfil",
  description: "",
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
