import PageLayout from '../layouts/PageLayout'; // Importa el layout
import CalendarContent from '../Calendar/CalendarContent'; 
import { HeadContent } from '@tanstack/react-router';
import NavBar from '../common/NavBar';

export default function CalendarPage() {
  return (
    <PageLayout>
      <CalendarContent />
    </PageLayout>
  );
}