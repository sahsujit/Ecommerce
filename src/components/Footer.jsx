"use client"
import React from 'react'

import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='bg-richblack-800  text-richblack-400  w-full px-10 py-10 '>
        <div className='flex flex-col border-b py-8 border-richblack-700 gap-4'>
            <p className='text-richblack-50 px-3 text-3xl font-bold'>
            Ecommercery
                </p>
                <div className="flex gap-3 px-3  text-lg">
                <a href="https://www.facebook.com/profile.php?id=61557171697976"
                  className="hover:scale-150 hover:text-richblack-50 transition-all duration-200"
                >
                  <FaFacebook />
                </a>

                <a href="https://github.com/sahsujit"
                className="hover:scale-150  hover:text-richblack-50 transition-all duration-200">
                  <FaGithub />
                </a>

                <a href="https://twitter.com/sujitsah1388"
                className="hover:scale-150  hover:text-richblack-50 transition-all duration-200">
                  <FaTwitter />
                </a>

                <a href="https://www.linkedin.com/in/sujit-sah-619090274/"
                className="hover:scale-150 hover:text-richblack-50 transition-all duration-200">
                  <FaLinkedinIn />
                </a>




              </div>
        </div>

        <div className='lg:flex-row flex flex-col items-center mt-8 justify-between'>
            <div className='flex'>
                <p
                className='border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3'
                >
                    Privacy Policy

                </p>
                <p
                className='border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3'
                >
                   Cookie Policy

                </p>
                <p
                className='border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3'
                >
                   Terms

                </p>

            </div>
            <div className="text-center">Made with ❤️ Sujit Sah © 2024 Ecommercery</div>

        </div>
      

    </div>
  )
}

export default Footer