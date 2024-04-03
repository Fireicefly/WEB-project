import React from 'react'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useAcceptFriendRequest from '../../hooks/useAcceptFriendRequest.js';
import useRefuseFriendRequest from '../../hooks/useRefuseFriendRequest.js';

const FriendRequest = ({requestFriend, lastIdx}) => {
  const {loadingAccept, acceptFriend} = useAcceptFriendRequest();
  const {loadingRefuse, refuseFriend} = useRefuseFriendRequest();
  
  const handleAcceptFriend = (friendId) => async () => {
    await acceptFriend(friendId);
  }

  const handleRefuseFriend = (friendId) => async () => {
    await refuseFriend(friendId);
  }

  return (
    <>
        <li className='flex flex-row justify-center items-center p-3'>
            <p className='flex-1 text-xs'><span className='font-bold'>{requestFriend.username}</span> sent you a friend request</p>
            <button onClick={handleAcceptFriend(requestFriend._id)}><FaCheck className='text-lime-600 hover:text-lime-800 mx-2 cursor-pointer' /></button>
            <button onClick={handleRefuseFriend(requestFriend._id)}><RxCross2 className='text-red-700 hover:text-red-900 cursor-pointer'/></button>
        </li>
        {lastIdx ? null : <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default FriendRequest