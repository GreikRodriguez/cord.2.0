import React from "react";
interface ButtonProps {
  style: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Prop para el evento de click (opcional)
  //React.MouseEvent<HTMLButtonElement> es un tipo prefinido de react que incluye todas las propiedades HTML estándar
  type?: "button" | "submit" | "reset"; // Prop para el tipo de botón (opcional, útil para formularios)
  children?: React.ReactNode;
  //windsurf propuso el importe de react y el uso de React.ReactNode para el children
  //children es un prop especial en React que permite pasar contenido entre las etiquetas de apertura y cierre de un componente.

  //Buscar solución y explicación al respecto del children y porque falta en el inputarea text
  //La razón por la que el prop children es útil en el componente Button es que permite pasar contenido
  //adicional dentro del botón, como íconos o texto personalizado, en lugar de depender únicamente del prop text.
  // Esto proporciona mayor flexibilidad en la composición del botón.
}


export default function Button(props: ButtonProps) {
  return (
    <button
      className={props.style } 
      onClick={props.onClick}
      type={props.type || "button"} // al colocarlo con "|| "button"" se asegura de que el botón sea de tipo "button" por defecto sino le meten el prop

    >
      {props.text}
      {props.children}
    </button>
  );
}



