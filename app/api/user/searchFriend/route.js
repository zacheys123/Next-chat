import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchQuery } = await req.json();
  console.log(searchQuery);
  if (!searchQuery || searchQuery.length < 0 || searchQuery === "undefined") {
    return NextResponse.json({ message: "Input is required" }, { status: 403 });
  } else {
    try {
      await connectDb();
      const user = await User.findOne({
        $or: [
          { firstname: searchQuery },
          { secondName: searchQuery },
          { email: searchQuery },
          { instrument: searchQuery },
          { username: searchQuery },
        ],
      })
        .collation({ locale: "en", strength: 2 })
        .select("username firstname auth0Id _id secondname instrument email")
        .exec();
      if (!user || user.length <= 0) {
        return NextResponse.json(
          { message: "user not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ user });
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
