import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import GroupCard from './GroupCard'
import { Link } from 'react-router-dom'
function Body() {
  return (
    <div className='w-full min-h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-tr from-gray-800 to-neutral-900 pb-6 sm:pb-8 md:pb-10'>
      <Navbar/>
      
      {/* Hero section with enhanced responsiveness */}
      <div className='w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 gap-6 md:gap-8'>
        <div className='w-full md:w-[60%] p-3 sm:p-4 md:p-5 text-center flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6'>
            <h1 className='text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
              Split , Track , Settle
            </h1>
            <h1 className='text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-tight'>
              All in one place
            </h1>
        </div>
        <div className='w-full sm:w-[80%] md:w-[40%] transition-all duration-300 hover:scale-105'>
            <img 
              src="/split3.png" 
              alt="Split expenses illustration" 
              className='max-w-full h-auto rounded-lg shadow-xl'
            />
        </div>
      </div>

      {/* Groups section with enhanced responsiveness */}
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 md:mt-16'>
        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8'>
          Your Groups
        </h1>
        <div className='max-w-7xl mx-auto'>
          <GroupCard/>
        </div>
      </div>
      
      {/* Button with enhanced responsiveness */}
      <Link to="/allgroups" className='block w-fit mx-auto mt-8 sm:mt-10 md:mt-12'>
        <Button 
          className='transform transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg' 
          text="More Groups" 
          color="bg-blue-600"
        />
      </Link>
    </div>
  )
}

export default Body