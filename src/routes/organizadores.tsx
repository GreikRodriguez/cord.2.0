import { createFileRoute } from '@tanstack/react-router'
import OrganizersPage from '../components/pages/OrganizerPage'

export const Route = createFileRoute('/organizadores')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OrganizersPage />
}
