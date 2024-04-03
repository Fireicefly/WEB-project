import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import {useSocketContext} from '../context/SocketContext.jsx';
import notificationSound from '../assets/sounds/bubble-sound.wav';
import useConversationsList from '../zustand/useConversationsList.js';

const useGetConversations = () => {
    const {socket} = useSocketContext();
    const [loading, setLoading] = useState(false);
    const {conversations, setConversations} = useConversationsList();

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }

        getConversations();

    }, []);

    useEffect(() => {
        socket?.on('newFriend', (newFriend) => {

            const sound = new Audio(notificationSound);
            sound.play();
            console.log('newFriend', newFriend);
            setConversations([...conversations, newFriend]);
            
        });

        return () => socket?.off('newFriend');
    }, [socket]);

    return {loading, conversations};
}

export default useGetConversations;