import Navbar from "./component/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Sidebar from "./component/Sidebar";
import LowerSidebar from "./component/LowerSidebar";
import Box1 from "./component/SidebarBox1";
export default function Home() {
  return (
    <main className="flex ">
      <div className="bg-white h-screen   ">
        <div className="p-2 ">
          <Sidebar  />
        </div>
        <div className="p-2">
          <LowerSidebar/>
        </div>
      </div>
    </main>
  );
}
