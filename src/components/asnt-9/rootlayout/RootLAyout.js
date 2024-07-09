import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
function RootLAyout() {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="" style={{minHeight:"85vh"}}>
      <Outlet></Outlet>
      </div>
    </div>
  )
}
export default RootLAyout