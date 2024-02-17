import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownToLine,
  Bell,
  UserRound,
} from "lucide-react";
import 'daisyui/dist/full.css'; // Import DaisyUI styles

export default function Navbar() {
  return (
    <div className='bg-black  h-20 w-screen flex justify-around '>
      <div className=' flex gap-2'>
     <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
          <ChevronLeft strokeWidth={2} />
        </button>
        <button className="bg-black rounded-full w-fit p-2 hover:text-green-500">
          <ChevronRight strokeWidth={2} />
        </button>
      </div>
      <div className='flex gap-2 p-5'>
      <Button className="rounded-full">
          Explore Premium
        </Button>
        <Button className="rounded-full bg-black text-white">
          <ArrowDownToLine />
          Install App
        </Button>
        <Bell className='hover:ring-2 hover:ring-blue-500 rounded-md mt-2'/>
      </div>
    </div>
  );
};
