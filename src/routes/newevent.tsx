import { createFileRoute } from '@tanstack/react-router'
import CreateEventPage from '../components/pages/CreateEventPage'

export const Route = createFileRoute('/newevent')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateEventPage />
}
