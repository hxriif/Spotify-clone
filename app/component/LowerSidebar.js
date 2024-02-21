import { Plus, Library } from "lucide-react";
import Box1 from "./SidebarBox1";
import Box2 from "./SidebarBox2";

import { Button } from "@/components/ui/button";

export default function LowerSidebar() {
  return (
    <div className=" bg-[#121212] w-[20rem] mt-1 h-[24rem] rounded-lg ">
      <div className=" font-medium text-gray-400 flex items-center  mt-2 p-2  justify-around   ">
        <Library className=" hover:text-green-500" strokeWidth={2}>your library</Library>
        <p className="hover:text-white">Your Library</p>
        <Plus className="hover:text-white "  strokeWidth={2} title="Click to add" />
      </div>
      <div className="flex justify-center mt-2 ">
      <div className="  p-2 font-medium flex items-center justify-around   ">
        <Button className=" bg-[#121212] h-5   rounded-full text-white hover:bg-green-500">playlists</Button>
      </div>
      <div className="p-2 font-medium flex items-center justify-around    ">
        <Button className=" bg-[#121212]  h-5  rounded-full text-white hover:bg-green-500">Artists</Button>
      </div>
      <div className="p-2 font-medium flex items-center justify-around   ">
        <Button className=" bg-[#121212]  h-5  rounded-full text-white hover:bg-green-500">Album</Button>
      </div>
      </div>
      <div className="flex flex-col ">
        {/* <Box1/> */}
      </div>
      <div className='bg-[#121212] flex flex-col rounded-lg'>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
      <a>songs here @@@@</a>
        </div>
    </div>
  );
}
