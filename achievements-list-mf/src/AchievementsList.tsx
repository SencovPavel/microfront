import { useEffect, type JSX } from 'react';
import { observer } from 'mobx-react-lite';
import { achievementsListViewModel } from './viewmodels/AchievementsListViewModel';
import * as Markup from './App.styles';

/**
 * @function AchievementsList
 * @description Компонент для отображения списка всех доступных достижений.
 * Использует MobX для управления состоянием и styled-components для стилизации.
 * @returns {JSX.Element} JSX элемент компонента списка достижений.
 */
const AchievementsList = observer((): JSX.Element => {
  useEffect(() => {
    achievementsListViewModel.fetchAchievements();
  }, []);

  if (achievementsListViewModel.isLoading) {
    return <Markup.Container>Загрузка достижений...</Markup.Container>;
  }

  if (achievementsListViewModel.error) {
    return <Markup.Container>Ошибка: {achievementsListViewModel.error}</Markup.Container>;
  }

  return (
    <Markup.Container>
      <Markup.Title>Доступные Достижения</Markup.Title>
      <Markup.AchievementGrid>
        {achievementsListViewModel.achievements.length > 0 ? (
          achievementsListViewModel.achievements.map((achievement) => (
            <Markup.AchievementCard key={achievement.id} tabIndex={0} aria-label={`Достижение: ${achievement.name}`}>
              <Markup.AchievementIcon>{achievement.icon}</Markup.AchievementIcon>
              <Markup.AchievementName>{achievement.name}</Markup.AchievementName>
              <Markup.AchievementDescription>
                {achievement.description}
              </Markup.AchievementDescription>
              <Markup.AchievementCondition>
                Условие: {achievement.condition}
              </Markup.AchievementCondition>
            </Markup.AchievementCard>
          ))
        ) : (
          <Markup.AchievementCard>Нет доступных достижений.</Markup.AchievementCard>
        )}
      </Markup.AchievementGrid>
    </Markup.Container>
  );
});

export default AchievementsList;
