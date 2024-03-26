import React from 'react';
import { MessagesItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useMessages } from '../../../hooks';

const MessagesList = () => {
  const { messages } = useMessages();

  return (
    <div>
      <DataList<MessagesItem> model="messages" items={messages} />
    </div>
  );
};

export default MessagesList;
