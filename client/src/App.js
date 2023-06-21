import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Game from './components/Game.jsx'
import Public from './components/Public.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { GameContext } from './context/GameProvider.jsx'
import { UserContext } from './context/UserProvider.jsx'
import Header from './components/Header.jsx'
import { useMediaQuery } from 'react-responsive'
import Footer from './components/Footer.jsx'

export default function App(){
  const { token, logout } = useContext(UserContext)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 550px)' })
  console.log(UserContext)
  return (
    <div className="app">
      <div className='page wrap'>
        { token && 
        <div className={isTabletOrMobile? 'sticky-box shrink' : 'fish'}>
          <Header />
          <Navbar logout={logout}/>
        </div>
        }
        <Routes>
          <Route 
            path="/" 
            element={ token ? <Navigate to='/game'/> : <Auth />}
          />
          <Route 
            path="/game"
            element={<ProtectedRoute token={token} redirectTo="/">
                <Game />
              </ProtectedRoute>}
          />
          <Route 
            path="/public"
            element={<ProtectedRoute token={token} redirectTo="/">
                <Public />
              </ProtectedRoute>}
          />
        </Routes>
        {/* { token && <Footer />} */}
      </div>
    </div>
  )
}