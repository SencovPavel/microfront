import { makeAutoObservable, reaction } from 'mobx';
import { leaderboardStore } from '../stores/LeaderboardStore';
import type { ILeaderboardEntry, ILeaderboardViewModel } from '../types/LeaderboardTypes';

/**
 * @class LeaderboardViewModel
 * @implements {ILeaderboardViewModel}
 * @description ViewModel для компонента Leaderboard, предоставляющая данные и логику взаимодействия с LeaderboardStore.
 */
class LeaderboardViewModel implements ILeaderboardViewModel {
  /**
   * @property {ILeaderboardEntry[]} entries - Прокси для записей лидерборда из LeaderboardStore.
   */
  get entries(): ILeaderboardEntry[] {
    return leaderboardStore.entries;
  }

  /**
   * @property {boolean} isLoading - Прокси для состояния загрузки из LeaderboardStore.
   */
  get isLoading(): boolean {
    return leaderboardStore.isLoading;
  }

  /**
   * @property {string | null} error - Прокси для сообщения об ошибке из LeaderboardStore.
   */
  get error(): string | null {
    return leaderboardStore.error;
  }

  constructor() {
    makeAutoObservable(this);
    /**
     * @description Реакция на изменение записей лидерборда в хранилище, для отладочных целей.
     */
    reaction(
      () => this.entries.length,
      (length) => {
        console.log(`Количество записей в лидерборде изменилось: ${length}`);
      },
    );
  }

  /**
   * @method fetchLeaderboardData
   * @description Загружает данные лидерборда, вызывая соответствующий метод в LeaderboardStore.
   * @returns {Promise<void>}
   */
  async fetchLeaderboardData(): Promise<void> {
    await leaderboardStore.fetchLeaderboard();
  }
}

export const leaderboardViewModel = new LeaderboardViewModel();
