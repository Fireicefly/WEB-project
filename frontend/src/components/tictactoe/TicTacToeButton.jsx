import React from 'react'
import { GiTicTacToe } from "react-icons/gi";
//import useTicTacToe from '../../hooks/useTicTacToe.js';
//import { Link } from 'react-router-dom'
//import { io } from "../socket/socket.js"
//import {sendTictactoeInvite} from './TicTacToeInvite.jsx'
import useSendInvite from '../../hooks/useSendInvite.js';



const TicTacToeButton = () => {
  
	
  const [message, setMessage] = useState('');
	const {loading, sendMessage} = useSendInvite();
	const handleSubmit = async (e) => {
		e.preventDefault();
		/*if (!message) {
      console.log("no msg")
      return;
    }*/
		await sendMessage(message);
		setMessage('');
 	};
  
  return (
    <form className='px-3 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading ? <div className='loading loading-spinner'></div> : <GiTicTacToe className='w-6 h-6 text-white cursor-pointer mt-2' />}
            </button>
        </div>
    </form>

    /*
    <form className='px-5 my'>
      <div className='mt-auto' align="right">
          {!loading ? (
          <GiTicTacToe onClick={ ()=>document.getElementById('my_modal_1').showModal()} className='w-6 h-6 text-white cursor-pointer mt-2' />
          ) : (
          <span className='loading loading-spinner'></span>
          )}
      </div>   
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Waiting for MOMO to play TicTacToe game ;{')'}</p>
          <p className="py">Press ESC to cancel </p>
          <span className="py-10 loading loading-bars loading-lg" ></span>
          
          <div className="modal-action">
            <form method="dialog">
                <Link 
                to={"/tictactoe"} 
                className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                href='#'
              >
                tictactoe

              </Link>              
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </form>
        
    */
    
     
  )
}


//<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>


export default TicTacToeButton