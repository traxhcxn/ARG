import React, { useState } from 'react'
import infoWarning from '../../assets/icons/info.png'
import { StaffJoin } from '../../components/Joins'
import dummyData from '../../assets/images/dummyData.png'
import { AnalyticsCard } from '../../components/Cards'

function StaffViewAnalyticsContainer() {
    const [showAnalytics, setShowAnalytics] = useState(false)
    const onGoButtonClick = () => {
        setShowAnalytics(!showAnalytics)
    }
    return (
        <div className='flex-1 w-full grid grid-cols-2 gap-5 p-5'>
            <div className='border border-secondary min-h-[550px] rounded-xl'>
                <div className='flex justify-center items-center bg-accent h-12 rounded-t-xl'>
                    <p>Submitted by You</p>
                </div>
                <div className='p-6'>
                    <div className='flex flex-col gap-1 items-center px-10 py-4 border border-secondary rounded-lg'>
                        <img src={infoWarning} />
                        <p>You haven't submitted any data to analyse</p>
                    </div>
                </div>
            </div>
            <div className='border border-secondary min-h-[600px] rounded-xl'>
                <div className='flex justify-center items-center h-12 rounded-t-xl bg-accent'>
                    <p>Submitted by Others</p>
                </div>
                <div className='p-6 flex flex-col justify-center'>
                    <StaffJoin joinBtnText={"Go"} selectOneStyle={"w-72"} onStaffJoinButtonClick={onGoButtonClick} />
                    {/*showAnalytics && (
                        <div className='flex flex-col gap-5 py-7 items-center'>
                            <AnalyticsCard source={dummyData}/>
                            <AnalyticsCard source={dummyData}/>
                            <AnalyticsCard source={dummyData}/>
                        </div>
                    )*/}
                </div>
            </div>
        </div>
    )
}

export default StaffViewAnalyticsContainer