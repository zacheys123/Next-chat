"use client";
import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col  h-screen">
      <h1 className="text-5xl font-bold">404 |</h1>
      <h2 className="text-2xl font-semibold mb-3 ">Ooops!!!,Page not found</h2>
      <Button variant="primary" onClick={() => router.push("/mygigme/social")}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;

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

// find a user dynamically
// export async function GET(req) {
// const { username } = await req.json();
// try {
//   await connectDb();
//   const user = await User.findOne({ username });
//   if (!user) {
//     return NextResponse.json({ message: "user not found" });
//   }
//   return NextResponse.json({ user });
// } catch (error) {
//   return NextResponse.json({ error: error.message });
// }
// }
