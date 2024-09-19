import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/jobs'
import JobListing from './pages/job-listing'
import PostJob from './pages/post-job'
import SavedJob from './pages/saved-job'
import MyJob from './pages/my-jobs'
import { ThemeProvider } from './components/ui/theme-provider'

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
      element:<Onboarding />
    },
    {
      path:"/jobs",
      element:<JobListing />
    },
    {
      path:"/job/:id",
      element:<JobPage />
    },
    {
      path:"/post-job",
      element:<PostJob />
    },
    {
      path:"/onboarding",
      element:<Onboarding />
    },
    {
      path:"/saved-job",
      element:<SavedJob />
    },
    {
      path:"/my-jobs",
      element:<MyJob/>
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
