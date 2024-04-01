import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'

const useGetFriendRequests = () => {
    const [loading, setLoading] = useState(false);
    const [friendRequests, setFriendRequests] = useState([]);

    useEffect(() => {
        const getFriendRequests = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users/friendrequests');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setFriendRequests(data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        getFriendRequests();
    }, []);


    return {loading, friendRequests};
}
export default useGetFriendRequests;