import styled from 'styled-components';

export const GameContainer = styled.div`
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

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px); /* Slightly smaller cells */
  grid-template-rows: repeat(3, 90px); /* Slightly smaller cells */
  gap: 2px; /* Minimal gap */
  margin-top: 30px;
  border: 1px solid #e0e0e0; /* Subtle border */
  background-color: #e0e0e0; /* Light gray lines for grid */
  position: relative; /* Added for positioning the winning line overlay */
`;

export const Cell = styled.button<{ $iswinningcell?: boolean }>`
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
    background-color: ${(props) => (props.disabled ? '#ffffff' : '#f5f5f5')};
  }

  &:disabled {
    cursor: default;
  }

  color: ${(props) => (props.children === 'X' ? '#FF6B6B' : '#4ECDC4')};
`;

export const GameStatus = styled.div`
  margin-top: 30px;
  font-size: 1.8em; /* Larger status text */
  font-weight: 700; /* Extra bold */
  color: #333;
  text-align: center;
`;

export const ResetButton = styled.button`
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

export const WinningLineOverlay = styled.div<{ $winningline: number[] }>`
  position: absolute;
  background-color: #FF6B6B; /* Цвет линии */
  height: 4px; /* Толщина линии */
  border-radius: 2px;
  z-index: 10;

  ${({ $winningline }) => {
    const [a, , c] = $winningline; // Использование a и c для определения крайних точек линии
    const cellSize = 90; // Должно соответствовать ширине/высоте ячейки
    const gapSize = 2; // Должно соответствовать зазору
    const boardSize = 3 * cellSize + 2 * gapSize; // Общий размер доски (3 ячейки + 2 зазора)

    let lineLeft = 0;
    let lineTop = 0;
    let lineWidth = 0;
    let lineAngle = 0;

    // Горизонтальные линии
    if (a === 0 && c === 2) {
      lineLeft = 0;
      lineTop = cellSize / 2 + gapSize / 2; // Центр первой строки
      lineWidth = boardSize;
      lineAngle = 0;
    } else if (a === 3 && c === 5) {
      lineLeft = 0;
      lineTop = 1 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2; // Центр второй строки
      lineWidth = boardSize;
      lineAngle = 0;
    } else if (a === 6 && c === 8) {
      lineLeft = 0;
      lineTop = 2 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2; // Центр третьей строки
      lineWidth = boardSize;
      lineAngle = 0;
    }
    // Вертикальные линии
    else if (a === 0 && c === 6) {
      lineLeft = cellSize / 2 + gapSize / 2; // Центр первого столбца
      lineTop = 0;
      lineWidth = boardSize;
      lineAngle = 90;
    } else if (a === 1 && c === 7) {
      lineLeft = 1 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2; // Центр второго столбца
      lineTop = 0;
      lineWidth = boardSize;
      lineAngle = 90;
    } else if (a === 2 && c === 8) {
      lineLeft = 2 * (cellSize + gapSize) + cellSize / 2 + gapSize / 2; // Центр третьего столбца
      lineTop = 0;
      lineWidth = boardSize;
      lineAngle = 90;
    }
    // Диагональные линии
    else if (a === 0 && c === 8) {
      lineLeft = 0;
      lineTop = 0;
      lineWidth = Math.sqrt(2 * Math.pow(boardSize, 2)); // Длина диагонали
      lineAngle = 45; // Из верхнего левого в нижний правый
    } else if (a === 2 && c === 6) {
      lineLeft = boardSize; // Начало с правого верхнего угла
      lineTop = 0;
      lineWidth = Math.sqrt(2 * Math.pow(boardSize, 2)); // Длина диагонали
      lineAngle = 135; // Из верхнего правого в нижний левый
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
