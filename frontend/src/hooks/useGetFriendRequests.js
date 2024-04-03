import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useFriendRequests from '../zustand/useFriendRequests.js';

const useGetFriendRequests = () => {
    const [loading, setLoading] = useState(false);
    const {friendRequests, setFriendRequests } = useFriendRequests();

    useEffect(() => {
        const getFriendRequests = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users/friendrequests');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setFriendRequests(data); // Set the friendRequests state with the data received
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        };
        getFriendRequests();
    }, []); // Empty array as the second argument

    return { loading, friendRequests }; // Return the updated friendRequests state
};
export default useGetFriendRequests;