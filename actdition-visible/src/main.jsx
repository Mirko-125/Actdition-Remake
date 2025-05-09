import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Manual from './pages/Manual.jsx';
import ProfileCompletion from './pages/ProfileCompletion/ProfileCompletion.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/manual', element: <Manual /> },
    { path: '/complete-profile', element: <ProfileCompletion /> },
    { path: '/unknown', element: <NotFound /> },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
