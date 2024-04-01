import React from 'react'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FriendRequest = ({requestFriend, lastIdx}) => {
  return (
    <>
        <li className='flex flex-row justify-center items-center p-3'>
            <p className='flex-1 text-xs'><span className='font-bold'>{requestFriend.username}</span> sent you a friend request</p>
            <button><FaCheck className='text-lime-600 hover:text-lime-800 mx-2 cursor-pointer' /></button>
            <button><RxCross2 className='text-red-700 hover:text-red-900 cursor-pointer'/></button>
        </li>
        {lastIdx ? null : <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default FriendRequest