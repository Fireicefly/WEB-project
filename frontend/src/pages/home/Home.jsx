import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import ProfileModal from '../../components/sidebar/ProfileModal.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

const Home = () => {  
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-md overflow-hidden bg-zinc-900'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home;
