import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import { CategoryProvider } from './context/categoryContext.jsx'
import { VideosProvider } from './context/videosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <VideosProvider>
        <AppRoutes>
        </AppRoutes>
      </VideosProvider>
    </CategoryProvider>
  </StrictMode>,
)
