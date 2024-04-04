import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  console.log(params);
  try {
    const user = await User.findOne(req.params);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
