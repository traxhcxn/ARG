import React from 'react'
import features from '../data/featureList'
import { FeatureCard } from '../components/Cards'

function FeatureContainer() {
    return (
        <div className='w-full h-max bg-secondary px-20 py-10 flex flex-col items-center'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Revolutionize your Annual Reporting</h2>
                <p>Empowering institutions to elevate their annual reporting with seamless solutions.</p>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-10 mb-16'>
                {features.map((feature) => (<FeatureCard key={feature.id} featureIcon={feature.featureIcon} feature={feature.feature} featureDesc={feature.featureDesc} />))}
            </div>
        </div>
    )
}

export default FeatureContainer