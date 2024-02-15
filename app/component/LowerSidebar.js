import { Plus, Library } from "lucide-react";
import Box1 from "./SidebarBox1";
import Box2 from "./SidebarBox2";

export default function LowerSidebar() {
  return (
    <div className="bg-[#121212] p-2">
      <div className="p-6 font-medium text-gray-400 flex items-center justify-between">
        <Library className=" hover:text-green-500" strokeWidth={2} />
        <p className="">Your Library</p>
        <Plus className="hover:text-white" strokeWidth={2} title="Click to add" />
      </div>
      <div className="flex justify-around">
      <div className="p-2 font-medium flex items-center justify-around text-gray-500 bg-gray-600rounded-full hover:text-white">
        <button>playlists</button>
      </div>
      <div className="p-2 font-medium flex items-center justify-around text-gray-500 bg-gray-600rounded-full  hover:text-white">
        <button>Artists</button>
      </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* <Box1/> */}
        <Box2/>
      </div>
    </div>
  );
}
