import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * @typedef {object} StyledContainerProps
 */

/**
 * @component Container
 * @description Стилизованный контейнер для всего приложения.
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`;

/**
 * @typedef {object} StyledHeaderProps
 */

/**
 * @component Header
 * @description Стилизованный заголовок приложения.
 */
export const Header = styled.header`
  background-color: #20232a;
  padding: 1rem;
  border-bottom: 1px solid #61dafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 * @typedef {object} StyledNavProps
 */

/**
 * @component Nav
 * @description Стилизованная навигационная панель.
 */
export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

/**
 * @typedef {object} StyledNavLinkProps
 * @property {boolean} $isActive - Флаг, указывающий, активна ли ссылка.
 */

/**
 * @component NavLink
 * @description Стилизованная ссылка навигации.
 * @param {StyledNavLinkProps} props - Свойства компонента.
 */
export const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${(props) => (props.$isActive ? '#61dafb' : 'white')};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #61dafb30;
  }

  &:focus {
    outline: 2px solid #61dafb;
  }
`;

/**
 * @typedef {object} StyledMainContentProps
 */

/**
 * @component MainContent
 * @description Стилизованное основное содержимое приложения.
 */
export const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

/**
 * @typedef {object} StyledFooterProps
 */

/**
 * @component Footer
 * @description Стилизованный нижний колонтитул приложения.
 */
export const Footer = styled.footer`
  background-color: #20232a;
  padding: 1rem;
  border-top: 1px solid #61dafb;
  text-align: center;
  font-size: 0.8rem;
  color: #aaa;
`;
