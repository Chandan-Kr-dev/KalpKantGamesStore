import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request){
    try {
        const body=await req.json();
        const {email,password}=body;

        const existingUser=await db.user.findUnique({where:{email:email}})
        if(existingUser){
            const isMatch=await bcrypt.compare(password,existingUser.password)
            if(isMatch){
                const token=generateToken({id:existingUser.id,email:existingUser.email,username:existingUser.Name,role:existingUser.role})
                const response= NextResponse.json({message:"Success",token:token},{status:200})
                // response.cookies.set('kkgstoken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
                return response;
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