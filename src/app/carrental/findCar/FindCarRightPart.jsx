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
  const carVal = props.carData;
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const content = carVal?.description;

  const truncatedContent = content.slice(0, 50);
  const date1 = new Date(carVal?.pickup_time);
  const date2 = new Date(carVal?.return_time);

  const pickuphour = date1.getHours();
  const pickupminute = date1.getMinutes();

  const returnhour = date2.getHours();
  const returnminute = date2.getMinutes();
  return (
    <>
      <div className="shadow-lg w-full mt-5  h-fit  rounded-md bg-white">
        <div className="flex justify-between flex-wrap md:flex-nowrap w-full gap-1 pb-6">
          <div className="flex flex-wrap lg:flex-nowrap gap-1">
            <div className="pt-6 md:pl-7 pl-3 pr-3 md:pr-7 w-full md:w-[400px] lg:w-[530px]">
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
                  {carVal?.subImagees?.map((item, i) => (
                    <Image
                      className="rounded-lg w-full lg:w-[530px] h-[240px]"
                      src={item}
                      alt=""
                      height={100}
                      width={100}
                      key={item}
                    />
                  ))}
                </Carousel>
              </div>
              <div className="-mt-4">
                <p className="text-[#666666] md:text-[12px] text-[18px] font-normal">
                  {isExpanded ? content : truncatedContent + " ..."}
                </p>
                <p
                  className="text-[#4F46E5] md:text-[12px] text-[18px] font-normal cursor-pointer	"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "read less" : "read more"}
                </p>
              </div>
            </div>

            <div className=" pt-6 lg:pr-0 pr-2 lg:ml-0 ml-3 w-full">
              <h1 className="text-[20px] font-semibold">{carVal?.title}</h1>
              <button className="bg-blue-500 bg-lightGrey text-[12px]  mt-2 px-2 border border-none rounded-full">
                Mid range car
              </button>
              {carVal?.carInformation?.map((datas, index) => {
                return (
                  <div
                    className="grid grid-cols-3  mt-3 auto-cols-max md:auto-cols-min"
                    key={index}
                  >
                    <div className="flex items-center">
                      <AirlineSeatReclineExtraIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.seat} Seats
                      </h6>
                    </div>
                    <div className="flex items-center">
                      <PiSteeringWheelLight className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.manual}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <SpeedIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.perLiter} km/l
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <LocalGasStationIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.oilType}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <DoorFrontOutlinedIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.doors} Doors
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <TbFishHook className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        With tow hook
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <MdOutlineColorLens className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.carColor}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <MdOutlineDirectionsCar className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-2 font-normal text-[14px]">
                        {datas?.model} Model
                      </h6>
                    </div>
                  </div>
                );
              })}

              <h6 className="font-bold text-[12px] mt-10">
                Department (Pick up) address
              </h6>
              <div className="relative">
                <div className="flex mt-1 items-center">
                  <GrLocation className="text-grey w-[16px] h-[16px]" />
                  <h6 className="ml-2 font-medium text-[14px]">
                    {carVal?.address}
                  </h6>
                </div>
              </div>

              <div className="md:mt-4 mt-6 flex flex-wrap ">
                <div>
                  <h6 className="font-bold text-[12px] ">Pick up time</h6>
                  <p className="font-normal text-[16px] text-[#666666]  mb-1">
                    {pickuphour}h.{pickupminute}m - {returnhour}h.{returnminute}
                    m
                  </p>
                </div>
                <div className=" md:ml-16 ml-10">
                  <h6 className="font-bold text-[12px] ">Return time</h6>
                  <p className="font-normal text-[16px] text-[#666666] mb-1">
                    {pickuphour}h.{pickupminute}m - {returnhour}h.{returnminute}
                    m
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mr-7">
            <Divider
              orientation="vertical"
              flexItem
              className=" md:block hidden"
              style={{ margin: "18px 4px", height: "auto" }}
            />
            <div className=" py-4 md:pl-2 flex md:flex-col md:gap-0 gap-5 md:items-start  items-end w-full md:ml-7 ml-3">
              <div className="w-full flex flex-col items-center justify-center">
                <div
                  className={`p-4 border border-[#E6E6E6] w-[166px] md:h-[82px] text-center rounded-md  relative`}
                  // onClick={() => setToggleCard(1)}
                >
                  <h6 className="text-[20px] font-extrabold">
                    {carVal?.perDayCost} kr.
                  </h6>
                  <p className="font-normal text-[12px] ">
                    total (as per day cost)
                  </p>
                </div>
                <p className="mt-3 text-[14px] font-semibold">
                  {carVal?.perDayCost} kr.
                  <span className="text-[12px] font-medium">/day</span>
                </p>
                <p className="mt-3 text-[14px] font-semibold">
                  {carVal?.perDayCost * 28} kr.
                  <span className="text-[12px] font-medium">/month</span>
                </p>
                {/* <Link href="/carBookingSuccess"> */}
              </div>
              <div className="text-center w-full md:ml-0 sm:ml-10 ml-5">
                <button
                  type="button"
                  className="text-[#4F46E5] md:mt-20 mt-7 w-full text-[14px] font-medium  border border-[#4F46E5]  bg-white rounded-sm px-10 py-2"
                  onClick={props.NextGoButton}
                >
                  Rent now
                </button>
                <Link href="/cardDetails">
                  <p className="md:mt-4 mt-3 text-[#4F46E5] md:text-[14px] text-[18px] font-medium cursor-pointer">
                    View car details
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCarRightPart;
