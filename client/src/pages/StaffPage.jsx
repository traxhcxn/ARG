import React from 'react';
import StaffBase from '../components/StaffBase';
import { Outlet } from 'react-router-dom';

function StaffPage() {
  return (
    <div className="flex h-screen">
      <StaffBase />
      <div className="ml-[16.666667%] mt-[60px] flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default StaffPage;
