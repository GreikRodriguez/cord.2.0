import { createFileRoute } from '@tanstack/react-router'
import LogInPage from '../components/pages/LoginPage'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LogInPage />
}
