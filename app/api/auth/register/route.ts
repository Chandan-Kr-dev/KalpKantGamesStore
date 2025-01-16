import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Name, email, role, password } = body;

    const existingUser = await db.user.findUnique({ where: { email: email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User alredy exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        Name,
        email,
        role,
        password: hashedPassword,
      },
    });

    const token = generateToken({
      id: newUser.id,
      username: newUser.Name,
      email: newUser.email,
      role: newUser.role,
    });
    const response = NextResponse.json(
      { user: newUser, message: "User Created",token: token},
      { status: 201 }
    );
    // response.cookies.set('kkgstoken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
