import Button from "../common/Button";

interface ActionButton {
    text: string;
    onClick: () => void;
    style?: string; 
    isPrimary?: boolean; 
    
}

interface ActionButtonsRowProps {
    buttons: ActionButton[]; 
    style?: string; 
}

export default function ActionButtonsRow(props: ActionButtonsRowProps) {
    const baseClasses = "flex justify-between mb-6"; 
    const combinedClasses = `${baseClasses} ${props.style || ''}`.trim();
    // Combina las clases base con las pasadas por props, si no hay, usa un string vacío
    //la combinación de clases se hace con template literals (``) y el uso de ${} para insertar variables
    // El trim() es para eliminar espacios innecesarios al final o al principio 

    return (
        <div className={combinedClasses}>
            {props.buttons.map((button, index) => (
                <Button
                    key={index} 
                    text={button.text}
                    onClick={button.onClick}
                    style={`${button.isPrimary ? 'bg-[#A38D6D] hover:bg-amber-500' : 'bg-white text-primary-dark shadow hover:bg-gray-100'} font-bold py-2 px-4 rounded-lg flex-1 mx-1 ${button.style || ''}`}
                />
            ))}
        </div>
    );
}