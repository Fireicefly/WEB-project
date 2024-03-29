import React from 'react'
import User from './User.jsx'
const UserList = () => {
  return (
    <div className='flex flex-col w-full grow overflow-auto scrollbar'>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
    </div>
  )
}

export default UserList