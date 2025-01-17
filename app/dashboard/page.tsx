import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function dashboard() {
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
          <div className="uplaodnew p-4">
            <Link href='/addnewgame' className="bg-red-600 px-2 rounded py-2">
              Create new Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
