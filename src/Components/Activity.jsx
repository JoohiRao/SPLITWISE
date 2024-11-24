import React from 'react'
import Sidebar from './Sidebar'
import ActivityCard from './ActivityCard'
import Button from './Button'

function Activity() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-20 
      h-screen overflow-y-auto overflow-x-hidden bg-black p-4 md:p-0'>
      <Sidebar/>
      <div className='w-full h-full px-4 md:px-0'>
        <h1 className='text-white text-2xl md:text-4xl mt-4 md:mt-8 font-bold text-center mb-4'>
          Your Activity
        </h1>
        <ActivityCard/>
        <Button 
          className='w-fit mx-auto mb-8 md:mb-16' 
          text="More Groups" 
          color="bg-blue-600"
        />
      </div>
    </div>
  )
}

export default Activity
