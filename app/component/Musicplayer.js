import React from 'react'
import { Play,SkipBack,SkipForward,Shuffle,Repeat } from 'lucide-react'
import { Slider } from '@/components/ui/slider'

export default function Musicplayer() {
  return (
    <div className='bg-black py-4 flex justify-evenly'>
       <div className='flex flex-col gap-2 w-96'>
          <div className='flex  items-center justify-between'>
              <Shuffle/>
              <SkipBack fill='white'/>
              <div className='p-1 pl-[8px] flex justify-center items-center  w-fit rounded-full'>
              <Play fill='black' size='40px'/>
              </div>
              <SkipForward fill='white'/>
              <Repeat/>
          </div>
          <div className='flex gap-2 '>
               <p>0:01</p>
               <Slider />
               <p>3:25</p>
          </div>
       </div>
    </div>
  )
}
