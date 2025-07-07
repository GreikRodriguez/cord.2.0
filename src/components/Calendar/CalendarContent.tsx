import React, { useState } from 'react';
import Calendar, { type CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '../common/Card';


//Este componente se lo pedí a Gemini y lo adapté al proyecto con ayuda de Windsurf //yodreth

export default function EventCreationForm() {
  const [date, setDate] = useState(new Date()); // Estado para guardar la fecha seleccionada

 const handleDateChange = (value: CalendarProps['value']) => {
  if (value instanceof Date) {
    setDate(value);
    console.log('Fecha seleccionada:', value);
  }
};

  return (
    
    <div className="p-4">
      
        <Card className="h-96 flex items-center justify-center text-gray-500">
            <div>
      <h2>Selecciona la fecha del evento</h2>
      <Calendar
        onChange={handleDateChange} // Función que se llama cuando se selecciona una fecha
        value={date} // La fecha actualmente seleccionada
      />
      <p>La fecha del evento es: {date.toDateString()}</p>
    </div>
        </Card>
    </div>
  );
}