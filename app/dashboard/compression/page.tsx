import Dashboard from '@/components/Dashboard'
import DropBox from '@/components/DropBox'
import React from 'react'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'PicWise | Compression',
};

const page = () => {
  return (
    <>
         <Dashboard>
     <DropBox/>
     </Dashboard>
    </>
  )
}

export default page