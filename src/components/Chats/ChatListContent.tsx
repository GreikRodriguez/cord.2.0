import Button from "../common/Button";
import Card from '../common/Card'; // Importa tu componente Card

interface ChatListContentProps {
  chatType: 'personal' | 'events'; // Para controlar qué botón está activo
}

export default function ChatListContent(props: ChatListContentProps) {
  return (
    <div className="p-4">
        <div className="flex space-x-4 mb-6">
            <Button
              text="Nuevo chat"
              style={`flex-1 font-bold py-2 rounded-lg text-center ${props.chatType === 'personal' ? 'bg-[#A38D6D] hover:bg-amber-500 text-white' : 'bg-white text-primary-dark shadow'}`}
            />
            <Button
              text="Chats de eventos"
              style={`flex-1 font-bold py-2 rounded-lg text-center ${props.chatType === 'events' ? 'bg-[#A38D6D] hover:bg-amber-500 text-white' : 'bg-white text-primary-dark shadow'}`}
            />
            <Button
              text="Inicio"
              style="flex-1 bg-white text-primary-dark font-bold py-2 rounded-lg text-center shadow"
            />
        </div>
        <div className="space-y-3">
            {/* Placeholder para los ítems de chat, usando Card */}
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 1</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 2</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 3</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 4</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 5</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 6</Card>
            <Card className="h-20 flex items-center justify-center text-gray-500">Item de Chat 7</Card>
        </div>
    </div>
  );
}