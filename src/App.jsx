import './App.css'
import MainLayout from './components/layout/MainLayout'
import UserProvider from './components/context/UserProvider'
import CourseDashBoard from './components/pages/CourseDashBoard'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Login from './components/pages/Login'
import LecturerDashboard from './components/pages/LecturerDashboard' 
import CourseHome from './components/pages/CourseHome'
import CourseDetailExample from './components/pages/CourseDetailExample'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path = "courses" element={<CourseHome />}>
                <Route index element={<CourseDashBoard />} />
                <Route path=":code" element={<CourseDetailExample />} />
              </Route>

              {/* <Route path="courses/:courseCode" element={<CourseDashBoard />}/> */}
              <Route path = "lecturer" element = {<LecturerDashboard />}/>
            </Route>
            
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}
// LAM SIDE BAR VA LÀM FETCH
export default App
