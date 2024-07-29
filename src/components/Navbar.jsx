import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-4'>
        <div className='logo'>
            <span className='font-bold text-xl mx-8 cursor-pointer'>FunTask</span>
        </div>
        <ul className='flex gap-8 mx-16'> 
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</li>
        </ul>
        
    </nav>
  )
}

export default Navbar
