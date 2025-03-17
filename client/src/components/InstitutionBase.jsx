import React from 'react'
import UserNavBar from './UserNavBar'
import { InsAdminMenu } from './Menus'
import AdminNavBar from './AdminNavbar'

function InstitutionBase() {
    return (
        <div>
            <InsAdminMenu />
            <AdminNavBar />
        </div>
    )
}

export default InstitutionBase