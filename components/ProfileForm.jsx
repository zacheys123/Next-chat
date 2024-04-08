"use client";
import {
  Alert,
  Button,
  Card,
  Label,
  Select,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

import { updateSlice } from "@/features/updateSlice";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { TiTick } from "react-icons/ti";

import { useGlobalContext } from "@/app/Context/store";
import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileForm = () => {
  const {
    authstate: { errormessage, successmessage },
    setAuthState,
  } = useGlobalContext();
  const router = useRouter();
  const [instrument, setSelectedInstrument] = useState("Piano");
  const [experience, setSelectedExperience] = useState("noExp");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userdata, setData] = useState({
    firstname: "",
    secondname: "",
    city: "",
    age: "",
    phone: "",
    email: "",
    username: "",
    email2: "",
    other: "",
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleInput = (ev) => {
    setData({ ...userdata, [ev.target.name]: ev.target.value });
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    const newdata = { ...userdata, experience, instrument, id };

    updateSlice(newdata, router, setError, setSuccess, setLoading);
  };

  const form_ref = useRef();

  const getUser = async () => {
    const res = await fetch(
      `/api/user/getuser/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      { cache: "no-store" }
    );
    let ares = await res.json();
    console.log(ares);
    setData({
      firstname: ares?.user?.firstname,
      secondname: ares?.user?.secondname,
      city: ares?.user?.city,
      age: ares?.user?.age,
      phone: ares?.user?.phone,
      email: ares?.user?.email,
      email2: ares?.user?.email2,
      username: ares?.user?.username,
      other: ares?.user?.other,
    });
    setSelectedInstrument(ares?.user?.instrument);
    setSelectedExperience(ares?.user?.experience);
    return ares;
  };

  useEffect(() => {
    getUser();
  }, [id]);
  useEffect(() => {
    form_ref.current = userdata;
  }, []);

  const [otherinput, setOther] = useState(false);
  return (
    <div className="bg-green-400 h-0 ">
      <form className="px-3 py-3 mt-[40vh] xl:mt-[50vh] w-[340px] dark:bg-red-300 md:w-[450px]">
        <h1 className="text-xl font-bold text-center mb-2 text-zinc">
          Update Info here
        </h1>
        <div className="flex flex-col gap-3 py-6 px-3">
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              className="mobile-input -py-3 md:py-o w-full focus:ring-0 mb-2 placeholder-gray-400 rounded-sm"
              type="text"
              onChange={handleInput}
              name="firstname"
              value={userdata?.firstname}
              placeholder="Firstname"
            />
            <TextInput
              className="mobile-input -py-3 md:py-o w-full focus:ring-0 mb-2"
              type="text"
              onChange={handleInput}
              name="secondname"
              value={userdata?.secondname}
              placeholder="Second Name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              className="mobile-input -py-3 md:py-o w-full focus:ring-0 mb-2 placeholder-gray-400 rounded-sm"
              type="text"
              onChange={handleInput}
              name="email"
              value={userdata?.email}
              placeholder="Email Address "
            />{" "}
            <TextInput
              className="mobile-input -py-3 md:py-o w-full focus:ring-0 mb-2"
              type="text"
              onChange={handleInput}
              name="age"
              value={userdata?.age}
              placeholder="Age"
            />
          </div>{" "}
          <TextInput
            className="-py-3 md:py-0 w-100 focus:ring-0 mb-2"
            type="text"
            onChange={handleInput}
            name="city"
            value={userdata?.city}
            placeholder="Current City"
          />
          <TextInput
            className=" -py-3 md:py-0 w-100 focus:ring-0 mb-2"
            type="text"
            onChange={handleInput}
            name="phone"
            value={userdata?.phone}
            placeholder="Phone No"
          />{" "}
          <TextInput
            className="mobile-input -py-3 md:py-o w-full focus:ring-0 mt-2"
            type="text"
            onChange={handleInput}
            name="email2"
            value={userdata?.email2}
            placeholder="Email2"
          />
          <TextInput
            className="mobile-input -py-3 md:py-0 md:mt-1  w-full focus:ring-0 mb-2"
            type="text"
            onChange={handleInput}
            name="username"
            value={userdata?.username}
            placeholder="username"
          />
          <div className="max-w-md mobile-input ">
            <div className="mb-2 block">
              <Label
                htmlFor="city"
                value="Instrument of Choice"
                className="text-zinc"
              />
            </div>
            <Select
              id="instruments"
              required
              value={instrument}
              name="instrument"
              onChange={(e) => setSelectedInstrument(e.target.value)}
            >
              <option value="piano">Piano</option>
              <option value="guitar">Guitar</option>
              <option value="drums">Drums</option>
              <option value="bass">Bass Guitar</option>
              <option value="perc">Percussion</option>
              <option value="saxophone">Saxophone</option>
              <option value="trumpet">Trumpet</option>
              <option value="flute">Flute</option>
              <option value="clarinet">Clarinet</option>{" "}
              <option>Ukulele</option>
              <option onClick={() => setOther(true)}>Other...</option>
            </Select>
          </div>
          <div className="max-w-md mobile-input ">
            <div className="mb-2 block">
              <Label
                htmlFor="experience"
                value="Experience"
                className="text-zinc"
              />
            </div>
            <Select
              onChange={(e) => setSelectedExperience(e.target.value)}
              id="experience"
              required
              value={experience}
              name="experience"
            >
              <option value="ten">10yrs -above</option>
              <option value="five">5yrs -10yrs</option>
              <option value="two">2yrs</option>
              <option value="less">less than 2yrs</option>
              <option value="noExp">No Experience</option>
            </Select>
            {otherinput && (
              <Textarea
                name="other"
                value={userdata.other}
                onChange={handleInput}
                placeholder="Other Instrument /instruments..."
                required
                rows={4}
                className="resize-none mt-3"
              ></Textarea>
            )}
          </div>
          {error && (
            <Alert color="failure" icon={HiInformationCircle}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert color="success" icon={TiTick}>
              {success}
            </Alert>
          )}
        </div>
        <Button
          disabled={loading}
          gradientMonochrome="info"
          className="mb-3 w-full"
          type="submit"
          onClick={handleUpdate}
        >
          {!loading ? "Update Data" : <Spinner color="info" />}
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
