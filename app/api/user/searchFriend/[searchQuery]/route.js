import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchQuery, auth0 } = await req.json();
  console.log(req.query);
  if (!searchQuery || searchQuery.length < 0 || searchQuery === "undefined") {
    return NextResponse.json({ message: "Input is required" }, { status: 403 });
  } else {
    try {
      await connectDb();
      // const newsearchquery = req.query.search;
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
        .findOne({ auth0Id: { $en: auth0 } })
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

// const user = await User.findOne({
//   $or: [
//     { firstname: { $regex: req.query.search, $options: "i" } },
//     { secondname: { $regex: req.query.search, $options: "i" } },
//     { firstname: { $regex: req.query.search, $options: "i" } },
//     { firstname: { $regex: req.query.search, $options: "i" } },
//   ],
// });
// .find({ _id: { $ne: req.query._id } });
