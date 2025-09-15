import { makeAutoObservable, runInAction } from 'mobx';
import type { IAchievement } from '../types/AchievementTypes';

/**
 * @class AchievementsStore
 * @description Хранилище MobX для управления списком всех доступных достижений.
 */
class AchievementsStore {
  /**
   * @property {IAchievement[]} achievements - Массив всех доступных достижений.
   */
  achievements: IAchievement[] = [];
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
   * @method fetchAchievements
   * @description Асинхронно загружает список достижений. Имитирует запрос к API.
   * @returns {Promise<void>}
   */
  async fetchAchievements(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      // Имитация задержки сети
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Моковые данные достижений (не менее 10)
      const mockAchievements: IAchievement[] = [
        {
          id: '1',
          name: 'Первый шаг',
          description: 'Вы успешно зарегистрировались в приложении.',
          icon: '👣',
          condition: 'Зарегистрироваться в приложении',
        },
        {
          id: '2',
          name: 'Исследователь',
          description: 'Просмотрите все доступные достижения.',
          icon: '🗺️',
          condition: 'Перейти на страницу всех достижений',
        },
        {
          id: '3',
          name: 'Собиратель',
          description: 'Получите 5 любых достижений.',
          icon: '🌟',
          condition: 'Получить 5 достижений',
        },
        {
          id: '4',
          name: 'Ветеран',
          description: 'Получите 10 любых достижений.',
          icon: '🏅',
          condition: 'Получить 10 достижений',
        },
        {
          id: '5',
          name: 'Абсолютный чемпион',
          description: 'Получите все доступные достижения.',
          icon: '👑',
          condition: 'Получить все 12 достижений',
        },
        {
          id: '6',
          name: 'Социальная бабочка',
          description: 'Поделитесь своим профилем с друзьями.',
          icon: '🦋',
          condition: 'Поделиться профилем',
        },
        {
          id: '7'
          ,name: 'Перфекционист',
          description: 'Выполните все условия одного достижения до конца.',
          icon: '🎯',
          condition: 'Выполнить условие любого достижения на 100%',
        },
        {
          id: '8',
          name: 'Ночной странник',
          description: 'Войдите в приложение после полуночи.',
          icon: '🦉',
          condition: 'Войти в приложение с 00:00 до 04:00',
        },
        {
          id: '9',
          name: 'Ранняя пташка',
          description: 'Войдите в приложение до 8 утра.',
          icon: '🐦',
          condition: 'Войти в приложение с 04:00 до 08:00',
        },
        {
          id: '10',
          name: 'Постоянство - ключ',
          description: 'Заходите в приложение 7 дней подряд.',
          icon: '🔑',
          condition: 'Войти в приложение 7 дней подряд',
        },
        {
          id: '11',
          name: 'Мастер обратной связи',
          description: 'Оставьте ценный отзыв о приложении.',
          icon: '📝',
          condition: 'Оставить отзыв',
        },
        {
          id: '12',
          name: 'Эрудит',
          description: 'Прочитайте описание каждого достижения.',
          icon: '📚',
          condition: 'Прочитать описание каждого из 12 достижений',
        },
      ];

      runInAction(() => {
        this.achievements = mockAchievements;
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

export const achievementsStore = new AchievementsStore();
