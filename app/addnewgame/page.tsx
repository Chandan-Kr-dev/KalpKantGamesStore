"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useRef, useState } from "react";
interface JwtPayload {
    userId: string;
    email: string;
    username: string; // Add the username field
    role: string;
    exp: number; // Expiration timestamp
  }


export default function AddnewGame() {
    let token;
    
        if (typeof window !== "undefined") {
          token = window.localStorage.getItem("kkgstoken");
        }
      const decoded = token ? jwtDecode<JwtPayload>(token) : null;

      

    
    const fileinputref = useRef<HTMLInputElement | null>(null);
    
  const [title, settitle] = useState("")
  const [tagline, settagline] = useState("")
  const [genre, setgenre] = useState("")
  const [ReleasedStatus, setReleasedStatus] = useState("")
  const [Price, setPrice] = useState("")
  const [gamefile, setgamefile] = useState("")
  const [description, setdescription] = useState("")
  const [storelink, setstorelink] = useState("")
  const [coverimg, setcoverimg] = useState("")
  const [trailer, settrailer] = useState("")
  const [screenshot1, setscreenshot1] = useState("")
  const [screenshot2, setscreenshot2] = useState("")
  const [screenshot3, setscreenshot3] = useState("")
  const [userid, setuserid] = useState(decoded?.userId);

  const handleUpload = () => {
    if (fileinputref.current) {
      fileinputref.current.click();
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response=await axios.post('api/gameupload',{userid,
        title,
        tagline,
        genre,
        ReleasedStatus,
        Price,
        gamefile,
        description,
        storelink,
        coverimg,
        trailer,
        screenshot1,
        screenshot2,
        screenshot3,})
    console.log(response);
  };
  return (
    <main className="text-gray-50">
      <Navbar />
      <section className="md:mx-44 mx-10 my-5">
        <div className="addnew bg-gray-900 shadow-md min-h-[60vh] p-4  ">
          <h2 className="text-center text-2xl py-2">Add new Game</h2>
          <div className="conta grid grid-cols-2 py-4">
            <div className="left">
              <form onSubmit={handleSubmit} className="" action="">
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Title</label>
                  <input
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="Game name"
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">TagLine</label>
                  <input
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="tagline"
                    maxLength={50}
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Game genre</label>
                  <select
                    className="bg-gray-600 px-2 py-1 rounded"
                    name="role"
                    id="role-select"
                  >
                    <option value="">No Genre</option>
                    <option value="Developer">Racing</option>
                    <option value="user">Action</option>
                    <option value="user">Adventure</option>
                    <option value="user">Educational</option>
                    <option value="user">Puzzle</option>
                    <option value="user">Survival</option>
                    <option value="user">Horror</option>
                    <option value="user">Simulation</option>
                    <option value="user">Other</option>
                  </select>
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Released Status</label>
                  <select
                    className="bg-gray-600 px-2 py-1 rounded"
                    name="role"
                    id="role-select"
                  >
                    <option value="">Select Status</option>
                    <option value="Developer">Released</option>
                    <option value="user">In Development</option>
                  </select>
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Pricing</label>
                  <input
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="Price - $2"
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <button
                    onClick={handleUpload}
                    className="bg-red-500 px-1 rounded w-fit"
                  >
                    Uplaod Files
                  </button>
                  <input
                    ref={fileinputref}
                    className="text-xs hidden"
                    type="file"
                    name=""
                    id=""
                  />
                  <h3 className="text-gray-500 text-sm py-1">
                    File size limit-1GB
                  </h3>
                </div>

                <div className="input flex flex-col py-2">
                  <label htmlFor="">Description</label>
                  <textarea
                    className="bg-gray-600 px-2 py-1 rounded"
                    placeholder="Description"
                    rows={4}
                    cols={50}
                  ></textarea>
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Additional Links</label>
                  <input
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="external store links"
                  />
                </div>
                <div className="flex justify-end py-4">
                  <button
                    type="submit"
                    className="bg-blue-500 px-4 py-2 rounded text-white"
                  >
                    Add Game
                  </button>
                </div>
              </form>
            </div>
            <div className="right  w-full flex flex-col justify-start px-2">
              <div className="image border-2 border-dashed h-60 w-full flex justify-center items-center ">
                <button
                  onClick={handleUpload}
                  className="bg-red-500 px-1 rounded "
                >
                  Uplaod Cover image
                </button>
                <input
                  ref={fileinputref}
                  className="text-xs hidden"
                  type="file"
                  name=""
                  id=""
                />
              </div>
              <div className="input flex flex-col py-2">
                <label htmlFor="">Trailer video</label>
                <input
                  className="bg-gray-600 px-2 py-1 rounded"
                  type="text"
                  placeholder="yotube.com/"
                />
              </div>
              <div className="screenshots flex flex-col space-y-4">

              <button
                    onClick={handleUpload}
                    className="bg-red-500 px-1 rounded w-fit"
                  >
                    Uplaod Screeshot 1
                  </button>
                  <input
                    ref={fileinputref}
                    className="text-xs hidden"
                    type="file"
                    name=""
                    id=""
                  />
              <button
                    onClick={handleUpload}
                    className="bg-red-500 px-1 rounded w-fit"
                  >
                    Uplaod Screeshot 2
                  </button>
                  <input
                    ref={fileinputref}
                    className="text-xs hidden"
                    type="file"
                    name=""
                    id=""
                  />
              <button
                    onClick={handleUpload}
                    className="bg-red-500 px-1 rounded w-fit"
                  >
                    Uplaod Screeshot 3
                  </button>
                  <input
                    ref={fileinputref}
                    className="text-xs hidden"
                    type="file"
                    name=""
                    id=""
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
