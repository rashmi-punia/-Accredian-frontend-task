import React from 'react'
import logoimg from '../assets/images/logo.png'
import TippyCourses from './TippyCourses'

const Navbar = () => {
  return (
    <div className=' bg-white z-50 shadow *:p-3 py-0.5  w-full'>

    <div className='flex mx-20 justify-between items-center'>
      <div className="flex gap-10">
        <img src={logoimg} className="w-[125px] h-[36px] " />
        <button className="bg-secondaryText z-10 text-white p-2 text-sm rounded">
          <TippyCourses />
        </button>
      </div>

      <div className="capitalize">
        <ul className="flex items-baseline gap-6 *:py-2">
          <li>Refer & Earn</li>
          <li>resources</li>
          <li>about us</li>
          <li className="gap-3 flex *:p-1.5  *:rounded">
            <button className="bg-graybg  bg-opacity-20">Login</button>
            <button className='bg-secondaryText text-white'>Try for free</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Navbar
