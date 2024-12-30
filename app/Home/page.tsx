"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  
  const phrases = [' Designed for Developers, Loved by Gamers!', ' Play, Create, Conquer!', ' Your Gateway to Infinite Adventures!'];
  const typingSpeed = 30;
  const delayBetweenPhrases = 2000;

  useEffect(() => {
    let phraseIndex = 0 ;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, delayBetweenPhrases);
        } else {
          setTimeout(type, typingSpeed);
        }
      } else {
        setText(currentPhrase.substring(0, charIndex-1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);

  return (
    <section className="mx-44 my-5">
      <main className="flex justify-between items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            KalpKant Games Store
          </h1>
          <h2 className="min-w-[300px] w-full text-2xl font-bold tracking-wider overflow-hidden whitespace-nowrap h-32">

          {text}
          </h2>
        </div>
        <div className="imagecontaner ">
          <img
          className="rounded-md"
            src="https://imgs.search.brave.com/-Whp7vN2xr3c2keiuSmsMrpUvavi2HH6aS_Na_NDTBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLWRl/bHRhLWZvcmNlLWNh/cm91c2VsLWRlc2t0/b3AtMTkyMHgxMDgw/LTEyZGMyOTcyMmFk/NS5qcGc_cmVzaXpl/PTEmdz0xMjgwJmg9/NzIwJnF1YWxpdHk9/bWVkaXVt"
            alt=""
          />
        </div>
      </main>
    </section>
  );
}
