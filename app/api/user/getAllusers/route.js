import { NextResponse } from "next/server";
import User from "@/models/user";
export async function GET(req) {
  try {
    const res = await User.find();
    console.log(res);
    return NextResponse.json({ results: res }, { staatus: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 403 });
  }
}
