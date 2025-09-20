import './App.css'
import Header from './components/layout/Header'
import HeroSection from './components/layout/HeroSection'
import MainLayout from './components/layout/MainLayout'
import UserProvider from './components/context/UserProvider'
import CourseDashBoard from './components/pages/CourseDashBoard'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/courses" element={<CourseDashBoard />} />
          </Routes>
          </MainLayout>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
