/**
 * @interface IAchievement
 * @description Интерфейс, представляющий достижение.
 * @property {string} id - Уникальный идентификатор достижения.
 * @property {string} name - Название достижения.
 * @property {string} description - Подробное описание достижения.
 * @property {string} icon - Иконка, представляющая достижение (например, эмодзи или путь к изображению).
 * @property {string} condition - Условие, необходимое для получения достижения.
 */
export interface IAchievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
}

/**
 * @interface IAchievementsListViewModel
 * @description Интерфейс для ViewModel списка достижений.
 * @property {IAchievement[]} achievements - Массив всех доступных достижений.
 * @property {boolean} isLoading - Флаг, указывающий, идет ли загрузка данных достижений.
 * @property {string | null} error - Сообщение об ошибке, если произошла загрузка.
 * @method fetchAchievements - Метод для загрузки списка достижений.
 */
export interface IAchievementsListViewModel {
  achievements: IAchievement[];
  isLoading: boolean;
  error: string | null;
  fetchAchievements: () => Promise<void>;
}
