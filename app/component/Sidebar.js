import React from 'react'
import UpperSidebar from './UpperSidebar';
import LowerSidebar from './LowerSidebar';





export default function Sidebar() {
  return (
    <div className="w-[23rem] h-full gap-2 flex flex-col  text-white">
        <UpperSidebar/>
        <LowerSidebar/>
        
        </div>
  )
};



