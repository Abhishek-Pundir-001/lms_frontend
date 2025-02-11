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
import Profile from './Components/User/Profile'
import EditProfile from './Components/User/EditProfile'
import DisplayLectures from './Components/Pages/Dashboard/DisplayLectures'
import AddLecture from './Components/Pages/Dashboard/AddLecture'

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
        <Route path='/add/lecture' element={<AddLecture />} />
      </Route>
      <Route element={<RequireAuth allowedRole={['ADMIN', 'USER']} />}>
        <Route path='userprofile' element={<Profile />} />
        <Route path='/edit/profile' element={<EditProfile />}/>
      </Route>
      <Route path='/course/lectures' element={<DisplayLectures />}/>

      <Route path='*' element={<NotFoundPage />} />

    </Routes>

  )
}

export default App
