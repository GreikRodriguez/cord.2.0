import { createFileRoute } from '@tanstack/react-router'
import AboutUsContent from '../components/profile/AboutUsContent'

export const Route = createFileRoute('/AboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutUsContent />
}
