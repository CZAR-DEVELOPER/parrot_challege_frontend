import { Link } from "react-router-dom";
import ParrotLogo from "../../assets/brand/logo.png";
import ButtonComponent from "../../components/buttons/buttons_component";
import InputComponent from "../../components/input/input_component";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <form className="w-100 flex flex-col p-4  ">
        <img src={ParrotLogo} alt="Parrot Logo" className="w-50  self-center" />
        <h1 className="text-center text-2xl font-medium my-5">Inciar sesión</h1>

        <InputComponent
          label="Correo electronico"
          placeholder="Ingresa tu correo electronico"
        ></InputComponent>

        <Link to="/pos">
          <ButtonComponent className="mt-8 w-full" size="md" style="primary">
            Iniciar sesión
          </ButtonComponent>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
