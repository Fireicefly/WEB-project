import React from 'react'
import { IoAdd } from "react-icons/io5";
import useSendFriendRequest from '../../../hooks/useSendFriendRequest.js';
import { useAuthContext } from '../../../context/AuthContext.jsx';

const User = ({user}) => {
    const { loading, sendFriendRequest } = useSendFriendRequest();
    const {authUser} = useAuthContext();
    const handleSendRequest = async (friendId) => {
        await sendFriendRequest(friendId);
    };
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-lime-700 rounded p-2`}>
                <div className={`avatar`}>
                    <div className='w-12 rounded-full'>
                        <img src={user.profilePicture} alt="user avatar" />
                    </div>
                </div>
                <div className='flex flex-col flex-1 m-2'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{user.fullName} <span className='text-sm text-gray-400'>({user.username})</span></p>
                        {!user.friendRequests?.includes(authUser._id) ? (
                            <button onClick={() => handleSendRequest(user._id)} className='cursor-pointer'>
                                <IoAdd className='text-3xl text-slate-200'/>
                            </button>
                        ) : (
                            <p className='text-gray-400'>Requested</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default User