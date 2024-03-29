import { useState } from 'react'
import { toast } from 'react-hot-toast'

import TicTacToeButton from '../components/tictactoe/TicTacToeButton.jsx';
import useTicTacToeAlert from '../components/tictactoe/TicTacToeAlert.jsx';

const useTicTacToe =  () => {
    const [loading, setLoading] = useState(false);
    
    //const {setAuthUser} = useAuthContext();
    
    const tictactoe = async () => {
        setLoading(true);
        try {
            useTicTacToeAlert()
            console.log("tictactoe")
        } catch (error) {
            toast.error(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    return { loading, tictactoe }
}

export default useTicTacToe