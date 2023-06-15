import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <button onClick={logout} className='game logButt'>Logout</button>
    </div>
  )
}