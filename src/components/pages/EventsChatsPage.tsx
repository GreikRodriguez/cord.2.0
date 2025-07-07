import PageLayout from '../layouts/PageLayout';
import ChatListContent from '../Chats/ChatListContent';

export default function EventChatsPage() {
  return (
    <PageLayout>
      <ChatListContent chatType="events" /> 
    </PageLayout>
  );
}