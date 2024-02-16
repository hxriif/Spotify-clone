import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="bg-[#121212] h-screen w-screen p-4 text-xl flex flex-col  gap-4">
      <Navbar />
      <p className="font-extrabold">Good afternoon</p>
    </main>
  );
}




