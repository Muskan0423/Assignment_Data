import React from 'react';
import image from "../assets/Group1.svg";
import { useLoaderData, useNavigate } from 'react-router-dom';

const SignUpSecond = () => {
  
  const navigate=useNavigate()
  const data1=useLoaderData()
  console.log(data1);
  
function  handleClick()
  {
    const data=localStorage.getItem('token')
    if(!data)
    {
      alert("Give Correct credentials")
    }
    else {
      
      navigate("/Home")
    }
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className="mt-14 mb-12 w-full max-w-screen-xl p-4 sm:p-6">
        <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-6">
          <div className='flex flex-col md:flex-row w-full'>

            <div className="w-full md:w-2/5 p-6 lg:p-10">
              <div className='flex justify-start'>
                <img src={image} alt="Logo" className="mb-4 w-16" />
              </div>
              <div className='pt-4'>
                <h2 className="text-lg font-semibold mb-2">STEP 2</h2>
                <h1 className="text-4xl font-bold mb-4 leading-tight">Create an account to continue</h1>
                <p className="text-gray-600 mb-6">
                  You’ll be able to log in to Dingoo with this email address and password.
                </p>
              </div>
              <p className="text-gray-600 text-xs mt-8">
                Dingoo will use your data to personalise and improve your Dingoo experience. You can change your communication preferences anytime.
              </p>
            </div>

            <div className="w-full md:w-3/5 flex flex-col justify-center p-6 lg:p-10 md:pl-14">
              <p className="text-gray-600 text-sm mb-4">
                Enter a password to create your account with
              </p>
              <input
                type="password"
                placeholder="Choose a password"
                className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:border-black"
              />
              <p className="text-gray-600 text-sm mb-6">
                Use a minimum of 6 characters (case sensitive) with at least one number or special character.
              </p>
              <div className="flex justify-start">
                <button className="bg-black text-white px-7 py-3 rounded-lg" onClick={handleClick}>
                  Agree & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSecond;