import { createFileRoute } from '@tanstack/react-router'
import EventDetailsPage from '../components/pages/EventDetailPage'

export const Route = createFileRoute('/eventDetail')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EventDetailsPage />
}
