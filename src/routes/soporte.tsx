import { createFileRoute } from '@tanstack/react-router'
import SoportePage from '../components/pages/SoportePage'

export const Route = createFileRoute('/soporte')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SoportePage />
}
