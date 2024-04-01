import React from 'react'
import { IoAdd } from "react-icons/io5";

const User = () => {
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-lime-700 rounded p-2`}>
        <div className={`avatar`}>
            <div className='w-12 rounded-full'>
                <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1 m-2'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe <span className='text-sm text-gray-400'>(fireicefly)</span></p>
                <button className='cursor-pointer'><IoAdd className='text-3xl text-slate-200'/></button>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default User