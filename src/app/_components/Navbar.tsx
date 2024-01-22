'use client'
import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [pagesOpen, setPagesOpen] = useState(false);

    return (
        <div className='flex px-10 pt-5 pb-4 items-center justify-between border-b-2 border-[#8A8A8A]'>

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
                        <div className='w-56 px-5 py-5'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> Page-1</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> Page-2</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> Refer Your Friend</p>
                                <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> Apply coupon code</p>
                            </div>
                        </div>
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
                    <input type="text" className='font-inter w-20 font-normal focus:outline-none flex-1 text-sm' placeholder='Search' />
                </div>

                <div className='flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src="/icons/person.png" width={20} height={20} alt='account-img' />
                    <h1 className='text-md text-[#616161] font-inter font-semibold'>Account</h1>
                </div>

                <div className='flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src="/icons/settings.png" width={20} height={20} alt='account-img' />
                    <h1 className='text-md text-[#616161] font-inter font-semibold'>Settings</h1>
                </div>


            </div>


        </div>
    )
}

export default Navbar