import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


    function Navbar() {
        return (
          <div className='w-full h-auto md:h-28 py-2 bg-black'>

            <div className='w-full h-auto md:h-14 mb-1 px-2 md:px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4 md:gap-10 h-auto md:h-14' >
                  <img className='w-20 h-14 md:w-28 md:h-20' src="/split.png" alt="split" />
                  <input type="text" placeholder='Search' className='w-full md:w-[60%] h-8 md:h-10 bg-gray-800 rounded-md text-white px-2' />
              </div>

              <div className='h-auto md:h-14 gap-4 md:gap-10 flex items-center justify-center md:pr-8'>
              <Button text="SIGN UP" color="bg-blue-800"/>
              <Button text="LOGIN" color="bg-orange-500"/>
              </div>
            </div>

            {/* //items
             */}

             <div className='w-full h-12 md:h-8 px-2 md:px-[5%] flex items-center justify-between md:justify-center gap-4 md:gap-14 text-white overflow-x-auto'>
              <Link className='text-sm md:text-base whitespace-nowrap' to="/">Home</Link>
              <Link className='text-sm md:text-base whitespace-nowrap' to="/allgroups">Groups</Link>
              <Link className='text-sm md:text-base whitespace-nowrap' to="/friends">Friends</Link>
              <Link className='text-sm md:text-base whitespace-nowrap' to="/activity">Activity</Link>
              <Link className='text-sm md:text-base whitespace-nowrap' to="/profile">Account</Link>

             </div>
              
          </div>
        )
      }
 

export default Navbar
