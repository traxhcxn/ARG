import React, { useState } from 'react'
import { AppButton } from '../../components/Buttons'
import users from '../../data/static/dummyUsers.js'

function InstitutionManageUsersContainer() {
	const [uuid, setUuid] = useState('')
	const onGenerateButtonClick = () => {
		let rand = Math.round(Math.random() * 1000000)
		setUuid(rand)
		document.getElementById('uuidModal').showModal()
	}
	const [remove, setRemove] = useState(false)
	const onSaveButtonClicked = () => {
		let userRows = document.querySelectorAll('#userRow')
		userRows.forEach((row) => {
			let checkbox = row.querySelector('.checkbox')
			if (checkbox.checked) {
				row.remove()
			}
		})
	}
	return (
		<div className="flex-1 m-3 py-5">
			<div className="join flex items-center h-12 px-5">
				<div className='join-item px-5 bg-base-100 border h-full flex items-center'>Add a new Staff Member</div>
				<AppButton btnText={'Generate UUID'} className={'join-item w-50 h-[20px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors'} onClick={onGenerateButtonClick} />
				<dialog id="uuidModal" className="modal">
					<div className="modal-box">
						<h3 className="font-semibold text-lg">UUID: {uuid}</h3>
						<p className="py-1 font-light text-xs">Share this UUID with your staff members to add them.</p>
					</div>
					<form method="dialog" className="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
			</div>
			<div className="overflow-x-auto my-5 px-5">
				<table className="table border">
					{/* head */}
					<thead>
						<tr className='bg-accent'>
							<th>Name</th>
							<th>Email</th>
							<th>UUID</th>
							<th>Remove account?</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id} id='userRow'>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.uuid}</td>
								<td><input type="checkbox" className="checkbox" defaultChecked={remove}/></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='w-full flex justify-end px-5 pb-10'>
				<AppButton btnText={'Save Changes'} className={'w-max h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors'} onClick={onSaveButtonClicked}/>
			</div>
		</div>
	)
}

export default InstitutionManageUsersContainer