"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Home from "./Home/page";
import Footer from "@/components/Footer";
import HomeLoader from "@/components/Homeloader";



export default function App() {
  const [Loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 6100);

  if (Loading) return <HomeLoader/>
  
  return (
    <main>

      <Navbar/>
      <Navbar2/>
      <Home/>
      <Footer/>
     
    </main>
  );
}
