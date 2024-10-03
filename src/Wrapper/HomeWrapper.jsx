import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const HomeWrapper = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomeWrapper
