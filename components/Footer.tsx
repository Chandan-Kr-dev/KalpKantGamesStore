import { main } from "framer-motion/client";

export default function Footer(){
return(
    <main className="p-10 h-[30vh] w-full bg-slate-800">
        <div className="conatiner flex justify-center ">
            <div className="left bg-red-400 h-full  w-full">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt consequatur voluptates officiis praesentium pariatur facilis, molestias ducimus? Aspernatur quos optio omnis quam. Aut quis impedit ipsa dolorum magni! Quam.</p>
            </div>
            <div className="right bg-green-300 h-full w-full">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consequatur.</p>
            </div>
        </div>
        
    </main>
 );

}