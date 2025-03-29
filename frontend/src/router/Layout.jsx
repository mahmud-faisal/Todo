import React from 'react'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div className="min-h-screen w-full">
        <div className="h-full w-full md:w-4xl m-auto bg-amber-100 ">
        <header className='text-center font-bold text-3xl pt-4'>Todo</header>
        <div className="w-full md:w-4/5 mx-auto my-8 ">
        <Outlet />
        </div>
        </div>
    </div>

  )
}

export default Layout