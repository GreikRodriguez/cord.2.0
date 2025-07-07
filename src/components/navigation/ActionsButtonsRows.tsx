import Button from "../common/Button";

interface ActionButton {
    text: string;
    onClick: () => void;
    style?: string; // Estilo específico para este botón. Es opcional ya que Button lo usa directamente.
    isPrimary?: boolean; // Para diferenciar estilos base, ej. azul vs blanco
    // Revisar este booleano y componente porq esta exraño
}

interface ActionButtonsRowProps {
    buttons: ActionButton[]; // Un array de objetos de botón para poder colocar varios botones en la fila o la cantidad necesaria para la pagina en cuestion
    style?: string; // Estilo para el div contenedor de la fila
}

export default function ActionButtonsRow(props: ActionButtonsRowProps) {
    const baseClasses = "flex justify-between mb-6"; // Clases base para el contenedor de los botones 
    const combinedClasses = `${baseClasses} ${props.style || ''}`.trim();
    // Combina las clases base con las pasadas por props, si no hay, usa un string vacío
    //la combinación de clases se hace con template literals (``) y el uso de ${} para insertar variables
    // El trim() es para eliminar espacios innecesarios al final o al principio 

    return (
        <div className={combinedClasses}>
            {props.buttons.map((button, index) => (
                <Button
                    key={index} // Idealmente usar un ID único del botón si los datos vienen de una API
                    text={button.text}
                    onClick={button.onClick}
                    // Aquí fusionamos los estilos base con los estilos específicos del botón
                    style={`${button.isPrimary ? 'bg-[#A38D6D] hover:bg-amber-500' : 'bg-white text-primary-dark shadow hover:bg-gray-100'} font-bold py-2 px-4 rounded-lg flex-1 mx-1 ${button.style || ''}`}
                />
            ))}
        </div>
    );
}