import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownToLine,
  Bell,
  UserRound,
  Sidebar,
} from "lucide-react";
import "daisyui/dist/full.css"; // Import DaisyUI styles
import LowerSidebar from "./LowerSidebar";


export default function Navbar() {
  return (
   <div className="bg-[#121212] rounded-lg  h-[31.4rem] w-[59rem]  ">
    <div className="flex justify-between ">
      <div className="flex p-5 gap-3">
        <ChevronLeft/>
        <ChevronRight/>
      </div>
      <div className="flex p-3 gap-4 ">
        <Button className="rounded-full text-white bg-black">Explore premium</Button>
        <Button className="rounded-full text-white bg-black"><ArrowDownToLine/>instal now </Button>
        <UserRound className="mt-2"/>
      </div>
    </div>

   </div>
  );
}
