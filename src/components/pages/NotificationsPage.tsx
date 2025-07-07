import PageLayout from '../layouts/PageLayout';
import ActionButtonsRow from '../navigation/ActionsButtonsRows'; 
import NotificationsListContent from '../notifications/NotificationsListContent';

export default function NotificationsPage() {
  // Define los botones específicos para esta página
  const notificationActionButtons = [
    { text: "Crear notificación", onClick: () => console.log("Crear Notificación clicked"), isPrimary: true },
    { text: "Inicio", onClick: () => console.log("Inicio clicked"), isPrimary: false },
  ];

  return (
    <PageLayout>
      <ActionButtonsRow buttons={notificationActionButtons} />
      <NotificationsListContent />
    </PageLayout>
  );
}