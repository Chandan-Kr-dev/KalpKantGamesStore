"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [openmenu, setopenmenu] = useState(false)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or less
      };

      useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup
      }, []);


  return (
    <nav className='py-5 px-8 border-b-[1px]'>
        <ul className='flex flex-col md:flex-row justify-between items-center'>
            <li className='flex justify-between items-center space-x-2 text-white'>
                <button onClick={()=>setopenmenu(!openmenu)}>
                <img className='h-10 w-10  bg-cover rounded-full' src="https://images.unsplash.com/photo-1732287931034-c4cc1b06de6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
                </button>
                <h4>X</h4>
                <h3 className='md:text-xl text-base font-bold text-zinc-300'>KalpkantGames</h3>
            </li>
            <li>
                <h2 className='md:text-4xl text-2xl font-bold uppercase text-white'>Store</h2>
            </li>
            {isMobile?(
                <li hidden={!openmenu} className='space-x-5'>
                <Link href="/login" className=' px-2 py-1 rounded-xl bg-gray-600 font-bold text-white'>Login</Link>
                <Link href="/Register" className=' px-2 py-1 rounded-xl bg-blue-500   text-gray-950'>Register</Link>
            </li>):(<li className='space-x-5'>
                <Link href="/login" className=' px-2 py-1 rounded-xl bg-gray-600 font-bold text-white'>Login</Link>
                <Link href="/Register" className=' px-2 py-1 rounded-xl bg-blue-500   text-gray-950'>Register</Link>
            </li>)}
            
            
        
        </ul>
    </nav>
  )
}

