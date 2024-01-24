'use client'
import React, { useState } from 'react'
import Piechart from './Piechart'

type Props = {}
const data = [60,35,80,114,40]
const StatsCards = (props: Props) => {
    const [shipment, setShipment] = useState(5);
  return (
    <div className='px-4 py-4 w-[450px]  bg-white rounded-lg flex flex-col border-2 border-gray-200'>

                    <div className='flex items-center justify-between'>
                        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-semibold'>Shipment Updates</h1>
                        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-normal'>Total orders: 392</h1> 
                    </div>
                    <div className=' mt-5 flex items-center gap-3 overflow-x-scroll scroll-div'>
                        <h1 onClick={() => setShipment(5)} className={`text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold ${shipment == 5 ? (`bg-[#FFF1E3]`) : (`bg-[#F1F1F1]`)} `}>Delivered</h1>
                        <h1 onClick={() => setShipment(4)} className={`text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold ${shipment == 4 ? (`bg-[#FFF1E3]`) : (`bg-[#F1F1F1]`)} `}>Out for delivery</h1> 
                        <h1 onClick={() => setShipment(2)} className={`text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold ${shipment == 2 ? (`bg-[#FFF1E3]`) : (`bg-[#F1F1F1]`)} `}>Intrasit</h1> 
                        <h1 onClick={() => setShipment(1)} className={`text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold ${shipment == 1 ? (`bg-[#FFF1E3]`) : (`bg-[#F1F1F1]`)} `}>Pending</h1> 
                        <h1 onClick={() => setShipment(3)} className={`text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold ${shipment == 3 ? (`bg-[#FFF1E3]`) : (`bg-[#F1F1F1]`)} `}>Exception</h1>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                        <Piechart dataItems={data} colors={['rgb(229,165,0)','rgb(149,111,0)','rgb(94,66,0)', 'rgb(255,221,182)','rgb(255,200,121)']} />
                    </div>

                    <div className='flex gap-3 mt-6'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-[10px] bg-[#5E4200] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] flex justify-center items-center gap-1 '>Exception <span className={`text-[10px] border-2 rounded-[50%] px-1 border-[#5E4200] font-inter font-normal flex justify-center items-center ${shipment == 3 ? (`flex`) : ('hidden')}`}>{data[2]}</span></h1>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-[10px] bg-[#956F00] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] flex justify-center items-center gap-1 '>Intrasit <span className={`text-[10px] border-2 rounded-[50%] px-1 border-[#956F00] font-inter font-normal flex justify-center items-center ${shipment == 2 ? (`flex`) : ('hidden')}`}>{data[1]}</span></h1>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-[10px] bg-[#E5A500] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] flex justify-center items-center gap-1 '>Pending <span className={`text-[10px] border-2 rounded-[50%] px-1 border-[#E5A500] font-inter font-normal flex justify-center items-center ${shipment == 1 ? (`flex`) : ('hidden')}`}>{data[0]}</span></h1>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-[10px] bg-[#FFC879] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] flex items-center justify-center gap-1'>Delivered <span className={`text-[10px] border-2 rounded-[50%] px-1 border-[#FFC879] font-inter font-normal flex justify-center items-center ${shipment == 5 ? (`flex`) : ('hidden')}`}>{data[4]}</span></h1>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-[10px] bg-[#FFDDB6] w-[20px] rounded-lg'></div>
                            <h1 className='text-[#4A4A4A] font-inter font-normal text-[14px] flex items-center justify-center gap-1 '>Out for delivery <span className={`text-[10px] border-2 rounded-[50%] px-1 border-[#FFDDB6] font-inter font-normal flex justify-center items-center ${shipment == 4 ? (`flex`) : ('hidden')}`}>{data[3]}</span></h1>
                        </div>
                    </div>
                    
                </div>
  )
}

export default StatsCards