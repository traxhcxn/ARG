import React, { useState } from 'react'
import GuestNavBar from '../components/GuestNavBar'
import { StaffJoin } from '../components/Joins'
import Analytics from '../data/static/dummyAnalytics'
import { AnalyticsCard } from '../components/Cards'
import Reports from '../data/static/dummyReports'
import view from '../assets/icons/view.png'
import Footer from '../components/Footer'

function GuestPage() {
	const [showAnalytics, setShowAnalytics] = useState(false)
	const onAnalyticsButtonClicked = () => {
		setShowAnalytics(!showAnalytics)
	}
	const [showReports, setShowReports] = useState(false)
	const onReportsButtonClicked = () => {
		setShowReports(!showReports)
	}
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
			<GuestNavBar />
			<div className='pt-24 pb-10 px-10 flex justify-between' >
				<div className='p-5 bg-white/80 rounded-2xl shadow-xl border border-[#C0C9EE] text-[#1F2343] flex flex-col gap-5 min-h-[600px]'>
					<StaffJoin joinBtnText={"Search Analytics"} onStaffJoinButtonClick={onAnalyticsButtonClicked} />
					{/*showAnalytics && (
						<div className='grid grid-cols-2 gap-3'>
							{Analytics.map((analytic) => (
								<AnalyticsCard key={analytic.id} source={analytic.image} />
							))}
						</div>
					)*/}
				</div>
				<div className='p-5 bg-white/80 rounded-2xl shadow-xl border border-[#C0C9EE] text-[#1F2343] flex flex-col gap-5 min-h-[600px]'>
					<StaffJoin joinBtnText={"Search Reports"} onStaffJoinButtonClick={onReportsButtonClicked} />
					{showReports && (
						<div className="overflow-x-auto w-full">
							<table className="table border">
								{/* head */}
								<tbody>
									{Reports.map((report) => (
										<tr key={report.id} className='flex justify-between items-center'>
											<td>{report.name}</td>
											<td><div className='btn bg-accent border-none shadow-none'><img src={view} className='size-4' /></div></td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default GuestPage