import React from 'react'
import Conversation from './Conversation.jsx';
import {getRandomEmoji} from '../../utils/emojis.js';
import useGetConversations from '../../hooks/useGetConversations.js';


const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log('conversations', conversations);

  return (
    <div className='py-2 flex flex-col overflow-auto mx-2 scrollbar'>
        {conversations.map((conversation,idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
        ))}
    </div>
  )
}

export default Conversations

/*

import React from 'react'
import Conversation from './Conversation.jsx';

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations */