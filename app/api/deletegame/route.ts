import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function POST(req:Request){
    try {
        const body=await req.json();
        const {id}=body;

        const deletedgame=await db.uploadedgames.delete({
            where:{id:id}
        })
        return NextResponse.json(deletedgame)
    } catch (error) {
        console.error(error)
        return NextResponse.json({error},{status:500})
    }
}