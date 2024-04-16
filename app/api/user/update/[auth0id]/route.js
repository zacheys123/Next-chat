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
    id,
  } = await req.json();
  console.log(firstname, secondname);
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
  });
  if (firstname && secondname && username && email2) {
    try {
      await connectDb();

      await User.findOneAndUpdate(
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

      const user = await User.findOne({ auth0Id: id });
      console.log(user);
      return NextResponse.json(
        { message: "Updated Successfully" },
        { result: user },

        {
          status: 200,
        }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error.message });
    }
  } else {
    return NextResponse.json(
      { message: "Fullnames and username and email2 are required" },
      {
        status: 401,
      }
    );
  }
}
