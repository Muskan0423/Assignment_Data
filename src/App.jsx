import { useState } from 'react';
import './App.css';
import SignUpFirst from '../src/Pages/SignUpFirst';
import SignUpSecond from '../src/Pages/SignUpSecond';
import HomeWrapper from '../src/Wrapper/HomeWrapper';
import Home from '../src/Pages/Home';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

function App() {
  async function fetchUserToken() {
    try {
      const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'testadmin',
          password: 'testadmin',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem("token"));
        return data.token
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      console.error('Error during API call:', err);
      return null;
    }
  }
  async function fetchCustomerData() {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found. Please log in.');
      }
  
      const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Failed to fetch customer data');
      }
  
      console.log('Customer Data:', data);
      return data;
    } catch (err) {
      console.error('Error during API call:', err);
      return null;
    }
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeWrapper />,
      children: [
        {
          index: true,
          element: <SignUpFirst />
        },
        {
          path: "/signUp",
          element: <SignUpSecond />,
          loader: fetchUserToken
        },
        {
          path: "/Home",
          element: <Home />,
          loader:fetchCustomerData
        }
      ]
    }
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
