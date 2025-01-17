import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userid,
      developer,
      title,
      tagline,
      genre,
      ReleasedStatus,
      Price,
      gamefile,
      description,
      storelink,
      coverimg,
      trailer,
      screenshot1,
      screenshot2,
      screenshot3,
    } = body;
    const newGame = await db.games.create({
      data: {
        userid,
        developer,
        title,
        tagline,
        genre,
        ReleasedStatus,
        Price,
        gamefile,
        description,
        storelink,
        coverimg,
        trailer,
        screenshot1,
        screenshot2,
        screenshot3,
      },
    });

    const response = NextResponse.json(
      { newGame, message: "Game Added Successfully" },
      { status: 201 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
