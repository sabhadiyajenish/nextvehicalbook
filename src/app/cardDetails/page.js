"use client";
import { Divider } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useState } from "react";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import SpeedIcon from "@mui/icons-material/Speed";
import { PiSteeringWheelLight } from "react-icons/pi";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import { TbFishHook } from "react-icons/tb";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlineDirectionsCar } from "react-icons/md";
import Link from "next/link";
const Page = () => {
  const [toggleCard, setToggleCard] = useState(1);
  const [pickUpDate, setpickUpDate] = useState(dayjs());
  const [dropUpDate, setDropUpDate] = useState(dayjs(pickUpDate));
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  return (
    <>
      <div className="bg-lightWhite">
        <div className="h-fit  flex items-center justify-center ">
          <div className="shadow-lg w-5/6 mt-16 md:mt-24 md:w-[1400px] p-8 h-fit relative rounded-md bg-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="bg-gray-200 sm:col-span-2 p-4">
                <Image
                  className="rounded-lg w-full md:w-[446px] h-50 md:h-[337px]"
                  src="/Medium.jpg"
                  alt=""
                  height={100}
                  width={100}
                  sizes="100vw"
                />
                <div className="mt-6 ">
                  <div className="lg:w-[446px] grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5].map((items, key) => {
                      return (
                        <Image
                          className="rounded-lg w-full h-50 md:h-[94px]"
                          src="/Medium.jpg"
                          alt=""
                          height={100}
                          width={100}
                          sizes="100vw"
                          key={key}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 sm:col-span-2 p-4">
                <h1 className="font-extrabold text-[32px]">
                  Renault Clio Sport Tourer
                </h1>
                <button class="bg-blue-500 bg-lightGrey  mt-2 px-2 border border-none rounded-full">
                  Mid range car
                </button>
                <h6 className="font-bold text-md mt-10 mb-2">
                  Car Information:
                </h6>
                <div className="grid grid-cols-2  gap-1 mt-3 auto-cols-max md:auto-cols-min">
                  <div className="flex items-center">
                    <AirlineSeatReclineExtraIcon className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">5 Seats</h6>
                  </div>
                  <div className="flex items-center">
                    <PiSteeringWheelLight className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">Manual</h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <SpeedIcon className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">18.5km/l</h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <LocalGasStationIcon className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">Petrol</h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <DoorFrontOutlinedIcon className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">5 Doors</h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <TbFishHook className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">
                      With tow hook
                    </h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <MdOutlineColorLens className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">White</h6>
                  </div>
                  <div className="flex mt-2 items-center">
                    <MdOutlineDirectionsCar className="text-grey w-6 h-7" />
                    <h6 className="ml-2 font-medium text-[16px]">2012 Model</h6>
                  </div>
                </div>
                <h6 className="font-bold text-md mt-10 mb-2">Equipment:</h6>
                <div className="flex flex-wrap md:items-center ">
                  <p className="text-[16px] font-normal">Air conditioning</p>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="ml-3 mr-3 h-[20px]"
                  />
                  <p className="text-[16px] font-normal">Seat heating</p>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="ml-3 mr-3 h-[20px]"
                  />
                  <p className="text-[16px] font-normal">Isofix</p>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="ml-3 mr-3 h-[20px]"
                  />
                  <p className="text-[16px] font-normal">Bluetooth</p>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="ml-3 mr-3 h-[20px]"
                  />
                  <p className="text-[16px] font-normal">USB</p>
                </div>
                <h6 className="font-bold text-md mt-10 mb-2">
                  Pick up location:
                </h6>
                <div className="relative">
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 border border-lightGrey w-full rounded-lg"
                    placeholder="location details"
                  />
                  <div
                    className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                  >
                    <GrLocation />
                  </div>
                </div>
                <h6 className="font-bold text-md mt-20 mb-2">
                  Car available from
                  <span className="text-lightBlue"> 29 Feb</span> or find
                  availability:
                </h6>
                <div className="flex flex-wrap gap-4  md:flex-nowrap justify-between">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={pickUpDate}
                      onChange={(newValue) => setpickUpDate(newValue)}
                      defaultValue={[today, tomorrow]}
                      minDate={today}
                      disablePast
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={pickUpDate}
                      onChange={(newValue) => setpickUpDate(newValue)}
                      defaultValue={[today, tomorrow]}
                      minDate={today}
                      disablePast
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-5 flex flex-wrap ">
                  <div>
                    <h6 className="font-bold text-md mt-10 mb-2">
                      Pick up time
                    </h6>
                    <p className="font-normal text-md mt-2 mb-1">
                      8.30 - 15.00
                    </p>
                  </div>
                  <div className="ml-3 md:ml-16">
                    <h6 className="font-bold text-md mt-10 mb-2">
                      Return time
                    </h6>
                    <p className="font-normal text-md mt-2 mb-1">
                      8.30 - 15.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 p-4 w-full">
                <div className="w-full flex flex-col items-center justify-center">
                  <div
                    className={`p-4 border w-[110px] h-[90px] ${
                      toggleCard == "1"
                        ? "border-lightBlue"
                        : "border-lightGrey"
                    }  shadow-md text-center rounded-md  relative`}
                    onClick={() => setToggleCard(1)}
                  >
                    <h6 className="text-lg font-extrabold">299 kr.</h6>
                    <p className="font-normal text-md ">per day</p>
                    {toggleCard == "1" && (
                      <Image
                        className="rounded-lg  absolute -top-2 -right-2 z-50 w-5 h-5 bg-white"
                        src="/CheckCircle.png"
                        alt=""
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                  <div
                    className={`p-4 mt-7 border w-[110px] h-[90px] ${
                      toggleCard == "2"
                        ? "border-lightBlue"
                        : "border-lightGrey"
                    } shadow-md text-center rounded-md  relative`}
                    onClick={() => setToggleCard(2)}
                  >
                    <h6 className="text-lg font-extrabold">299 kr.</h6>
                    <p className="font-normal text-md ">per day</p>
                    {toggleCard == "2" && (
                      <Image
                        className="rounded-lg  absolute -top-2 -right-2 z-50 w-5 h-5 bg-white"
                        src="/CheckCircle.png"
                        alt=""
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                  <Link href="/carBookingSuccess">
                    <button
                      type="button"
                      className="text-white mt-7 w-[115px] ml-3   bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit mt-10 flex items-center justify-center">
          <div className="shadow-lg w-5/6 md:w-[1400px] p-8 h-fit relative rounded-md bg-blue-300 bg-white">
            <div className="grid md:grid-cols-3 gap-2">
              <div className="bg-gray-200 p-4">
                <h6 className="font-bold text-md mt-5">About the car:</h6>
                <p className="font-normal text-md mt-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo .
                </p>
              </div>
              <div className="bg-gray-200 p-4">
                <p className="font-normal text-md mt-5 md:mt-16 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo .
                </p>
              </div>{" "}
              <div className="bg-gray-200 p-4 md:ml-12 sm:ml-8">
                <h6 className="font-bold text-md mt-5 ">The price includes:</h6>
                <div className="mt-5">
                  <div className="flex ">
                    <Image
                      className="rounded-lg w-7 h-7"
                      src="/Check.png"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="ml-5 font-normal text-md">100 km per day</h6>
                  </div>
                  <div className="flex mt-2">
                    <Image
                      className="rounded-lg w-7 h-7"
                      src="/Check.png"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="ml-5 font-normal text-md">
                      Roadside assistance
                    </h6>
                  </div>
                  <div className="flex mt-2">
                    <Image
                      className="rounded-lg w-7 h-7"
                      src="/Check.png"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="ml-5 font-normal text-md">Insurances</h6>
                  </div>
                  <div className="flex mt-2">
                    <Image
                      className="rounded-lg w-7 h-7"
                      src="/Check.png"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="ml-5 font-normal text-md">
                      Can be delivered outside opening hours
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit mt-10 pb-10 flex items-center justify-center">
          <div className="shadow-lg w-5/6 md:w-[1400px] p-8 h-fit relative rounded-md bg-blue-300 bg-white">
            <div className="flex flex-wrap md:flex-nowrap w-full gap-2">
              <div className="bg-gray-200 w-full md:w-[300px] p-4">
                <h6 className="font-bold text-md mt-5">Department Address</h6>
                <p className=" text-xl font-normal mt-5 text-justify">
                  Grundtvigs Allé 178, <br />
                  6400 Sønderborg
                </p>
              </div>
              <div className="bg-gray-200  w-full md:ml-8 p-4">
                <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={{ height: "400px", width: "100%" }}
                    center={{ lat: -34.397, lng: 150.644 }}
                    zoom={8}
                  />
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
