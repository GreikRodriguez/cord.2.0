import Button from "../common/Button";
import { useNavigate } from '@tanstack/react-router';
import Card from "../common/Card";

export default function ProfileContent() {
  const navigate = useNavigate();

 const handleGeneric = () => {
    // Redirige al usuario a la página de Generic
    navigate({ to: '/Generic' });
  };
  const handleHome = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/home' });
  };


  return (
    <div className="p-6 text-center">
        <div className="w-32 h-32 rounded-full bg-light-bg border-4 border-accent-brown mx-auto mb-4 flex items-center justify-center">
            
        </div>
        <p className="text-2xl font-bold text-primary-dark mb-4">Nombre Usuario</p>
        <div className="flex justify-center space-x-6 mb-8">
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">amigos</p>
            </div>
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">Publicaciones</p>
            </div>
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">Organizaciones</p>
            </div>
        </div>

        <div className="space-y-4">
            {/* Usando el componente Button */}
            <Button
              text="Información personal"
              style="w-full bg-[#A38D6D] hover:bg-amber-500  text-white py-3 rounded-full shadow-md"
              onClick={handleGeneric} // Aquí se redirige a la página de Generic
            />
            <Button
              text="Información de contacto"
              style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white py-3 rounded-full shadow-md"
              onClick={handleGeneric} // Aquí se redirige a la página de Generic
            />
            <Button
              text="Logros"
              style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white py-3 rounded-full shadow-md"
              onClick={handleGeneric} // Aquí se redirige a la página de Generic
            />
            <Button
              text="Cambios de contraseña"
              style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white py-3 rounded-full shadow-md"
              onClick={handleGeneric} // Aquí se redirige a la página de Generic
            />
            <Button
              text="Soporte"
              style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white py-3 rounded-full shadow-md"
              onClick={handleGeneric} // Aquí se redirige a la página de Generic
            />
        </div>
         <Card className="p- text-center">
                  <h2 className="text-primary-dark text-xl font-semibold mb-4"></h2>
                  <Button
                     text="Salir"
                     style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white font-bold py-3 rounded-md mt-4"
                     onClick={handleHome}
                    />
        
          </Card>
    </div>
  );
}