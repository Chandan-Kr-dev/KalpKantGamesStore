"use client"
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import { useState } from "react";

export default function Register() {
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = () => {
    let cnt: number = 0;
    if (cnt == 0) {
      setisLoading(true);
      
      cnt = cnt + 1;
    }
  };
  return (
    <section className="mx-44 my-5">
      <main className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="bg-zinc-800 p-5 rounded-xl w-[28vw]">
          <header className="flex justify-between items-center ">
            <Link href="/login" className=" w-full text-center">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-green-500 w-full text-center rounded-xl text-slate-200 font-bold py-1"
            >
              Signup
            </Link>
          </header>
          <form
            className="px-2 py-5 space-y-5 grid"
            onSubmit={handleSubmit}
            action=""
          >
            <div className="input grid grid-cols-4">
              <label
                className="col-span-1 text-slate-400 font-semibold"
                htmlFor=""
              >
                Name
              </label>
              <input
                className="col-span-3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="input grid grid-cols-4">
              <label
                className="col-span-1 text-slate-400 font-semibold"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="col-span-3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input grid grid-cols-4">
              <label
                className="col-span-1 text-slate-400 font-semibold"
                htmlFor=""
              >
                Linkedin
              </label>
              <input
                className="col-span-3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="text"
                placeholder="your linkedin profile"
              />
            </div>
            <div className="input grid grid-cols-4">
              <label className="text-slate-400 font-semibold" htmlFor="">
                Your are
              </label>
              <Select>
                <SelectTrigger className="col-span-3  bg-slate-700 px-2 py-1  text-white font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner">
                  <SelectValue className="" placeholder="Your Role" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl cursor-pointer">
                  <SelectItem  value="developer">Developer</SelectItem>
                  <SelectItem value="user">user</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="input grid grid-cols-4">
              <label
                className="col-span-1 text-slate-400 font-semibold"
                htmlFor=""
              >
                Password
              </label>
              <input
                className="col-span-3 text-white bg-slate-700 px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="password"
                placeholder="********"
              />
            </div>
            {isLoading ? (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Signing Up
              </Button>
            ) : (
              <Button variant="outline" type="submit">
                SignUp
              </Button>
            )}
          </form>
          <p className="text-xs text-center my-3 text-slate-500">
            Already have an account ?{" "}
            <Link className="text-blue-500 underline" href="/login">
              login
            </Link>{" "}
          </p>
          <p className="text-center text-white">
            ----------or with--------------
          </p>
          <div className="sociallinks flex justify-center items-center gap-4">
            <button className="bg-blue-500 px-2 py-1 rounded-xl">Google</button>
            <button className="bg-blue-500 px-2 py-1 rounded-xl">
              facebook
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
