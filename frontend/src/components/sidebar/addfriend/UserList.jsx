import React from 'react'
import User from './User.jsx'
import useFriendSearch from '../../../zustand/useFriendSearch.js'
const UserList = () => {
  const {requestUsersList} = useFriendSearch();
  return (
    <div className='flex flex-col w-full grow overflow-auto scrollbar'>
      {requestUsersList.map((user) => (
        <User key={user._id} user={user}/>)) }
    </div>
  )
}

export default UserList