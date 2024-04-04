import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const {
    firstname,
    secondname,
    city,
    age,
    phone,
    email,
    username,
    email2,
    instrument,
    experience,
    other,
    auth0,
  } = await req.json();

  console.log({
    firstname: firstname || "firstname",
    secondname: secondname || "secondname",
    city: city || "city",
    age: age || "age",
    phone: phone || "phone",
    email: email || "email",
    username: username || "username",
    email2: email2 || "email2",
    instrument: instrument || "instrument",
    experience: experience || "experience",
    other: other || "other",
    auth0: auth0 || "auth0",
  });
  if (firstname && secondname && username && email2) {
    try {
      await connectDb();

      const updatedUser = await User.findOneAndUpdate(
        { auth0Id: params.auth0id },
        {
          $set: {
            firstname,
            secondname,
            city,
            age,
            phone,
            email,
            username,
            email2,
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
      { message: "All Fullnames and username and email2 are required" },
      {
        status: 401,
      }
    );
  }
}
