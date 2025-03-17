import React from 'react'
import { AppButton } from './Buttons'

function AdminReportList({ slNo, reportName }) {
    return (
        <div className='flex justify-between my-5'>
            <div className='flex items-center min-w-[420px]'>
                <p>{slNo}</p>
                <div className='mr-16 ml-5'><p>Report: {reportName}</p></div>
            </div>
            <div className='flex w-full gap-7'>
                <AppButton btnText={"View"} className={'w-24'} />
                <AppButton btnText={"Download"} className={'w-24'} />
                <AppButton btnText={"Delete"} className={'w-24'} />
                <label className="label cursor-pointer flex gap-2">
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <span className="label-text">Display for viewers</span>
                </label>
            </div>
        </div>
    )
}

export default AdminReportList