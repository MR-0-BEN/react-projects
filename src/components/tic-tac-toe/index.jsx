import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (squares) => {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! please restart the Game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}, please restart the Game`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  const Square = ({ value, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="square float-left  mr-[-1px] mt-[-1px] h-[100px] w-[100px] cursor-pointer border-[1px] border-red-700 bg-[#f2eff0] p-0 text-center  text-[40px]"
      >
        {value}
      </button>
    );
  };

  return (
    <div className="tic-tac-toe-container mt-[170px] flex flex-col items-center">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="mt-4 text-4xl font-semibold">{status}</h1>
      <button
        onClick={handleRestart}
        className="let mt-4 rounded-md bg-slate-800 px-4 py-2  uppercase tracking-widest text-white
      "
      >
        restart
      </button>
    </div>
  );
};
export default TicTacToe;
