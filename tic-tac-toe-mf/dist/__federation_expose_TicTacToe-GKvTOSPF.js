import { importShared } from './__federation_fn_import-D69mg_0X.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const styled = await importShared('styled-components');

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #ffffff; /* Clean white background */
  border-radius: 12px; /* Slightly more modern rounded corners */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08); /* Softer, more pronounced shadow */
  font-family: 'Arial', sans-serif; /* Modern, clean font */
  color: #333;
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px); /* Slightly smaller cells */
  grid-template-rows: repeat(3, 90px); /* Slightly smaller cells */
  gap: 2px; /* Minimal gap */
  margin-top: 30px;
  border: 1px solid #e0e0e0; /* Subtle border */
  background-color: #e0e0e0; /* Light gray lines for grid */
  position: relative; /* Added for positioning the winning line overlay */
`;
const Cell = styled.button`
  width: 90px;
  height: 90px;
  background-color: #ffffff; /* White cell background */
  border: none; /* No individual cell borders */
  font-size: 3.2em; /* Slightly larger font for prominence */
  font-weight: 600; /* Bolder font */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) => props.disabled ? "#ffffff" : "#f5f5f5"};
  }

  &:disabled {
    cursor: default;
  }

  color: ${(props) => props.children === "X" ? "#FF6B6B" : "#4ECDC4"};
`;
const GameStatus = styled.div`
  margin-top: 30px;
  font-size: 1.8em; /* Larger status text */
  font-weight: 700; /* Extra bold */
  color: #333;
  text-align: center;
`;
const ResetButton = styled.button`
  margin-top: 30px;
  padding: 12px 28px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #8338ec; /* A modern, vibrant purple */
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.2s;
  font-weight: 600;

  &:hover {
    background-color: #6a1aef; /* Darker purple on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }

  &:active {
    transform: translateY(0);
  }
`;
const WinningLineOverlay = styled.div`
  position: absolute;
  background-color: #FF6B6B; /* Цвет линии */
  height: 4px; /* Толщина линии */
  border-radius: 2px;
  z-index: 10;

  ${({ $winningline }) => {
  const [a, , c] = $winningline;
  const cellSize = 90;
  const gapSize = 2;
  const boardSize = 3 * cellSize + 2 * gapSize;
  let lineLeft = 0;
  let lineTop = 0;
  let lineWidth = 0;
  let lineAngle = 0;
  if (a === 0 && c === 2) {
    lineLeft = 0;
    lineTop = cellSize / 2 + gapSize / 2;
    lineWidth = boardSize;
    lineAngle = 0;
  } else if (a === 3 && c === 5) {
    lineLeft = 0;
    lineTop = 1 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2;
    lineWidth = boardSize;
    lineAngle = 0;
  } else if (a === 6 && c === 8) {
    lineLeft = 0;
    lineTop = 2 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2;
    lineWidth = boardSize;
    lineAngle = 0;
  } else if (a === 0 && c === 6) {
    lineLeft = cellSize / 2 + gapSize / 2;
    lineTop = 0;
    lineWidth = boardSize;
    lineAngle = 90;
  } else if (a === 1 && c === 7) {
    lineLeft = 1 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2;
    lineTop = 0;
    lineWidth = boardSize;
    lineAngle = 90;
  } else if (a === 2 && c === 8) {
    lineLeft = 2 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2;
    lineTop = 0;
    lineWidth = boardSize;
    lineAngle = 90;
  } else if (a === 0 && c === 8) {
    lineLeft = 0;
    lineTop = 0;
    lineWidth = Math.sqrt(2 * Math.pow(boardSize, 2));
    lineAngle = 45;
  } else if (a === 2 && c === 6) {
    lineLeft = boardSize;
    lineTop = 0;
    lineWidth = Math.sqrt(2 * Math.pow(boardSize, 2));
    lineAngle = 135;
  }
  return `
      width: ${lineWidth}px;
      transform: rotate(${lineAngle}deg);
      transform-origin: top left;
      left: ${lineLeft}px;
      top: ${lineTop}px;
    `;
}}
`;

const React = await importShared('react');
const {useState} = React;
const calculateWinner = (squares) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
};
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const { winner, line: calculatedLine } = calculateWinner(board);
  const isBoardFull = board.every((square) => square !== null);
  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  const getStatus = () => {
    if (winner) {
      return `Победитель: ${winner}`;
    } else if (isBoardFull) {
      return "Ничья!";
    } else {
      return `Следующий ход: ${xIsNext ? "X" : "O"}`;
    }
  };
  const renderCell = (index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cell,
    {
      onClick: () => handleClick(index),
      disabled: board[index] !== null || !!winner,
      children: board[index]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GameContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Tic-Tac-Toe" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameStatus, { children: getStatus() }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Board, { children: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: renderCell(index) }, index)),
      calculatedLine && /* @__PURE__ */ jsxRuntimeExports.jsx(WinningLineOverlay, { $winningline: calculatedLine })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResetButton, { onClick: handleReset, children: "Начать заново" })
  ] });
};

export { TicTacToe as default, jsxRuntimeExports as j };
