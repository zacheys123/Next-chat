"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent";
import bgImage from "@/public/assets/bg-cover.jpg";
import { Card } from "@/components/ui/card";
import UserAvatar from "@/components/UserAvatar";
import UserButton from "@/components/UserButton";
import { useRouter } from "next/navigation";
import { Footer, TextInput } from "flowbite-react";
import left from "../../public/assets/left-image.jpg";
export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(user);
  return (
    <main className="min-h-screen">
      <ImageComponent bgCover={bgImage} />
      <nav className="container mx-auto max-w-100vw p-3 bg-cyan-800 flex items-center justify-between">
        <span className="tracking-tighter">
          <span className=" bg-pink-100 text-red-500 font-bold p-1 rounded-b-xl shadow-red-500">
            GigMe
          </span>
          <span className=" text-yellow-100 font-bold p-1 shadow-blue-500">
            Up
          </span>
        </span>
        {user ? (
          <UserAvatar source={user} />
        ) : (
          <UserButton
            onClick={() => router.push("/api/auth/login")}
            title="Login"
            className="w-[100px]  bg-slate-600 border border-yellow-300 rounded-full py-2  text-white my-1 hover:bg-slate-500"
          />
        )}
      </nav>{" "}
      <div className="h-[70vh] w-100 flex justify-center items-center">
        <div className="fle flex-col gap-4 text-2xl text-center md:flex-row md:text-6xl">
          <div>
            <span className="md:text-6xl  bg-gradient-to-r  from-orange-600 via-green-500 to-purple-100 inline-block  text-transparent  bg-clip-text">
              chat
            </span>
            <span className="  md:text-6xl md:font-bold bg-cyan-100 bg-clip-text text-transparent text-center">
              {" "}
              and{" "}
              <span className=" md:text-6xl  bg-gradient-to-r  from-yellow-400 via-green-300 to-purple-600 inline-block  text-transparent  bg-clip-text">
                connect with every
              </span>{" "}
            </span>
          </div>
          <div>
            <span className="text-center font-bold bg-gradient-to-r   from-orange-600 via-green-500 to-purple-100  inline-block  text-transparent  bg-clip-text">
              musician you know,anyWhere in the country
            </span>
          </div>
        </div>
      </div>
      <Card className="container mx-auto max-w-[80vw] h-[230px] p-4 text-center flex flex-col gap-4">
        <span className="Ffont-bold tracking-tighter  text-2xl ">
          For more information on what gigmeApp is,contact us here.Send us ur
          feedback or concern.
        </span>
        <form>
          <TextInput />
          <UserButton
            onClick={() => console.log("Email Button clicked!!!")}
            title="Send FeedBack"
            className="w-[140px]  bg-purple-600 border border-yellow-300 rounded-full py-3  text-white my-3 hover:bg-slate-500"
          />
        </form>
      </Card>
      <div className="mt-[120px] mb-[120px] flex  flex-col md:flex-row justify-center items-center">
        {" "}
        <Image src={left} alt="something" />
        <div className="flex flex-col"></div>
      </div>
      <Footer container>
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </main>
  );
}
