import { NextResponse } from "next/server";
// import useUser from "@auth0/nextjs-auth0"
export function middleware(request) {
  // const user=useUser()
  const user = request.cookies.get("appSession");
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
  // return new Promise((resolve, reject) => {
  //     if (req.headers.cookie) {
  //         const cookies = req.headers.cookie.split(';');
  //         for (let i = 0; i < cookies.length; i++) {
  //             const cookie = cookies[i].trim();
  //             const eqPos = cookie.indexOf('=');
  //             const name = eqPos > -1? cookie.substr(0, eqPos) : cookie;
  //             const value = eqPos > -1? cookie.substr(eqPos + 1) : '';
  //             req.cookies[name] = decodeURIComponent(value);
  //         }
  //     }
  //     resolve(req);
}

export const config = {
  matcher: [
    "/mygigme",
    "/mygigme/social",
    "/mygigme/chat",
    "/profile/:id*",
    "/authenticate",
  ],
};
