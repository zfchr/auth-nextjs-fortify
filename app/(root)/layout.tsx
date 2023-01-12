import React from 'react'
import Navbar from '@/components/Navbar'

export default function HomeLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='min-h-screen bg-black text-white'>
       <Navbar/>
        <div className='py-10'>
        {children}
        </div>
    </div>
  )
}
