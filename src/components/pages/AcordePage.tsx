import LogoAcorde from "../common/LogoAcorde";
import LetrasAcorde from "../common/LetrasAcorde";
import { useNavigate } from '@tanstack/react-router';


export default function AcordePage() {

    const navigate = useNavigate();

  const handleLogIn = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/login' });
  };

    return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#EBEAFC]"
        onClick={handleLogIn}>
        <div className="text-center">
            <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="src/assets/imgs/LogoAcordeAzul.png"/>
            <LetrasAcorde style="text-6xl font-bold text-[#2C558D]" text="ACORDE"/>
        </div>
    </div>
    );
}