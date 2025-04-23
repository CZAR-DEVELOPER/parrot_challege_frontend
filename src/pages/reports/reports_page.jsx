import React from "react";
import NavbarComponent from "../../components/navbar/navbar_component";
import CardsComponent from "../../components/cards/cards_component";
import ButtonComponent from "../../components/buttons/buttons_component";

const ReportsPage = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="w-full h-screen ">
      <NavbarComponent></NavbarComponent>

      <div className="p-8">
        <h1 className="text-4xl font-medium">Reporte diario</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="startDate">Fecha de inicio</label>
            <input
              type="date"
              id="startDate"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="endDate">Fecha de fin</label>
            <input
              type="date"
              id="endDate"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex items-end">
          <ButtonComponent size="sm" style="primary" className="align-bottom h-10 w-full"> 
            Filtrar
          </ButtonComponent>

          </div>
        </div>

        <p className="mt-4 text-xl font-bold">Productos vendidos</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  mt-8 gap-4">
          {data.map((item, index) => (
            <CardsComponent key={index} card={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
