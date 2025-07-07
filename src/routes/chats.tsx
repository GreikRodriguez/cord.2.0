import { createFileRoute } from '@tanstack/react-router'
import PersonalChatsPage from '../components/pages/PersonalChatsPage'

export const Route = createFileRoute('/chats')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PersonalChatsPage />
}
