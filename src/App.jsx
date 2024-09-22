import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/job'
import JobListing from './pages/job-listing'
import PostJob from './pages/post-job'
import SavedJob from './pages/saved-job'
import MyJob from './pages/my-jobs'
import { ThemeProvider } from './components/ui/theme-provider'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children: [
      {
      path:"/",
      element:<LandingPage />
    },
    {
      path:"/onboarding",
      element:<ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    },
    {
      path:"/jobs",
      element:<ProtectedRoute>
        <JobListing />
      </ProtectedRoute>
    },
    {
      path:"/job/:id",
      element:<ProtectedRoute>
        <JobPage />
      </ProtectedRoute>
    },
    {
      path:"/post-job",
      element:<ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    },
    {
      path:"/onboarding",
      element:<ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    },
    {
      path:"/saved-jobs",
      element:<ProtectedRoute>
        <SavedJob />
      </ProtectedRoute>
    },
    {
      path:"/my-jobs",
      element:<ProtectedRoute>
        <MyJob/>
      </ProtectedRoute>
    },
  ],
  },
])
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App
