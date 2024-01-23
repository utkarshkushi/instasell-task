'use client'
import { AppProvider, Button } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import Image from 'next/image';

import React from 'react'

type Props = {}

const IntegrationCard = (props: Props) => {
  return (
    <div className=' w-[450px] flex flex-col gap-3'>

        <div className='bg-white flex flex-col gap-3 rounded-lg px-4 py-4 border-2 border-gray-200'>
        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-semibold'>Exclusive Onboarding Support for High-Volume Brands</h1>
            <h1 className='text-[13px] text-[#4A4A4A] font-inter font-normal pr-8 mb-2'>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</h1>
            <AppProvider i18n={enTranslations}>
                    <div className='flex gap-1.5'>
                    <Button size="large" variant="primary">Schedule A Call</Button>
                    </div>
                </AppProvider>
        </div>

        <div className='bg-white flex flex-col gap-3 rounded-lg px-4 py-4 border-2 border-gray-200'>
        <h1 className='text-[14px] text-[#4A4A4A] font-inter font-semibold'>Explore Our Integrated Ecosystem</h1>
            <h1 className='text-[13px] text-[#4A4A4A] font-inter font-normal pr-8 mb-2'>Discover a variety of popular integrations tailored for your convenience.</h1>
            <div className='flex gap-5 mb-3'>
                <Image className='hover:scale-90 cursor-pointer transition-all' src="/icons/image 3.png" height={30} width={30} alt='paypal' quality={100} />
                <Image className='hover:scale-90 cursor-pointer transition-all' src="/icons/image 4.png" height={30} width={30} alt='paypal' quality={100} />
                <Image className='hover:scale-90 cursor-pointer transition-all' src="/icons/image 11.png" height={30} width={30} alt='paypal' quality={100} />
                <Image className='hover:scale-90 cursor-pointer transition-all' src="/icons/image 9.png" height={30} width={30} alt='paypal' quality={100} />
                <Image className='hover:scale-90 cursor-pointer transition-all' src="/icons/image 10.png" height={30} width={30} alt='paypal' quality={100} />
            </div>
            <AppProvider i18n={enTranslations}>
                    <div className='flex gap-1.5'>
                    <Button size="large" variant="primary">Explore Integration</Button>
                    </div>
                </AppProvider>
        </div>

    </div>
  )
}

export default IntegrationCard