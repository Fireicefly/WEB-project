import React from 'react'
import { GiTicTacToe } from "react-icons/gi";
import useTicTacToe from '../../hooks/useTicTacToe.js';

const TicTacToeButton = () => {
  const {loading, tictactoe} = useTicTacToe();
  return (
    <form className='px-5 my'>
      <div className='mt-auto' align="right">
          {!loading ? (
          <GiTicTacToe onClick={()=>document.getElementById('my_modal_1').showModal()} className='w-6 h-6 text-white cursor-pointer mt-2' />
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
              {/* if there is a button in form, it will close the modal */}
              
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
          </form>
  )
}


<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>


export default TicTacToeButton