import { useState, useEffect } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetFriendSearch from '../../../hooks/useGetFriendSearch.js';
import useFriendSearch from '../../../zustand/useFriendSearch.js';

const AddFriendSearch = () => {
    const [search, setSearch] = useState('');
    const { loading, requestSearch } = useGetFriendSearch();
    const { setRequestUsersList } = useFriendSearch();

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleOnChange = (e) => {
      setSearch(e.target.value);
    };

    useEffect(() => {
      const fetchData = async () => {
        if (search.length > 0) {
          await requestSearch(search);
        } else {
          setRequestUsersList([]);
        }
      };
      fetchData();
    }, [search]);


    return (
      <form className='w-full flex items-center gap-2 mb-8' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Search user...'
          className='input w-full input-bordered border-zinc-500 rounded-md py-7 text-lg'
          value={search}
          onChange={handleOnChange}
        />
      </form>
    );
}

export default AddFriendSearch