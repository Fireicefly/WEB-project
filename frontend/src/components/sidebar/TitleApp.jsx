import React from 'react'
import AddFriend from './addfriend/AddFriend.jsx'

const TitleApp = () => {
  return (
    <div className='w-full relative py-3'>
          <h1 className='text-lime-600 font-montserrat font-light text-center text-2xl'>Talk</h1>
          <AddFriend />
    </div>
  )
}

export default TitleApp;