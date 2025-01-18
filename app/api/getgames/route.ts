import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const games=await db.uploadedgames.findMany();
    return NextResponse.json(games)
    } catch (error) {
        return NextResponse.json({error})
    }
    // return NextResponse.json({message:"wokring"})
    
}