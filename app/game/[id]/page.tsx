"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Game {
  id: string;
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

  const [game, setGame] = useState<Game | null>(null);
  //   const [error, setError] = useState<string | null>(null);

  const fetchgame = async () => {
    const response = await axios.get(`/api/viewgame/${id}`);
    console.log(response.data.game);
    setGame(response.data.game);
  };

  useEffect(() => {
    fetchgame();
  }, [id]);

  const [Trailerurl, setTrailerurl] = useState("");
  useEffect(() => {
    if (game?.trailer) {
      let url = game.trailer;

      if (url.includes("youtube.com/watch")) {
        const videoId = new URL(url).searchParams.get("v");
        if (videoId)
          url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
      } else if (url.includes("youtube.com/embed")) {
        url += "?autoplay=1&mute=0";
      }

      setTrailerurl(url);
    }
  }, [game?.trailer]);

  return (
    <main>
      <Navbar />
      <section className="text-white md:mx-44 mx-10 my-5">
        {game ? (
          <div className=" ">
            <div>
              <div className="imgcontainer flex justify-center">
                <Image
                  src={game.coverimg}
                  alt={game.title}
                  height={200}
                  width={300}
                />
              </div>
              <h1 className="text-center text-3xl font-bold uppercase my-3">
                {game.title}
              </h1>
              <p className="text-center text-xl text-gray-400">
                {game.tagline}
              </p>
              <div className="download flex justify-center items-center my-5">
                <a
                  href={game.gamelink}
                  className="bg-blue-400 text-black px-2 py-1 rounded font-semibold"
                >
                  Download
                </a>
              </div>
              <div className="border-2 rounded-xl  border-gray-500 bg-gray-600 md:h-[50vh] h-[20vh] md:w-[50vw] w-full mx-auto md:my-5 ">
                {Trailerurl && (
                  <iframe
                    src={Trailerurl}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="md:h-[50vh] h-[20vh] md:w-[50vw] w-full rounded-xl p-2"
                  ></iframe>
                )}
              </div>

              <div className="description  md:mx-32 my-5">
                <h2 className="text-xl font-medium">Description</h2>
                <p className="text-gray-400">{game.description}</p>
              </div>
              <div className="screenshots my-5 md:mx-32">
                <h2 className="text-xl font-medium">ScreenShots</h2>
                <div className="screenshot flex justify-evenly items-center flex-wrap space-y-3">
                  <img
                    className="h-52 w-52 object-contain"
                    src={game.screenshot1}
                    alt=""
                  />
                  <img
                    className="h-52 w-52 object-contain"
                    src={game.screenshot2}
                    alt=""
                  />
                  <img
                    className="h-52 w-52 object-contain"
                    src={game.screenshot2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>Game is Loading</h2>
          </div>
        )}
      </section>
    </main>
  );
}
