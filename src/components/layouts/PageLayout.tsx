import React, { useState } from 'react';
import NavBar from "../common/NavBar";
import SideMenu from "../navigation/SideMenu";
interface PageLayoutProps {
  children: React.ReactNode; 
  //enviamos el children como un node
  // Contenido principal de la página
  //usamos children para que el layout pueda envolver cualquier contenido que se le pase
  //children es una propiedad especial de React que permite pasar contenido entre las etiquetas de apertura y
  //Esto surje porque simplificamos mucho el diseño de las paginas y queria crear una forma de reutilizar el layout
}

export default function PageLayout(props: PageLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // Estado para controlar el SideMenu 


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-bg">

      <NavBar onMenuClick={handleMenuToggle} />


      <main className="flex-grow p-4">
        {props.children}
      </main>


      <SideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </div>
  );
}