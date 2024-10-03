import React from 'react'

const SignUpFirst = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100'>
    <div className=" mt-14 mb-12 ">
      <div className="bg-white p-20 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="w-full pr-8">
          <img src="logo_url" alt="Logo" className="mb-4" /> 
          <h2 className="text-lg font-semibold mb-2">STEP 1</h2>
          <h1 className="text-3xl font-bold mb-4">Enter your email address to continue</h1>
          <p className="text-gray-600">Log in to your account. If you don't have one, you will be prompted to create one.</p>
        </div>
        <div className="w-full flex flex-col justify-center">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full mb-4 focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg">Continue</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpFirst
