"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react";
import axios from "axios";


export default function Login() {

    const [isLoading, setisLoading] = useState(false);
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
      const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();

        try {
          setisLoading(true)
          const response=await axios.post('api/auth/Login',{email,password});
          
          if(response.data.message==="Success"){
            setisLoading(false)
            window.localStorage.setItem('kkgstoken',response.data.token)
            window.location.href='/'
          }
        } catch (error) {
          setisLoading(false)
          console.log(error)
        }
      };
  return (
    <section className="mx-44 my-5">
      <main className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="bg-zinc-800 p-5 rounded-xl">
          <header className="flex justify-between items-center ">
            <Link
              href="/login"
              className="bg-green-500 w-full text-center rounded-xl text-slate-200 font-bold py-1"
            >
              Login
            </Link>
            <Link href="/register" className=" w-full text-center rounded-xl">
              Signup
            </Link>
          </header>

          <form className="px-2 py-5 space-y-5 grid " onSubmit={handleSubmit} action="">
            <div className="input grid grid-cols-3">
              <label className="col-span-1 text-slate-400 font-semibold" htmlFor="">
                Email
              </label>
              <input
                className="col-span-2 text-white bg-slate-700 px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="email"
                value={email}
                onChange={e=>setemail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input grid grid-cols-3">
              <label className="col-span-1 text-slate-400 font-semibold" htmlFor="">
                Password
              </label>
              <input
                className="col-span-2 text-white bg-slate-700 px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="password"
                value={password}
                onChange={e=>setpassword(e.target.value)}
                placeholder="********"
              />
            </div>
            {isLoading ? (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Signing in
              </Button>
            ) : (
              <Button variant="outline" type="submit">
                Login
              </Button>
            )}
          </form>
          <p className="text-xs text-center my-3 text-slate-500">Don&apos;t have an account ? <Link className="text-blue-500 underline" href='/register'>SignUp</Link> </p>
          <p className="text-center text-white">----------or with--------------</p>
          <div className="sociallinks flex justify-center items-center gap-4">
            <button className="bg-blue-500 px-2 py-1 rounded-xl">
                Google
            </button>
            <button className="bg-blue-500 px-2 py-1 rounded-xl">
                facebook
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
