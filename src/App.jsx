import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Pages/Homepage'
import AboutUs from './Components/Pages/AboutUsPage'
import NotFoundPage from './Components/Pages/NotFoundPage'
import SignUpPage from './Components/Pages/signUpPage'
import LoginPage from './Components/Pages/LoginPage'
import CourseList from './Components/Pages/Courses/CourseList'
import ContactPage from './Components/Pages/ContactPage'
import DeniedPage from './Components/Pages/DeniedPage'
import CourseDesc from './Components/Pages/CourseDesc'
import RequireAuth from './Components/Pages/Auth/RequireAuth'
import CreateCourse from './Components/Pages/Courses/CreateCourse'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/courses' element={<CourseList />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/denied' element={<DeniedPage />}></Route>
      <Route path='/course/desc' element={<CourseDesc />}></Route>
      <Route element={<RequireAuth allowedRole={['ADMIN']} />}>
        <Route path='/create/course' element={<CreateCourse />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />

    </Routes>

  )
}

export default App
