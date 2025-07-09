import React from 'react'
import { AppButton, IconButton } from './Buttons'
import profileIcon from '../assets/icons/testProfile.png'
import profilePic from '../assets/images/defaultUserProfile.png'
import { Link } from 'react-router-dom'

function UserNavBar() {
    return (
        <div className="navbar bg-gradient-to-r from-[#8CCDEB] via-[#C0C9EE] to-[#1F2343] w-5/6 h-[60px] bg-base-100 flex items-center justify-between px-5 fixed userNavBar z-10">
            <p className="text-xl">Institution Name</p>
            <div className='flex gap-1 items-center profileIcon' onClick={() => document.getElementById('profileModal').showModal()}>
                <img src={profileIcon} className='size-7' />
                <p className='text-md'>FirstName</p>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="profileModal" className="modal">
                <div className="modal-box bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-[#C0C9EE] p-6 flex flex-col gap-4">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex gap-5 items-center'>
                        <img src={profilePic} className='size-48 rounded-2xl' />
                        <div className='flex flex-col'>
                            <p className="font-semibold text-lg text-[#1F2343]">Someone Surname</p>
                            <p className="text-[#6B7280]">Role</p>
                            <p className="text-[#1F2343]">Example Institute of Science and Technology</p>
                            <p className="text-[#1F2343]">someone@example.com</p>
                            <div className='mt-5 flex gap-2'>
                                <Link to={'/staff/settings'}><button className='btn bg-secondary text-black hidden'>Edit Profile</button></Link>
                                <Link to={'/'}><button className='btn bg-[#8CCDEB] text-[#1F2343] border-none hover:bg-[#C0C9EE] hover:text-[#1F2343] transition-colors'>Logout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default UserNavBar