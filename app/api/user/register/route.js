import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, firstname, secondname, picture, auth0 } = await req.json();

  console.log(auth0);
  try {
    await connectDb();
    const existing = await User.findOne({ auth0Id: auth0 });
    if (!existing) {
      const newUser = await User.create({
        firstname,
        secondname,
        email,
        picture,
        auth0Id: auth0,
      });
      const cookieStore = cookies();
      const token = cookieStore.get("token");

      return new Response(
        { data: newUser },
        {
          status: 200,
          headers: { "Set-Cookie": `token=${token.value}` },
        }
      );
    } else {
      return NextResponse.json({ error: "User already exists" });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
