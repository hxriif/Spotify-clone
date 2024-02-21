import Navbar from "./component/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Sidebar from "./component/Sidebar";
import LowerSidebar from "./component/LowerSidebar";
import Musicplayer from "./component/Musicplayer";

export default function Home() {
  return (
    <main>
      <div className=" h-screen w-screen bg-black   ">
        <div className=" h-[31rem] w-screen flex gap-1  ">
          <div className="w-[20.5rem] bg-black p-1  ">
           <div className="">
           <Sidebar/>
           <LowerSidebar/>
           </div> 
          </div>
          <div className="bg-black  h-[32rem]  ">
            <Navbar/>
          </div>
        </div>
        <div className="p-1">
          <Musicplayer/>
        </div>
      </div>
    </main>
  );
}
