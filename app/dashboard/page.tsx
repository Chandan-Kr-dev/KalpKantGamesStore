"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function dashboard() {
  const [games, setgames] = useState<Game[]>([]);
  // let games:Game[]

  const fetchgames = async () => {
    try {
      const response = await axios.get("api/getgames");
      console.log(response.data);
      setgames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [IsMobile, setIsMobile] = useState<boolean>(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or less
  };

  useEffect(() => {
    fetchgames();
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <main className="text-zinc-50">
      <Navbar />
      <section className="md:mx-44 mx-10 my-5">
        <div className="dashboard bg-gray-900 shadow-md min-h-[60vh] p-4">
          <h2 className="text-center text-2xl font-semibold">Dashboard</h2>

          <div className="totalapps flex justify-between items-center px-20 py-4 border-b-[1px] ">
            <div className="text-center">
              <h2 className="text-3xl ">4 </h2>
              <span className="text-xs text-center">Games</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl ">46 </h2>
              <span className="text-xs text-center">Downloads</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl ">200 </h2>
              <span className="text-xs text-center">Views</span>
            </div>
          </div>

          <div className="left">
            <div className="p-4">
              <h1>Projects</h1>
              <div className="projects space-y-5">
                {games.map((game, idx) => (
                  <div
                    key={idx}
                    className="container  space-x-5 border-[1px]  p-1 border-gray-700"
                  >
                    <div className="flex justify-between items-center">

                    
                    <div className="flex justify-start items-center my-2  space-x-4">
                    <div className="imagecontainer ">
                      <img
                        className="h-32 w-32 bg-cover object-contain rounded"
                        src={game.coverimg}
                        alt=""
                      />
                    </div>
                    <div>
                    <h2 className="text-xl font-bold uppercase">{game.title}</h2>
                    <p className="text-base text-gray-500">{game.tagline}</p>
                    </div>
                    </div>
                    <h2 className=" mx-5 text-gray-400">Downloads:30</h2>
                    </div>
                    <div className="space-y-3">
                      
                      <div className="button flex justify-between items-center">
                        <div className="buttons space-x-2">
                          <button className="bg-gray-800 px-2 rounded border-[1px]">
                            Edit
                          </button>
                          <button className="bg-gray-800 px-2 rounded border-[1px]">
                            View
                          </button>
                          <button className="bg-red-600 px-2 rounded border-[1px]">
                            Delete
                          </button>
                        </div>
                        <h2 className="bg-green-700 px-1 mx-10 rounded text-gray-200">
                          Published
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {IsMobile ? (
              <h2 className="text-xs">
                Adding Game is not Allowed in Mobile devices
              </h2>
            ) : (
              <div className="uplaodnew p-4">
                <Link
                  href="/addnewgame"
                  className="bg-red-600 px-2 rounded py-2"
                >
                  Create new Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
