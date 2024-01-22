import { ChevronDown } from 'lucide-react'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex px-10 py-3'>

            <div className='flex gap-5'>
                <a className='group text-[#4A4A4A] transition-all duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Home
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Orders
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Integration
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter flex font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Tracking Page <ChevronDown  color='#4A4A4A' />
                    </span>
                </a>
                <a className='group text-[#4A4A4A] transition-all duration-300 ease-in-out' href='#'>
                    <span className='bg-left-bottom pb-2 font-inter font-semibold bg-gradient-to-r from-[#8051FF] to-[#8051FF] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:50%_3px] transition-all duration-500 ease-out'>
                        Partner with Us
                    </span>
                </a>
            </div>

            <div>
                
            </div>


        </div>
    )
}

export default Navbar