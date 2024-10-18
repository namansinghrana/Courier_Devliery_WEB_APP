import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './userProfile.css'
import Sidebar from '../../components/sidebar/sidebar'
import Form2 from '../../components/forms/form2'
import Profile from '../../components/Profile'

const UserProfile = () => {
  return (
    <>
      <div className='bg-stone-200'>
        <Navbar/>
        <div className='main'>
        <Profile/>
        </div>
      </div>

    </>
  )
}

export default UserProfile