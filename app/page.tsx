import Image from "next/image";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Home from "./Home/page";
import Footer from "@/components/Footer";


export default function App() {
  return (
    <main>

      <Navbar/>
      <Navbar2/>
      <Home/>
      <Footer/>
     
    </main>
  );
}
