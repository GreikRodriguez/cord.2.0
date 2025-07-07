import TextInput from "../common/TextInput"; 
import Button from "../common/Button";
import { useNavigate } from '@tanstack/react-router';
import { FaImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";

export default function CreateEventPage() {

    const navigate = useNavigate();
        
          const handleAnyClick = () => {
            // Redirige al usuario a la página de registro
            navigate({ to: '/home' });
          };

    return (
<div className="min-h-screen bg-[#F1EEF9] p-4">
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Detalles del Evento</h2>
        <p className="text-gray-600 mb-6">Por favor añada detalles cruciales adecuadamente.</p>

        <TextInput id="event-name" text="Nombre" inputType="text" style="mb-4" />

        <TextInput id="event-start-date" text="Fecha de inicio" inputType="date" style="mb-6" />

        <div className="mb-6">
            <p className="text-gray-700 text-sm font-semibold mb-2">Opcional</p>
            <div className="flex space-x-4">
                <Button style="flex-1 bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Fecha de finalización"/>

                <Button style="flex-1 bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Duracion aproximada"/>
            </div>
        </div>

        <div className="mb-6">
            <div className="h-32 bg-[#F1EEF9] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
            </div>
            <Button style="mt-4 w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Subir imagen"/>
        </div>

        <div className="mb-6 flex items-center">
            <div className="w-10 h-10 bg-[#F1EEF9] rounded-full mr-3"></div> <div>
                <p className="text-gray-800 font-semibold">Privacidad</p>
                <p className="text-sm text-gray-500">Escoje la privacidad del evento</p>
            </div>
        </div>

        <div className="mb-6">
            <label htmlFor="event-description" className="block text-gray-700 text-sm font-semibold mb-2">Descripcion</label>
            <p className="text-gray-600 mb-2">Por favor añada todos los detalles adecuadamente.</p>
           <TextInput id="event-description" text="Descripcion" inputType="textarea" style="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Puedes añadir fotos</label>
            <div className="w-32 h-32 bg-[#F1EEF9] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
                 <FaImage className="w-8 h-8" />
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700 text-sm font-semibold mb-2">Invitados</p>
            <p className="text-gray-600 mb-2">Cuantos invitados espera?</p>
            <div className="flex space-x-4">
                 <TextInput id="event-max-inv" text="Max Inv" inputType="number" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
                <TextInput id="event-min-inv" text="Min Inv" inputType="number" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Ubicacion</h2>
        <p className="text-gray-600 mb-6">Por favor añada la locacion exacta para sus invitados</p>
        <div className="flex items-center bg-[#F1EEF9] p-3 rounded-lg mb-6">
            <FaLocationDot className="w-8 h-8"  />
            <TextInput id="event-location" text="Ubicacion" inputType="text" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
        </div>
        <p className="text-gray-600 mb-4">Quieres añadir un link externo?</p>
       <Button style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Añadir link externo"/>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Categoria</h2>
        <p className="text-gray-600 mb-6">Por favor añada etiquetas o categorías en las cuales su evento se encuentra</p>
        <Button style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Agregar categoria"/>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Inf. Contacto</h2>
        <p className="text-gray-600 mb-6">Es importante que añadas un numero de telefono asignado para el evento y diferentes medios.</p>
        <div className="space-y-4">
            <div className="flex items-center">
                <FaPhoneSquareAlt className="w-8 h-8"/>
                <input type="text" placeholder="Numero" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <FaFacebookSquare className="w-8 h-8"/>
                <input type="text" placeholder="Facebook" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <FaSquareInstagram className="w-8 h-8"/>
                <input type="text" placeholder="Instagram" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <MdOutlineWebAsset className="w-8 h-8"/>
                <input type="text" placeholder="Web" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
        </div>
    </div>

    <div className="flex justify-between mt-8">
        <Button style="bg-gray-500 hover:bg-[#A38D6D] text-white font-bold py-3 px-6 rounded-lg text-lg" text="Salir "/>
        <Button style="bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-3 px-6 rounded-lg text-lg" text="Terminar" onClick={handleAnyClick}/>
    </div>
</div>


    );
}