import Image from "next/image";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Home from "./pages/Home/page";

export default function App() {
  return (
    <main>

      <Navbar/>
      <Navbar2/>
      <Home/>
    </main>
  );
}
