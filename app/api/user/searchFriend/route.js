import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  // const { search_Ref, auth0 } = await req.json();
  // console.log(search_Ref.current);
  // if (
  //   !search_Ref.current ||
  //   search_Ref.current.length < 0 ||
  //   search_Ref.current === "undefined"
  // ) {
  //   return NextResponse.json({ message: "Input is required" }, { status: 403 });
  // } else {
  //   try {
  //     await connectDb();
  //     // const newsearch_Ref.current = req.query.search;
  //     const user = await User.findOne({ auth0Id: { $en: auth0 } });
  //     if (user) {
  //       if (user !== search_Ref.current) {
  //         return NextResponse.json(
  //           { message: "user not found" },
  //           { status: 403 }
  //         );
  //       }
  //       await User.findOne({
  //         $or: [
  //           { firstname: search_Ref.current },
  //           { secondName: search_Ref.current },
  //           { email: search_Ref.current },
  //           { instrument: search_Ref.current },
  //           { username: search_Ref.current },
  //         ],
  //       })
  //         .collation({ locale: "en", strength: 2 })
  //         .exec();
  //       return NextResponse.json({ user });
  //     }
  //     return NextResponse.json(
  //       { message: "You cannot search ur data" },
  //       { status: 403 }
  //     );
  //   } catch (error) {
  //     return NextResponse.json({ error: error.message });
  //   }
  // }
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
