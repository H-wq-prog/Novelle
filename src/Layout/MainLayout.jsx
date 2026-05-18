import React from 'react'
import Navbar from './Navbar/Navbar'
import SideBar from './Sidebar/SideBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (

    <>

      <Navbar />
      <div className='d-flex '>
        <SideBar />
        <main className='w-75 flex-grow-1'>
          <Outlet />
        </main>

      </div>


    </>
  )
}
