import React from 'react'
import image from "../assets/Group1.svg"
import { Link, useNavigate } from 'react-router-dom'
const SignUpFirst = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
navigate("/signUp")  }
  return (
    <div className='flex justify-center items-center bg-gray-100'>
    <div className=" mt-14 mb-12 ">
      <div className="bg-white  rounded-3xl shadow-lg w-screen lg:max-w-screen-xl  sm:max-w-screen-1/2 p-6 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 pr-8">
        <div className='flex justify-start lg:pt-14 lg:pl-7  sm:pt-4 sm:pl-3'>
          <img src={image} alt="Logo" className="mb-4" /> 
        </div>
        <div className='lg:pt-14 lg:pl-7 sm:pt-4 sm:pl-3 pb-16'>
          <h2 className="text-lg font-semibold mb-2">STEP 1</h2>
          <h1 className="text-3xl font-bold mb-4">Enter your email address to continue</h1>
          <p className="text-gray-600">Log in to your account. If you don't have one, you will be prompted to create one.</p>
        </div>
        </div>
        <div className="w-full flex flex-col justify-center lg:pt-36 lg:px-10">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full mb-4 focus:outline-none focus:border-black"
          />
          <div className='flex justify-between lg:justify-end'>
          <p className="sm:block lg:hidden text-gray-600 sm:pr-4 sm:pt-2 pr-4 pt-3">Have an account?</p>

          <button className="bg-black text-white px-7 lg:px-12 py-3  rounded-lg" onClick={handleClick}>Continue</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpFirst