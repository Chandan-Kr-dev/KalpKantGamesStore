export default function Navbar2() {
  return (
    <nav className="md:mx-44 my-5">
      <ul className="flex flex-col md:flex-row justify-normal items-center space-x-8 text-white">
        <li className="bg-gray-900 px-2 py-1 rounded-3xl flex justify-center items-center">
          <input className="outline-none bg-gray-900 px-2 py-1" type="text" />
          <button className="">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#FFFFFF"
                fill="none"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </li>
        <li>
          <button>Categories</button>
        </li>
        <li>
          <button>featured</button>
        </li>
      </ul>
    </nav>
  );
}
