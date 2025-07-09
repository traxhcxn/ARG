import React from 'react'
import home from '../assets/icons/staffHome.png'
import staffSubmit from '../assets/icons/staffSubmit.png'
import analytics from '../assets/icons/staffAnalytics.png'
import reports from '../assets/icons/staffReports.png'
import settings from '../assets/icons/settings.png'
import inbox from '../assets/icons/inbox.png'
import manageUsers from '../assets/icons/manageUsers.png'
import activityLogs from '../assets/icons/logs.png'
import { IconButton } from './Buttons'
import { Link } from 'react-router-dom'

export function InsAdminMenu() {
    return (
        <div className='fixed w-1/6 h-full flex flex-col justify-between'>
            <div>
                <div className='w-full h-[64px] flex items-center bg-[#8CCDEB] backdrop-blur-md px-5'>
                    <Link to={'/institution-admin/home'}><IconButton source={'/logo.png'} /></Link>
                </div>
                <Link to={'/institution-admin/home'}><MenuItem source={home} menuItemTitle={"Home"} /></Link>
                <Link to={'/institution-admin/analytics'}><MenuItem source={analytics} menuItemTitle={"Analytics"} /></Link>
                <Link to={'/institution-admin/manage-reports'}><MenuItem source={reports} menuItemTitle={"Manage Reports"} /></Link>
                <Link to={'/institution-admin/manage-users'}><MenuItem source={manageUsers} menuItemTitle={"Manage Users"} /></Link>
                <Link to={'/institution-admin/activity-logs'} className='hidden'><MenuItem source={activityLogs} menuItemTitle={"Activity Logs"} /></Link>
            </div>
            <Link to={'/institution-admin/settings'} className='hidden'><MenuItem source={settings} menuItemTitle={"Settings"} /></Link>
        </div>
    )
}

export function StaffMenu() {
    return (
        <div className='fixed w-1/6 h-full flex flex-col justify-between'>
            <div>
                <div className='w-full h-[64px] flex items-center bg-[#8CCDEB] backdrop-blur-md px-5'>
                    <Link to={'/staff/home'}><IconButton source={'/logo.png'} /></Link>
                </div>
                <Link to={'/staff/home'}><MenuItem source={home} menuItemTitle={"Home"} /></Link>
                <Link to={'/staff/submit-data'}><MenuItem source={staffSubmit} menuItemTitle={"Submit Data"} /></Link>
                <Link to={'/staff/view-analytics'}><MenuItem source={analytics} menuItemTitle={"View Analytics"} /></Link>
                <Link to={'/staff/view-reports'}><MenuItem source={reports} menuItemTitle={"View Reports"} /></Link>
                <Link to={'/staff/inbox'} className='hidden'><MenuItem source={inbox} menuItemTitle={"Inbox"} /></Link>
            </div>
            <Link to={'/staff/settings'} className='hidden'><MenuItem source={settings} menuItemTitle={"Settings"} /></Link>
        </div>
    )
}

function MenuItem({ source, menuItemTitle }) {
    return (
        <div className="w-full bg-transparent flex items-center gap-3 h-[60px] cursor-pointer menuItem rounded-xl px-3 transition-colors hover:bg-white/20">
            <img src={source} className='size-6' />
            <p className='text-[17px] font-normal'>{menuItemTitle}</p>
        </div>
    )
}