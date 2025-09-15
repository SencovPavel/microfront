import { useEffect, useState } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { userInfoViewModel } from './viewmodels/UserInfoViewModel';
import * as Markup from './App.styles';

/**
 * @function UserInfo
 * @description Компонент для отображения информации о пользователе и его достижениях.
 * Использует MobX для управления состоянием и styled-components для стилизации.
 * @returns {React.ReactElement} JSX элемент компонента информации о пользователе.
 */
const UserInfo = observer((): React.ReactElement => {
  const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>('');

  useEffect(() => {
    userInfoViewModel.fetchUserData();
  }, []);

  useEffect(() => {
    if (userInfoViewModel.user) {
      setNewUsername(userInfoViewModel.user.username);
    }
  }, []);

  /**
   * @function handleEditButtonClick
   * @description Обработчик нажатия кнопки редактирования имени пользователя.
   * @returns {void}
   */
  const handleEditButtonClick = (): void => {
    setIsEditingUsername(true);
  };

  /**
   * @function handleSaveButtonClick
   * @description Обработчик нажатия кнопки сохранения имени пользователя.
   * @returns {Promise<void>}
   */
  const handleSaveButtonClick = async (): Promise<void> => {
    if (newUsername.trim() && newUsername !== userInfoViewModel.user?.username) {
      await userInfoViewModel.updateUsername(newUsername);
    }
    setIsEditingUsername(false);
  };

  /**
   * @function handleCancelButtonClick
   * @description Обработчик нажатия кнопки отмены редактирования имени пользователя.
   * @returns {void}
   */
  const handleCancelButtonClick = (): void => {
    if (userInfoViewModel.user) {
      setNewUsername(userInfoViewModel.user.username);
    }
    setIsEditingUsername(false);
  };

  /**
   * @function handleUsernameInputChange
   * @description Обработчик изменения значения в поле ввода имени пользователя.
   * @param {ChangeEvent<HTMLInputElement>} event - Объект события изменения ввода.
   * @returns {void}
   */
  const handleUsernameInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewUsername(event.target.value);
  };

  /**
   * @function handleInputKeyDown
   * @description Обработчик нажатия клавиш в поле ввода имени пользователя.
   * @param {KeyboardEvent<HTMLInputElement>} event - Объект события клавиатуры.
   * @returns {void}
   */
  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSaveButtonClick();
    } else if (event.key === 'Escape') {
      handleCancelButtonClick();
    }
  };

  if (userInfoViewModel.isLoading) {
    return <Markup.Container>Загрузка информации о пользователе...</Markup.Container>;
  }

  if (userInfoViewModel.error) {
    return <Markup.Container>Ошибка: {userInfoViewModel.error}</Markup.Container>;
  }

  if (!userInfoViewModel.user) {
    return <Markup.Container>Данные пользователя не найдены.</Markup.Container>;
  }

  const { user } = userInfoViewModel;

  return (
    <Markup.Container>
      <Markup.Title>Информация о пользователе</Markup.Title>
      <Markup.ProfileImage
        src={user.avatarUrl}
        alt={`Аватар пользователя ${user.username}`}
      />
      <Markup.UserInfoItem>
        <strong>Имя пользователя:</strong> {' '}
        {isEditingUsername ? (
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameInputChange}
            onKeyDown={handleInputKeyDown}
            aria-label="Введите новое имя пользователя"
          />
        ) : (
          <span>{user.username}</span>
        )}
        {' '}
        {isEditingUsername ? (
          <button
            onClick={handleSaveButtonClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleSaveButtonClick();
              }
            }}
            tabIndex={0}
            aria-label="Сохранить новое имя пользователя"
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={handleEditButtonClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleEditButtonClick();
              }
            }}
            tabIndex={0}
            aria-label="Редактировать имя пользователя"
          >
            Редактировать
          </button>
        )}
        {isEditingUsername && (
          <button
            onClick={handleCancelButtonClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleCancelButtonClick();
              }
            }}
            tabIndex={0}
            aria-label="Отменить редактирование"
          >
            Отмена
          </button>
        )}
      </Markup.UserInfoItem>
      <Markup.UserInfoItem>
        <strong>Email:</strong> {user.email}
      </Markup.UserInfoItem>

      <Markup.Title>Достижения</Markup.Title>
      <Markup.AchievementList>
        {user.achievements.length > 0 ? (
          user.achievements.map((achievement) => (
            <Markup.AchievementItem key={achievement.id}>
              <span>{achievement.icon}</span> {achievement.name}:{' '}
              {achievement.description}
            </Markup.AchievementItem>
          ))
        ) : (
          <Markup.UserInfoItem>Нет полученных достижений.</Markup.UserInfoItem>
        )}
      </Markup.AchievementList>
    </Markup.Container>
  );
});

export default UserInfo;
