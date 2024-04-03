import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useFriendSearch from '../zustand/useFriendSearch.js';

const useGetFriendSearch = () => {
    const [loading, setLoading] = useState(false);
    const {requestUsersList, setRequestUsersList} = useFriendSearch();

    const requestSearch = async (search) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/searchfriend/${search}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setRequestUsersList(data);        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, requestSearch}; 
};
export default useGetFriendSearch;