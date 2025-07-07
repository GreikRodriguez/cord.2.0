// Este sería el componente más importante para unificar estas páginas. Sería un layout que provee la estructura común. 
import React, { useState } from 'react';
import NavBar from "../common/NavBar";
import SideMenu from "../navigation/SideMenu";
interface PageLayoutProps {
  children: React.ReactNode; //enviamos el children como un node
  // Contenido principal de la página
  //usamos children para que el layout pueda envolver cualquier contenido que se le pase
  //children es una propiedad especial de React que permite pasar contenido entre las etiquetas de apertura y
  //Esto surje porque simplificamos mucho el diseño de las paginas y queria crear una forma de reutilizar el layout
}

export default function PageLayout(props: PageLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // Estado para controlar el SideMenu 
  // Esto está fallando porque no se ha importado useState
  // Asegúrate de importar useState desde React

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-bg">
      {/* NavBar siempre visible */}
      <NavBar onMenuClick={handleMenuToggle} />

      {/* Contenido principal de la página */}
      <main className="flex-grow p-4">
        {props.children}
      </main>

      {/* SideMenu se renderiza condicionalmente y se superpone */}
      <SideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </div>
  );
}