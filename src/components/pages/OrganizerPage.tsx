import PageLayout from '../layouts/PageLayout';
import ActionButtonsRow from '../navigation/ActionsButtonsRows'; 
import OrganizersListContent from '../organizers/OrganizerListContent'; // Importa el contenido de la lista de organizadores
export default function OrganizersPage() {
  const organizerActionButtons = [
    { text: "Volver a información del evento", onClick: () => console.log("Volver clicked"), isPrimary: true },
    { text: "Inicio", onClick: () => console.log("Inicio clicked"), isPrimary: false },
  ];

  return (
    <PageLayout>
      {/* Pasa los botones a ActionButtonsRow */}
      <ActionButtonsRow buttons={organizerActionButtons} />
      <OrganizersListContent />
    </PageLayout>
  );
}