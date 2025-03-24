"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

export default function Home() {
  const testimonials = [
    {
      quote: "Phenomenal work, Chandan. Keep coding for the sheer passion of it and keep growing buddy. You got a long road ahead.",
      name: "Rudranil Chaudhary",
      linkedin: "http://linkedin.com/rudranilchowdhury28",
    },
    
  ];

  const router = useRouter();
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
  const [text, setText] = useState("");

  const phrases = [
    " Play, Create, Conquer!",
    " Your Gateway to Infinite Adventures!",
  ];
  const typingSpeed = 30;
  const delayBetweenPhrases = 2000;

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, delayBetweenPhrases);
        } else {
          setTimeout(type, typingSpeed);
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(type, typingSpeed);
      }
    };

    type();
    fetchgames();
  }, []);

  const sendid = (id: number) => {
    console.log(id);
    router.push(`/game/${id}`);
  };

  return (
    <main className="md:mx-44 mx-10 my-5">
      <section className="flex justify-between flex-col md:flex-row items-center text-white">
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl font-bold">
            KalpKant Games Store
          </h1>
          <h2 className="min-w-[300px] w-full md:text-2xl text-base font-bold tracking-wider overflow-hidden whitespace-wrap h-32">
            {text}
          </h2>
        </div>
        <div className="imagecontaner  ">
          <Image
            src="https://i.postimg.cc/tTQ1fhPs/logo-new.png"
            alt="Logo"
            width={500}
            height={100}
          />
        </div>
      </section>

      <section className="topfeatured text-white my-20 ">
        <div>
          <h1 className="font-semibold text-xl my-3 "> My games</h1>
          <div className="container ">
            <div className="flex flex-wrap flex-col md:flex-row  justify-evenly items-center">
              {games.map((game, idx) => (
                <div
                  key={idx}
                  hidden={idx > 3}
                  className="game-card   rounded-xl p-2 md:w-[25vw] w-[80vw] flex flex-col justify-center items-center"
                >
                  <button
                    onClick={() => sendid(game.id)}
                    className="image-container mx-auto rounded-xl hover:-translate-y-2 border-2 border-gray-400 p-2 bg-gray-600  "
                  >
                    <Image
                      className="rounded-xl"
                      src={game.coverimg}
                      alt={game.title}
                      height={200}
                      width={200}
                    />
                  </button>
                  <div className="game-card-content flex justify-between my-2 ">
                    <div>
                      <h2 className="text-lg font-medium">{game.title}</h2>
                      <p className="text-sm font-thin">{game.tagline}</p>
                    </div>
                  </div>
                  <a
                    className="my-3 rounded px-2 py-1 bg-slate-500 hover:bg-slate-400"
                    href={game.gamelink}
                    target="_blank"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="freegames text-white  my-20">
        <h1 className="font-semibold text-xl my-3">Top Releases </h1>
        <div className="container flex flex-col md:flex-row justify-between items-center bg-slate-600 p-5 rounded-xl">
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img
              className="rounded-xl"
              src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ"
              alt=""
            />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">
              Game Slogan Lorem ipsum dolor sit.
            </p>
          </button>
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img
              className="rounded-xl"
              src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ"
              alt=""
            />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">
              Game Slogan Lorem ipsum dolor sit.
            </p>
          </button>
        </div>
      </section>
      <section className="topfeatured text-white my-20 ">
        <div>
          <h1 className="font-semibold text-xl my-3">Top Paid Games </h1>
          <div className="container">
            <div className="flex flex-wrap flex-col md:flex-row  justify-between items-center">
              {featured.map((game, idx) => (
                <div
                  key={idx}
                  hidden={idx > 2}
                  className="game-card  rounded-xl p-2 md:w-[25vw]"
                >
                  <img className="rounded-xl" src={game.img} alt="" />
                  <div className="game-card-content flex justify-between my-2 ">
                    <div>
                      <h2 className="text-lg font-medium">{game.gameName}</h2>
                      <p className="text-sm font-thin">{game.slogan}</p>
                    </div>
                    <p>{game.price}</p>
                  </div>
                  <button className="my-3 rounded px-2 py-1  bg-slate-500 hover:bg-slate-400">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="freegames text-white  my-20">
        <h1 className="font-semibold text-xl my-3">Holiday Offers</h1>
        <div className="container flex flex-col md:flex-row justify-between items-center bg-slate-600 p-5 rounded-xl">
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img
              className="rounded-xl"
              src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ"
              alt=""
            />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">
              Game Slogan Lorem ipsum dolor sit.
            </p>
          </button>
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img
              className="rounded-xl"
              src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ"
              alt=""
            />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">
              Game Slogan Lorem ipsum dolor sit.
            </p>
          </button>
        </div>
      </section> */}
      {testimonials.length>3?(<div className=" rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-white text-2xl font-semibold">Testimonials</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>):(null)}
      
    </main>
  );
}
