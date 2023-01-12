import AppLogo from '@/components/AppLogo'
import Link from 'next/link'
import React from 'react'

export default function AuthLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='flex justify-center items-center min-h-screen bg-black text-zinc-100'>
        <div className='w-full max-w-xl  p-5 rounded-lg'>
          <Link href={'/'}>
            <AppLogo/>
          </Link>
            <div className='pt-5'>
            {children}
            </div>
        </div>

      

    </div>
  )
}
