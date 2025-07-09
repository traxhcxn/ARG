import React, { useState } from 'react'
import { StaffJoin } from '../../components/Joins'
import AdminReportList from '../../components/AdminReportList'
import { AppButton } from '../../components/Buttons'
import Reports from '../../data/static/dummyReports.js'
import view from '../../assets/icons/view.png'
import Analytics from '../../data/static/dummyAnalytics.js'
import { AnalyticsCard, ReportAnalyticsCard } from '../../components/Cards.jsx'
import { BaseInput, SettingsBaseInput } from '../../components/Inputs.jsx'

function InstitutionManageReportsContainer() {
	const [showReports, setShowReports] = useState(false)
	const onSearchButtonClick = () => {
		setShowReports(!showReports)
	}
	const [remove, setRemove] = useState(false)
	const onSaveButtonClicked = () => {
		let reportRows = document.querySelectorAll('#reportRow')
		reportRows.forEach((row) => {
			let checkbox = row.querySelector('.checkbox')
			if (checkbox.checked) {
				row.remove()
			}
		})
	}
	const [showCreateContainer, setShowCreateContainer] = useState(false)
	const onCreateButtonClicked = () => {
		setShowCreateContainer(!showCreateContainer)
	}
	const [showManageContainer, setShowManageContainer] = useState(false)
	const onManageButtonClicked = () => {
		setShowManageContainer(!showManageContainer)
	}
	return (
		<div className="flex-1 m-3 p-5">
			<div className='flex flex-col items-center gap-5'>
				<h3 className='text-xl font-semibold'>Create, View and Manage Generated Reports for your Institution</h3>
				<div className='flex justify-center gap-5 w-full px-10'>
					<AppButton btnText={'Create Report'} className={'w-48 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors'} onClick={onCreateButtonClicked} />
					<AppButton btnText={'Manage Reports'} className={'w-48 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors'} onClick={onManageButtonClicked} />
				</div>
				{/*showCreateContainer && (
					<>
						<div className='flex gap-10'>
							<SettingsBaseInput label={'Report Name'} placeholder={'Enter Report Name'} />
							<AppButton btnText={'Show Preview'} />
						</div>
						<div className='grid grid-cols-4 gap-7'>
							{Analytics.map((analytic) => (
								<ReportAnalyticsCard key={analytic.id} source={analytic.image} />
							))}
						</div>
					</>
				)*/}
				{showManageContainer && (
					<>
						<div className='flex gap-10'>
							<StaffJoin joinBtnText={"Search"} onStaffJoinButtonClick={onSearchButtonClick} />
							<AppButton btnText={'Save Changes'} className={'w-48 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors'} onClick={onSaveButtonClicked} />
						</div>
						{showReports && (
							<div className="overflow-x-auto my-5 px-5 w-full">
								<table className="table border">
									{/* head */}
									<tbody>
										{Reports.map((report) => (
											<tr key={report.id} id='reportRow'>
												<td><input type='checkbox' className='checkbox' defaultChecked={remove} /></td>
												<td className='min-w-[690px]'>{report.name}</td>
												<td>{report.dateAndTime}</td>
												<td><div className='btn shadow'><img src={view} className='size-4' /></div></td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default InstitutionManageReportsContainer