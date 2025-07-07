import Card from '../common/Card'; // Importa tu componente Card

export default function NotificationsListContent() {
  return (
    <div className="space-y-3">
        {/* Placeholder para los ítems de notificación, usando Card */}
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 1</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 2</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 3</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 4</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 5</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 6</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 7</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Notificación 8</Card>
    </div>
  );
}