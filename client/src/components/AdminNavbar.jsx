import React from 'react'
import { AppButton, IconButton } from './Buttons'
import profileIcon from '../assets/icons/testProfile.png'
import profilePic from '../assets/images/defaultUserProfile.png'
import { Link } from 'react-router-dom'

function AdminNavBar() {
    return (
        <div className="w-5/6 h-[60px] bg-base-100 flex items-center justify-between px-5 fixed userNavBar border-b border-[#d2d2d2] z-10">
            <p className="text-xl">Institution Name</p>
            <div className='flex gap-1 items-center profileIcon' onClick={() => document.getElementById('profileModal').showModal()}>
                <img src={profileIcon} className='size-7' />
                <p className='text-md'>FirstName</p>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="profileModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex gap-5 items-center'>
                        <img src={profilePic} className='size-48' />
                        <div className='flex flex-col'>
                            <p>Someone Surname</p>
                            <p>Role</p>
                            <p>Example Institute of Science and Technology</p>
                            <p>someone@example.com</p>
                            <div className='mt-5'>
                            <Link to={'/institution-admin/settings'}><button className='hidden btn bg-secondary text-black'>Edit Profile</button></Link>
                            <Link to={'/'}><button className='btn  bg-secondary text-black'>Logout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default AdminNavBar