"use client";
import React, { useState, useContext, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Orders from "../Orders";
import { AuthContext } from "@/contexts/AuthContext";
import { api } from "@/services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type UpdateUser = {
  name: string;
  email: string;
  phone: string;
}

type Props = {
  userId: string;
}


const FormUpdateUser = (props: Props) => {
  const [user, setUser] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<UpdateUser>()
  const router = useRouter()

  useEffect(() => {
    
    const getUserInfo = async () => {
      const request = await api.get(`users/${props.userId}`);
      const { data } = request.data;
      setUser(data)
    }
    
    getUserInfo()

  }, [])


  const onSubmit: SubmitHandler<UpdateUser> = async (data) => {
    const { name, phone } = data;
    try {
      const response = await api.put(`users/${props.userId}`, {
        name, phone
      })

      toast.success(`Alteração feita com sucesso`)

    } catch (error) {
      // Something is wrong!!
      toast.error(`Algo ocorreu mal, alteração rejeitada.`)

    }

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-1 rounded-xl p-4 sm:p-8.5">
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block mb-2.5">
                Nome <span className="text-red">*</span>
              </label>

              <input
                {...register('name', { required: true })}
                type="text"
                id="name"
                defaultValue={user ? user?.name: ""}
                placeholder="Seu Nome"
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
            </div>

          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5">
              E-mail
            </label>

            <div className="relative">
              <input
                {...register('email')}
                type="email"
                id="email"
                disabled
                placeholder="Seu Email"
                value={user ? user?.email: ""}
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />


            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2.5">
              Telefone
            </label>

            <div className="relative">
              <input
                {...register('phone')}
                type="text"
                id="phone"
                placeholder="Seu Telefone"
                defaultValue={user ? user?.phone: ""}
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />


            </div>
          </div>

          <button
            type="submit"
            className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Salvar Alteração
          </button>
        </div>
      </form>
    </>
  );
};

export default FormUpdateUser;
