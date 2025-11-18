import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-start gap-10 ml-10">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide ml-6">
          Company Directory
        </h1>

        <div className="flex gap-8 text-lg">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/companies" className="hover:text-blue-400 transition">Company Listing</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
