"use client"
import React from "react";


export default function HomeLoader(){
    return(
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50 transition-all ">
            <img className="object-contain h-full w-full" src="/Preloader.gif" alt="loading ...." />
            </div>
        </>
    )
}