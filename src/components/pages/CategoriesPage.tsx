import Button from "../common/Button";
export default function CategoriesPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-75 p-4">
            <div className="bg-white rounded-lg p-8 shadow-xl text-center">
                <p className="text-lg font-semibold text-gray-800 mb-6">Categorias</p>
                <p className="text-gray-600 mb-6">Seleccione una o mas Categoria</p>
                <div className="space-y-3">
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Cumpleaños" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Graduaciones" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Conciertos" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Cursos y Talleres" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Web y Eventos Online" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Conferencias y Charlas" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Lanzamientos de Productos" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Obras de Teatro y Danza" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Clases y Talleres Deportivos" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Torneo de video juegos" />
                    <Button style="flex items-center justify-between w-full bg-[#F1EEF9] hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm" text="Ferias de emprendimiento" />
                </div>
            </div>
        </div>

    );
}