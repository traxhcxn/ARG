import React from 'react';
import StaffBase from '../components/StaffBase';
import { Outlet } from 'react-router-dom';
import InstitutionBase from '../components/InstitutionBase';

function InstitutionAdminPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
      <InstitutionBase />
      <div className="ml-[16.666667%] mt-[60px] flex flex-col w-full px-2 md:px-8 py-6 gap-6">
        <div className="bg-white/80 rounded-xl shadow-xl border border-[#C0C9EE] backdrop-blur-md p-2 md:p-1 w-full h-full flex flex-col gap-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default InstitutionAdminPage;
