import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function PUT(req) {
  const {
    firstname,
    secondname,
    city,
    age,
    phone,
    email,
    username,
    instrument,
    experience,
    other,
    auth0,
  } = await req.json();

  console.log(email);
  if (firstname && secondname && username) {
    try {
      await connectDb();

      const updatedUser = await User.updateOne(
        { auth0Id: auth0 },
        {
          $set: {
            firstname,
            secondname,
            city,
            age,
            phone,
            email,
            username,
            instrument,
            experience,
            other,
          },
        }
      );

      const cookieStore = cookies();
      const token = cookieStore.get("token");

      return new Response(
        { result: updatedUser, message: "Updated Successfully" },
        {
          status: 200,
          headers: { "Set-Cookie": `token=${token.value}` },
          iddle,
        }
      );
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
    return NextResponse.json(
      { message: "All Fullnames and username are required" },
      {
        status: 401,
      }
    );
  }
}
