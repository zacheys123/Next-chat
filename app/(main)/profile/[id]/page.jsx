import ProfileForm from "@/components/ProfileForm";
import Cover from "@/components/Cover";
import GigsPosted from "@/components/GigsPosted";
import GigsAccepted from "@/components/GigsAccepted";
import Nav_Links from "@/components/Nav_Links";

const ProfilePage = () => {
  return (
    <div className="flex flex-col  h-screen">
      <Nav_Links />
      <Cover />
      <div className="flex flex-row gap-3">
        {" "}
        <GigsPosted />
        <GigsAccepted />
      </div>
    </div>
  );
};

export default ProfilePage;
