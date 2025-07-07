import PageLayout from '../layouts/PageLayout';
import ChatListContent from '../Chats/ChatListContent';

export default function PersonalChatsPage() {
  return (
    <PageLayout>
      <ChatListContent chatType="personal" /> 
    </PageLayout>
  );
}