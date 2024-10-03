import { useState } from 'react'
import './App.css'
import SignUpFirst from '../src/Pages/SignUpFirst'

import SignUpSecond from '../src/Pages/SignUpSecond'

import HomeWrapper from '../src/Wrapper/HomeWrapper'
import Home from '../src/Pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomeWrapper/>,
      children:[
        {
          index:true,
          element:<SignUpFirst/>
        },
        {
          path:"/signUp",
          element:<SignUpSecond/>
        }
        ,
    {
      path:"/Home",
      element:<Home/>
    }
      ]
    }
   
  ])
  return (
    <>
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
   </div>
    </>
  )
}

export default App
