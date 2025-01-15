import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: Request){
    try {
        const body=await req.json();
        const {email,password}=body;

        const existingUser=await db.user.findUnique({where:{email:email}})
        if(existingUser){
            const isMatch=await bcrypt.compare(password,existingUser.password)
            if(isMatch){
                return NextResponse.json({message:"Success"},{status:200})
            }
            else{
                return NextResponse.json({message:"Wrong Password"},{status:400})
            }
        }
        else{
            return NextResponse.json({message:"User not found"},{status:404})
        }
        
        
        
    } catch (error) {
        return NextResponse.json({error:error,message:"Something went wrong"},{status:500})
    }
}