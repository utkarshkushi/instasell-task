'use client'
import { BadgePercent, ChevronDown, Coins, Contact, Gift, HelpCircle, Search, Star, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [pagesOpen, setPagesOpen] = useState(false);

    const [isAccountTabOpen, setIsAccountTabOpen] = useState(false);
    const [isSettingsTabOpen, setIsSettingsTabOpen] = useState(false);

    return (
        <div className=' bg-white flex px-16 pt-5 pb-4 items-center justify-between border-b-2 border-[#8A8A8A]'>

            <div className='flex gap-5'>
                <a className='group text-[#4A4A4A] transition-all cursor-pointer duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Home
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all cursor-pointer duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Orders
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all cursor-pointer duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Integration
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all cursor-pointer duration-300 ease-in-out' href='#'>
                    <span onClick={() => setPagesOpen((prev) => !prev)} className='bg-left-bottom pb-2 font-inter flex items-center gap-2 font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Tracking Page <ChevronDown size={20} color='#4A4A4A' />
                        {pagesOpen && (
                            <div className='w-40 px-5 py-2 absolute top-[60px] left-[260px] bg-white z-[100]'>
                                <div className='flex flex-col gap-5'>
                                    <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> Page-1</p>
                                    <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> Page-2</p>
                                    <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> page-3</p>
                                    <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> Page-4</p>
                                </div>
                            </div>
                        )}
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all cursor-pointer duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Partner with Us
                    </span>
                </a>
            </div>

            <div className='flex justify-between items-center gap-10'>


                <div className='flex border-b-2 border-[#4A4A4A] gap-2 px-1 py-2'>
                    <Search className='w-5 h-5' color='#4A4A4A' />
                    <input style={{ background: 'none' }} type="text" className='font-inter w-20 font-normal focus:outline-none bg-none flex-1 text-sm navbar-input' placeholder='Search' />
                </div>

                <div className='flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src="/icons/person.png" width={20} height={20} alt='account-img' />
                    <h1 onClick={() => setIsAccountTabOpen((prev) => !prev)} className='text-md text-[#616161] font-inter font-semibold'>Account</h1>
                    {isAccountTabOpen && (
                        <div className='w-64 right-0 top-0 absolute bg-white py-5 pl-3'>
                            <div> <X className='cursor-pointer' onClick={() => setIsAccountTabOpen((prev) => !prev)} color='gray' /> </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='cursor-pointer flex flex-col justify-center items-center'>

                                    <h1 className='text-sm text-[#4A4A4A] font-semibold font-inter'>John Mathew</h1>

                                </div>
                                <div className='bg-gray-200 w-[80%] h-[1px] my-5'></div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Coins /> Billing</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Gift /> Apply Coupons</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Contact /> Refer Your Friend</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <BadgePercent /> Apply coupon code</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <HelpCircle /> Help and Support</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Star /> Give us Feedback</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src="/icons/settings.png" width={20} height={20} alt='account-img' />
                    <h1 onClick={() => setIsSettingsTabOpen((prev) => !prev)} className='text-md text-[#616161] font-inter font-semibold'>Settings</h1>
                    {isSettingsTabOpen && (
                        <div className='w-64 right-0 top-0 absolute bg-white py-5 pl-3'>
                            <div> <X className='cursor-pointer' onClick={() => setIsSettingsTabOpen((prev) => !prev)} color='gray' /> </div>
                            <div className='flex flex-col mt-5 gap-5'>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Coins /> Billing</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Gift /> Apply Coupons</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Contact /> Refer Your Friend</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <BadgePercent /> Apply coupon code</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <HelpCircle /> Help and Support</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#8051FF] hover:border-l-4 hover:border-[#8051FF] pl-2 flex gap-2'> <Star /> Give us Feedback</p>
                            </div>
                        </div>
                    )}
                </div>


            </div>


        </div>
    )
}

export default Navbar