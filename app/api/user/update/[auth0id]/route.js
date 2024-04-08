import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  console.log(req);
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
    id,
  } = await req.json();
  console.log(id);
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
  });
  if (firstname && secondname && username && email2) {
    try {
      await connectDb();

      const updatedUser = await User.findOneAndUpdate(
        { auth0Id: id },
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
          },
        }
      );

      const cookieStore = cookies();
      const token = cookieStore.get("token");

      console.log(updatedUser);
      return NextResponse.json(
        { result: updatedUser },
        { message: "Updated Successfully" },
        {
          status: 200,
        },

        { headers: { "Set-Cookie": `token=${token.value}` } }
      );
    } catch (error) {
      console.log(error);
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
