import Card from '../common/Card'; // Importa tu componente Card

export default function OrganizersListContent() {
  return (
    <div className="space-y-3">
        {/* Placeholder para los ítems de organizadores, usando Card */}
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 1</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 2</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 3</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 4</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 5</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 6</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 7</Card>
        <Card className="h-20 flex items-center justify-center text-gray-500">Organizador 8</Card>
    </div>
  );
}