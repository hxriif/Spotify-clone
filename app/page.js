import Navbar from "./component/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Sidebar from "./component/Sidebar";
import LowerSidebar from "./component/LowerSidebar";
// import Musicplayer from "./component/Musicplayer";
import { Play,SkipBack,SkipForward,Shuffle,Repeat } from 'lucide-react'
import { Slider } from '@/components/ui/slider'

export default function Home() {
  return (
    <main className="">
      <div className="flex gap-2  p-2 ">
       <div>
        <Sidebar/>
        <div>
          <LowerSidebar/>
        </div>
       </div>
       <div>
        <Navbar/>
       </div>
      </div>
      <div className='  flex justify-evenly w-[59rem]'>
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
    </main>
  );
}
