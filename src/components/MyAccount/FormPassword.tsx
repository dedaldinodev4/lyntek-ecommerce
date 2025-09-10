"use client";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from "@/services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthContext } from '@/contexts/AuthContext'

type UpdateCredentials = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

type Props = {
  userId: string;
}

const FormPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<UpdateCredentials>()
  const router = useRouter()
  const { logout } = useContext(AuthContext)


  const onSubmitPassword: SubmitHandler<UpdateCredentials> = async (data) => {
    const { currentPassword, confirmNewPassword, newPassword } = data;

    if (newPassword !== confirmNewPassword) {
      toast.error('Confirmação da nova senha inválida.')
      return new Error('Please use same password.')
    }

    try {
      const request = await api.put(`auth/credentials/${props.userId}`, {
        currentPassword, newPassword
      })

      toast.success('Senha alterada com suceso')
      logout('logout')
      router.push('/signin')

    } catch (error) {
      toast.error('Algo ocorreu mal, tente novamente.')
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmitPassword)}>
        <p className="font-medium text-xl sm:text-2xl text-dark mb-7">
          Alterar Senha
        </p>

        <div className="bg-white shadow-1 rounded-xl p-4 sm:p-8.5">
          <div className="mb-5">
            <label htmlFor="curentPassword" className="block mb-2.5">
              Senha Atual
            </label>

            <input
              {...register('currentPassword', { required: true })}
              type="password"
              id="curentPassword"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="newPassword" className="block mb-2.5">
              Nova Senha
            </label>

            <input
              {...register('newPassword', { required: true })}
              type="password"
              id="newPassword"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="confirmNewPassword"
              className="block mb-2.5"
            >
              Confirmar Nova Senha
            </label>

            <input
              {...register('confirmNewPassword', { required: true })}
              type="password"
              id="confirmNewPassword"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <button
            type="submit"
            className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Salvar
          </button>
        </div>
      </form>

    </>
  );
};

export default FormPassword;
