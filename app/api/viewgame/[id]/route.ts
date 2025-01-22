import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request,context:{params:Promise<{id:string}>} ){
    try {
        // const body=await req.json();
        // const {id}=body;
        
        // const id=parseInt(params.id,10);
        const {id}=await context.params;
        

        const game=await db.uploadedgames.findUnique({
            where:{
                id:parseInt(id,10),
            }
        });

        if (!game) {
            return NextResponse.json({ error: "Game not found" }, { status: 404 });
          }
        return NextResponse.json({game},{status:200})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}