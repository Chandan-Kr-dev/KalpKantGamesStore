"use client"
import { Button } from "./ui/button";

import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"
import { useRef ,useState} from "react";
import { Loader2 } from "lucide-react";
export default function Footer() {

const [Loader, setLoader] = useState(false)
  const form = useRef(null);

  const handlesubmit = (e:React.FormEvent) => {
    setLoader(true)
    e.preventDefault();
    if(!form.current){
      setLoader(false)
      return
    }
    emailjs
        .sendForm(
          `${process.env.EMAILJS_SERVICE_ID}`,
          `${process.env.EMAILJS_TEMPLATE_ID}`,
          form.current,
          
            process.env.EMAILJS_PUBLIC_KEY,
          
        )
        .then(
          () => {
            setLoader(false)
          },
          (error) => {
            setLoader(false)
            console.error("FAILED...", error);
          }
        );

    

    // Use toast.promise to handle the states
    

        
  };
  return (
    <main className="p-10 min-h-[40vh] w-full bg-slate-800">
      <div className="conatiner md:grid md:grid-cols-3 flex flex-col  space-y-5 md:space-x-10">
        
        {/* <div className="center  h-full  w-full">
          <div className="about us flex flex-col ">
            <h1 className="text-gray-500 font-semibold">About us</h1>
            <a className="text-gray-200" href="">
              Contests
            </a>
            <a className="text-gray-200" href="">
              Tournament
            </a>
            <a className="text-gray-200" href="">
              Top Rated Games
            </a>
            <a className="text-gray-200" href="">
              Our Top Contributors
            </a>
          </div>
        </div> */}
        <div className="right  h-full w-full ">
          <div className="contact us flex flex-col ">
            <h1 className="text-gray-500 font-semibold">Contact us</h1>
            <form ref={form} onSubmit={handlesubmit} className="space-y-2 flex flex-col" action="">
              <input
                className="col-span-3 md:w-1/3 w-2/3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="Name"
                name="from_name"
                
                placeholder="Name"
              />
              <input
                className="col-span-3 md:w-2/3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="email"
                name="from_email"
                
                placeholder="Email"
              />
              <textarea
              name="message"
                className=" bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                placeholder="Message"
                rows={4}
                cols={30}
              ></textarea>
              {!Loader?(
                <Button  variant="outline" type="submit">
                Send Message
              </Button>
              ):(
                <Button disabled>
                <Loader2 className="animate-spin" />
                Signing in
              </Button>
              )}
              
            </form>
          </div>
        </div>
        <div className="left  h-full  w-full">
          <div className="socialLinks flex flex-col  ">
            <h1 className="text-gray-500 font-semibold">Social Links</h1>
            
            <a className="text-gray-200" href="">
              Youtube
            </a>
            <a className="text-gray-200" href="">
              Instagram
            </a>
            <a className="text-gray-200" href="">
              Discord
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
