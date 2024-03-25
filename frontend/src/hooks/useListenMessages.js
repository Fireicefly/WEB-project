import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import notificationSound from '../assets/sounds/bubble-sound.wav';
const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {

            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);

        });

        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]);
}

export default useListenMessages