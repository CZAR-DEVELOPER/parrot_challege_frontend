import ParrotLogo from "../../assets/brand/logo.png";
import React from "react";
import ButtonComponent from "../buttons/buttons_component";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="w-full shadow p-4 flex justify-between bg-black text-white">
      <img src={ParrotLogo} alt="Parrot Logo" className="h-10  self-center" />
      <div className="">
      <Link to="/pos">
        <ButtonComponent size="md" style="primary">
          Nueva venta
        </ButtonComponent>
        </Link>
        <Link to="/reports">
        <ButtonComponent size="md" style="primary">
          Ver reporte diario
        </ButtonComponent>
        </Link>
        <Link to="/">
          <ButtonComponent size="md" style="secondary" className="ml-2">
            Cerrar sesión

          </ButtonComponent>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
