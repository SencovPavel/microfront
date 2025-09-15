import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'


const UserInfoMf = lazy(() => import('userInfoMf/UserInfo'));
const AchievementsListMf = lazy(() => import('achievementsListMf/AchievementsList'));
const LeaderboardMf = lazy(() => import('leaderboardMf/Leaderboard'));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="user-info"
            element={
              <Suspense fallback={<div>Загрузка информации о пользователе...</div>}>
                <UserInfoMf />
              </Suspense>
            }
          />
          <Route
            path="achievements"
            element={
              <Suspense fallback={<div>Загрузка списка достижений...</div>}>
                <AchievementsListMf />
              </Suspense>
            }
          />
          <Route
            path="leaderboard"
            element={
              <Suspense fallback={<div>Загрузка лидерборда...</div>}>
                <LeaderboardMf />
              </Suspense>
            }
          />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
