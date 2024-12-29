import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './Components/Layouts/HomeLayout'
import Homepage from './Components/Pages/Homepage'
import AboutUs from './Components/Pages/AboutUsPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
  
  )
}

export default App
