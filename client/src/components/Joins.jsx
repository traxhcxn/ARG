import React from 'react'
import { AppButton } from './Buttons'

export function StaffJoin({joinBtnText, selectOneStyle, selectTwoStyle, onStaffJoinButtonClick}) {
    return (
        <div className="join">
            <select className={`select select-bordered join-item ${selectOneStyle}`}>
                <option disabled selected>Select Department</option>
                <option>Computer Science and Engineering</option>
                <option>Information Technology</option>
                <option>Electronics and Communications Engineering</option>
                <option>Electricals and Electronics Engineering</option>
                <option>Bio-Medical Engineering</option>
            </select>
            <select className={`select select-bordered join-item ${selectTwoStyle}`}>
                <option disabled selected>Select Category</option>
                <option>Research Publications</option>
                <option>Academics</option>
                <option>Athletics/Sports</option>
                <option>Technical Events</option>
                <option>Non-Technical Events</option>
            </select>
            <AppButton btnText={joinBtnText} className={"join-item bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onStaffJoinButtonClick}/>
        </div>
    )
}
