import React from 'react';

function StaffHomeContainer() {
	return (
		<div className="flex-1 m-3 p-6 border-[#D2D2D2] rounded-xl text-[#1F2343] flex flex-col gap-8">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-2">Welcome, Staff!</h1>
				<p className="text-lg italic">Here’s a quick guide to help you make the most of your dashboard.</p>
			</div>

			<div className="flex flex-col gap-6">
				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">📤 Submit Data</h2>
					<p className="text-base leading-relaxed">
						Upload `.csv` files to generate analytics. Simply choose your file and department, then submit for processing.
					</p>
				</div>

				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">📊 View Analytics</h2>
					<p className="text-base leading-relaxed">
						Access analytics created by you or your peers. Use the dashboard layout to quickly compare and explore insights.
					</p>
				</div>

				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">📄 View Reports</h2>
					<p className="text-base leading-relaxed">
						Browse generated reports using department and category filters. Click any report to view its full contents.
					</p>
				</div>
			</div>

			<div className="text-center text-sm mt-4">
				For assistance, please contact your <span className="underline font-medium">Admin</span>.
			</div>
		</div>
	);
}

export default StaffHomeContainer;
