import React from 'react'
import { useLocation } from 'react-router-dom'
function UserDashboard() {
  let {state}=useLocation()
  return (
    <div className="text-end mt-1 me-3">
      <p className='lead fs-5 text-info'>Welcome, <span className='text-white fs-2'>{state.username}</span></p>
      <p className='lead text-white fs-5'>{state.email}</p>
    </div>
  )
}

export default UserDashboard