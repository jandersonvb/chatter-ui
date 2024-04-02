import { Divider, Stack } from '@mui/material';
import { Scroll } from '../scroll/Scroll';
import { ChatListHeader } from './chat-list-header/ChatListHeader';
import { ChatListItem } from './chat-list-item/ChatListItem';

const ChatList = () => {
  return (
    <Stack>
      <ChatListHeader />
      <Divider />
      <Scroll>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </Scroll>
    </Stack>
  );
}

export { ChatList };
