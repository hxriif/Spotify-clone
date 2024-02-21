import { Button } from '@/components/ui/button';
import { Plus, Library } from "lucide-react";


export default function Box1(){
    return (
        <div className=" p-2  ">
        <div className=" font-medium text-gray-400 flex items-center justify-between    ">
          <Library className=" hover:text-green-500" strokeWidth={2} />
          <p className="hover:text-white">Your Library</p>
          <Plus className="hover:text-white" strokeWidth={2} title="Click to add" />
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
      </div>
    )
  }