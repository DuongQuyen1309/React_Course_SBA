import './App.css'
import Header from './components/layout/Header'
import HeroSection from './components/layout/HeroSection'
import MainLayout from './components/layout/MainLayout'
import UserProvider from './components/context/UserProvider'
import CourseDashBoard from './components/pages/CourseDashBoard'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MainLayout>
          <HeroSection />
          <CourseDashBoard />
        </MainLayout>
      </UserProvider>
    </div>
  )
}

export default App
