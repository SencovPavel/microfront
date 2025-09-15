import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserInfo from './UserInfo.tsx'
import { GlobalStyles } from './GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <UserInfo />
  </StrictMode>,
)
