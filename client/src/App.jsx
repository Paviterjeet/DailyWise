import './App.css'
import HomePage from './pages/HomePage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignupPage from './pages/SignupPage'

function App() {
const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage/>,
  },
  {
    path : "/signup",
    element : <SignupPage/>,
  }


])
  return (
    
      <RouterProvider router={router}/>
  
  )
}

export default App
