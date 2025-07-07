import { createFileRoute } from '@tanstack/react-router'
import CalendarPage from '../components/pages/CalendarPage'

export const Route = createFileRoute('/calendario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CalendarPage />
}
