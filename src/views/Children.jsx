import React from 'react'
import { Outlet } from 'react-router-dom'

const Children = () => {
  return (
    <div>
    <h1>Children</h1>
    <div>
    <Outlet/>
    </div>
     </div>
  )
}

export default Children