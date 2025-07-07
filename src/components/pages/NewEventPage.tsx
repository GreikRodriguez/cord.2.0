//esat es una version IAisada del createEvent page.

// src/pages/NewEventPage.tsx
import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import TextAreaInput from '../common/TextAreaImput';
import Button from '../common/Button';
import Modal from '../common/Modal'; // Asegúrate de que el modal esté correctamente importado
import CategorySelectionModalContent from '../eventCreation/CatSelectionModalContent'; // Importa el contenido del modal


export default function NewEventPage() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // ... otros estados para el resto de los campos del evento

  const handleSaveCategories = (categories: string[]) => {
    setSelectedCategories(categories);
    // console.log("Categorías seleccionadas:", categories);
    // Aquí podrías guardar las categorías en el estado global del evento si lo tuvieras
  };

  return (
    

    <div>   </div>
    /*
    <div className="min-h-screen bg-light-bg p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-primary-dark text-xl font-semibold mb-4">Detalles del Evento</h2>
            <p className="text-gray-600 mb-6">Por favor añada detalles cruciales adecuadamente.</p>

            <TextInput
            //de donde viene ese label y el id
            //el label y el id son props que se pasan al componente TextInput
                label="Nombre"
                id="event-name"
                inputType="text"
                text="Nombre" // Prop 'text' para la etiqueta
                placeholder="Ingrese el nombre del evento"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Fecha de inicio</label>
                <input type="date" className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-light-bg"/>
            </div>

            {/* ... otros campos como Duracion, Portada, Privacidad ... }

            <div className="mb-6">
                <label htmlFor="event-description" className="block text-gray-700 text-sm font-semibold mb-2">Descripcion</label>
                <p className="text-gray-600 mb-2">Por favor añada todos los detalles adecuadamente.</p>
                <TextAreaInput
                    label="Descripción"
                    id="event-description"
                    placeholder="Añada una descripción detallada de su evento..."
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                />
            </div>

            {/* ... Puedes añadir una sección para mostrar las categorías seleccionadas }
            {selectedCategories.length > 0 && (
                <div className="mb-6">
                    <p className="text-gray-700 text-sm font-semibold mb-2">Categorías Seleccionadas:</p>
                    <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((cat) => (
                            <span key={cat} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            )}

        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-primary-dark text-xl font-semibold mb-4">Categoria</h2>
            <p className="text-gray-600 mb-6">Por favor añada etiquetas o categorías en las cuales su evento se encuentra</p>
            <Button
                text="Categorias"
                style="w-full bg-accent-brown hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setShowCategoryModal(true)} // Al hacer clic, abre el modal
            />
        </div>

        {/* ... el resto de la página ... }

        {/* El modal de selección de categorías }
        <Modal
            isOpen={showCategoryModal} // Controla la visibilidad del modal
            onClose={() => setShowCategoryModal(false)} // Función para cerrar el modal
            title="Categorias" // Título opcional para el modal genérico
        >
            {/* Contenido del modal: se le pasan las funciones para interactuar }
            <CategorySelectionModalContent
                onClose={() => setShowCategoryModal(false)} // Cierra el modal desde el contenido
                onSelectCategories={handleSaveCategories} // Maneja la selección de categorías
            />
        </Modal>
    </div>
  );*/
        )
}