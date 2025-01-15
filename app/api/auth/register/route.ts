import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: Request){
    try {
        const body=await req.json();
        const {Name,email,role,password}=body;

        const existingUser=await db.user.findUnique({where:{email:email}})
        if(existingUser){
            return NextResponse.json({message:"User alredy exists"},{status:409})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser =await db.user.create({
            data:{
                Name,
                email,
                role,
                password:hashedPassword
            }
        })
        return NextResponse.json({user:newUser,message:"User Created"},{status:201});
    } catch (error) {
        return NextResponse.json({error:error,message:"Something went wrong"},{status:500})
    }
}