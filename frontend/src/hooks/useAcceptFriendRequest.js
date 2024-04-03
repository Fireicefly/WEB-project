import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import useFriendRequests from '../zustand/useFriendRequests.js'
import useConversationsList from '../zustand/useConversationsList.js'

// A FINIR

const useAcceptFriendRequest = () => {
    const [loading, setLoading] = useState(false);
    const {friendRequests, setFriendRequests} = useFriendRequests();
    const {conversations, setConversations} = useConversationsList();

    const acceptFriend = async (friendId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/addfriend/${friendId}`,
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
            setConversations([...conversations, data]);

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {loading, acceptFriend};
}
export default useAcceptFriendRequest;