// src/modals/common/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '../../components/common/Button'; // Si quieres un botón de cierre dentro del modal

interface ModalProps {
  isOpen: boolean; // Controla si el modal es visible
  onClose: () => void; // Función para cerrar el modal (ej. al hacer clic en el overlay o botón X)
  children: React.ReactNode; // El contenido que se mostrará dentro del modal
  title?: string; // Opcional: un título para el modal
}

export default function Modal(props: ModalProps) {
  if (!props.isOpen) {
    return null; // Si no está abierto, no renderiza nada
  }

  // Define las clases del overlay
  const overlayClasses = "fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50";

  // Define las clases del contenedor del modal
  const modalContainerClasses = "bg-white rounded-lg p-8 shadow-xl relative max-h-[90vh] overflow-y-auto"; // max-h y overflow para contenido largo

  return ReactDOM.createPortal(
    <div className={overlayClasses} onClick={props.onClose}> {/* Cierra al clickear fuera del contenido */}
      <div className={modalContainerClasses} onClick={(e) => e.stopPropagation()}> {/* Evita que el click en el contenido cierre el modal */}
        {/* Opcional: Un botón de cierre dentro del modal, si lo quieres */}
        {/* <Button
          text="&times;"
          style="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold bg-transparent p-0"
          onClick={props.onClose}
        /> */}
        {props.title && <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">{props.title}</h2>}
        {props.children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement // Monta el modal en el div 'modal-root'
  );
}