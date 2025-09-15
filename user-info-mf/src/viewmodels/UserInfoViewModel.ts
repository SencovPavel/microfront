import { makeAutoObservable, reaction } from 'mobx';
import { userStore } from '../stores/UserStore';
import type { IUserInfoViewModel, IUser } from '../types/UserTypes';

/**
 * @class UserInfoViewModel
 * @implements {IUserInfoViewModel}
 * @description ViewModel для компонента UserInfo, предоставляющая данные и логику взаимодействия с UserStore.
 */
class UserInfoViewModel implements IUserInfoViewModel {
  /**
   * @property {IUser | null} user - Прокси для данных пользователя из UserStore.
   */
  get user(): IUser | null {
    return userStore.user;
  }

  /**
   * @property {boolean} isLoading - Прокси для состояния загрузки из UserStore.
   */
  get isLoading(): boolean {
    return userStore.isLoading;
  }

  /**
   * @property {string | null} error - Прокси для сообщения об ошибке из UserStore.
   */
  get error(): string | null {
    return userStore.error;
  }

  constructor() {
    makeAutoObservable(this);
    /**
     * @description Реакция на изменение пользователя в хранилище, для отладочных целей.
     */
    reaction(
      () => this.user,
      (user) => {
        console.log('User data changed:', user?.username);
      },
    );
  }

  /**
   * @method fetchUserData
   * @description Загружает данные пользователя, вызывая соответствующий метод в UserStore.
   * @returns {Promise<void>}
   */
  async fetchUserData(): Promise<void> {
    await userStore.fetchUser('123'); // Загружаем пользователя с ID '123'
  }

  /**
   * @method updateUsername
   * @description Обновляет имя пользователя, вызывая соответствующий метод в UserStore.
   * @param {string} newUsername - Новое имя пользователя.
   * @returns {Promise<void>}
   */
  async updateUsername(newUsername: string): Promise<void> {
    await userStore.updateUsername(newUsername);
  }
}

export const userInfoViewModel = new UserInfoViewModel();
