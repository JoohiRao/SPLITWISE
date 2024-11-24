import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

import GroupDetail from './Components/GroupDetail'
import {Routes,Route} from 'react-router-dom'
import ActivityCard from './Components/ActivityCard'
import AllGroups from './Components/AllGroups'
import GroupCard from './Components/GroupCard'
import Profile from './Components/Profile'
import Friends from './Components/Friends'
import Activity from './Components/Activity'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
function App() {
  return (

    
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-tr from-gray-800 to-neutral-900'>

      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/allgroups' element={<AllGroups/>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
        <Route path='/activity' element={<Activity/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes> 

      

      

      
    </div>
  )
}

export default App
