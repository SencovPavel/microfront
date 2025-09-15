import styled from 'styled-components';

/**
 * @typedef {object} StyledContainerProps
 */

/**
 * @component Container
 * @description Стилизованный контейнер для компонента AchievementsList.
 */
export const Container = styled.div`
  padding: 2rem;
  border: 1px solid #61dafb;
  border-radius: 8px;
  background-color: #20232a;
  text-align: center;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

/**
 * @typedef {object} StyledTitleProps
 */

/**
 * @component Title
 * @description Стилизованный заголовок для компонента AchievementsList.
 */
export const Title = styled.h2`
  color: #61dafb;
  margin-bottom: 1.5rem;
  font-size: 2em;
`;

/**
 * @typedef {object} StyledAchievementGridProps
 */

/**
 * @component AchievementGrid
 * @description Стилизованная сетка для списка достижений.
 */
export const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

/**
 * @typedef {object} StyledAchievementCardProps
 */

/**
 * @component AchievementCard
 * @description Стилизованная карточка достижения.
 */
export const AchievementCard = styled.div`
  background-color: #333;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

/**
 * @typedef {object} StyledAchievementIconProps
 */

/**
 * @component AchievementIcon
 * @description Стилизованная иконка достижения.
 */
export const AchievementIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;
`;

/**
 * @typedef {object} StyledAchievementNameProps
 */

/**
 * @component AchievementName
 * @description Стилизованное название достижения.
 */
export const AchievementName = styled.h3`
  color: #61dafb;
  font-size: 1.3em;
  margin: 0;
`;

/**
 * @typedef {object} StyledAchievementDescriptionProps
 */

/**
 * @component AchievementDescription
 * @description Стилизованное описание достижения.
 */
export const AchievementDescription = styled.p`
  font-size: 0.95em;
  color: #a0a0a0;
  flex-grow: 1;
`;

/**
 * @typedef {object} StyledAchievementConditionProps
 */

/**
 * @component AchievementCondition
 * @description Стилизованное условие получения достижения.
 */
export const AchievementCondition = styled.p`
  font-size: 0.85em;
  color: #bbb;
  font-style: italic;
  margin-top: 0.5rem;
`;
