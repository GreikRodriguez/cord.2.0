import { createFileRoute } from '@tanstack/react-router'
import AboutUsContent from '../components/profile/AboutUsContent'

export const Route = createFileRoute('/aboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutUsContent />
}
