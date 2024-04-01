import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useLogout from '../../hooks/useLogout.js';
import NotificationsDropdown from './NotificationsDropdown.jsx';

const BottomButtons = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto flex flex-row py-4'>
        {!loading ? (
        <BiLogOut onClick={logout} className='w-6 h-6 mx-4 text-red-600 hover:text-red-800 cursor-pointer' />
        ) : (
        <span className='loading loading-spinner'></span>
        )}
        <NotificationsDropdown />
    </div>
  )
}

export default BottomButtons