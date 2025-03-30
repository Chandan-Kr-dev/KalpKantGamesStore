"use client"
import { useState } from "react";

import Home from "./Home/page";

import HomeLoader from "@/components/Homeloader";



export default function App() {
  const [Loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 6100);

  if (Loading) return <HomeLoader/>
  
  return (
    <main>

      
      <Home/>
      
     
    </main>
  );
}
