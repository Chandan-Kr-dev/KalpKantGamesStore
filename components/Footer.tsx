"use client"
import { Button } from "./ui/button";

import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"
import { useRef ,useState} from "react";
import { Loader2 } from "lucide-react";

import Swal from 'sweetalert2'
export default function Footer() {
  const [Name, setName] = useState("")  
  const [email, setemail] = useState("")
  const [Message, setMessage] = useState("")

  const [defaultInput, setdefaultInput] = useState("")

const [Loader, setLoader] = useState(false)
  const form = useRef(null);

  const handlesubmit = (e:React.FormEvent) => {
    setLoader(true)
    e.preventDefault();

    if(defaultInput) {
     
      setLoader(false)
      return;
    }
    if(!Name.trim() || !email.trim() || !Message.trim()){
      Swal.fire({
        title: 'Please fill all required fields!',
        icon:'error',
      })
      setLoader(false)
      return;
    }

    if(!form.current){
      setLoader(false)
      return
    }
    emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
          form.current,
          
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          
        )
        .then(
          () => {
            setLoader(false)
            Swal.fire({
              title: 'Thank you for your message!',
              text: 'We will get back to you soon.',
              icon:'success',
            })
          },
          (error) => {
            setLoader(false)
            console.error("FAILED...", error);
            Swal.fire({
              title: 'Failed to send message!',
              text: 'Please try again later.',
              icon:'error',
            })
          }
        );

    

    
    

        
  };
  return (
    <main className="">
      <div className="conatiner md:grid md:grid-cols-3 flex flex-col  space-y-5 md:space-x-10 bg-slate-800 p-10 min-h-[40vh] w-full ">
        
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
                value={Name}
                onChange={e=>setName(e.target.value)}
                placeholder="Name"
              />
              <input
                className="col-span-3 md:w-2/3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="email"
                name="from_email"
                value={email}
                onChange={e=>setemail(e.target.value)}
                placeholder="Email"
              />
              <textarea
              name="message"
                className=" bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                placeholder="Message"
                value={Message}
                onChange={e=>setMessage(e.target.value)}
                rows={4}
                cols={30}
              ></textarea>
              {/* honepot input field */}
              <input className="hidden" type="text" value={defaultInput} onChange={e=>setdefaultInput(e.target.value)} />
              {!Loader?(
                <Button  variant="outline" type="submit">
                Send Message
              </Button>
              ):(
                <Button disabled>
                <Loader2 className="animate-spin" />
                Sending
              </Button>
              )}
              
            </form>
          </div>
        </div>
        <div className="left  h-full  w-full">
          <div className="socialLinks flex flex-col  ">
            <h1 className="text-gray-500 font-semibold">Social Links</h1>
            
            <a className="text-gray-200 hover:bg-gray-500 w-fit px-2 py-1 rounded-xl" href="https://youtube.com/@kalpkantgamesproduction?si=U10MI9n6MZ81C0YO" target="_blank">
              Youtube 
            </a>
            <a className="text-gray-200 hover:bg-gray-500 w-fit px-2 py-1 rounded-xl" href="https://www.instagram.com/kalpkantproductions?igsh=OGE2OHlicTRmMGx3" target="_blank">
              Instagram
            </a>
            <a className="text-gray-200 hover:bg-gray-500 w-fit px-2 py-1 rounded-xl" href="https://discord.gg/cgEeMKRx" target="_blank">
              Discord
            </a>
          </div>
        </div>
      </div>
        <div className="copyright text-center text-white bg-slate-600">
          <h1>&copy; 2025 Chandan Kumar. All Rights Reserved. </h1>
        </div>
    </main>
  );
}
