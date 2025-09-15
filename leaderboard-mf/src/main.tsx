import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Leaderboard from './Leaderboard.tsx'
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Leaderboard />
  </StrictMode>,
)
