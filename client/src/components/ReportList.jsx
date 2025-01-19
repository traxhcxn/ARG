import React from 'react'
import { AppButton } from './Buttons'

function ReportList({ slNo, reportName }) {
    return (
        <div className='flex items-center my-5'>
            <p>{slNo}</p>
            <div className='join-item mr-16 ml-5'><p>Report: {reportName}</p></div>
            <AppButton btnText={"View"} className={"join-item ml-3 w-24"} />
            <div className='w-3'></div>
            <AppButton btnText={"Download"} className={"join-item"} />
        </div>
    )
}

export default ReportList