import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AchievementsList from './AchievementsList.tsx'
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AchievementsList />
  </StrictMode>,
)
