import { createFileRoute } from '@tanstack/react-router'
import NotificationsPage from '../components/pages/NotificationsPage'

export const Route = createFileRoute('/notificaciones')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NotificationsPage />
}
