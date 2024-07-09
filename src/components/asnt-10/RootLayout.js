import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './navbar/NavBar'
function RootLayout() {
  return (
    <div className="" style={{backgroundColor:"black"}}>
        <NavBar></NavBar>
        <div className="" style={{minHeight:"100vh",backgroundColor:"black"}}>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RootLayout