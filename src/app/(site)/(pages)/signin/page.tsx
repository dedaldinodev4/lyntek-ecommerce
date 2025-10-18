"use client"
import Signin from "@/components/Auth/Signin";
import React, { useContext, useEffect } from "react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Lyntek | Login",
};


const SigninPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [])
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
