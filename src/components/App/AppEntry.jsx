import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './AppRouter.jsx'
import '../../App.css';
import { ThemeProvider } from './providers/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={AppRouter}/>
        </ThemeProvider>
    </StrictMode>,
)
