"use client"
import React from 'react';
import Image from 'next/image';

import { useReviewByProduct } from '@/hooks/reviews/useReviewByProduct';
import { StarReview } from '../Common/StarReview';
import { ReviewForm } from './ReviewForm';

type Props = {
  productId: string;
  actived: boolean;
}

export const ReviewTab = ({ productId, actived }: Props) => {
  const { data } = useReviewByProduct(productId)


  return (
    <div
      className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${actived ? "flex" : "hidden"
        }`}
    >
      <div className="max-w-[570px] w-full">
        <h2 className="font-medium text-2xl text-dark mb-9">
          Últimas Avaliações neste produto
        </h2>

        <div className="flex flex-col gap-6">

          {data &&
            data.map((review, key) => (
              <div key={key} className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center gap-4">
                    <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                      <Image
                        src="/images/users/user.png"
                        alt={review.id}
                        className="w-12.5 h-12.5 rounded-full overflow-hidden"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div>
                      <h3 className="font-medium text-dark">
                        {review.display_name}
                      </h3>
                      <p className="text-custom-sm">
                        Cliente
                      </p>
                    </div>
                  </a>

                  <StarReview reviws={review.rating} starSize={{
                    width: 15,
                    height: 16
                  }} />
                </div>

                <p className="text-dark mt-6">
                  “{review.title}’’
                </p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="max-w-[550px] w-full">
        <ReviewForm productId={productId} />
      </div>
    </div>
  )
}
