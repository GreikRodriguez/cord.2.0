import { createFileRoute } from '@tanstack/react-router'
import AboutUsPage from '../components/pages/AboutUsPage'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutUsPage />
}
