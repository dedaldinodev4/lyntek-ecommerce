"use client"
import { recoverUserInformation, signInRequest, signUpRequest } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import Cookies, { destroyCookie, parseCookies, setCookie } from "nookies";
import { useState, createContext, useEffect, ReactNode } from "react";
import { ISignInRequest, type ISignUpRequest } from "@/types/user";

import { api } from "@/services/";
import { toast } from "react-toastify";


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

  const signIn = async (data: ISignInRequest) => {

    const request = await signInRequest(data);

    if (request instanceof Error) {
      setTimeout(() => {
        toast.error('Email ou Senha inválida.')
      }, 1000)
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
      setTimeout(() => {
        toast.success('Autentição feita com sucesso!')
        router.push('/');
      }, 1000)

    }
  }

  const signUp = async (data: ISignUpRequest) => {
    const request = await signUpRequest(data);

    if (request instanceof Error) {
      return new Error(`Something is wrong.`);
    } else {

      const { access_token, user } = request;
      setCookie(undefined, 'lyntek_access_token', access_token, {
        maxAge: 60 * 60 * 24,
        sameSite: true,
        path: "/",
      })
      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
      setUser(user);
    }
  }

  const logout = async (email: string) => {
    destroyCookie(null, 'lyntek_access_token');
    setUser(null);
    delete api.defaults?.Authorization;
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      signIn,
      signUp,
      logout,
      token: Cookies.get("lyntek_access_token")
    }}>
      {children}
    </AuthContext.Provider>
  )
}