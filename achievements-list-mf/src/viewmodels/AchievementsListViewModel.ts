import { makeAutoObservable, reaction } from 'mobx';
import { achievementsStore } from '../stores/AchievementsStore';
import type { IAchievement, IAchievementsListViewModel } from '../types/AchievementTypes';

/**
 * @class AchievementsListViewModel
 * @implements {IAchievementsListViewModel}
 * @description ViewModel для компонента AchievementsList, предоставляющая данные и логику взаимодействия с AchievementsStore.
 */
class AchievementsListViewModel implements IAchievementsListViewModel {
  /**
   * @property {IAchievement[]} achievements - Прокси для списка достижений из AchievementsStore.
   */
  get achievements(): IAchievement[] {
    return achievementsStore.achievements;
  }

  /**
   * @property {boolean} isLoading - Прокси для состояния загрузки из AchievementsStore.
   */
  get isLoading(): boolean {
    return achievementsStore.isLoading;
  }

  /**
   * @property {string | null} error - Прокси для сообщения об ошибке из AchievementsStore.
   */
  get error(): string | null {
    return achievementsStore.error;
  }

  constructor() {
    makeAutoObservable(this);
    /**
     * @description Реакция на изменение списка достижений в хранилище, для отладочных целей.
     */
    reaction(
      () => this.achievements.length,
      (length) => {
        console.log(`Количество достижений изменилось: ${length}`);
      },
    );
  }

  /**
   * @method fetchAchievements
   * @description Загружает данные достижений, вызывая соответствующий метод в AchievementsStore.
   * @returns {Promise<void>}
   */
  async fetchAchievements(): Promise<void> {
    await achievementsStore.fetchAchievements();
  }
}

export const achievementsListViewModel = new AchievementsListViewModel();
