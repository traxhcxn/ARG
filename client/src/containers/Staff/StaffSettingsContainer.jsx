import React from 'react'
import { SettingsBaseInput, SettingsPasswordInput } from '../../components/Inputs'
import { AppButton } from '../../components/Buttons'

function StaffSettingsContainer() {
    return (
        <div className="flex-1 bg-accent m-3 p-5 border border-[#D2D2D2] rounded-xl">
            <h3 className='font-bold text-xl mb-5'>Profile Settings</h3>
            <div className='w-3/5 flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <p className='font-medium text-lg'>Change Account Information</p>
                    <div className='flex flex-col gap-3 pl-10'>
                        <div className='flex justify-between items-center'>
                            <p>Add Profile Picture:</p>
                            <button className='btn bg-secondary px-2 py-1 rounded-md' onClick={()=>document.getElementById('imgInput').click()}>Choose an Image</button>
                        </div>
                        <SettingsBaseInput label={"Change First Name:"} />
                        <SettingsBaseInput label={"Change Last Name:"} />
                        <SettingsBaseInput label={"Change Email Address:"} />
                        <SettingsBaseInput label={"Add Secondary Email Address:"} />
                        <SettingsBaseInput label={"Add Phone number:"} />
                        <AppButton btnText={"Save Changes"} className={"w-1/3 self-center"} />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-medium text-lg'>Change Password</p>
                    <div className='pl-10 flex flex-col gap-3'>
                        <SettingsPasswordInput label={"Enter current Password: "} />
                        <SettingsPasswordInput label={"Enter New Password: "} />
                        <SettingsPasswordInput label={"Confirm New Password: "} />
                        <AppButton btnText={"Save Password"} className={"w-1/3 self-center"} />
                    </div>
                </div>
            </div>
            <div className='mt-10 mb-5 flex flex-col gap-3'>
                <p className='font-medium text-lg'>Other</p>
                <div className='flex items-center justify-between pl-10'>
                    <p>Request for Reissue of UUID: <em>(Sends a request to your Institution's admin. Check your inbox for updates.)</em></p>
                    <AppButton btnText={"Request"} className={"w-1/4"} />
                </div>
                <div className='flex items-center justify-between pl-10'>
                    <p>Request for Account Deletion: <em>(This cannot be undone and you may need to sign up again if this was a mistake.)</em></p>
                    <AppButton btnText={"Request"} className={"w-1/4"} />
                </div>
            </div>
            <input type='file' className='hidden' id='imgInput'></input>
        </div>
    )
}

export default StaffSettingsContainer