import { createFileRoute } from '@tanstack/react-router'
import GenericInfPage from '../components/pages/GenericInfPage'

export const Route = createFileRoute('/Generic')({
  component: RouteComponent,
})

function RouteComponent() {
 return <GenericInfPage />
}