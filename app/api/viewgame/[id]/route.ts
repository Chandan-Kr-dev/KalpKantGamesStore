import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request,context:{params:{id:string}} ){
    try {
        // const body=await req.json();
        // const {id}=body;
        
        // const id=parseInt(params.id,10);
        const {id}=context.params;
        

        const game=await db.uploadedgames.findUnique({
            where:{
                id:parseInt(id,10),
            }
        });
        return NextResponse.json({game},{status:200})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}