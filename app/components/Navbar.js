import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 flex text-white justify-between items-center px-4 h-[10vh]">
        <div className="logo font-bold flex items-center">GetMeaChai<span><img className="w-10" src="/cupGhost.webp" alt="" /></span></div>
        {/* <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign up</li>
          <li>Login</li>
        </ul> */}

        <div>
          <Link href="\login">
        <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
