import { createFileRoute } from '@tanstack/react-router'
import Acorde from '../components/pages/AcordePage'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Acorde />
  )
}
