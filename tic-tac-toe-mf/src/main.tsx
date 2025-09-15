import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TicTacToe from './TicTacToe.tsx'
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <TicTacToe />
  </StrictMode>,
)
