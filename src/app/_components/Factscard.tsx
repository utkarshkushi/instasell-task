'use client'
import React from 'react'
import { AppProvider, Button } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
type Props = {}

const FactsCard = (props: Props) => {
  return (
    <div className='px-3 py-3  w-[18%] bg-[#956F00] rounded-lg flex flex-col justify-between'>

      <div className='flex items-center justify-between'>
        <h1 className='text-[14px] relative bottom-5 text-[#FFFFFF] font-inter font-semibold'>Star Facts about your orders!!!</h1>
        <svg className='relative left-3 top-40' xmlns="http://www.w3.org/2000/svg" width="71" height="78" viewBox="0 0 71 78" fill="none">
          <g opacity="0.2" filter="url(#filter0_f_2001_487)">
            <circle cx="39" cy="39" r="35" fill="#FFEBD5" />
          </g>
          <defs>
            <filter id="filter0_f_2001_487" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2001_487" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='flex flex-col gap-3 pr-10 relative bottom-10'>
        <h1 className='text-[13px] font-inter font-normal text-white'>There are 8 shipments that have been in out for delivery for more than 3 days.
        </h1>
          <h1 className='text-[13px] font-inter  font-normal text-white'>
          There are 5 shipments in exception right now
          </h1>
          <h1 className='text-[13px] font-inter  font-normal text-white'>
          The maximum chargebacks are from Miami.
          </h1>
      </div>
      <div className='relative bottom-3'>
        <AppProvider i18n={enTranslations}>
          <Button>
            Check Orders Page
          </Button>
        </AppProvider>

      </div>
    </div>
  )
}

export default FactsCard