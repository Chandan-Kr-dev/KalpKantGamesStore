"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Game{
  id:number,
  userid:string,
        developer:string,
        title:string,
        tagline:string,
        genre:string,
        ReleasedStatus:string,
        Price:string,
        gamelink:string,
        description:string,
        storelink:string,
        coverimg:string,
        trailer :string,
        screenshot1 :string,
        screenshot2 :string,
        screenshot3 :string,

}

export default function Home() {

  const [games, setgames] = useState<Game[]>([]);
  // let games:Game[]
  
  const [UploadedUrl, setUploadedUrl] = useState("")
  const [gamename, setgamename] = useState("")
  const fetchgames=async()=>{
    try {
      const response=await axios.get('api/getgames');
      console.log(response.data);
      setgames(response.data);
      
      
    } catch (error) {
      console.log(error)
      
    }
  }
  const [text, setText] = useState("");



  const phrases = [
    " Designed for Developers, Loved by Gamers!",
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

  const featured=[
    {
      img:"https://imgs.search.brave.com/-Whp7vN2xr3c2keiuSmsMrpUvavi2HH6aS_Na_NDTBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLWRl/bHRhLWZvcmNlLWNh/cm91c2VsLWRlc2t0/b3AtMTkyMHgxMDgw/LTEyZGMyOTcyMmFk/NS5qcGc_cmVzaXpl/PTEmdz0xMjgwJmg9/NzIwJnF1YWxpdHk9/bWVkaXVt",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/-Whp7vN2xr3c2keiuSmsMrpUvavi2HH6aS_Na_NDTBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLWRl/bHRhLWZvcmNlLWNh/cm91c2VsLWRlc2t0/b3AtMTkyMHgxMDgw/LTEyZGMyOTcyMmFk/NS5qcGc_cmVzaXpl/PTEmdz0xMjgwJmg9/NzIwJnF1YWxpdHk9/bWVkaXVt",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/-Whp7vN2xr3c2keiuSmsMrpUvavi2HH6aS_Na_NDTBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLWRl/bHRhLWZvcmNlLWNh/cm91c2VsLWRlc2t0/b3AtMTkyMHgxMDgw/LTEyZGMyOTcyMmFk/NS5qcGc_cmVzaXpl/PTEmdz0xMjgwJmg9/NzIwJnF1YWxpdHk9/bWVkaXVt",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/OOBPbaUGiiad0CdRX6HNlY5TpOq24DMgxaA9RimJZ0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLXBh/dGgtb2YtZXhpbGUt/Mi1jYXJvdXNlbC1k/ZXNrdG9wLTE5MjB4/MTA4MC05OTc1ODky/M2E2NzYuanBlZz9y/ZXNpemU9MSZ3PTEy/ODAmaD03MjAmcXVh/bGl0eT1tZWRpdW0",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/OOBPbaUGiiad0CdRX6HNlY5TpOq24DMgxaA9RimJZ0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLXBh/dGgtb2YtZXhpbGUt/Mi1jYXJvdXNlbC1k/ZXNrdG9wLTE5MjB4/MTA4MC05OTc1ODky/M2E2NzYuanBlZz9y/ZXNpemU9MSZ3PTEy/ODAmaD03MjAmcXVh/bGl0eT1tZWRpdW0",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/OOBPbaUGiiad0CdRX6HNlY5TpOq24DMgxaA9RimJZ0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLXBh/dGgtb2YtZXhpbGUt/Mi1jYXJvdXNlbC1k/ZXNrdG9wLTE5MjB4/MTA4MC05OTc1ODky/M2E2NzYuanBlZz9y/ZXNpemU9MSZ3PTEy/ODAmaD03MjAmcXVh/bGl0eT1tZWRpdW0",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
    {
      img:"https://imgs.search.brave.com/OOBPbaUGiiad0CdRX6HNlY5TpOq24DMgxaA9RimJZ0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLXBh/dGgtb2YtZXhpbGUt/Mi1jYXJvdXNlbC1k/ZXNrdG9wLTE5MjB4/MTA4MC05OTc1ODky/M2E2NzYuanBlZz9y/ZXNpemU9MSZ3PTEy/ODAmaD03MjAmcXVh/bGl0eT1tZWRpdW0",
      gameName:"End of the Line",
      slogan:"play and conquer",
      price:"$23"

    },
  ]

  const handleDownload = (gamelink:string,gamename:string) => {
    // Dynamically create the API route for the specific file URL

    const downloadUrl = `/api/download?fileUrl=${encodeURIComponent(gamelink)}&filename=${encodeURIComponent(gamename)}`;
    window.location.href=downloadUrl;
    console.log(gamelink,gamename);

  };

  return (
    <main className="md:mx-44 mx-10 my-5">
      <section className="flex justify-between flex-col md:flex-row items-center text-white">
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl font-bold">KalpKant Games Store</h1>
          <h2 className="min-w-[300px] w-full md:text-2xl text-base font-bold tracking-wider overflow-hidden whitespace-wrap h-32">
            {text}
          </h2>
        </div>
        <div className="imagecontaner  ">
          <img
            className="rounded-xl"
            src="https://imgs.search.brave.com/-Whp7vN2xr3c2keiuSmsMrpUvavi2HH6aS_Na_NDTBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLWRl/bHRhLWZvcmNlLWNh/cm91c2VsLWRlc2t0/b3AtMTkyMHgxMDgw/LTEyZGMyOTcyMmFk/NS5qcGc_cmVzaXpl/PTEmdz0xMjgwJmg9/NzIwJnF1YWxpdHk9/bWVkaXVt"
            alt=""
          />
        </div>
      </section>
      <section className="UserChoices text-white my-20 ">
        <div className="coonstiner flex flex-col md:flex-row  justify-evenly items-center">
          <div className="box bg-green-300 h-44 w-64 rounded-xl "></div>
          <div className="box bg-green-300 h-44 w-64 rounded-xl"></div>
          <div className="box bg-green-300 h-44 w-64 rounded-xl"></div>
        </div>
      </section>
      <section className="topfeatured text-white my-20 ">
        <div>
          <h1 className="font-semibold text-xl my-3">Top featured </h1>
          <div className="container">
            <div className="flex flex-wrap flex-col md:flex-row  justify-between items-center">
              {games.map((game,idx)=>(
                <div key={idx} hidden={idx>2} className="game-card  rounded-xl p-2 md:w-[25vw]">
                  <div className="image-container ">
                <img
                  className="rounded-xl w-52 h-44 object-cover"
                  src={game.coverimg}
                  alt=""
                />
                </div>
                <div className="game-card-content flex justify-between my-2 ">
                  <div>
                    <h2 className="text-lg font-medium">{game.title}</h2>
                    <p className="text-sm font-thin">
                      {game.tagline}
                    </p>
                  </div>
                  
                </div>
                <button
  className="my-3 rounded px-2 py-1 bg-slate-500 hover:bg-slate-400"
  onClick={() => handleDownload( game.gamelink, game.title)}
>
  Download
</button>
                
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>
      <section className="freegames text-white  my-20">
      <h1 className="font-semibold text-xl my-3">Top Releases </h1>
        <div className="container flex flex-col md:flex-row justify-between items-center bg-slate-600 p-5 rounded-xl">
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img className="rounded-xl" src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ" alt="" />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">Game Slogan Lorem ipsum dolor sit.</p>
          </button>
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img className="rounded-xl" src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ" alt="" />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">Game Slogan Lorem ipsum dolor sit.</p>
          </button>
        </div>

      </section>
      <section className="topfeatured text-white my-20 ">
        <div>
          <h1 className="font-semibold text-xl my-3">Top Paid Games </h1>
          <div className="container">
            <div className="flex flex-wrap flex-col md:flex-row  justify-between items-center">
              {featured.map((game,idx)=>(
                <div key={idx} hidden={idx>2} className="game-card  rounded-xl p-2 md:w-[25vw]">
                <img
                  className="rounded-xl"
                  src={game.img}
                  alt=""
                />
                <div className="game-card-content flex justify-between my-2 ">
                  <div>
                    <h2 className="text-lg font-medium">{game.gameName}</h2>
                    <p className="text-sm font-thin">
                      {game.slogan}
                    </p>
                  </div>
                  <p>{game.price}</p>
                  
                </div>
                <button className="my-3 rounded px-2 py-1  bg-slate-500 hover:bg-slate-400">Download</button>
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
            <img className="rounded-xl" src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ" alt="" />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">Game Slogan Lorem ipsum dolor sit.</p>
          </button>
          <button className="gamecard hover:border-2 px-2 py-1 rounded-xl hover:shadow-md md:w-[30vw] md:h-[50vh]">
            <img className="rounded-xl" src="https://imgs.search.brave.com/RMgztUE7uI-iRdLD8dxkd4tYkS0Wgc95vBGMbkaRMj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTkwMzE4L3Bob3Rv/L2V4Y2l0ZWQtbWFu/LXBsYXlpbmctdmly/dHVhbC1yZWFsaXR5/LWdhbWVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DWURt/YkUteFRzYkl6YUNC/bXVDVFhWNlprejh6/RlRnNFhZN1M1djBH/MnRJPQ" alt="" />
            <h2 className="text-start text-white font-semibold">Game Name</h2>
            <p className="text-start text-gray-300 font-light">Game Slogan Lorem ipsum dolor sit.</p>
          </button>
        </div>

      </section>
      
    </main>
  );
}
