import React from 'react';
import { Link } from 'react-router-dom';

function InstitutionHomeContainer() {
	return (
		<div className="flex-1 m-3 p-6 border-[#D2D2D2] rounded-xl text-[#1F2343] flex flex-col gap-8">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-2">Welcome, Admin!</h1>
				<p className="text-lg italic">Quick overview to help you navigate and manage the platform.</p>
			</div>

			<div className="flex flex-col gap-6">
				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">📊 Analytics</h2>
					<p className="text-base leading-relaxed">
						Upload CSV files to generate visual analytics. Review and approve submissions made by staff to maintain report quality.
					</p>
				</div>

				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">📄 Manage Reports</h2>
					<p className="text-base leading-relaxed">
						Create comprehensive reports by selecting and annotating approved analytics. You can also preview, save, and delete reports anytime.
					</p>
				</div>

				<div className="bg-base-100 p-6 rounded-xl shadow-xl border">
					<h2 className="text-xl font-semibold mb-2">👥 Manage Users</h2>
					<p className="text-base leading-relaxed">
						Generate secure UUIDs for staff sign-up. View and remove existing users as needed to maintain control over access.
					</p>
				</div>
			</div>

			<div className="text-center text-sm mt-4">
				Need help? Visit <Link to="/" className="underline font-medium">arg.com</Link>
			</div>
		</div>
	);
}

export default InstitutionHomeContainer;
