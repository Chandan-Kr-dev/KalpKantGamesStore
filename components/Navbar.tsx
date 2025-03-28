"use client";
import Image from "next/image";
import Link from "next/link";
import React, {  useState } from "react";

// import { jwtDecode } from "jwt-decode";

// interface JwtPayload {
//   userId: string;
//   email: string;
//   username: string; // Add the username field
//   role: string;
//   exp: number; // Expiration timestamp
// }

export default function Navbar() {
  // let token;
  
  // if (typeof window !== "undefined") {
  //   token = window.localStorage.getItem("kkgstoken");
  // }
  // const decoded = token ? jwtDecode<JwtPayload>(token) : null;

  // const [isMobile, setIsMobile] = useState(false);
  const [openmenu, setopenmenu] = useState(false);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or less
  // };

  // const signout = () => {
  //   window.localStorage.removeItem("kkgstoken");
  //   window.location.href = "/";
  // };

  // useEffect(() => {
  //   handleResize(); // Initial check
  //   window.addEventListener("resize", handleResize); // Add resize listener
  //   return () => window.removeEventListener("resize", handleResize); // Cleanup
  // }, []);

  return (
    <nav className="py-5 px-8 border-b-[1px] text-zinc-50">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center space-x-2 text-white">
          <button onClick={() => setopenmenu(!openmenu)}>
            <Image src="https://i.postimg.cc/tTQ1fhPs/logo-new.png" alt="Logo" width={50} height={50} />
            
          </button>
          <h4>X</h4>
          <Link
            href="/"
            className="md:text-xl text-base font-bold text-zinc-300"
          >
            KalpkantGames
          </Link>
        </div>
        <div>
          
          <h2 className="md:text-4xl text-2xl font-bold uppercase text-white">
            Store
          </h2>
        </div>
        <div className="text-lg bg-gray-700 rounded-xl my-2 px-2 text-white"> 
         <Link href="/Blogs">Blogs</Link>
        </div>
        {/* <ul className="space-x-5"> */}
            {/* {isMobile ? (
              <div hidden={!openmenu} className="space-x-5">
                <Link
                  href="/login"
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className=" px-2 py-1 rounded-xl bg-blue-500   text-gray-950"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="space-x-5">
                <Link
                  href="/login"
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className=" px-2 py-1 rounded-xl bg-blue-500   text-gray-950"
                >
                  Register
                </Link>
              </div>
            )}
          </ul> */}
        {/* {decoded ? (
          <ul>
            {isMobile ? (
              <div hidden={!openmenu}>
                <h2 className="text-gray-300">{decoded.username}</h2>
                <button
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                  onClick={signout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-2">
                <h2 className="text-gray-300">{decoded.username}</h2>
                <button
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                  onClick={signout}
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        ) : (
          <ul className="space-x-5">
            {isMobile ? (
              <div hidden={!openmenu} className="space-x-5">
                <Link
                  href="/login"
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className=" px-2 py-1 rounded-xl bg-blue-500   text-gray-950"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="space-x-5">
                <Link
                  href="/login"
                  className=" px-2 py-1 rounded-xl bg-gray-600 font-bold text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className=" px-2 py-1 rounded-xl bg-blue-500   text-gray-950"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>
        )} */}
      </div>
    </nav>
  );
}
