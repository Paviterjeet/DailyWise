import './App.css'
import HomePage from './pages/HomePage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import TopicsSelectionPage from './pages/TopicsSelectionPage'
import PreferencesPage from './pages/PreferencesPage'
import EditTopicsPage from './pages/EditTopicsPage'
import DashboardPage from './pages/DashboardPage'

function App() {
const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage/>,
  },
  {
    path : "/signup",
    element : <SignupPage/>,
  },
  {
    path : "/topics",
    element : <TopicsSelectionPage/>,
  },
  {
    path : "/preferences",
    element : <PreferencesPage/>,
  },
  {
    path : "/edit-topics",
    element : <EditTopicsPage/>,
  },
  {
    path : "/dashboard",
    element : <DashboardPage/>,
  } 
])
  return (
    
      <RouterProvider router={router}/>
  
  )
}

export default App
