import { useState } from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom'

function Square({value, onSquareClick }) {
  
  //definition de Square comme d'un bouton avec une valeur
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  //partie tour + gagnant
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  //fonction pour placer le symbole + changer la valeur dans le tab squares
  function handleClick(value) {
    //if pour ne rien faire si fin de partie ou case deja remplie
    if (squares[value] || calculateWinner(squares)) {
      return;
    }
    //copie de la liste squares
    const nextSquares = squares.slice();
    
    //changement de valeur dans squares
    if (xIsNext){
      nextSquares[value] = "X";
      setXIsNext(false);
    } else {
      nextSquares[value] = "O";
      setXIsNext(true);
    }
    
    setSquares(nextSquares);
  }

  //maj de la grille
  return (
    <>
    <h1>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div className="status">{status}</div>
      <Link to={"/signup"} href='#'>
                    Close  game
        </Link>
      </h1>
    </>
  );
}

function calculateWinner(squares) {
  //toutes les combinaisons gagnantes
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //comparaisons pour voir si une combinaison est gagnante
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}