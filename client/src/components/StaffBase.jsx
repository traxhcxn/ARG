import React from 'react'
import UserNavBar from './UserNavBar'
import { StaffMenu } from './Menus'

function StaffBase() {
  return (
    <div>
        <StaffMenu />
        <UserNavBar />
    </div>
  )
}

export default StaffBase