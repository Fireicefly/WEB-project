import React from 'react'
import SearchInput from './SearchInput.jsx';
import Conversations from './Conversations.jsx';
import BottomButtons from './BottomButtons.jsx';
import TitleApp from './TitleApp.jsx';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 flex flex-col jusify-center w-72'>
        <TitleApp />
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <BottomButtons />
    </div>
  )
}

export default Sidebar;