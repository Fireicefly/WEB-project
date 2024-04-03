import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import useFriendRequests from '../zustand/useFriendRequests.js'

const useRefuseFriendRequest = () => {
    const [loading, setLoading] = useState(false);
    const {friendRequests, setFriendRequests} = useFriendRequests();

    const refuseFriend = async (friendId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/refuserequest/${friendId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            const updatedFriendRequests = friendRequests.filter(request => request._id !== friendId);
            setFriendRequests(updatedFriendRequests);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {loading, refuseFriend};
}
export default useRefuseFriendRequest;