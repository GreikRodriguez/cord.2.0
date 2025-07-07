import { createFileRoute } from '@tanstack/react-router'
import AcordePage from '../components/pages/AcordePage'

export const Route = createFileRoute('/Acorde')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AcordePage />
}
