"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Divider from "@mui/material/Divider";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Page = () => {
  const [showContent, setShowContent] = useState(true);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <div className="bg-lightWhite">
        <div className="h-fit  flex items-center justify-center ">
          <div className="shadow-lg w-5/6 mt-16 md:mt-24 md:w-[1400px] p-8 h-fit relative rounded-md bg-white">
            <div className="flex  items-center sm:flex-nowrap p-4">
              <Image
                className="rounded-lg w-[80px] md:w-[120px] h-[80px] md:h-[120px]"
                src="/success.png"
                alt=""
                height={100}
                width={100}
              />
              <h1 className="ml-10 mt-5 md:mt-0 font-extrabold text-xl sm:text-3xl md:text-5xl">
                Your car is booked !
              </h1>
            </div>
            <div className="flex flex-wrap md:flex-nowrap w-full md:w-5/6 ">
              <div className="w-[490px] relative">
                <Carousel
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{
                    style: {
                      marginLeft: "30px",
                      backgroundColor: "#141414",
                      opacity: "0.5",
                    },
                  }}
                  indicatorIconButtonProps={{
                    style: {
                      // position: "absolute",
                      marginTop: "-110px",
                    },
                  }}
                  navButtonsWrapperProps={{ style: { marginRight: "18px" } }}
                >
                  {[1, 2, 3].map((item, key) => {
                    return (
                      <div
                        className="flex gap-10 flex-shrink-0 relative w-auto md:p-4"
                        key={key}
                      >
                        {[1, 2, 3, 4, 5].map((card, item) => (
                          <Image
                            className="rounded-lg w-[490px] md:ml-2 h-[337px]"
                            src="/Medium.jpg"
                            alt=""
                            height={100}
                            width={100}
                            key={item}
                          />
                        ))}
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className="w-[490] md:ml-8 p-2">
                <button class="bg-blue-500 bg-lightGrey  mt-2 px-2 border border-none rounded-full">
                  Mid range car
                </button>
                <h1 className="font-extrabold mt-3 text-[20px]">
                  Renault Clio Sport Tourer
                </h1>
                <div className="mt-10 flex">
                  <div className="relative">
                    <p className="w-4 h-4 bg-lightBlue rounded-full"></p>
                    <Divider
                      orientation="vertical"
                      flexItem
                      className="absolute left-2 top-4 h-44 bg-lightBlue opacity-35"
                    />
                  </div>
                  <div className="ml-5">
                    <h1 className="font-bold -mt-2 text-[24px]">
                      Pick up : København
                    </h1>
                    <h1 className="font-bold mt-3 text-[20px] text-lightBlue">
                      Date: 26 Feb, 2024
                    </h1>
                    <h1 className="font-bold opacity-40 mt-3 text-[20px]">
                      Between 8.30AM - 6 PM
                    </h1>
                    <button class="bg-blue-500 bg-[#e2e1fa]  mt-6 px-2 border border-none rounded-full">
                      Rental period: 3 days
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex">
                  <div className="relative">
                    <p className="w-4 h-4 bg-lightBlue rounded-full"></p>
                    {/* <Divider
                      orientation="vertical"
                      flexItem
                      className="absolute left-2 top-4 h-44 bg-lightBlue opacity-35"
                    /> */}
                  </div>
                  <div className="ml-5">
                    <h1 className="font-bold -mt-2 text-[24px]">
                      Drop off : Grundtvigs
                    </h1>
                    <h1 className="font-bold mt-3 text-[20px] text-lightBlue">
                      Date: 29 Feb, 2024
                    </h1>
                    <h1 className="font-bold opacity-40 mt-3 text-[20px]">
                      Between 8.30AM - 6 PM
                    </h1>
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
                <p className=" text-xl font-semibold mt-3 text-justify text-lightBlue">
                  Grundtvigs Allé 178, <br />
                  6400 Sønderborg
                </p>
                <h6 className="font-bold text-md mt-8">
                  Dealer’s Contact Number
                </h6>
                <p className=" text-xl font-semibold mt-3 text-justify text-lightBlue">
                  +45 12346589
                </p>
              </div>
              <div className="bg-gray-200  w-full md:ml-8 p-4">
                <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={{ height: "300px", width: "100%" }}
                    center={{ lat: -34.397, lng: 150.644 }}
                    zoom={8}
                  />
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit mt-4 pb-10 flex items-center justify-center">
          <div className="shadow-lg w-5/6 md:w-[1400px] p-8 h-fit relative rounded-md bg-blue-300 bg-white">
            <div
              className="flex justify-between items-center w-full px-4"
              onClick={handleToggleContent}
            >
              <h1 className="font-bold mt-3 text-[20px]">Payment summary</h1>
              {showContent ? (
                <IoIosArrowUp className="w-8 h-8" />
              ) : (
                <IoIosArrowDown className="w-8 h-8" />
              )}
            </div>
            <div
              className={`flex flex-wrap md:flex-nowrap justify-between w-full gap-2 p-4 transition-all duration-300 
                ${showContent ? "" : "opacity-0 h-0 overflow-hidden"}
              }`}
            >
              <div className="mt-5 h-fit w-full md:w-[526px] border border-lightGrey shadow rounded-lg px-6 py-6">
                <div className="flex justify-between gap-2">
                  <div>
                    <h4 className=" font-semibold mt-3 text-[16px]">
                      Rental price
                    </h4>
                    <h6 className="font-normal text-[12px]">299 kr. /day</h6>
                  </div>
                  <h4 className=" font-semibold mt-3 text-[16px]">999 kr.</h4>
                </div>
                <div className="flex justify-between gap-2 mt-3">
                  <h4 className=" font-semibold mt-3 text-[16px]">
                    Included KM - 700 km
                  </h4>

                  <h4 className=" font-semibold mt-3 text-[16px]">0 kr.</h4>
                </div>
                <div className="flex justify-between gap-2 mt-3">
                  <h4 className=" font-semibold mt-5 text-[16px]">
                    Extra Kilometers
                  </h4>
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className=" left-2 w-full mt-2 bg-lightBlue opacity-15"
                />
                <div className="flex mt-3 justify-between gap-2">
                  <div>
                    <h4 className=" mt-3 font-normal text-[16px]">2 Km</h4>
                    <h6 className="font-normal opacity-45 text-[12px]">
                      160 kr. /day
                    </h6>
                  </div>
                  <h4 className=" font-semibold mt-3 text-[16px]">30 kr.</h4>
                </div>
                <div className="flex justify-between gap-2 mt-3">
                  <h4 className=" font-semibold mt-5 text-[16px]">
                    Additional price
                  </h4>
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className=" left-2 w-full mt-2 bg-lightBlue opacity-15"
                />
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Winter wheels<span className="ml-2">x1</span>
                  </h4>

                  <h4 className=" font-semibold mt-3 text-[16px]">1,375 kr.</h4>
                </div>
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Roof box<span className="ml-2">x2</span>
                  </h4>

                  <h4 className=" font-semibold mt-3 text-[16px]">100 kr.</h4>
                </div>{" "}
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Self risk insurance<span className="ml-2"></span>
                  </h4>

                  <h4 className=" font-semibold mt-3 text-[16px]">120 kr.</h4>
                </div>
              </div>
              <div className="mt-3 md:mt-0 h-fit w-full md:w-[400px] rounded-lg px-4 py-1">
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Total amount per day
                  </h4>

                  <h4 className=" font-bold mt-3 text-[20px]">400 kr.</h4>
                </div>
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Rental period
                  </h4>

                  <h4 className=" font-bold mt-3 text-[20px]">3 days</h4>
                </div>
                <div className="flex mt-3 justify-between gap-2">
                  <h4 className=" mt-3 font-normal text-[16px]">
                    Payment type
                  </h4>

                  <h4 className=" font-bold mt-3 text-[20px]">
                    Online payment
                  </h4>
                </div>
                <div className="mt-10 w-full h-fit bg-[#f2f2f2] text-center p-2 md:p-4 rounded-lg">
                  <h4 className=" font-bold mt-3 text-[36px] text-lightBlue">
                    1.200 kr.
                  </h4>
                  <h4 className=" mt-1 font-normal text-[24px] text-grey">
                    Total amount paid
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
