"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Viewgame() {
  const params = useParams();
  const { id } = params; // Unwrap the id from params
  console.log("id of the game is ",id)
  const [game, setGame] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

  const fetchgame=async()=>{
    const response=await axios.get(`/api/viewgame/${id}`)
    console.log(response)
    setGame(response.data.game);
  }

  useEffect(()=>{
    fetchgame()
  },[id])

  return(
    <main>
        <Navbar/>
        <section className="text-white md:mx-44 mx-10 my-5">

        

        {game ? (
          <div className="flex justify-center items-center">
            <div >
                <img className="h-72 w-72 object-contain rounded-md" src={game.coverimg} alt="" />
                <h1 className="text-center text-3xl font-bold uppercase my-3">{game.title}</h1>
                <p className="text-center text-xl text-gray-400">{game.tagline}</p>

            </div>
          </div>
        ):(
            <div>
                <h2>Game is Loading</h2>
            </div>
        )}

</section>
    </main>
  )
}
