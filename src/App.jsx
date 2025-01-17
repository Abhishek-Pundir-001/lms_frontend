import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Pages/Homepage'
import AboutUs from './Components/Pages/AboutUsPage'
import NotFoundPage from './Components/Pages/NotFoundPage'
import SignUpPage from './Components/Pages/signUpPage'
import LoginPage from './Components/Pages/LoginPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
  
  )
}

export default App
