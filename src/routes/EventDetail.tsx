import { createFileRoute } from '@tanstack/react-router'
import EventDetailsPage from '../components/pages/EventDetailPage'

export const Route = createFileRoute('/EventDetail')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EventDetailsPage />
}
