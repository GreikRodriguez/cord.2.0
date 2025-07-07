import Button from '../common/Button'; // Importa el componente Button
import Card from '../common/Card'; // Importa el componente Card
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import LogoAcorde from '../common/LogoAcorde';
import { useNavigate } from '@tanstack/react-router';

export default function AboutUsContent() {
  const navigate = useNavigate();
  
    const handleHome= () => {
      // Redirige al usuario a la página de registro
      navigate({ to: '/home' });
    };


  return (
      // El contenedor principal con el fondo marrón claro del diseño
    <div className="min-h-screen bg-[#B99F7B] p-4 flex flex-col items-center">
      <div className="text-center mb-8 mt-12"> 
           <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="src/assets/imgs/LogoAcordeAzul.png"/>
          <p className="text-2xl font-bold text-primary-dark">ACORDE</p>
      </div>

      {/* Texto genérico sobre la empresa */}
      <div className="text-center text-primary-dark max-w-sm mx-auto mb-8">
          <p className="text-lg font-semibold mb-4">¡Bienvenido a ACORDE!</p>
          <p className="text-sm leading-relaxed">
              Somos una plataforma dedicada a simplificar la planificación y gestión de todo tipo de eventos.
              Desde pequeños encuentros hasta grandes celebraciones, ACORDE te proporciona las herramientas
              necesarias para organizar, coordinar y disfrutar sin estrés. Creemos que cada evento es una
              oportunidad para crear momentos inolvidables, y estamos aquí para asegurarnos de que así sea.
              Conéctate, organiza y celebra con ACORDE.
          </p>
      </div>

      {/* Contenedor reducido para iconos de redes sociales */}
      <Card className="bg-white p-4 rounded-lg shadow-md flex justify-around items-center space-x-4 w-64 mb-16">
          <FaFacebook className="w-8 h-8 text-gray-700" />
          <FaYoutube className="w-8 h-8 text-gray-700" />
          <FaInstagram className="w-8 h-8 text-gray-700" />
          <FaSquareXTwitter className="w-8 h-8 text-gray-700" />
      </Card>
      <Button
        text="Regresar"
        style="text-primary-dark text-lg bg-transparent border-none py-2 px-4 hover:text-red-500 font-semibold"
        onClick={handleHome} 
      />
    </div>
  );
}