"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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

  const fileInputRefs = useRef({
    gamefile: null,
    coverimg: null,
    screenshot1: null,
    screenshot2: null,
    screenshot3: null,
  } as Record<string, HTMLInputElement | null>);

  const [isLoading, setisLoading] = useState(false);

  const [title, settitle] = useState<string>("");
  const [tagline, settagline] = useState<string>("");
  const [genre, setgenre] = useState<string>("");
  const [ReleasedStatus, setReleasedStatus] = useState<string>("");
  const [Price, setPrice] = useState<string>("");
  const [gamefile, setgamefile] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [storelink, setstorelink] = useState<string>("");
  const [coverimg, setcoverimg] = useState<string>("");
  const [trailer, settrailer] = useState<string>("");
  const [screenshot1, setscreenshot1] = useState<string>("");
  const [screenshot2, setscreenshot2] = useState<string>("");
  const [screenshot3, setscreenshot3] = useState<string>("");
  const [userid, setuserid] = useState<string>();
  const [developer, setdeveloper] = useState<string>();

  const [uploading, setUploading] = useState<string | null>(null);
//   const [uploading, setUploading] = useState(false);

  const handleUploadClick = (type: string) => {
    const inputRef = fileInputRefs.current[type];
    if (inputRef) {
      inputRef.click();
    }
  };
  useEffect(()=>{
    
  },[coverimg])

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    
    const file = event.target.files?.[0];
    
    if (file) {
      setUploading(type); // Set the uploading type to show a loading state for that button
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", 'ml_default'); // Replace with your upload preset
        formData.append("cloud_name", 'dr8c1x4ai'); // Replace with your Cloudinary cloud name

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dr8c1x4ai/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;

          // Update the specific state based on the type
          switch (type) {
            case "gamefile":
              setgamefile(imageUrl);
              break;
            case "coverImg":
              setcoverimg(imageUrl);
              break;
            case "screenshot1":
              setscreenshot1(imageUrl);
              break;
            case "screenshot2":
              setscreenshot2(imageUrl);
              break;
            case "screenshot3":
              setscreenshot3(imageUrl);
              break;

            default:
              break;
          }

          alert(`${type} uploaded: ${imageUrl}`);
        } else {
          console.error(`Failed to upload ${type} , why: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error uploading ${type}:`, error);
      } finally {
        setUploading(null); // Reset the uploading state
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setgamefile("EndoftheLine.zip");
    // setcoverimg("endof the line.png");
    // setscreenshot1("ss1.jpg");
    // setscreenshot2("ss1.jpg");
    // setscreenshot3("ss1.jpg");
    setuserid(decoded?.userId);
    setdeveloper(decoded?.username);
    try {
      setisLoading(true);
      
      const response = await axios.post("api/gameupload", {
        userid,
        developer,
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
        screenshot3,
      });
      console.log(response);
      if (response.data.message === "Game Added Successfully") {
        setisLoading(false);
        alert("Game Added Successfully");
        window.location.href = "/dashboard";
      }
    } catch (error) {
        console.error(error);
      setisLoading(false);
    }
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
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="Game name"
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">TagLine</label>
                  <input
                    value={tagline}
                    onChange={(e) => settagline(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="tagline"
                    maxLength={50}
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Game genre</label>
                  <select
                    value={genre}
                    onChange={(e) => setgenre(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    name="role"
                    id="role-select"
                  >
                    <option value="">No Genre</option>
                    <option value="Racing">Racing</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Educational">Educational</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Survival">Survival</option>
                    <option value="Horror">Horror</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Others">Other</option>
                  </select>
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Released Status</label>
                  <select
                    value={ReleasedStatus}
                    onChange={(e) => setReleasedStatus(e.target.value)}
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
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="Price - $2"
                  />
                </div>
                <div className="input flex flex-col py-2">
                  <button
                    onClick={() => handleUploadClick("gamefile")}
                    className="bg-red-500 px-1 rounded w-fit"
                  >
                    {uploading === "gamefile" ? "Uploading Game..." : "Upload Game files"}
                  </button>
                  <input
                    ref={(el) => {
                      fileInputRefs.current.gamefile = el;
                    }}
                    onChange={(e) => handleFileChange(e, "gamefile")}
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
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    placeholder="Description"
                    rows={4}
                    cols={50}
                  ></textarea>
                </div>
                <div className="input flex flex-col py-2">
                  <label htmlFor="">Additional Links</label>
                  <input
                    value={storelink}
                    onChange={(e) => setstorelink(e.target.value)}
                    className="bg-gray-600 px-2 py-1 rounded"
                    type="text"
                    placeholder="external store links"
                  />
                </div>
                <div className="flex justify-end py-4">
                  {isLoading ? (
                    <Button disabled>
                      <Loader2 className="animate-spin" />
                      Uploading
                    </Button>
                  ) : (
                    <Button variant="outline" type="submit">
                      Add Game
                    </Button>
                  )}
                </div>
              </form>
            </div>
            <div className="right  w-full flex flex-col justify-start px-2">
              <div className="image border-2 border-dashed h-60 w-full flex justify-center items-center ">
                {coverimg?(<img
                  src={coverimg}
                  alt="cover image"
                  className="object-cover w-full h-full rounded-lg"
                />):(<div><button
                  onClick={() => handleUploadClick("coverimg")}
                  className="bg-red-500 px-1 rounded "
                >
                  {uploading === "coverimg" ? "Uploading image..." : "Upload cover image"}
                </button>
                <input
                  ref={(el) => {fileInputRefs.current.coverimg = el}}
                  onChange={(e) => handleFileChange(e, "coverimg")}
                  className="text-xs hidden"
                  type="file"
                  name=""
                  id=""
                  required
                /></div>)}
                
                
              </div>
              <div className="input flex flex-col py-2">
                <label htmlFor="">Trailer video</label>
                <input
                  value={trailer}
                  onChange={(e) => settrailer(e.target.value)}
                  className="bg-gray-600 px-2 py-1 rounded"
                  type="text"
                  placeholder="yotube.com/"
                />
              </div>
              <div className="screenshots flex flex-col space-y-4">
                <button
                  onClick={() => handleUploadClick("screenshot1")}
                  className="bg-red-500 px-1 rounded w-fit"
                >
                  {uploading === "screenshot1" ? "Uploading image..." : "Upload screenshot1"}
                </button>
                <input
                  ref={(el) => {fileInputRefs.current.screenshot1 = el}}
                  onChange={(e) => handleFileChange(e, "screenshot1")}
                  className="text-xs hidden"
                  type="file"
                  name=""
                  id=""
                />
                <button
                  onClick={() => handleUploadClick("screenshot2")}
                  className="bg-red-500 px-1 rounded w-fit"
                >
                  {uploading === "screenshot2" ? "Uploading image..." : "Upload screenshot2"}
                </button>
                <input
                  ref={(el) => {fileInputRefs.current.screenshot2 = el}}
                  onChange={(e) => handleFileChange(e, "screenshot2")}
                  className="text-xs hidden"
                  type="file"
                  name=""
                  id=""
                />
                <button
                  onClick={() => handleUploadClick("screenshot3")}
                  className="bg-red-500 px-1 rounded w-fit"
                >
                  {uploading === "screenshot3" ? "Uploading image..." : "Upload screenshot3"}
                </button>
                <input
                  ref={(el) => {fileInputRefs.current.screenshot3 = el}}
                  onChange={(e) => handleFileChange(e, "screenshot3")}
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
