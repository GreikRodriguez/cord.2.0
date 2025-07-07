// src/components/eventCreation/CategorySelectionModalContent.tsx
import React, { useState } from 'react';
import Button from '../common/Button'; // Importa tu componente Button

interface CategorySelectionModalContentProps {
  onClose: () => void; // Para que el contenido pueda cerrar el modal si tiene un botón "Listo" o "Cerrar"
  onSelectCategories: (selectedCategories: string[]) => void; // Para enviar las categorías seleccionadas al padre
  // Aquí podrías añadir props para categorías ya seleccionadas, etc.
}

const categories = [
  "Cumpleaños",
  "Graduaciones",
  "Cursos y Talleres",
  "Web y Eventos Online",
  "Lanzamientos de Productos",
  "Obras de Teatro y Danza",
  "Clases y Talleres Deportivos",
  "Torneo de Videojuegos",
  "Ferias de Emprendimiento",
];

export default function CategorySelectionModalContent(props: CategorySelectionModalContentProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((cat) => cat !== category); // Deseleccionar
      } else {
        return [...prevSelected, category]; // Seleccionar
      }
    });
  };

  const handleDone = () => {
    props.onSelectCategories(selected);
    props.onClose();
  };

  return (
    <div className="text-center w-full max-w-sm"> {/* Un div para controlar el ancho del contenido del modal */}
        <p className="text-gray-600 mb-6">Seleccione una o mas Categoria</p>
        <div className="space-y-3">
            {categories.map((category) => (
                <Button
                    key={category}
                    text={category}
                    style={`flex items-center justify-between w-full py-3 px-6 rounded-lg shadow-sm
                                ${selected.includes(category) ? 'bg-accent-brown text-white' : 'bg-light-bg hover:bg-gray-200 text-gray-800'}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    <svg className={`w-5 h-5 ${selected.includes(category) ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                </Button>
            ))}
        </div>
        <Button
            text="Listo?"
            onClick={handleDone}
            style="mt-8 bg-accent-brown hover:bg-[#A38D6D] text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline"
        />
    </div>
  );
}