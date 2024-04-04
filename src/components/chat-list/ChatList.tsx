import { Divider, Stack } from '@mui/material';
import { Scroll } from '../scroll/Scroll';
import { ChatListHeader } from './chat-list-header/ChatListHeader';
import { ChatListItem } from './chat-list-item/ChatListItem';
import { useState } from 'react';
import { ChatListAdd } from './chat-list-add/ChatListAdd';

const ChatList = () => {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);

  return (
    <>
      <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)} />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
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
    </>
  );
}

export { ChatList };
