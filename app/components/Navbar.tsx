import React from 'react'
import { Link } from 'react-router'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
          <div className='flex items-center gap-2'>
            <p className='text-2xl font-bold text-gradient'>RECRUITMASTER</p>
            <span className='text-xs font-semibold text-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full'>RM</span>
          </div>
        </Link>
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <Link to="/upload" className='primary-button w-fit'>
            Upload Resume
          </Link>
        </div>
    </nav>
  )
}
