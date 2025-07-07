import React from 'react';
// Este componente Card es un contenedor estilizado que puede ser reutilizado en diferentes partes de la aplicación.
interface CardProps {
  children: React.ReactNode; // Contenido que se renderizará dentro de la tarjeta
  className?: string; // Clases adicionales para la tarjeta
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void // Función que se ejecutará al hacer clic en la tarjeta, sino se proporciona no se activa 
   //el event:: react.MouseEvent<HTMLDivElement> es el tipo de evento que se dispara cuando se hace clic en una tarjeta y funciona como un parámetro de la función

}

export default function Card(props: CardProps) {
  // Clases base para todas las tarjetas
  const baseClasses = "bg-white rounded-lg p-4 shadow-md";
  const combinedClasses = `${baseClasses} ${props.className || ''}`.trim();

  return (
    <div className={combinedClasses} onClick={props.onClick}>
      {props.children}
    </div>
  );
}