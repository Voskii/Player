import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Game from './components/Game.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { GameContext } from './context/GameProvider.js'
import { UserContext } from './context/UserProvider.js'
import Header from './components/Header.js'
import { useMediaQuery } from 'react-responsive'
import Footer from './components/Footer.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 550px)' })
  console.log(UserContext)
  return (
    <div className="app">
      <div className='page wrap'>
        { token && 
        <div className={isTabletOrMobile? 'sticky-box shrink' : 'sticky-box'}>
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