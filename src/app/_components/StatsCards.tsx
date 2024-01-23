import React from 'react'
import Piechart from './Piechart'

type Props = {}

const StatsCards = (props: Props) => {
  return (
    <div className='px-4 py-4 w-[450px]  bg-white rounded-lg flex flex-col border-2 border-gray-200'>

                    <div className='flex items-center justify-between'>
                        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-semibold'>Shipment Updates</h1>
                        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-normal'>Total orders: 392</h1> 
                    </div>
                    <div className=' mt-5 flex items-center gap-3 overflow-x-scroll scroll-div'>
                        <h1 className='text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]'>Delivered</h1>
                        <h1 className='text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]'>Out for delivery</h1> 
                        <h1 className='text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]'>Intrasit</h1> 
                        <h1 className='text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]'>Pending</h1> 
                        <h1 className='text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]'>Exception</h1>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Piechart />
                    </div>

                    <div className='flex gap-3 mt-3'>
                        <div className='flex items-center gap-2'>
                            <div className='h-[10px] bg-[#5E4200] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] '>Exception</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-[10px] bg-[#956F00] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] '>Intrasit</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-[10px] bg-[#E5A500] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] '>Pending</h1>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-3'>
                        <div className='flex items-center gap-2'>
                            <div className='h-[10px] bg-[#FFC879] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] '>Delivered</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-[10px] bg-[#FFDDB6] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] '>Out for delivery</h1>
                        </div>
                    </div>
                    
                </div>
  )
}

export default StatsCards