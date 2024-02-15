import { Button } from '@/components/ui/button';
import {
    ChevronLeft,
    ChevronRight,
    ArrowDownToLine,
    Bell,
    UserRound,
  } from "lucide-react";


export default function Navbar(){
    return (
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
            <ChevronLeft strokeWidth={2} />
          </button>
          <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
            <ChevronRight strokeWidth={2} />
          </button>
        </div>
        <div className="flex gap-2 ">
          <Button className="rounded-full">
            Explore Premium
          </Button>
          <Button className="rounded-full bg-black text-white  ">
            <ArrowDownToLine />
            Install App
          </Button>
          <div className="p-2">
            <Bell className='hover:ring-2 hover:ring-blue-500 rounded-md'/>
          </div>
          <div className="bg-black rounded-full w-fit p-2">
            <UserRound />
          </div>
        </div>
      </div>
    );
  };