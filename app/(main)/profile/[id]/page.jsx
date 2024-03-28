import ProfileForm from "@/components/ProfileForm";
import { Card } from "flowbite-react";
import React from "react";

const ProfilePage = () => {
  return (
    <Card className="flex justify-center items-center h-screen">
      <ProfileForm />
    </Card>
  );
};

export default ProfilePage;
