import React from 'react'
import { Home, Search, Plus, Library } from "lucide-react";







export default function Sidebar() {
  return (
    <div className="bg-[#121212] h-[7rem] rounded-lg p-4 w-[20rem] font-medium text-lg flex flex-col gap-4">
          <button className="flex gap-4 items-center ">
            <Home strokeWidth={3} />
            Home
          </button>
          <button className="flex gap-4 items-center">
            <Search strokeWidth={1} />
            <span className="text-gray-600 hover:text-white ">search</span>
          </button>
   </div>
  )
};



