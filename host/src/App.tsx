import { Outlet, useLocation } from 'react-router-dom';
import * as Markup from './App.styles';
import { GlobalStyles } from './GlobalStyles';

/**
 * @function App
 * @description Главный компонент хост-приложения, отвечающий за базовый макет и навигацию.
 * @returns {JSX.Element} JSX элемент главного приложения.
 */
function App() {
  const location = useLocation();

  return (
    <Markup.Container>
      <GlobalStyles />
      <Markup.Header>
        <h1>Микрофронтенд Приложение</h1>
        <Markup.Nav>
          <Markup.NavLink
            to="/"
            aria-label="Перейти на главную страницу"
            tabIndex={0}
            $isActive={location.pathname === '/'}
          >
            Главная
          </Markup.NavLink>
          <Markup.NavLink
            to="/user-info"
            aria-label="Перейти к информации о пользователе"
            tabIndex={0}
            $isActive={location.pathname === '/user-info'}
          >
            Профиль
          </Markup.NavLink>
          <Markup.NavLink
            to="/achievements"
            aria-label="Перейти к списку достижений"
            tabIndex={0}
            $isActive={location.pathname === '/achievements'}
          >
            Достижения
          </Markup.NavLink>
          <Markup.NavLink
            to="/leaderboard"
            aria-label="Перейти к лидерборду"
            tabIndex={0}
            $isActive={location.pathname === '/leaderboard'}
          >
            Лидерборд
          </Markup.NavLink>
        </Markup.Nav>
      </Markup.Header>
      <Markup.MainContent>
        <Outlet />
      </Markup.MainContent>
      <Markup.Footer>
        &copy; {new Date().getFullYear()} Microfrontend App
      </Markup.Footer>
    </Markup.Container>
  );
}

export default App;
