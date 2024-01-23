import React from 'react'
import ColorpickerCard from './ColorpickerCard'
import IntegrationCard from './IntegrationCard'
import HtmlConfigurationCard from './HtmlConfigurationCard'

type Props = {}

const HeartFunctionality = (props: Props) => {
  return (
    <div className='py-10 pb-16 px-16 bg-[#fffcf9]'>
        <h1 className='text-[24px] text-[#4A4A4A] font-inter font-bold'>
        Discover the Heart of Our Functionality
            </h1>

        <div className='mt-10 flex gap-3'>
            <ColorpickerCard />
            <IntegrationCard />
            <HtmlConfigurationCard />
        </div>

    </div>
  )
}

export default HeartFunctionality