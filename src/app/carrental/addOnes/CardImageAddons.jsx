"use client";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Divider from "@mui/material/Divider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

const CardImageAddons = () => {
  const [showContentPayment, setShowContentPayment] = useState(true);

  const { carInfo, extraKilometers } = useSelector(
    (state) => state.carBookInfo
  );
  const date1 = new Date(carInfo?.pickup_time);
  const date2 = new Date(carInfo?.return_time);

  const formattedPicupDate = date1.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedReturnDate = date2.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleToggleContentPayment = () => {
    setShowContentPayment(!showContentPayment);
  };
  return (
    <>
      <div className="sm:w-[360px] bg-[#FFFFFF]">
        <div className="w-full relative">
          <Carousel
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
              style: {
                marginLeft: "30px",
                backgroundColor: "#141414",
                opacity: "0.5",
              },
            }}
            indicatorContainerProps={{
              style: {
                position: "absolute",
                bottom: "20px", // adjust this value according to your layout
                // top: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                zIndex: 1000,
                color: "#ffffff",
              },
            }}
            navButtonsWrapperProps={{ style: { marginRight: "18px" } }}
          >
            {carInfo?.subImagees?.map((item, key) => {
              return (
                <div className="flex gap-10 relative w-full" key={key}>
                  <Image
                    className="rounded-lg w-fit h-[252px]"
                    src={item}
                    alt=""
                    height={300}
                    width={300}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="w-full px-5 pb-6 mt-5">
          <button className="bg-blue-500 text-[#262626] bg-lightGrey px-2 border border-none rounded-full">
            Mid range car
          </button>
          <h1 className=" font-semibold text-[#262626] mt-3 text-[24px]">
            {carInfo?.title}
          </h1>
          <div className="mt-10 flex">
            <div className="relative">
              <p className="w-4 h-4 bg-lightBlue rounded-full"></p>
              <Divider
                orientation="vertical"
                flexItem
                className="absolute left-2 top-0 bg-lightBlue opacity-35 transition-all duration-1000"
                style={{
                  top: "0",
                  height: "130px",
                  transitionProperty: "top, height",
                }}
              />
            </div>
            <div className="ml-4">
              <h1 className=" font-semibold -mt-2 text-[20px] text-[#262626]">
                Pick up : København
              </h1>
              <h1 className="font-medium  mt-1 text-[16px] text-[#666666]">
                Date: 26 Feb, 2024
              </h1>
              <h1 className="font-medium  mt-1 text-[16px] text-[#666666]">
                Between {formattedPicupDate} - {formattedReturnDate}
              </h1>
              <button className="bg-blue-500 bg-[#e2e1fa] text-[#262626] text-[12px] font-medium  mt-3 px-2 border border-none rounded-full">
                3 days
              </button>
            </div>
          </div>
          <div className="mt-5 flex">
            <div className="relative">
              <p className="w-4 h-4 bg-lightBlue rounded-full"></p>
              {/* <Divider
                      orientation="vertical"
                      flexItem
                      className="absolute left-2 top-4 h-44 bg-lightBlue opacity-35"
                    /> */}
            </div>
            <div className="ml-4">
              <h1 className=" font-semibold -mt-2 text-[20px] text-[#262626]">
                Drop off : Grundtvigs Allé 178, 6400 Sønderborg
              </h1>
              <h1 className="font-medium  mt-1 text-[16px] text-[#666666]">
                Date: 29 Feb, 2024
              </h1>
              <h1 className="font-medium  mt-1 text-[16px] text-[#666666]">
                Between {formattedPicupDate} - {formattedReturnDate}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-6 w-full bg-[#FFFFFF] p-5 rounded-lg">
        <div
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={handleToggleContentPayment}
        >
          <h1 className="font-bold  text-[20px]">Price breakdown</h1>
          {showContentPayment ? (
            <IoIosArrowUp className="w-8 h-8 opacity-30" />
          ) : (
            <IoIosArrowDown className="w-8 h-8 opacity-30" />
          )}
        </div>
        <div
          className={`${
            showContentPayment ? "" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <Divider orientation="horizontal" flexItem className="w-full mt-5" />
          <div className="flex justify-between mt-5">
            <div>
              <h4 className="text-[#262626] text-[16px] font-semibold">
                Rental price
              </h4>
              <h4 className="text-[#666666] text-[12px] font-medium">
                DKK 299.00
                <span className="text-[#999999] text-[12px]">/day</span>
              </h4>
            </div>
            <h4 className="text-[#262626] text-[16px] font-semibold">
              DKK 999
            </h4>
          </div>
          <div className="flex justify-between mt-5">
            <h4 className="text-[#262626] text-[16px] font-semibold">
              Included KM - 700 km
            </h4>

            <h4 className="text-[#262626] text-[16px] font-semibold">DKK 0</h4>
          </div>
          <h4 className="text-[#262626] text-[16px] font-semibold mt-[36px]">
            Extra Kilometers
          </h4>
          <Divider orientation="horizontal" flexItem className="w-full mt-3" />
          <div className="flex justify-between mt-5">
            <div>
              <h4 className="text-[#666666] text-[16px] font-medium">
                {extraKilometers} km
              </h4>
              <h4 className="text-[#666666] text-[12px] font-medium">
                DKK 1.60/km
              </h4>
            </div>
            <h4 className="text-[#262626] text-[16px] font-semibold">DKK 30</h4>
          </div>
          <h4 className="text-[#262626] text-[16px] font-semibold mt-[36px]">
            Additional price
          </h4>
          <Divider orientation="horizontal" flexItem className="w-full mt-3" />
          <div className="flex justify-between mt-5">
            <h4 className="text-[#666666] text-[16px] font-medium">
              Winter wheels <span className="ml-2">x1 </span>
            </h4>

            <h4 className="text-[#262626] text-[16px] font-semibold">
              DKK 1375
            </h4>
          </div>
          <div className="flex justify-between mt-5">
            <h4 className="text-[#666666] text-[16px] font-medium">
              Roof box <span className="ml-2">x1 </span>
            </h4>

            <h4 className="text-[#262626] text-[16px] font-semibold">
              DKK 100
            </h4>
          </div>
          <div className="flex justify-between mt-5">
            <h4 className="text-[#666666] text-[16px] font-medium">
              Self risk insurance
            </h4>

            <h4 className="text-[#262626] text-[16px] font-semibold">
              DKK 120
            </h4>
          </div>
        </div>
      </div>
      <div>
        <div className=" mt-6 w-full bg-[#FFFFFF] px-6 pt-6 pb-5 rounded-lg">
          <div>
            <input
              className="w-full p-2 rounded-md border border-lightGrey"
              placeholder="Promotion code"
            />
          </div>
        </div>
        <div className=" mt-6 w-full bg-[#FFFFFF] p-5 rounded-lg">
          <h1 className="font-bold  text-[20px]">Total price for 3 days</h1>
          <p className="text-[#999999] text-[12px] font-medium mt-1">
            All prices are incl. VAT
          </p>
          <Divider orientation="horizontal" flexItem className="w-full mt-5" />
          <div className="flex justify-between mt-5">
            <h1 className=" font-semibold text-[20px]">To pay</h1>
            <div className="text-right">
              <h1 className="text-[#4F46E5] font-semibold text-[24px]">
                {carInfo?.perDayCost * 3} kr.
              </h1>
              <p className="text-[#666666] text-[14px] font-medium">
                {carInfo?.perDayCost} kr. /day
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardImageAddons;
