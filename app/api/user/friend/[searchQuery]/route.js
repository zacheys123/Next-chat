import { connectDb } from "@/lib/connectDb";
import User from "@/models/user";

export async function GET(req) {
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
}
