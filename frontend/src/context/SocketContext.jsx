import { createContext, useState, useContext, useEffect } from 'react';
import { useAuthContext } from './AuthContext.jsx';
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    // Remove the declaration of setOnlineUsers since it is not being used
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();
    useEffect(() => {
        if (authUser) {

            const socket = io("http://localhost:9000",
                {
                    query: {
                        userId: authUser._id
                    }
                }
            );

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
}