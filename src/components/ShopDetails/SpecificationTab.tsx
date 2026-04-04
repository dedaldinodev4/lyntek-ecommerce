import React from 'react';

type Props = {
  specifications: string;
  maintenance: string;
  actived: boolean;
}

export const SpecificationTab = ({ 
  specifications, maintenance, actived }: Props) => {

  return (
    <div
      className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${actived ? "flex" : "hidden"
        }`}
    >
      <div className="max-w-[670px] w-full">
        <h2 className="font-medium text-2xl text-dark mb-7">
          Especificações:
        </h2>
        <p className="mb-6">
          {specifications}
        </p>
      </div>

      <div className="max-w-[447px] w-full">
        <h2 className="font-medium text-2xl text-dark mb-7">
          Cuidado & Manutenção:
        </h2>
        <p className="mb-6">
          {maintenance}
        </p>
      </div>
    </div>
  )
}
