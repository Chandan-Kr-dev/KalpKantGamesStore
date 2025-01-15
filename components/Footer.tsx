
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <main className="p-10 h-[40vh] w-full bg-slate-800">
      <div className="conatiner grid grid-cols-3 ">
        <div className="left  h-full  w-full">
          <div className="socialLinks flex flex-col  ">
            <h1 className="text-gray-500 font-semibold">Social Links</h1>
            <a className="text-gray-200" href="">
              facebook
            </a>
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
        <div className="center  h-full  w-full">
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
        </div>
        <div className="right  h-full w-full">
          <div className="contact us flex flex-col ">
            <h1 className="text-gray-500 font-semibold">Contact us</h1>
            <form className="space-y-2" action="">
              <input
                className="col-span-3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="col-span-3 bg-slate-700 text-white px-2 py-1 font-semibold rounded-xl outline-none shadow-slate-500 shadow-inner"
                placeholder="Message"
                rows={4}
                cols={50}
              ></textarea>
              <Button variant="outline" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
