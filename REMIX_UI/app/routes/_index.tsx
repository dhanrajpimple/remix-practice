import Footer from "~/Components/Footer";
import HeroSection from "~/Components/HeroSection";
import Navbar from "~/Components/Navbar";



export default function Index() {
  return (
 <div className="w-screen h-screen  flex items-center flex-col">
  <Navbar/>
  <HeroSection/>
  <Footer/>
 </div>
  );
}
