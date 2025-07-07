import { useNavigate } from '@tanstack/react-router'; 
import PageLayout from '../layouts/PageLayout';
import Button from '../common/Button';
import Card from '../common/Card';

export default function EventDetailsPage() {
  const navigate = useNavigate(); // Hook para obtener la función de navegación

  const handleHome = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/home' });
  };

  const handleEditEvent = () => {
    console.log('Botón Editar Evento clickeado');
  };

  const handleDeleteEvent = () => {
    console.log('Botón Eliminar Evento clickeado');
    if (window.confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      alert('Evento eliminado (simulado)');
      
    }
  };

  return (
    <PageLayout>
      <div className="p-4">
        <div className="flex justify-between space-x-4 mb-6">
          <Button
            text="Atrás"
            style="flex-1 bg-white text-primary-dark font-bold py-2 px-4 rounded-md shadow hover:bg-gray-100"
            onClick={handleHome}
          />
          <Button
            text="Editar Evento"
            style="flex-1 bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-md shadow"
            onClick={handleEditEvent}
          />
          <Button
            text="Eliminar Evento"
            style="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow"
            onClick={handleDeleteEvent}
          />
        </div>

        <Card className="p-6">
          <div className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 mb-6">
            Banner del evento
          </div>

          <h2 className="text-primary-dark text-xl font-semibold mb-3">
            Título completo del evento activo seleccionado: generalmente usan dos puntos algo
          </h2>
          <p className="text-gray-700 text-sm mb-2">
            <strong className="font-semibold">Lugar:</strong> Parte Específica Del Lugar. Lugar más generalmente: No de mes, Hora.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <strong className="font-semibold">Tipo de evento:</strong> tipo
          </p>

          {/* Botón "Ver amigos que asistieron" */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-blue-300"></div> {/* Placeholder para avatar */}
            <div className="w-6 h-6 rounded-full bg-yellow-300"></div> {/* Placeholder para avatar */}
            <div className="w-6 h-6 rounded-full bg-green-300"></div> {/* Placeholder para avatar */}
            <Button
              text="Ver amigos que asistieron"
              style="bg-gray-200 text-gray-700 text-sm font-semibold py-1 px-3 rounded-full hover:bg-gray-300"
              onClick={() => console.log('Ver amigos clickeado')}
            />
          </div>

          {/* Descripción */}
          <h3 className="text-primary-dark font-semibold mb-2">Descripción</h3>
          <p className="text-gray-700 text-sm mb-6">
            Aquí se mostrará la descripción del evento y una pequeña explicación de los objetivos del mismo y por ejemplo a quienes está destinado, etc.
          </p>

          {/* Detalles de Ingreso */}
          <h3 className="text-primary-dark font-semibold mb-2">Detalles de Ingreso</h3>
          <p className="text-gray-700 text-sm mb-6">(Gratuito o precio)</p>

          {/* Fecha y hora */}
          <h3 className="text-primary-dark font-semibold mb-2">De nuevo la fecha y la hora</h3>
          <div className="flex justify-between space-x-4 mt-4">
            <Button
              text="Organizadores"
              style="flex-1 bg-light-bg text-primary-dark font-bold py-2 rounded-md border border-gray-300 hover:bg-gray-200"
              onClick={() => console.log('Organizadores clickeado')}
            />
            <Button
              text="Ubicación"
              style="flex-1 bg-light-bg text-primary-dark font-bold py-2 rounded-md border border-gray-300 hover:bg-gray-200"
              onClick={() => console.log('Ubicación clickeado')}
            />
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}