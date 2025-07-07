//Este documento esta pensado para entradas de texto pequeñas, como un input de texto o un campo de búsqueda. Un "respuesat corta"
interface TextInputProps {
  id: string;
  text: string; 
  inputType: string; 
  style?: string; 
  value?: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Para manejar cambios (opcional)
  placeholder?: string; 
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-gray-700 text-sm font-semibold mb-2">{props.text}</label>
      <input
        type={props.inputType}
        id={props.id}
        className={`shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9] ${props.style || ''}`}
        //revisar este className, de donde viene y porque usa claseName para mandr estilos y no es un "style" 
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}



