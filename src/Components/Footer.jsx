import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { LuTwitch } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-9  mb-6">
          <a href="#" className="text-white"><FiFacebook /></a>
          <a href="#" className="text-white"><FaInstagram /></a>
          <a href="#" className="text-white"><CiTwitter/></a>
          <a href="#" className="text-white"><LuTwitch /></a>
          <a href="#" className="text-white"><CiYoutube /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <a href="#" className="text-white">Privacy Policy</a>
          <a href="#" className="text-white">Contact Us</a>
          <a href="#" className="text-white">Cookie Preferences</a>
          <a href="#" className="text-white">Corporate Information</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <a href="#" className="text-white">Privacy Policy</a>
          <a href="#" className="text-white">Contact Us</a>
          <a href="#" className="text-white">Cookie Preferences</a>
          <a href="#" className="text-white">Corporate Information</a>
        </div>
        <div className="text-center text-sm mt-4">
          © Alkye Test
        </div>
      </div>
    </footer>
  );
};

export default Footer;
