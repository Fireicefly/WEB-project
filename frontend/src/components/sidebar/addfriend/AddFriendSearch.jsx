import { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const AddFriendSearch = () => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch('');
    }

  return (
    <form className='w-full flex items-center gap-2 mb-8' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search user...' className='input w-full input-bordered border-zinc-500 rounded-md py-7 text-lg'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default AddFriendSearch