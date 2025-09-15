import styled from 'styled-components';

/**
 * @typedef {object} StyledContainerProps
 */

/**
 * @component Container
 * @description Стилизованный контейнер для компонента Leaderboard.
 */
export const Container = styled.div`
  padding: 2rem;
  border: 1px solid #61dafb;
  border-radius: 8px;
  background-color: #20232a;
  text-align: center;
  max-width: 700px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

/**
 * @typedef {object} StyledTitleProps
 */

/**
 * @component Title
 * @description Стилизованный заголовок для компонента Leaderboard.
 */
export const Title = styled.h2`
  color: #61dafb;
  margin-bottom: 1.5rem;
  font-size: 2em;
`;

/**
 * @typedef {object} StyledTableProps
 */

/**
 * @component Table
 * @description Стилизованная таблица для лидерборда.
 */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  th {
    background-color: #333;
    color: #61dafb;
    font-weight: bold;
  }

  tr:hover {
    background-color: #3a3f4a;
  }
`;

/**
 * @typedef {object} StyledRankCellProps
 */

/**
 * @component RankCell
 * @description Стилизованная ячейка для ранга в таблице лидерборда.
 */
export const RankCell = styled.td`
  font-weight: bold;
  color: #a0a0a0;
`;

/**
 * @typedef {object} StyledUsernameCellProps
 */

/**
 * @component UsernameCell
 * @description Стилизованная ячейка для имени пользователя в таблице лидерборда.
 */
export const UsernameCell = styled.td`
  color: #ffffff;
`;

/**
 * @typedef {object} StyledAchievementsCellProps
 */

/**
 * @component AchievementsCell
 * @description Стилизованная ячейка для количества достижений в таблице лидерборда.
 */
export const AchievementsCell = styled.td`
  color: #61dafb;
  font-weight: bold;
`;
