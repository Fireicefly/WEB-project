import React from 'react'
import FriendRequest from './FriendRequest.jsx'
import { IoNotifications } from "react-icons/io5";
import useGetFriendRequests from '../../hooks/useGetFriendRequests.js';

const NotificationsDropdown = () => {
  const {loading, friendRequests} = useGetFriendRequests();
  return (
    <div className="dropdown dropdown-top dropdown-end ml-auto">
          <div className="indicator mx-4">
          <span className="indicator-item badge badge-xs badge-success"></span>
          <IoNotifications tabIndex={0} role="button" className='outline-none w-6 h-6 text-slate-200 cursor-pointer hover:text-slate-500' />
          </div>
          {friendRequests.length !== 0 && (
            <ul className="block shadow dropdown-content z-[1] bg-zinc-900 max-h-60 border-2 border-zinc-800 w-72 overflow-auto rounded-lg scrollbar">
              {friendRequests.map((request, idx) => (
                <FriendRequest
                  key={request._id}
                  requestFriend={request}
                  lastIdx={idx === friendRequests.length - 1}
                />
              ))}
            </ul>
          )}
    </div>
  )
}

export default NotificationsDropdown