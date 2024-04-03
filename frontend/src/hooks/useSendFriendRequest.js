import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'


const useSendFriendRequest = () => {
    const [loading, setLoading] = useState(false);

    const sendFriendRequest = async (friendId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/sendrequest/${friendId}`,
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
            return true;
        } catch (err) {
            toast.error(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {loading, sendFriendRequest};
}
export default useSendFriendRequest;