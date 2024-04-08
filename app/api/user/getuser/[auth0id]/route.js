import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  console.log(req);
  try {
    const user = await User.findOne({ auth0Id: params?.auth0id });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
