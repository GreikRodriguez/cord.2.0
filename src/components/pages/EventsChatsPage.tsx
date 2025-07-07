import PageLayout from '../layouts/PageLayout';
import ChatListContent from '../Chats/ChatListContent';

export default function EventChatsPage() {
  return (
    <PageLayout>
      <ChatListContent chatType="events" /> {/* Indica que se muestren los chats de eventos */}
    </PageLayout>
  );
}