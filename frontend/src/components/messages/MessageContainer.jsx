import React, { useEffect } from 'react'
import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation.js';
import { useAuthContext } from '../../context/AuthContext.jsx';
import TicTacToeButton from '../tictactoe/TicTacToeButton.jsx';


const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='sm:min-w-[300px] sm:max-w-[300px] md:min-w-[450px] md:max-w-[450px] flex flex-col'>
        {!selectedConversation ? (<NoChatSelected />) : (
        <>
          <div className='bg-lime-800 px-4 py-2 mb-2'>
              <span className='label-text text-neutral-100'>To : </span>
              <span className='text-neutral-100 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <TicTacToeButton />
          <MessageInput />
          
        </>
        )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

export default MessageContainer;