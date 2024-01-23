import React from 'react'

type Props = {}

const TrackordersCard = (props: Props) => {
    return (
        <div className='px-3 py-3 w-[40%] bg-white rounded-lg flex flex-col border-2 border-gray-300'>

            <div className='flex items-center justify-between'>
                <h1 className='text-[14px] text-[#4A4A4A] font-inter font-semibold'>Shipment Updates</h1>
                <h1 className='text-[14px] text-[#4A4A4A] font-inter font-normal'>Total orders: 392</h1>
            </div>


        </div>
    )
}

export default TrackordersCard