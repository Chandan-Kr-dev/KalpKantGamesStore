"use client"
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState,useEffect } from "react";


export default function dashboard() {
    const [IsMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or less
      };

      useEffect(() => {
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
              <h2 className="text-3xl ">46 </h2>
              <span className="text-xs text-center">Apps</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl ">46 </h2>
              <span className="text-xs text-center">Downloads</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl ">46 </h2>
              <span className="text-xs text-center">Views</span>
            </div>
          </div>
          <div className=" flex justify-start">
          <div className="left">
          <div className="p-4">
            <h1>Projects</h1>
            <div className="projects space-y-5">
              <div className="container flex justify-normal space-x-2 border-[1px] w-fit p-1 border-gray-700">
                <div className="imagecontainer bg-gray-600">
                  <img
                    className="h-24 w-24 bg-cover object-contain"
                    src="https://imgs.search.brave.com/g07Cqn91qiY1iGLsXUVHeEQM_peFSfnRPVRpIAXsNEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzM4LzIwLzQ0/LzM2MF9GXzkzODIw/NDQ4MF81QlpQd1o0/ZEw1aXVqcjJYWnd6/a3hkRmVRSm9SRHNS/RS5qcGc"
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h2>End of the Line</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, earum.
                  </p>
                  <div className="button flex justify-between itmes-center">
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
                    <h2 className="bg-green-700 px-1 rounded text-gray-200">
                      Published
                    </h2>
                  </div>
                </div>
              </div>
              <div className="container flex justify-normal space-x-2 border-[1px] w-fit p-1 border-gray-700">
                <div className="imagecontainer bg-gray-600">
                  <img
                    className="h-24 w-24 bg-cover object-contain"
                    src="https://imgs.search.brave.com/g07Cqn91qiY1iGLsXUVHeEQM_peFSfnRPVRpIAXsNEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzM4LzIwLzQ0/LzM2MF9GXzkzODIw/NDQ4MF81QlpQd1o0/ZEw1aXVqcjJYWnd6/a3hkRmVRSm9SRHNS/RS5qcGc"
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h2>End of the Line</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, earum.
                  </p>
                  <div className="button flex justify-between itmes-center">
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
                    <h2 className="bg-green-700 px-1 rounded text-gray-200">
                      Published
                    </h2>
                  </div>
                </div>
              </div>
              <div className="container flex justify-normal space-x-2 border-[1px] w-fit p-1 border-gray-700">
                <div className="imagecontainer bg-gray-600">
                  <img
                    className="h-24 w-24 bg-cover object-contain"
                    src="https://imgs.search.brave.com/g07Cqn91qiY1iGLsXUVHeEQM_peFSfnRPVRpIAXsNEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzM4LzIwLzQ0/LzM2MF9GXzkzODIw/NDQ4MF81QlpQd1o0/ZEw1aXVqcjJYWnd6/a3hkRmVRSm9SRHNS/RS5qcGc"
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h2>End of the Line</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, earum.
                  </p>
                  <div className="button flex justify-between itmes-center">
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
                    <h2 className="bg-green-700 px-1 rounded text-gray-200">
                      Published
                    </h2>
                  </div>
                </div>
              </div>
              <div className="container flex justify-normal space-x-2 border-[1px] w-fit p-1 border-gray-700">
                <div className="imagecontainer bg-gray-600">
                  <img
                    className="h-24 w-24 bg-cover object-contain"
                    src="https://imgs.search.brave.com/g07Cqn91qiY1iGLsXUVHeEQM_peFSfnRPVRpIAXsNEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzM4LzIwLzQ0/LzM2MF9GXzkzODIw/NDQ4MF81QlpQd1o0/ZEw1aXVqcjJYWnd6/a3hkRmVRSm9SRHNS/RS5qcGc"
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h2>End of the Line</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, earum.
                  </p>
                  <div className="button flex justify-between itmes-center">
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
                    <h2 className="bg-green-700 px-1 rounded text-gray-200">
                      Published
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {IsMobile?(<h2 className="text-xs">Adding Game is not Allowed in Mobile devices</h2>):(
            <div className="uplaodnew p-4">
            <Link href='/addnewgame' className="bg-red-600 px-2 rounded py-2">
              Create new Project
            </Link>
          </div>
          )}
          
          </div>
          <div className="right py-4 w-1/2">
            <h2 className="">Contests</h2>
            <div className="contests ">
                <div className="container border-[1px] border-gray-600 p-2">
                    <div className="header flex justify-start space-x-4 ">
                        <img className="h-20 w-20 object-contain" src="https://imgs.search.brave.com/FtJ0f51iAzqo8bsJVqsJNiiH-LgnTHdYXOomJwCmL9w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
                        <div>
                            <h2 className="font-semibold text-slate-100">Action Uplaod</h2>
                            <p className="w-2/3 font-thin text-xs text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, vitae?</p>
                        </div>
                    </div>
                    <div className="about flex justify-between items-center">
                        <div>
                        <h2>Total Submissions : <span className="text-purple-600">23</span></h2>
                        <p>Days left: <span className="text-red-500">12 days</span></p>
                        </div>
                        <button className="bg-green-500 px-2 rounded">Apply Now</button>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
