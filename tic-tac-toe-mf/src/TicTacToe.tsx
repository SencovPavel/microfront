import React, { useState } from 'react';
import * as Markup from './TicTacToe.styles';

type Player = 'X' | 'O' | null;

type GameState = {
  winner: Player;
  line: number[] | null;
};

const calculateWinner = (squares: Player[]): GameState => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
};

const TicTacToe = (): React.ReactElement => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const { winner, line: calculatedLine } = calculateWinner(board);
  const isBoardFull = board.every((square) => square !== null);

  const handleClick = (index: number): void => {
    if (winner || board[index]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = (): void => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const getStatus = (): string => {
    if (winner) {
      return `Победитель: ${winner}`;
    } else if (isBoardFull) {
      return 'Ничья!';
    } else {
      return `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  const renderCell = (index: number): React.ReactElement => (
    <Markup.Cell
      onClick={() => handleClick(index)}
      disabled={board[index] !== null || !!winner}
    >
      {board[index]}
    </Markup.Cell>
  );

  return (
    <Markup.GameContainer>
      <h2>Tic-Tac-Toe</h2>
      <Markup.GameStatus>{getStatus()}</Markup.GameStatus>
      <Markup.Board>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <React.Fragment key={index}>
            {renderCell(index)}
          </React.Fragment>
        ))}
        {calculatedLine && <Markup.WinningLineOverlay $winningline={calculatedLine} />}
      </Markup.Board>
      <Markup.ResetButton onClick={handleReset}>Начать заново</Markup.ResetButton>
    </Markup.GameContainer>
  );
};

export default TicTacToe;
