'use client'
import { Icon } from '@shopify/polaris'
import { CalendarIcon } from '@shopify/polaris-icons'
import React, { useState } from 'react'

type Props = {}

const TimeLineTabs = (props: Props) => {
    const [timelineTab, setTimeLinetab] = useState(1);
  return (
    <div className='flex gap-3 mt-8'>
                <div onClick={() => setTimeLinetab(1)} className={`flex justify-center items-center p-3 rounded-md cursor-pointer ${timelineTab == 1 ? (`bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`) : (`bg-white`)}`}>
                    <h1 className='text-[13px] font-inter font-semibold text-[#4A4A4A]'>Lifetime</h1>
                </div>
                <div onClick={() => setTimeLinetab(2)} className={`flex justify-center items-center p-3 rounded-md cursor-pointer ${timelineTab == 2 ? (`bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`) : (`bg-white`)}`}>
                    <h1 className='text-[13px] font-inter font-semibold text-[#4A4A4A]'>Last Week</h1>
                </div>
                <div onClick={() => setTimeLinetab(3)} className={`flex justify-center items-center p-3 rounded-md cursor-pointer ${timelineTab == 3 ? (`bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`) : (`bg-white`)}`}>
                    <h1 className='text-[13px] font-inter font-semibold text-[#4A4A4A]'>Last Month</h1>
                </div>
                <div onClick={() => setTimeLinetab(4)} className={`flex justify-center items-center p-3 rounded-md cursor-pointer ${timelineTab == 4 ? (`bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`) : (`bg-white`)}`}>
                    <h1 className='text-[13px] font-inter font-semibold text-[#4A4A4A]'>Last Year</h1>
                </div>
                <div onClick={() => setTimeLinetab(5)} className={`flex gap-2 justify-center items-center p-3 rounded-md cursor-pointer ${timelineTab == 5 ? (`bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`) : (`bg-white`)}`}>
                    <h1 className='text-[13px] font-inter font-semibold text-[#4A4A4A]'>Customize Timeline</h1>
                    <Icon source={CalendarIcon} tone="base" />
                </div>
            </div>
  )
}

export default TimeLineTabs