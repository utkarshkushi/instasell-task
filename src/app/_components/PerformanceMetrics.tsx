import React from 'react'
import TimeLineTabs from './TimeLineTabs'

type Props = {}

const PerformanceMetrics = (props: Props) => {

    return (
        <div className="py-10 pb-16 px-16 bg-[#FFF7EE]">

            <h1 className='text-[24px] text-[#4A4A4A] font-inter font-bold'>
                Instant Dive into Your Performance Metrics
            </h1>

            <TimeLineTabs />

        </div>
    )
}

export default PerformanceMetrics