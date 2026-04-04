"use client"
import React from 'react';


export const ReviewForm: React.FC = () => {
  return (
    <form>
      <h2 className="font-medium text-2xl text-dark mb-3.5">
        Avaliar o produto
      </h2>

      <p className="mb-6">
        Faça uma avaliação deste produto.
      </p>

      <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
        <div className="mb-5">
          <label htmlFor="comments" className="block mb-2.5">
            Comentários
          </label>

          <textarea
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

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-7.5 mb-5.5">
          <div>
            <label htmlFor="rating" className="block mb-2.5">
              Rating
            </label>

            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="1-5"
              min={1}
              max={5}
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2.5">
              Endereço de Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu Endereço de Email"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
        >
          Enviar Avaliação
        </button>
      </div>
    </form>
  )
}

