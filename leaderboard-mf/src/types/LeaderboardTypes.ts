/**
 * @interface ILeaderboardEntry
 * @description Интерфейс, представляющий запись в лидерборде.
 * @property {string} id - Уникальный идентификатор записи (идентификатор пользователя).
 * @property {string} username - Имя пользователя.
 * @property {number} achievementsCount - Количество достижений у пользователя.
 */
export interface ILeaderboardEntry {
  id: string;
  username: string;
  achievementsCount: number;
}

/**
 * @interface ILeaderboardViewModel
 * @description Интерфейс для ViewModel лидерборда.
 * @property {ILeaderboardEntry[]} entries - Массив записей лидерборда, отсортированных по достижениям.
 * @property {boolean} isLoading - Флаг, указывающий, идет ли загрузка данных лидерборда.
 * @property {string | null} error - Сообщение об ошибке, если произошла загрузка.
 * @method fetchLeaderboardData - Метод для загрузки данных лидерборда.
 */
export interface ILeaderboardViewModel {
  entries: ILeaderboardEntry[];
  isLoading: boolean;
  error: string | null;
  fetchLeaderboardData: () => Promise<void>;
}
