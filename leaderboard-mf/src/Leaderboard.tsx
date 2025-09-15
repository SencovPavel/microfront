import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { leaderboardViewModel } from './viewmodels/LeaderboardViewModel';
import * as Markup from './App.styles';

/**
 * @function Leaderboard
 * @description Компонент для отображения таблицы лидерборда.
 * Использует MobX для управления состоянием и styled-components для стилизации.
 * @returns {React.ReactElement} JSX элемент компонента лидерборда.
 */
const Leaderboard = observer((): React.ReactElement => {
  useEffect(() => {
    leaderboardViewModel.fetchLeaderboardData();
  }, []);

  if (leaderboardViewModel.isLoading) {
    return <Markup.Container>Загрузка лидерборда...</Markup.Container>;
  }

  if (leaderboardViewModel.error) {
    return <Markup.Container>Ошибка: {leaderboardViewModel.error}</Markup.Container>;
  }

  return (
    <Markup.Container>
      <Markup.Title>Лидерборд</Markup.Title>
      <Markup.Table>
        <thead>
          <tr>
            <th>Ранг</th>
            <th>Имя пользователя</th>
            <th>Достижения</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardViewModel.entries.length > 0 ? (
            leaderboardViewModel.entries.map((entry, index) => (
              <tr key={entry.id}>
                <Markup.RankCell>{index + 1}</Markup.RankCell>
                <Markup.UsernameCell>{entry.username}</Markup.UsernameCell>
                <Markup.AchievementsCell>{entry.achievementsCount}</Markup.AchievementsCell>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Нет записей в лидерборде.</td>
            </tr>
          )}
        </tbody>
      </Markup.Table>
    </Markup.Container>
  );
});

export default Leaderboard;
