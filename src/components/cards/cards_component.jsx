import React from "react";

const CardsComponent = ({ card }) => {
  return (
    <div className="border rounded border-gray-300">
      <div>
        <p className="text-md p-4 text-xl rounded-t bg-gray-200">
          Producto del tipo {card}
        </p>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200 mb-4">
          <h2 className="font-light">Cliente {card} </h2>
          <h2 className=" text-end">
            (x{card}) ${card}.00 MXN
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h2 className="font-light">Articulos vendidos </h2>
          <h2 className="text-end ">2pz</h2>
          <h2 className="text-xl ">Total: </h2>
          <h2 className="text-xl font-bold text-end">${card * 20}.00 MXN</h2>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
