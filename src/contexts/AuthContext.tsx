"use client"
import { recoverUserInformation, signInRequest } from "@/hooks/auth";
import {useRouter} from "next/navigation";
import Cookies, { destroyCookie, parseCookies, setCookie } from "nookies";
import { useState, createContext, useEffect, ReactNode } from "react";
import { ISignInRequest } from "@/types/user";

import { api } from "@/services/";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUserFromCookies = async () => {
      const { 'lyntek_access_token': token } = parseCookies();

      if (token) {

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await recoverUserInformation(token).then(response => {
          if (response) setUser(response);
        })
      }
    }

    loadUserFromCookies();
  }, [])

  const signIn = async ({ email, password }: ISignInRequest) => {
    const request = await signInRequest({
      email, password
    }); 

    if (request instanceof Error) {
      return new Error('Email or Password Invalid.');
    } else {

      const { access_token, user } = request;
      setCookie(undefined, 'lyntek_access_token', access_token, {
        maxAge: 60 * 60 * 24,
        sameSite: true,
        path: "/",
      })
      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
      setUser(user);

      router.push('/');
    }
  }

  const logout = async (email: string) => {
    console.log(email)
    destroyCookie(null, 'lyntek_access_token');
    setUser(null);
    delete api.defaults?.Authorization;
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      signIn,
      logout,
      token: Cookies.get("lyntek_access_token")
    }}>
      {children}
    </AuthContext.Provider>
  )
}