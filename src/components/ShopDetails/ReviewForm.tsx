"use client"
import React, { useContext, useState } from 'react';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AuthContext } from '@/contexts/AuthContext';
import { useCreateReview } from '@/hooks/reviews/useCreateReview';
import { STARS } from '@/constants';

import { SkeletonWrapper } from '../Common/Skeleton';


type CreateReviewForm = {
  title: string;
  display_name: string;
  comment: string | null;
}

type Props = {
  productId: string;
}

export const ReviewForm = ({ productId }: Props) => {
  const [activeStar, setActiveStar] = useState(1);
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<CreateReviewForm>()

  const createReview = useCreateReview()
  const onSubmit: SubmitHandler<CreateReviewForm> = async (data) => {
    setLoading(true)
    const {
      title, comment, display_name
    } = data;

    createReview.mutate({
      title,
      comment,
      display_name,
      rating: activeStar,
      productId,
      userId: user ? user?.id : ""
    });

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }


  return (
    <SkeletonWrapper loading={loading}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-medium text-2xl text-dark mb-3.5">
          Adicionar avaliação
        </h2>

        <p className="mb-6">
          Avalie o produto de 1 à 5 estrelas.
        </p>

        <div className="flex items-center gap-3 mb-7.5">
          <span>Sua Avaliação <span className='text-red-dark font-bold'>*</span></span>
          <div className="flex items-center gap-1">
            {STARS.map((star, key) => (
              <span
                key={key}
                onClick={() => setActiveStar(star.id)}
                className={
                  `cursor-pointer ${star.id <= activeStar ? 'text-[#FBB040]' : 'text-gray-5'} `}>
                <svg
                  className="fill-current"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                    fill=""
                  />
                </svg>
              </span>
            ))}

          </div>
        </div>

        <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-7.5 mb-5.5">
            <div>
              <label htmlFor="title" className="block mb-2.5">
                Título <span className='text-red-dark font-bold'>*</span>
              </label>

              <input
                type="text"
                name="title"
                id="title"
                placeholder="Digite um título"
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                {...register('title', { required: true })}
              />
            </div>

            <div>
              <label htmlFor="display_name" className="block mb-2.5">
                Nome <span className='text-red-dark font-bold'>*</span>
              </label>

              <input
                type="text"
                name="display_name"
                id="display_name"
                placeholder="Seu nome"
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                {...register('display_name', { required: true })}
              />
            </div>

          </div>

          <div className="mb-5">
            <label htmlFor="comments" className="block mb-2.5">
              Comentários
            </label>

            <textarea
              {...register('comment')}
              name="comments"
              id="comments"
              rows={5}
              placeholder="Deixa seu comentário sobre o produto"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            ></textarea>

            <span className="flex items-center justify-between mt-2.5">
              <span className="text-custom-sm text-dark-4">
                Máximo
              </span>
              <span className="text-custom-sm text-dark-4">
                0/250
              </span>
            </span>
          </div>

          <button
            disabled={!user}
            type="submit"
            className={`
              inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 ${user ? "hover:bg-blue-dark" : ''}`}
          >
            Enviar Avaliação
          </button>

          {!user &&
            <div className='text-center mt-2'>
              <span className="text-custom-sm text-dark-4 text-center">
                Acesse a conta para avaliar ou 
                <Link className='text-blue-light font-semibold' href={'/signup'}> crie uma conta</Link> 
              </span>
            </div>
          }
        </div>
      </form>
    </SkeletonWrapper>
  )
}

