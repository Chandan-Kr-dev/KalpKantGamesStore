import Image from "next/image";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Home from "./Home/page";

export default function App() {
  return (
    <main>

      <Navbar/>
      <Navbar2/>
      <Home/>
    </main>
  );
}
