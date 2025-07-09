import React, { useState } from 'react'
import { StaffJoin } from '../../components/Joins'
import { BaseInput } from '../../components/Inputs'
import { AppButton } from '../../components/Buttons'
import { AdminAnalyticsCard, AnalyticsCard } from '../../components/Cards'
import analytics from '../../assets/images/dummyData.png'
import Analytics from '../../data/static/dummyAnalytics'

function InstitutionAnalyticsContainer() {
	const [file, setFile] = useState(null)
	const [fileType, setFileType] = useState("")
	const onFileInput = (event) => {
		const uploadedFile = event.target.files[0]
		if (uploadedFile) {
			setFileType(uploadedFile.type)
			const reader = new FileReader()
			reader.onload = (e) => {
				setFile({
					name: uploadedFile.name,
					type: uploadedFile.type,
					size: uploadedFile.size,
					content: e.target.result
				})
			}
			if (uploadedFile.type.includes("image")) {
				reader.readAsDataURL(uploadedFile)
			} else if (uploadedFile.type.includes("text")) {
				reader.readAsText(uploadedFile)
			} else if (uploadedFile.type.includes("pdf")) {
				reader.readAsDataURL(uploadedFile)
			} else {
				alert("Unsupported FIle Type")
			}
		}
	}
	const onUploadFileClick = () => {
		setFile(null)
		setFileType("")
	}
	const [showAnalytics, setShowAnalytics] = useState(false)
	const onShowAnalyticsButtonClicked = () => {
		setShowAnalytics(!showAnalytics)
	}
	const onAproveButtonClicked = () => {
		let analyticItems = document.querySelectorAll('#analyticItem')
		let count = 0
		analyticItems.forEach((item) => {
			let checkbox = item.querySelector('.checkbox')
			if (checkbox.checked) {
				count++
			}
		})
		alert(count + " Analytics Approved")
	}
	const [remove, setRemove] = useState(false)
	const onRejectButtonClicked = () => {
		let analyticItems = document.querySelectorAll('#analyticItem')
		analyticItems.forEach((item) => {
			let checkbox = item.querySelector('.checkbox')
			if (checkbox.checked) {
				item.remove()
			}
		})
	}
	return (
		<div role="tablist" className="tabs tabs-lifted m-3">
			<input type="radio" name="my_tabs_2" role="tab" className="tab min-w-40" aria-label="Upload Data" defaultChecked />
			<div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
				<div className='w-full flex flex-col items-center gap-5 min-h-[575px]'>
					<div>
						<h3 className='text-xl font-semibold'>Upload Data for Analytics</h3>
					</div>
					<StaffJoin joinBtnText={'Select File'} onStaffJoinButtonClick={() => document.getElementById('fileInput').click()} />
					<div className='grid grid-cols-5 gap-10'>
						<div className='col-span-3'>
							{file && (
								<div>
									<div className='w-full flex items-center justify-center shadow bg-base-100 h-10'><p><strong>Preview</strong> - {file.name}</p></div>
									{fileType.includes("image") && (<img src={file.content} alt="Preview" className="w-1/2 border rounded-b-md overflow-hidden" />)}
									{fileType.includes("pdf") && (<iframe src={file.content} title="PDF Preview" className="w-full h-[690px] border overflow-hidden" />)}
									{fileType.includes("text") && (<pre className="shadow p-3 border rounded-b-md overflow-hidden">{file.content}</pre>)}
								</div>
							)}
						</div>
						<div className='col-span-2'>
							{file && (
								<div className='bg-base-100 rounded shadow border px-10 py-6 flex flex-col gap-3'>
									<p><strong>File Name:</strong> {file.name}</p>
									<p><strong>FIle Type:</strong> {file.type}</p>
									<p><strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
									<div className='hidden'>
										<BaseInput placeholder={"Enter Full Name"} className={"w-full mt-3"} />
										<div className='bg-black h-[1px] my-3'></div>
										<div className='flex flex-col'>
											<p className='text-lg font-semibold'>Author Preview</p>
											<p>Submitted by: someone</p>
											<p>Role, Institution</p>
										</div>
									</div>
									<AppButton btnText={"Upload File"} className={"w-40 rounded self-center mt-5 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onUploadFileClick} />
								</div>
							)}
						</div>
					</div>
					<input type='file' className='hidden' id='fileInput' accept="image/*, text/*, application/pdf" onChange={onFileInput}></input>
				</div>
			</div>

			<input type="radio" name="my_tabs_2" role="tab" className="tab min-w-40" aria-label="Approve Analytics" />
			<div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
				<div className='w-full flex flex-col items-center gap-5 min-h-[575px]'>
					<div>
						<h3 className='text-xl font-semibold'>Approve Analytics for Reports</h3>
					</div>
					<AppButton btnText={'Show Submitted Analytics'} className={"w-60 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onShowAnalyticsButtonClicked} />
					{showAnalytics && (
						<>
							{/*<div className='grid grid-cols-3 gap-10'>
								{Analytics.map((item) => (
									<div key={item.id} id='analyticItem'><AdminAnalyticsCard source={item.image} className={'checkbox'} defaultChecked={remove} /></div>
								))}
							</div>*/}
							<div className='w-full flex justify-center gap-5'>
								<AppButton btnText={"Approve"} className={"w-40 rounded self-center mt-5 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onAproveButtonClicked} />
								<AppButton btnText={"Reject"} className={"w-40 rounded self-center mt-5 h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onRejectButtonClicked} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default InstitutionAnalyticsContainer