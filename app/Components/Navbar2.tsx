export default function Navbar2() {
  return (
    <nav className="mx-44 my-5">
      <ul className="flex justify-normal items-center space-x-8">
        <li className="bg-gray-900 px-2 py-1 rounded-3xl">
          <input className="outline-none bg-gray-900 px-2 py-1" type="text" />
          <button>Search</button>
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
