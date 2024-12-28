import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './Components/Layouts/HomeLayout'
import Homepage from './Components/Pages/Homepage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomeLayout><Homepage/></HomeLayout>}/>
      </Routes>
  
  )
}

export default App
