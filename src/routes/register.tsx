import { createFileRoute } from '@tanstack/react-router'
import RegistrePage from '../components/pages/RegistrePage'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RegistrePage />
}
