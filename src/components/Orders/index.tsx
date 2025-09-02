import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";
import ordersData from "./ordersData";

const Orders = () => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    fetch(`/api/order`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[770px]">
          {/* <!-- order item --> */}
          {ordersData.length > 0 && (
            <div className="items-center justify-between py-4.5 px-7.5 hidden md:flex ">
              <div className="min-w-[111px]">
                <p className="text-custom-sm text-dark">Pedido</p>
              </div>
              <div className="min-w-[175px]">
                <p className="text-custom-sm text-dark">Data</p>
              </div>

              <div className="min-w-[128px]">
                <p className="text-custom-sm text-dark">Estado</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Total(Kz)</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Acção</p>
              </div>
            </div>
          )}
          {ordersData.length > 0 ? (
            ordersData.map((orderItem, key) => (
              <SingleOrder key={key} orderItem={orderItem} smallView={false} />
            ))
          ) : (
            <p className="py-9.5 px-4 sm:px-7.5 xl:px-10">
              Você não fez nenhum pedido.
            </p>
          )}
        </div>

        {ordersData.length > 0 &&
          ordersData.map((orderItem, key) => (
            <SingleOrder key={key} orderItem={orderItem} smallView={true} />
          ))}
      </div>
    </>
  );
};

export default Orders;
