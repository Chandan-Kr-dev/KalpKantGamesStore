"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  userid: string;
  developer: string;
  title: string;
  tagline: string;
  genre: string;
  ReleasedStatus: string;
  Price: string;
  gamelink: string;
  description: string;
  storelink: string;
  coverimg: string;
  trailer: string;
  screenshot1: string;
  screenshot2: string;
  screenshot3: string;
}

export default function Viewgame() {
  const params = useParams();
  const { id } = params; // Unwrap the id from params
  
  const [game, setGame] = useState<Game[]>([]);
//   const [error, setError] = useState<string | null>(null);

  const fetchgame=async()=>{
    const response=await axios.get(`/api/viewgame/${id}`)
    
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
          <div className=" ">
            <div >
              <div className="imgcontainer flex justify-center">

                <img className="h-72 w-72 object-contain rounded-md" src={game.coverimg} alt="" />
              </div>
                <h1 className="text-center text-3xl font-bold uppercase my-3">{game.title}</h1>
                <p className="text-center text-xl text-gray-400">{game.tagline}</p>
                 <div className="download flex justify-center items-center my-5">
                  <a href={game.gamelink} className="bg-blue-400 text-black px-2 py-1 rounded font-semibold">Download</a>
                 </div>
                 {/* {game.trailer &&(

                 <div className="trailer mx-32">
                  <h2 className="text-xl font-medium">Trailer</h2>
                  
                  <video className="h-52 w-52 object-contain" src={game.trailer}></video>
                 </div>
                 )} */}
                 <div className="description  md:mx-32">
                  <h2 className="text-xl font-medium">Description</h2>
                  <p className="text-gray-400">{game.description}</p>
                 </div>
                 <div className="screenshots my-5 md:mx-32">
                  <h2 className="text-xl font-medium">ScreenShots</h2>
                  <div className="screenshot flex justify-evenly items-center flex-wrap space-y-3">
                    <img className="h-52 w-52 object-contain" src={game.screenshot1} alt="" />
                    <img className="h-52 w-52 object-contain" src={game.screenshot2} alt="" />
                    <img className="h-52 w-52 object-contain" src={game.screenshot2} alt="" />
                  </div>
                 </div>

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
