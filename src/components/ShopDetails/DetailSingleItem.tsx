import React from 'react';

import { getDetailProperty } from '@/utils/productDetails';

type Props = {
  title: string;
  value: string;
}

export const DetailSingleItem = ({ title, value }: Props) => {

  return (
    <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
      <div className="max-w-[450px] min-w-[140px] w-full">
        <p className="text-sm sm:text-base text-dark">{getDetailProperty(title)}</p>
      </div>
      <div className="w-full">
        <p className="text-sm sm:text-base text-dark">{value}</p>
      </div>
    </div>
  )
}
