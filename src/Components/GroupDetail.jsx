import React from 'react'
import Sidebar from './Sidebar'

function GroupDetail() {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar/>

      <div className='w-full h-screen bg-black'>
        <h1 className='text-white text-2xl md:text-4xl font-bold p-4 md:p-6'>
          Group Details
        </h1>

        <div className='w-full h-[90vh] px-4 md:px-[4%] bg-white overflow-y-auto py-4 md:py-[5%] overflow-x-hidden'>
          <div className='w-full md:w-[40%] p-3 md:p-4 card flex justify-between items-center rounded-md bg-black shadow-xl shadow-cyan-900'>
            <div className='h-16 md:h-[80%] w-16 md:w-[30%] bg-white rounded-full'></div>
            <div className='h-full w-[65%] bg-cyan-800 p-3 md:p-4'>
              <h1 className='text-white text-lg md:text-2xl font-bold'>
                Group Name
              </h1>
              <p className='text-white text-xs md:text-sm'>
                Group Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetail
