import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';


const SearchInput = () => {
  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '' || search.length < 3) {
      setSearch('');
      return toast.error('Type at least 3 characters');
    } 
    
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('No user found');
    }
  }

  return (
    <form className='flex justify-center items-center gap-2 px-3' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search conversation...' className='input input-bordered rounded-xl text-slate-100'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='p-2 rounded-full bg-lime-700 hover:bg-lime-950 text-5xl'>
            <IoSearchSharp className='w-5 h-5 text-white outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput

/*
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-700 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput 
*/