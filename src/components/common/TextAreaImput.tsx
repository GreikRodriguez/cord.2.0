// src/components/common/TextAreaInput.tsx
// Este componente es un TextArea que se expande automáticamente a medida que el usuario escribe.
//Función: Se utiliza específicamente para campos de entrada de múltiples líneas de texto, donde se espera que el usuario escriba párrafos, descripciones extensas, comentarios, etc.

import React, { useRef, useEffect } from 'react';

interface TextAreaInputProps {
  label: string; // El texto que va en la etiqueta superior (e.g., "Descripción")
  id: string;    // El ID único para el textarea y el htmlFor de la etiqueta
  style?: string; // Opcional, para clases adicionales de Tailwind
  initialHeight?: number; // Altura inicial en píxeles
  value?: string; // Para controlar el valor (opcional)
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Para manejar cambios (opcional)
  placeholder?: string; // Para el placeholder (opcional)
  rows?: number; // Número de filas inicial (por defecto 1 para auto-expansión)
}

export default function TextAreaInput(props: TextAreaInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Efecto para auto-expandir el textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Resetear la altura para calcular la nueva
      textarea.style.height = `${textarea.scrollHeight}px`; // Establecer la altura al scrollHeight
    }
  }, [props.value]); // Re-ejecutar cuando el valor del textarea cambie

  // Manejador para el evento onChange, que también activa la auto-expansión
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Llama a la función onChange original si fue proporcionada
    if (props.onChange) {
      props.onChange(e);
    }
    // Ajusta la altura
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Define las clases base de Tailwind para el textarea
  const baseTextareaClasses = "shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9] resize-none overflow-hidden";
  // 'resize-none' para deshabilitar el redimensionamiento manual del usuario
  // 'overflow-hidden' para evitar barras de desplazamiento hasta que se expanda

  // Combina las clases base con cualquier style pasado como prop
  const combinedTextareaClasses = `${baseTextareaClasses} ${props.style || ''}`.trim();

  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-gray-700 text-sm font-semibold mb-2">
        {props.label}
      </label>
      <textarea
        id={props.id}
        ref={textareaRef} // Asigna la ref al textarea
        className={combinedTextareaClasses}
        rows={props.rows || 1} // Inicia con 1 fila, la altura se ajustará por JS
        style={{ minHeight: `${props.initialHeight || 80}px` }} // Altura mínima
        onChange={handleChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}


// Este componente TextAreaInput es un textarea que se expande automáticamente a medida que el usuario escribe.
// Utiliza una referencia para ajustar la altura del textarea basado en su contenido.
// Puedes usarlo en tus formularios para entradas de texto más largas, como descripciones o comentarios.