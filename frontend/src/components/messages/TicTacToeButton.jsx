import React from 'react'
import { GiTicTacToe } from "react-icons/gi";
import useTicTacToe from '../../hooks/useTicTacToe.js';

const TicTacToeButton = () => {
  const {loading, tictactoe} = useTicTacToe();
  return (
    <form className='px-5 my'>
      <div className='mt-auto' align="right">
          {!loading ? (
          <GiTicTacToe onClick={tictactoe} className='w-6 h-6 text-white cursor-pointer mt-2' />
          ) : (
          <span className='loading loading-spinner'></span>
          )}
      </div>
    </form>
  )
}

export default TicTacToeButton