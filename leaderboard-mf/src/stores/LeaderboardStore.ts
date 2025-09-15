import { makeAutoObservable, runInAction } from 'mobx';
import type { ILeaderboardEntry } from '../types/LeaderboardTypes';

/**
 * @class LeaderboardStore
 * @description Хранилище MobX для управления данными лидерборда.
 */
class LeaderboardStore {
  /**
   * @property {ILeaderboardEntry[]} entries - Массив записей лидерборда.
   */
  entries: ILeaderboardEntry[] = [];
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
   * @method fetchLeaderboard
   * @description Асинхронно загружает данные лидерборда. Имитирует запрос к API.
   * @returns {Promise<void>}
   */
  async fetchLeaderboard(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      // Имитация задержки сети
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Моковые данные лидерборда
      const mockLeaderboard: ILeaderboardEntry[] = [
        { id: 'user1', username: 'Alice', achievementsCount: 10 },
        { id: 'user2', username: 'Bob', achievementsCount: 8 },
        { id: 'user3', username: 'Charlie', achievementsCount: 12 },
        { id: 'user4', username: 'David', achievementsCount: 7 },
        { id: 'user5', username: 'Eve', achievementsCount: 9 },
      ];

      // Сортировка по количеству достижений (по убыванию)
      mockLeaderboard.sort((a, b) => b.achievementsCount - a.achievementsCount);

      runInAction(() => {
        this.entries = mockLeaderboard;
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

export const leaderboardStore = new LeaderboardStore();
