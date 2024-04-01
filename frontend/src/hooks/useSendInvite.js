import {useState} from 'react'
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation.js';

const useSendInvite = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
        const response = await fetch(`/api/invite/send/${selectedConversation._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
            }
        );

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        setMessages([...messages, data]);


        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {sendMessage, loading}

}

export default useSendInvite