import React from 'react'
import Sidebar from './Sidebar'
import GroupCard from './GroupCard'
function AllGroups() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center min-h-screen overflow-y-auto overflow-x-hidden bg-black'>
        <Sidebar/>
        <div className='w-full h-full px-4 md:px-8'>
            <h1 className='text-white text-2xl md:text-4xl mt-8 font-bold text-center mb-4'>All Groups</h1>
            <GroupCard/>
        </div>
    </div>
  )
}

export default AllGroups
