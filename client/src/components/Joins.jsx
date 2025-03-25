import React from 'react';
import { AppButton } from './Buttons';

export function StaffJoin({ joinBtnText, selectOneStyle, selectTwoStyle, onStaffJoinButtonClick, onDepartmentChange, onCategoryChange }) {
    return (
        <div className="join">
            <select 
                className={`select select-bordered join-item ${selectOneStyle}`}
                onChange={onDepartmentChange}
                defaultValue=""
                required
            >
                <option disabled value="">Select Department</option>
                <option>Computer Science and Engineering</option>
                <option>Information Technology</option>
                <option>Electronics and Communications Engineering</option>
                <option>Electricals and Electronics Engineering</option>
                <option>Bio-Medical Engineering</option>
            </select>
            <select 
                className={`select select-bordered join-item ${selectTwoStyle}`}
                onChange={onCategoryChange}
                defaultValue=""
                required
            >
                <option disabled value="">Select Category</option>
                <option>Research Publications</option>
                <option>Academics</option>
                <option>Athletics/Sports</option>
                <option>Technical Events</option>
                <option>Non-Technical Events</option>
            </select>
            <AppButton 
                btnText={joinBtnText} 
                className={"join-item min-w-20"} 
                onClick={onStaffJoinButtonClick}
            />
        </div>
    );
}