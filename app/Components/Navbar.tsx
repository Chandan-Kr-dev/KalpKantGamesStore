import React from 'react'

export default function Navbar() {
  return (
    <nav className='py-5 px-8 bg-gray-950'>
        <ul className='flex justify-between items-center'>
            <li className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10  bg-cover rounded-full' src="https://images.unsplash.com/photo-1732287931034-c4cc1b06de6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
                <h4>X</h4>
                <h3 className='text-xl font-bold text-zinc-300'>KalpkantGames</h3>
            </li>
            <li>
                <h2 className='text-4xl font-bold uppercase'>Store</h2>
            </li>
            <li className='space-x-5'>
                <button className=' px-2 py-1 rounded-md bg-gray-600  font-bold'>Login</button>
                <button className=' px-2 py-1 rounded-md bg-blue-500   text-gray-950'>Register</button>
            </li>
        
        </ul>
    </nav>
  )
}

