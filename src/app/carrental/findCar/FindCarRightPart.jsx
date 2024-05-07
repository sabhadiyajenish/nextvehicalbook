"use client";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { MdOutlineColorLens, MdOutlineDirectionsCar } from "react-icons/md";
import { PiSteeringWheelLight } from "react-icons/pi";
import { TbFishHook } from "react-icons/tb";
import Divider from "@mui/material/Divider";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";

const FindCarRightPart = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sem in posuere vestibulum. Vestibulum congue nisl sed massa consectetur.";

  const truncatedContent = content.slice(0, 50);

  return (
    <>
      <div className="shadow-lg w-full mt-5  h-fit  rounded-md bg-white">
        <div className="flex justify-between flex-wrap md:flex-nowrap w-full gap-1 pb-6">
          <div className="flex flex-wrap lg:flex-nowrap gap-1">
            <div className="pt-6 pl-7 pr-7 w-full md:w-[400px] lg:w-[530px]">
              <div className="w-full ">
                <Carousel
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{
                    style: {
                      marginLeft: "30px",
                      marginTop: "-20px",
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
                        className="flex gap-10 flex-shrink-0 relative w-auto"
                        key={key}
                      >
                        {[1, 2, 3, 4, 5].map((card, item) => (
                          <Image
                            className="rounded-lg lg:w-[530px] h-[240px]"
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
              <div className="-mt-4">
                <p className="text-[#666666] text-[12px] font-normal">
                  {isExpanded ? content : truncatedContent + " ..."}
                </p>
                <p
                  className="text-[#4F46E5] text-[12px] font-normal cursor-pointer	"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "read less" : "read more"}
                </p>
              </div>
            </div>

            <div className=" pt-6 md:pr-0 pr-7 w-full">
              <h1 className="text-[20px] font-semibold">
                Renault Clio Sport Tourer
              </h1>
              <button class="bg-blue-500 bg-lightGrey text-[12px]  mt-2 px-2 border border-none rounded-full">
                Mid range car
              </button>

              <div className="grid grid-cols-3  mt-3 auto-cols-max md:auto-cols-min">
                <div className="flex items-center">
                  <AirlineSeatReclineExtraIcon className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">5 Seats</h6>
                </div>
                <div className="flex items-center">
                  <PiSteeringWheelLight className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">Manual</h6>
                </div>
                <div className="flex mt-2 items-center">
                  <SpeedIcon className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">18.5km/l</h6>
                </div>
                <div className="flex mt-2 items-center">
                  <LocalGasStationIcon className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">Petrol</h6>
                </div>
                <div className="flex mt-2 items-center">
                  <DoorFrontOutlinedIcon className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">5 Doors</h6>
                </div>
                <div className="flex mt-2 items-center">
                  <TbFishHook className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">
                    With tow hook
                  </h6>
                </div>
                <div className="flex mt-2 items-center">
                  <MdOutlineColorLens className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">White</h6>
                </div>
                <div className="flex mt-2 items-center">
                  <MdOutlineDirectionsCar className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-normal text-[14px]">2012 Model</h6>
                </div>
              </div>

              <h6 className="font-bold text-[12px] mt-10">
                Department (Pick up) address
              </h6>
              <div className="relative">
                <div className="flex mt-1 items-center">
                  <GrLocation className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-medium text-[14px]">
                    Grundtvigs Allé 178, 6400 Sønderborg
                  </h6>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap ">
                <div>
                  <h6 className="font-bold text-[12px] ">Pick up time</h6>
                  <p className="font-normal text-[16px] text-[#666666]  mb-1">
                    8.30 - 15.00
                  </p>
                </div>
                <div className="ml-3 md:ml-16">
                  <h6 className="font-bold text-[12px] ">Return time</h6>
                  <p className="font-normal text-[16px] text-[#666666] mb-1">
                    8.30 - 15.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mr-7">
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "18px 4px", height: "auto" }}
            />
            <div className="bg-gray-200 py-4 pl-2 w-full ml-7">
              <div className="w-full flex flex-col items-center justify-center">
                <div
                  className={`p-4 border border-[#E6E6E6] w-[166px] md:h-[82px] text-center rounded-md  relative`}
                  // onClick={() => setToggleCard(1)}
                >
                  <h6 className="text-[20px] font-extrabold">999 kr.</h6>
                  <p className="font-normal text-[12px] ">
                    total (as per day cost)
                  </p>
                </div>
                <p className="mt-3 text-[14px] font-semibold">
                  299 kr.
                  <span className="text-[12px] font-medium">/day</span>
                </p>
                <p className="mt-3 text-[14px] font-semibold">
                  1299 kr.
                  <span className="text-[12px] font-medium">/month</span>
                </p>
                {/* <Link href="/carBookingSuccess"> */}
                <button
                  type="button"
                  className="text-[#4F46E5] mt-20 w-full text-[14px] font-medium  border border-[#4F46E5]  bg-white rounded-sm px-10 py-2"
                  onClick={props.NextGoButton}
                >
                  Rent now
                </button>
                {/* </Link>/ */}
                <p className="mt-2 text-[#4F46E5] text-[14px] font-medium">
                  View car details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCarRightPart;
