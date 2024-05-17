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
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AddCarDetails } from "@/app/store/CarDetails/carDetails.slice";

const FindCarRightPart = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const carVal = props.carData;
  const router = useRouter();
  const dispatch = useDispatch();

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

  const handleCarDetails = () => {
    dispatch(AddCarDetails(carVal));
    router.push(`/cardDetails/${carVal?._id}`);
  };

  return (
    <>
      <div className="shadow-lg w-full mt-5  h-fit  rounded-md bg-white">
        <div className="flex justify-between flex-wrap md:flex-nowrap w-full gap-1 pb-4  md:pr-6">
          <div className="flex flex-wrap lg:flex-nowrap gap-1">
            <div className="pt-6 md:pl-7 pl-3 pr-3 md:pr-7">
              <div className="w-full md:w-[246px] md:h-[228px]">
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
                      className="rounded-lg w-full md:w-[246px] md:h-[228px]"
                      src={item}
                      alt=""
                      height={100}
                      width={100}
                      key={item}
                    />
                  ))}
                </Carousel>
              </div>
              <div className="mt-3 md:w-[246px]">
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

            <div className=" pt-6 lg:ml-0 ml-3 ">
              <h1 className="text-[20px] font-semibold">{carVal?.title}</h1>
              <button className="bg-blue-500 bg-lightGrey text-[12px]  mt-1 px-2 border border-none rounded-full">
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
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.seat} Seats
                      </h6>
                    </div>
                    <div className="flex items-center">
                      <PiSteeringWheelLight className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.manual}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <SpeedIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.perLiter} km/l
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <LocalGasStationIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.oilType}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <DoorFrontOutlinedIcon className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.doors} Doors
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <TbFishHook className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        With tow hook
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <MdOutlineColorLens className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
                        {datas?.carColor}
                      </h6>
                    </div>
                    <div className="flex mt-2 items-center">
                      <MdOutlineDirectionsCar className="text-grey w-[16px] h-[16px]" />
                      <h6 className="ml-1 font-normal text-[#262626] text-[14px]">
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

              <div className="md:mt-4 mt-5 flex flex-wrap ">
                <div>
                  <h6 className="font-bold text-[12px] ">Pick up time</h6>
                  <p className="font-normal text-[16px] text-[#666666]  mb-1">
                    {pickuphour}h.{pickupminute}m - {returnhour}h.{returnminute}
                    m
                  </p>
                </div>
                <div className="md:ml-10 md:mt-0 mt-5">
                  <h6 className="font-bold text-[12px] ">Return time</h6>
                  <p className="font-normal text-[16px] text-[#666666] mb-1">
                    {pickuphour}h.{pickupminute}m - {returnhour}h.{returnminute}
                    m
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <Divider
              orientation="vertical"
              flexItem
              className="md:block hidden"
              style={{
                margin: "18px 4px",
                height: "auto",
                borderRight: "2px dashed #CCCCCC", // Adjust color and width as needed
              }}
            />

            <div className=" py-4 md:pl-2 flex md:flex-col md:gap-0 gap-5 md:items-start  items-end w-full">
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
                <p className="mt-4 text-[14px] font-semibold">
                  {carVal?.perDayCost} kr.
                  <span className="text-[12px] font-medium">/day</span>
                </p>
                <p className="mt-4 text-[14px] font-semibold">
                  {carVal?.perDayCost * 28} kr.
                  <span className="text-[12px] font-medium">/month</span>
                </p>
                {/* <Link href="/carBookingSuccess"> */}
              </div>
              <div className="text-center w-full">
                <button
                  type="button"
                  className="text-[#4F46E5] md:mt-[80px] mt-7 w-full text-[14px] font-medium  border border-[#4F46E5]  bg-white rounded-sm py-1"
                  onClick={props.NextGoButton}
                >
                  Rent now
                </button>
                <p
                  className="md:mt-4 mt-3 text-[#4F46E5] md:text-[14px] text-[18px] font-medium cursor-pointer"
                  onClick={handleCarDetails}
                >
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
