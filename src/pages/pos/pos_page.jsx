import React from "react";
import NavbarComponent from "../../components/navbar/navbar_component";
import InputComponent from "../../components/input/input_component";
import ButtonComponent from "../../components/buttons/buttons_component";

const PosPage = () => {
  return (
    <div className="h-screen w-screen ">
      <NavbarComponent></NavbarComponent>
      <div className="flex  justify-center ">
        <div className="w-200 p-8">
          <h1 className="text-4xl font-medium">Nueva venta</h1>
          <form className="mt-8">
            <InputComponent
              className="mt-4"
              label="Cliente"
              placeholder="Ingresa el nombre del cliente"
            ></InputComponent>

            <InputComponent
              className="mt-4 col-span-2 "
              label="Articulo"
              placeholder="Nombre del producto"
            ></InputComponent>

            <InputComponent
              className="mt-4 col-span-2 "
              label="Numero"
              placeholder="Cantidad"
            ></InputComponent>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <h2 className=" font-light">Subtotal</h2>
              <h2 className=" text-end font-bold">(x5) $20 MXN</h2>

              <h2 className="text-2xl font-light">Total</h2>
              <h2 className="text-2xl text-end font-bold">$100 MXN</h2>
            </div>

            <ButtonComponent className="mt-8 w-full" size="md" style="primary">
              Crear orden
            </ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PosPage;
