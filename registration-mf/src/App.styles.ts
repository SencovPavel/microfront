import styled from 'styled-components';

/**
 * @typedef {object} StyledContainerProps
 */

/**
 * @component Container
 * @description Стилизованный контейнер для компонента UserInfo.
 */
export const Container = styled.div`
  padding: 2rem;
  border: 1px solid #61dafb;
  border-radius: 8px;
  background-color: #20232a;
  text-align: center;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

/**
 * @typedef {object} StyledTitleProps
 */

/**
 * @component Title
 * @description Стилизованный заголовок для компонента UserInfo.
 */
export const Title = styled.h2`
  color: #61dafb;
  margin-bottom: 1.5rem;
  font-size: 2em;
`;

/**
 * @typedef {object} StyledUserInfoItemProps
 */

/**
 * @component UserInfoItem
 * @description Стилизованный элемент информации о пользователе.
 */
export const UserInfoItem = styled.p`
  font-size: 1.1em;
  margin-bottom: 0.5rem;

  strong {
    color: #a0a0a0;
  }
`;

/**
 * @typedef {object} StyledAchievementListProps
 */

/**
 * @component AchievementList
 * @description Стилизованный список достижений.
 */
export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
`;

/**
 * @typedef {object} StyledAchievementItemProps
 */

/**
 * @component AchievementItem
 * @description Стилизованный элемент достижения.
 */
export const AchievementItem = styled.li`
  background-color: #333;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: #61dafb;
    font-weight: bold;
  }
`;

/**
 * @typedef {object} StyledProfileImageProps
 */

/**
 * @component ProfileImage
 * @description Стилизованное изображение профиля.
 */
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #61dafb;
`;
