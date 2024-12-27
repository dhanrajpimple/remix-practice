import type { MetaFunction } from "@remix-run/node";
import Herosection from "~/Components/Herosection";
import Navbar from "~/Components/Navbar";

export default function Index() {
  return (
    <div className="h-screen w-screen bg-[#0F1123]">
    <Navbar/>
    <Herosection/>
    </div>
  );
}


