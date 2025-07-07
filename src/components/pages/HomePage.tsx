import PageLayout from '../layouts/PageLayout'; // Importa el layout
import Button from '../common/Button'; // Importa tu componente Button
import Card from '../common/Card';
import { useNavigate } from '@tanstack/react-router';

export default function HomePage() {

      const navigate = useNavigate();
    
      const handleAnyClick = () => {
        // Redirige al usuario a la página de registro
        navigate({ to: '/newevent' });
      };

      const handleEventDetail = () => {
        navigate({ to: '/EventDetail' });
      };
  
  return (
    <PageLayout>
      <div className="p-4">
          <Button
              text="Crear nuevo evento"
              style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-3 rounded-lg text-lg mb-6"
              onClick={handleAnyClick} 
          />

          <div className="mb-6">
              <h2 className="text-primary-dark text-xl font-semibold mb-3">Eventos activos</h2>
              <div className="space-y-3">
                
            <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Activo 1
          </Card>
          <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Activo 2
          </Card>
          <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Activo 3
          </Card>
          <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Activo 4
          </Card>
              </div>
          </div>

          <div>
              <h2 className="text-primary-dark text-xl font-semibold mb-3">Eventos pasados</h2>
              <div className="space-y-3">
                 <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Pasado 1
          </Card>
          <Card 
            className="h-24 flex items-center justify-center text-gray-500" 
            onClick={handleEventDetail} 
          >
            Evento Pasado 2
          
          </Card>
                  
              </div>
          </div>
      </div>
    </PageLayout>
  );
}