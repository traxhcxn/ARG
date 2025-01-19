import React, { useState } from 'react'
import { StaffJoin } from '../../components/Joins'
import ReportList from '../../components/ReportList'
import Reports from '../../data/static/dummyReports.js'
import view from '../../assets/icons/view.png'

function StaffViewReportsContainer() {
    const [showReports, setShowReports] = useState(false)
    const onSearchButtonClick = () => {
        setShowReports(!showReports)
    }
    return (
        <div className="flex-1 bg-accent m-3 p-5 border border-[#D2D2D2] rounded-xl h-full">
            <div className='flex flex-col items-center gap-5'>
                <h3 className='text-xl font-semibold'>View Generated Reports for your Institution</h3>
                <StaffJoin joinBtnText={"Search"} onStaffJoinButtonClick={onSearchButtonClick} />
                {showReports && (
                    <div className="overflow-x-auto my-5 px-5 w-full">
                        <table className="table border">
                            {/* head */}
                            <tbody>
                                {Reports.map((report) => (
                                    <tr key={report.id}>
                                        <td className='min-w-[690px]'>{report.name}</td>
                                        <td>{report.dateAndTime}</td>
                                        <td><div className='btn bg-accent border-none shadow-none'><img src={view} className='size-4' /></div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StaffViewReportsContainer