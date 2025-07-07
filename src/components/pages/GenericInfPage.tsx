import React, { useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import Button from '../common/Button'; 
import Card from '../common/Card';
import TextInput from '../common/TextInput'; 
import { useNavigate } from '@tanstack/react-router';

export default function GenericInfPage() {
  // Estados para los campos de contraseña (aunque no tendremos lógica de validación real por ahora)
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Simulación de función de cambio de contraseña
  const handleChangePassword = () => {
    console.log("Intentando cambiar contraseña...");
    console.log("Contraseña actual:", currentPassword);
    console.log("Nueva contraseña:", newPassword);
    console.log("Confirmar nueva contraseña:", confirmNewPassword);

    // Aquí iría la lógica real de validación y cambio de contraseña
    alert("Función de cambio de contraseña simulada.");
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleCallGod = () => {
    alert("¡Llamando a Dios para soporte técnico!");
  };
  const navigate = useNavigate();
  const handlePerfil = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/perfil' });
  };


  return (
    <PageLayout>
      <div className="p-4 space-y-6"> {/* Añadido space-y-6 para separar las secciones */}

        {/* Sección: Información Personal */}
        <Card className="p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Información Personal</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Nombre Completo:</strong> Juan Pérez García</p>
            <p><strong>Fecha de Nacimiento:</strong> 15/05/1990</p>
            <p><strong>Género:</strong> Masculino</p>
            <p><strong>Nacionalidad:</strong> Costarricense</p>
            <p><strong>Ocupación:</strong> Desarrollador de Software</p>
          </div>
        </Card>

        {/* Sección: Información de Contacto */}
        <Card className="p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Información de Contacto</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> juan.perez@example.com</p>
            <p><strong>Teléfono:</strong> +506 8888-7777</p>
            <p><strong>Dirección:</strong> Calle Principal, Alajuela, Costa Rica</p>
            <p><strong>Red Social (Facebook):</strong> facebook.com/juanperez</p>
          </div>
        </Card>

        {/* Sección: Logros */}
        <Card className="p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Mis Logros</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Organizó 10 eventos exitosos en 2025.</li>
            <li>Certificación en Gestión de Proyectos de Eventos.</li>
            <li>Reconocimiento por parte de la comunidad ACORDE.</li>
            <li>Top 5 de organizadores de bodas.</li>
            <li>Colaborador en la plataforma ACORDE desde su lanzamiento.</li>
            <li>Participación activa en foros y webinars de eventos.</li>
            <li>Desarrollo de una aplicación para la gestión de eventos.</li>
            <li>Premio al mejor organizador de eventos del año 2025.</li>
            <li>Colaboración con ONGs para eventos benéficos.</li>
          </ul>
        </Card>

        {/* Sección: Cambiar Contraseña */}
        <Card className="p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Cambiar Contraseña</h2>
          <div className="space-y-4">
            <TextInput
              id="current-password"
              text="Contraseña Actual"
              inputType="password"
              placeholder="Ingrese su contraseña actual"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextInput
              id="new-password"
              text="Nueva Contraseña"
              inputType="password"
              placeholder="Ingrese su nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextInput
              id="confirm-new-password"
              text="Confirmar Nueva Contraseña"
              inputType="password"
              placeholder="Confirme su nueva contraseña"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <Button
              text="Cambiar Contraseña"
              style="w-full bg-accent-brown hover:bg-[#A38D6D] text-white font-bold py-3 rounded-md"
              onClick={handleChangePassword}
            />
          </div>
        </Card>

        {/* Sección: Soporte */}
        <Card className="p- text-center">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Soporte</h2>
          <TextInput
            id="support-message"
            text="Necesitas ayuda?"
            inputType="text"
            placeholder="Si algo falla toca llamar a Dios"
            style="mb-4"
            //readOnly={true} // Opcional: para que no se pueda escribir
            />
          <Button
            text="Llamar a Miranda"
            style="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 rounded-md"
            onClick={handleCallGod}
            />

          <Button
             text="Salir"
             style="w-full bg-[#A38D6D] hover:bg-amber-500 text-white font-bold py-3 rounded-md mt-4"
             onClick={handlePerfil}
            />

        </Card>

      </div>
    </PageLayout>
  );
}