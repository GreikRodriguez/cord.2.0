import { defineHandlerCallback } from "@tanstack/react-router/ssr/server";
import Button from "../common/Button";
import { Link } from "@tanstack/react-router";
import { useNavigate } from '@tanstack/react-router';
import { useState } from "react";

interface SideMenuProps {
  isOpen: boolean; // Controla si el menú está visible
  onClose: () => void; // Función para cerrar el menú
  
}

export default function SideMenu(props: SideMenuProps) {

const navigate = useNavigate();

const handlePerfil = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/perfil' });
  };

  const handleChats = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/chats' });
  };

  const handleCalendario = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/calendario' });
  };

  const handleOrganizadores = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/organizadores' });
  };

  const handleNotificaciones = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/notificaciones' });
  };

  const handleSoporte = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/soporte' });
  }

  const handleCerrarSesion = () => {
    // Redirige al usuario a la página de Acorde
    navigate({ to: '/Acorde' });
  };

  const handleAboutUs = () => {
    // Redirige al usuario a la página de AboutUs
    navigate({ to: '/AboutUs' });
  }

  // Clases para controlar la visibilidad y animación del menú
  const menuPositionClass = props.isOpen ? 'translate-x-0' : '-translate-x-full';
  const overlayClasses = props.isOpen ? 'fixed inset-0 bg-gray-900 bg-opacity-50 z-40' : 'hidden';
  //Especificar en la documentacion que esto viene de IA

  return (
    <>
      {/* Overlay (fondo oscuro) que cierra el menú al hacer clic */}
      <div className={overlayClasses} onClick={props.onClose}></div>

      <div className={`fixed top-0 left-0 h-screen w-64 bg-zinc-800 p-6 flex flex-col justify-between z-50 shadow-lg transform ${menuPositionClass} transition-transform duration-300 ease-in-out`}>
          <div>
              <div className="flex justify-between items-center mb-8">
                  <div className="w-auto h-auto bg-blue-900 text-white text-xl font-bold rounded-md flex items-center justify-center">DarkMode</div>
                  <Button
                    text="X"
                    style="text-white text-xl font-bold bg-transparent p-0" // Estilo específico para la X
                    onClick={props.onClose}
                  />
              </div>
              <nav className="space-y-4">
                  <Button text="Perfil" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" 
                  onClick={handlePerfil}/>
                  <Button text="Chats" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown"
                  onClick={handleChats}/>
                  <Button text="Calendario" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" 
                  onClick={handleCalendario}/>
                  <Button text="Organizadores" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" 
                  onClick={handleOrganizadores}/>
                  <Button text="Notificaciones" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" 
                  onClick={handleNotificaciones}/>
                  <Button text="Acerca de nosostros" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown"
                  onClick={handleAboutUs}/>
                  <Button text="Soporte" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown"
                  onClick={handleSoporte}/>
              </nav>
          </div>
          <Button
            text="Cerrar sesión"
            style="block w-full text-left py-2 px-4 rounded-lg text-white bg-red-600 hover:bg-red-700"
            onClick={handleCerrarSesion} 
          />
      </div>
    </>
  );
}