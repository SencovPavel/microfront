/**
 * @interface IAchievement
 * @description Интерфейс, представляющий достижение пользователя.
 * @property {string} id - Уникальный идентификатор достижения.
 * @property {string} name - Название достижения.
 * @property {string} description - Описание достижения.
 * @property {string} icon - Иконка достижения (например, путь к SVG или имя иконки).
 */
export interface IAchievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

/**
 * @interface IUser
 * @description Интерфейс, представляющий пользователя.
 * @property {string} id - Уникальный идентификатор пользователя.
 * @property {string} username - Имя пользователя (никнейм).
 * @property {string} email - Электронная почта пользователя.
 * @property {string} avatarUrl - URL аватара пользователя.
 * @property {IAchievement[]} achievements - Массив достижений, полученных пользователем.
 */
export interface IUser {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  achievements: IAchievement[];
}

/**
 * @interface IUserInfoViewModel
 * @description Интерфейс для ViewModel информации о пользователе.
 * @property {IUser | null} user - Текущий пользователь или null, если не загружен.
 * @property {boolean} isLoading - Флаг, указывающий, идет ли загрузка данных пользователя.
 * @property {string | null} error - Сообщение об ошибке, если произошла загрузка.
 * @method fetchUserData - Метод для загрузки данных пользователя.
 * @method updateUsername - Метод для обновления имени пользователя.
 */
export interface IUserInfoViewModel {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  fetchUserData: () => Promise<void>;
  updateUsername: (newUsername: string) => Promise<void>;
}
