import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from '../ErrorBoundary.jsx'
import appStore from './utils/appStore.jsx'
import { appRouter } from './routes/router.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={appStore}>
       <RouterProvider router={appRouter}/>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
