import React from 'react'

function InstitutionSettingsContainer() {
	return (
		<div role="tablist" className="tabs tabs-lifted m-3">
			<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="User" defaultChecked />
			<div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">

			</div>

			<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Institution" />
			<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

			</div>
		</div>
	)
}

export default InstitutionSettingsContainer