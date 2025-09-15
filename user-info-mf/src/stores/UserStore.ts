import { makeAutoObservable, runInAction } from 'mobx';
import type { IAchievement, IUser } from '../types/UserTypes';

/**
 * @class UserStore
 * @description Хранилище MobX для управления состоянием пользователя и его достижений.
 */
class UserStore {
  /**
   * @property {IUser | null} user - Текущий пользователь.
   */
  user: IUser | null = null;
  /**
   * @property {boolean} isLoading - Флаг, указывающий, идет ли загрузка данных.
   */
  isLoading: boolean = false;
  /**
   * @property {string | null} error - Сообщение об ошибке, если произошла.
   */
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * @method fetchUser
   * @description Асинхронно загружает данные пользователя. Имитирует запрос к API.
   * @param {string} userId - Идентификатор пользователя для загрузки.
   * @returns {Promise<void>}
   */
  async fetchUser(userId: string): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      // Имитация задержки сети
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Моковые данные пользователя и достижений
      const mockAchievements: IAchievement[] = [
        { id: '1', name: 'Первый шаг', description: 'Зарегистрироваться в приложении', icon: '⭐' },
        { id: '2', name: 'Исследователь', description: 'Просмотреть все доступные достижения', icon: '🔍' },
        { id: '3', name: 'Собиратель', description: 'Получить 5 достижений', icon: '🏆' },
      ];

      const mockUser: IUser = {
        id: userId,
        username: 'ТестовыйПользователь',
        email: 'test@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        achievements: mockAchievements,
      };

      runInAction(() => {
        this.user = mockUser;
        this.isLoading = false;
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
    }
  }

  /**
   * @method updateUsername
   * @description Обновляет имя пользователя.
   * @param {string} newUsername - Новое имя пользователя.
   * @returns {Promise<void>}
   */
  async updateUsername(newUsername: string): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      // Имитация задержки сети и обновления данных на сервере
      await new Promise((resolve) => setTimeout(resolve, 500));

      runInAction(() => {
        if (this.user) {
          this.user.username = newUsername;
        }
        this.isLoading = false;
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
    }
  }
}

export const userStore = new UserStore();
