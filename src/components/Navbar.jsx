import React from 'react'
import {CgMenuGridR, CgMenuGridO} from 'react-icons/cg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#16a34a]'>REACT.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Github</li>
        </ul>
        <div>
            <CgMenuGridR />
        </div>
    </div>
  )
}

export default Navbar