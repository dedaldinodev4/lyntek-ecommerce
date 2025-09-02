import React from "react";

const OrderDetails = ({ orderItem }: any) => {
  return (
    <>
      <div className="items-center justify-between py-4.5 px-7.5 hidden md:flex ">
        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Pedido</p>
        </div>
        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Data</p>
        </div>

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Estado</p>
        </div>

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Total</p>
        </div>
      </div>

      <div className="items-center justify-between border-t border-gray-3 py-5 px-7.5 hidden md:flex">
        <div className="min-w-[111px]">
          <p className="text-custom-sm text-red">
            #{orderItem.orderId.slice(-8)}
          </p>
        </div>
        <div className="min-w-[175px]">
          <p className="text-custom-sm text-dark">
            {orderItem.createdAt}
          </p>
        </div>

        <div className="min-w-[128px]">
          <p
            className={`inline-block text-custom-sm  py-0.5 px-2.5 rounded-[30px] capitalize ${
              orderItem.status === "delivered"
                ? "text-green bg-green-light-6"
                : orderItem.status === "on-hold"
                ? "text-red bg-red-light-6"
                : orderItem.status === "processing"
                ? "text-yellow bg-yellow-light-4"
                : "Unknown Status"
            }`}
          >
            {orderItem.status}
          </p>
        </div>

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">
            {orderItem.total}
          </p>
        </div>
      </div>
      <div className="px-7.5 w-full">
        <p className="font-bold">Endereço de Envio:</p>{" "}
        <p>Belas, Luanda, Casa 23</p>
      </div>
    </>
  );
};

export default OrderDetails;
