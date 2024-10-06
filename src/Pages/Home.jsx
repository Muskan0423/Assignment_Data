import React, { useState, useEffect } from 'react';
import image from "../assets/Group3.svg";
import image1 from "../assets/Rectangle32.png";
import image3 from "../assets/Rectangle34.png";
import image4 from "../assets/Rectangle39.png";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const images1 = [image1, image3, image4];
  const images2 = [image1, image3, image4];
  const data = useLoaderData();

const handlePreviousClick = () => {
  if (activeIndex1 > 0) {
    setActiveIndex1((prevIndex) => prevIndex - 1);
  }
};

const handleNextClick = () => {
  if (activeIndex1 < Math.ceil(data.length / 4) - 1) {
    setActiveIndex1((prevIndex) => prevIndex + 1);
  }
};

const handlePreviousClick1 = () => {
  if (activeIndex1 > 0) {
    setActiveIndex1((prevIndex) => prevIndex - 1);
  }
};

const handleNextClick1 = () => {
  if (activeIndex2 < Math.ceil(data.length / 4) - 1) {
    setActiveIndex2((prevIndex) => prevIndex + 1);
  }
};

const handleDotClick1 = (index) => {
  setActiveIndex1(index);
};
const handleDotClick2 = (index) => {
  setActiveIndex2(index);
};


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images1.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images2.length]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-start">
      <div className="mt-10 w-full lg:px-20">
        <div className="flex">
          <div className="flex justify-start lg:pt-10 lg:pl-7 sm:pt-4 sm:pl-3">
            <img src={image} alt="Logo" />
          </div>
        </div>
        <div className="text-left mt-10">
          <h1 className="text-4xl">
            Welcome <span className="text-gray-300 underline">Test</span>
          </h1>
          <p className="mt-2 text-gray-400">Hope you are having a good day!</p>
        </div>
      </div>

      <div className="mt-12 w-auto lg:px-20">
  <h2 className="text-2xl font-bold mb-6 text-white">Photography</h2>
  
  <div className="rounded-full relative">
    <div
      className="grid grid-cols-6 rounded-full gap-4 "
      style={{ 
        width: `${data.length * 25}%`,
       
      }}  
    >
      {data.slice(activeIndex1 * 4, (activeIndex1 + 1) * 4).map((item, index) => (
        <div key={index} className="w-46 h-full">
          <img
            src={item.image_url}
            alt={`Photography ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
   

  </div>

  <div className="flex justify-end mt-6 space-x-2">
    {[...Array(Math.ceil(data.length / 4))].map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick1(index)}
        className={`w-4 h-4 rounded-full ${activeIndex1 === index ? 'bg-white' : 'bg-gray-500'}`}
      ></button>
    ))}
  </div>
</div>



<div className="mt-12 w-auto lg:px-20">
  <h2 className="text-2xl font-bold mb-6 text-white">Learning</h2>
  
  <div className=" relative">
    <div
      className="grid grid-cols-6 rounded-full gap-4 "
      style={{ 
        width: `${data.length * 25}%`,
       
      }}  
    >
      {data.slice(activeIndex2 * 4, (activeIndex2 + 1) * 4).map((item, index) => (
        <div key={index} className="w-46 h-auto">
          <img
            src={item.image_url}
            alt={`Learning ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
   

  </div>

  <div className="flex justify-end mt-6 space-x-2">
    {[...Array(Math.ceil(data.length / 4))].map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick2(index)}
        className={`w-4 h-4 rounded-full ${activeIndex1 === index ? 'bg-white' : 'bg-gray-500'}`}
      ></button>
    ))}
  </div>
</div>
    </div>
  );
};

export default Home;
