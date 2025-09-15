import { useNavigate } from 'react-router-dom';
import * as Markup from './Home.styles';
import type { JSX } from 'react';

/**
 * @function Home
 * @description Компонент домашней страницы хост-приложения.
 * @returns {JSX.Element} JSX элемент домашней страницы.
 */
const Home = (): JSX.Element => {
  const navigate = useNavigate();

  /**
   * @function handleNavigateToProfile
   * @description Обработчик события для навигации на страницу профиля.
   * @returns {void}
   */
  const handleNavigateToProfile = (): void => {
    navigate('/user-info');
  };

  /**
   * @function handleNavigateToRegistration
   * @description Обработчик события для навигации на страницу регистрации.
   * @returns {void}
   */
  const handleNavigateToRegistration = (): void => {
    navigate('/registration');
  };

  /**
   * @function handleNavigateToTicTacToe
   * @description Обработчик события для навигации на страницу игры крестики-нолики.
   * @returns {void}
   */
  const handleNavigateToTicTacToe = (): void => {
    navigate('/tic-tac-toe');
  };

  return (
    <Markup.HomeContainer>
      <Markup.HomeTitle>Добро пожаловать в Микрофронтенд Приложение!</Markup.HomeTitle>
      <Markup.HomeText>
        Это демонстрационное приложение, созданное с использованием архитектуры микрофронтендов.
        Здесь вы можете исследовать информацию о пользователях, их достижениях и посмотреть лидерборд.
      </Markup.HomeText>
      <Markup.HomeButton
        onClick={handleNavigateToProfile}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleNavigateToProfile();
          }
        }}
        tabIndex={0}
        aria-label="Перейти к профилю пользователя"
      >
        Перейти к профилю
      </Markup.HomeButton>
      <Markup.HomeButton
        onClick={handleNavigateToRegistration}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleNavigateToRegistration();
          }
        }}
        tabIndex={0}
        aria-label="Перейти к странице регистрации"
      >
        Перейти к регистрации
      </Markup.HomeButton>
      <Markup.HomeButton
        onClick={handleNavigateToTicTacToe}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleNavigateToTicTacToe();
          }
        }}
        tabIndex={0}
        aria-label="Перейти к игре крестики-нолики"
      >
        Перейти к игре Крестики-нолики
      </Markup.HomeButton>
    </Markup.HomeContainer>
  );
};

export default Home;
