import { useState } from 'react'
import { toast } from 'react-hot-toast'

import TicTacToeButton from '../components/tictactoe/TicTacToeButton.jsx';
import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import notificationSound from '../assets/sounds/bubble-sound.wav';

const useTictactoeInvite = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on('newTictactoeInvite', () => {

            const sound = new Audio(notificationSound);
            sound.play();
            console.log(socket._id)
            setMessages([...messages, "invite"]);
        });

        return () => socket?.off('newTictactoeInvite');
    }, [socket, messages, setMessages]);
}

export default useTictactoeInvite


