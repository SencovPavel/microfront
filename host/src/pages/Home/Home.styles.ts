import styled from 'styled-components';

/**
 * @typedef {object} StyledHomeContainerProps
 */

/**
 * @component HomeContainer
 * @description Стилизованный контейнер для домашней страницы.
 */
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  gap: 1.5rem;
  max-width: 800px;
  margin: auto;
`;

/**
 * @typedef {object} StyledHomeTitleProps
 */

/**
 * @component HomeTitle
 * @description Стилизованный заголовок домашней страницы.
 */
export const HomeTitle = styled.h2`
  font-size: 2.5rem;
  color: #61dafb;
  margin-bottom: 1rem;
`;

/**
 * @typedef {object} StyledHomeTextProps
 */

/**
 * @component HomeText
 * @description Стилизованный текстовый блок домашней страницы.
 */
export const HomeText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
`;

/**
 * @typedef {object} StyledHomeButtonProps
 */

/**
 * @component HomeButton
 * @description Стилизованная кнопка на домашней странице.
 */
export const HomeButton = styled.button`
  background-color: #61dafb;
  color: #282c34;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #21a1f1;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #61dafb;
    outline-offset: 3px;
  }
`;
