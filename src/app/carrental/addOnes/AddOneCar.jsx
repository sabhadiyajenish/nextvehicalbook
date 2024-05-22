"use client";
import HomeNavLine from "@/app/components/homeNavLine";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import CardImageAddons from "./CardImageAddons";
import { useDispatch, useSelector } from "react-redux";
import {
  AddDriver,
  AddExtraKilometers,
  AddInsurance,
  AddRoofBox,
  AddWinterWheel,
} from "@/app/store/CarBookInfo/carbook.slice";
const AddOneCar = (props) => {
  const { extraKilometers, roofBox, winterWheel, driver } = useSelector(
    (state) => state.carBookInfo
  );
  const [counters, setCounters] = useState({
    kilometers: extraKilometers,
    winterWheels: winterWheel,
    roofBox: roofBox,
    driver: driver,
  });
  const [toggleCard, setToggleCard] = useState(1);
  const [carData, setCarData] = useState(props?.item?.carInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    dispatch(AddExtraKilometers(counters?.kilometers));
    dispatch(AddWinterWheel(counters?.winterWheels));
    dispatch(AddRoofBox(counters?.roofBox));
    dispatch(AddInsurance(toggleCard == 1 ? "Basic" : "Premium"));
  }, [counters]);
  const incrementCounter = (counterName, initialValue = 1) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counterName]: Math.max(0, prevCounters[counterName] + initialValue), // Ensure non-negative value
    }));
  };

  const decrementCounter = (counterName, initialValue = 1) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counterName]: Math.max(0, prevCounters[counterName] - initialValue), // Ensure non-negative value
    }));
  };
  const AddAditionalDriver = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      driver: !counters?.driver, // Ensure non-negative value
    }));
    dispatch(AddDriver(counters?.driver));
  };
  return (
    <>
      <div className="bg-[#F2F2F2] pb-5">
        <div className=" container mx-auto max-w-[1366px] ">
          <div className="py-3 md:mx-[80px]">
            <HomeNavLine
              titleText1="Search results"
              titleText2="Add-ons"
              Icon={CiHome}
            />
          </div>
          <div className="flex lg:flex-nowrap  gap-6 flex-wrap md:mx-[80px]">
            <div className="w-full">
              <div className="lg:w-[822px] w-full py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <h1 className=" font-semibold text-[#262626] text-[24px]">
                  Kilometers
                </h1>
                <p className="text-[#666666] text-[16px] mt-2">
                  Your booking already includes{" "}
                  <span className="text-lightBlue font-semibold"> 700 km </span>
                   . If you need more, you can add it below.
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="mt-[53px] flex md:flex-nowrap flex-wrap gap-5 items-center">
                  <h1 className="text-[16px] font-semibold text-[#666666]">
                    Add extra kilometers
                  </h1>
                  <div className="w-[174px] h-[48px] flex justify-between p-2 items-center border border-[#E6E6E6] rounded-lg md:ml-3">
                    <IoRemoveCircleOutline
                      className="text-[#4F46E5] w-[19.5px] h-[19.5px] md:ml-3 ml-1 cursor-pointer"
                      onClick={() => decrementCounter("kilometers", 5)}
                    />
                    <p className="text-[14px] text-[#999999] font-semibold">
                      {extraKilometers} km
                    </p>
                    <IoAddCircleOutline
                      className="text-[#4F46E5] w-[19.5px] h-[19.5px] md:mr-3 mr-1 cursor-pointer"
                      onClick={() => incrementCounter("kilometers", 5)}
                    />
                  </div>
                  <p className="text-[14px] text-[#999999] font-medium md:ml-5">
                    DKK 1.60/km
                  </p>
                </div>
              </div>
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <h1 className=" font-semibold text-[#262626] text-[24px]">
                  Extras
                </h1>
                <p className="text-[#666666] text-[16px] mt-2">
                  Below you will find a list of the accessories that we have
                  available for your booking.
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="mt-[53px]">
                  <div className="flex justify-between md:flex-nowrap flex-wrap items-center">
                    <div className="">
                      <h1 className="text-[#262626] font-medium text-[20px]">
                        Child seat
                      </h1>
                      <p className="text-[10px] font-normal text-[#666666] mt-1">
                        Suitable for children from 9 months to 4 years old,
                        9-25kg in weight.
                      </p>
                    </div>
                    <div className="mr-2 md:mt-0 mt-3">
                      <div className="flex gap-4 items-center">
                        <button className="bg-[#4F46E5]  text-[#fff] w-[146px] h-[42px] rounded">
                          Add
                        </button>
                        <h1 className="mr-2 text-[#666666] font-semibold text-[16px]">
                          35 kr.
                          <span className="text-[#666666] text-[14px] font-normal">
                            /day
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <div className="flex justify-between md:flex-nowrap flex-wrap items-center">
                    <div className="">
                      <h1 className="text-[#262626] font-medium text-[20px]">
                        Winter wheels
                      </h1>
                      <p className="text-[10px] font-normal text-[#666666] mt-1">
                        Additional cover that allows the vehicle to be driven on
                        sealed roads above the snow line
                      </p>
                    </div>
                    <div className="md:mt-0 mt-3">
                      <div className="flex gap-4 items-center">
                        <div className="w-[144px] h-[48px] flex justify-between p-2 items-center border border-[#E6E6E6] rounded-lg md:ml-3">
                          <IoRemoveCircleOutline
                            className="text-[#4F46E5] w-[19.5px] h-[19.5px] ml-3 cursor-pointer"
                            onClick={() => decrementCounter("winterWheels")}
                          />
                          <p className="text-[14px] text-[#999999] font-semibold">
                            {winterWheel}
                          </p>
                          <IoAddCircleOutline
                            className="text-[#4F46E5] w-[19.5px] h-[19.5px] mr-3 cursor-pointer"
                            onClick={() => incrementCounter("winterWheels")}
                          />
                        </div>
                        <div className="mr-5">
                          <h1 className="mr-2 text-[#666666] font-semibold text-[16px]">
                            1375 kr.
                          </h1>
                          <p className="text-lightBlue text-[12px] font-medium">
                            =1375 kr.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <div className="flex justify-between md:flex-nowrap flex-wrap items-center">
                    <div className="">
                      <h1 className="text-[#262626] font-medium text-[20px]">
                        Roof box
                      </h1>
                      <p className="text-[10px] font-normal text-[#666666] mt-1">
                        Suitable for children from 9 months to 4 years old,
                        9-25kg in weight.
                      </p>
                    </div>
                    <div className="md:mt-0 mt-3">
                      <div className="flex gap-4 items-center">
                        <div className="w-[144px] h-[48px] flex justify-between p-2 items-center border border-[#E6E6E6] rounded-lg md:ml-3">
                          <IoRemoveCircleOutline
                            className="text-[#4F46E5] w-[19.5px] h-[19.5px] ml-3 cursor-pointer"
                            onClick={() => decrementCounter("roofBox")}
                          />
                          <p className="text-[14px] text-[#999999] font-semibold">
                            {roofBox}
                          </p>
                          <IoAddCircleOutline
                            className="text-[#4F46E5] w-[19.5px] h-[19.5px] mr-3 cursor-pointer"
                            onClick={() => incrementCounter("roofBox")}
                          />
                        </div>
                        <div className="mr-9">
                          <h1 className="mr-2 text-[#666666] font-semibold text-[16px]">
                            50 kr.
                          </h1>
                          <p className="text-lightBlue text-[12px] font-medium">
                            =100 kr.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <h1 className=" font-semibold text-[#262626] text-[24px]">
                  Additional drivers
                </h1>
                <p className="text-[#666666] text-[16px] mt-2">
                  You can register additional drivers for DKK 40.00 per day
                  per driver on your booking or can request a driver from us.{" "}
                  <span className="text-lightBlue font-semibold">
                    Learn more{" "}
                  </span>{" "}
                  about this Your booking already includes 700 km
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex mt-[44px] md:flex-nowrap flex-wrap justify-between items-center">
                  <div className="">
                    <h1 className="text-[#262626] font-medium text-[20px]">
                      Add your own additional drivers
                    </h1>
                    <p className="text-[10px] font-normal text-[#666666] mt-1">
                      You can bring someone you trust to share the wheel
                    </p>
                  </div>
                  <div className="mr-2 md:mt-0 mt-3">
                    <div className="flex gap-4 items-center">
                      <button
                        className={`${
                          counters?.driver ? " bg-[#d86a82]" : "bg-[#4F46E5]"
                        }   text-[#fff] w-[146px] h-[42px] rounded`}
                        onClick={AddAditionalDriver}
                      >
                        {counters?.driver ? "Remove" : "Add"}
                      </button>
                      <h1 className="mr-2 text-[#666666] font-semibold text-[16px]">
                        35 kr.
                        <span className="text-[#666666] text-[14px] font-normal">
                          /day
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <h1 className=" font-semibold text-[#262626] text-[24px]">
                  Protection options
                </h1>
                <p className="text-[#666666] text-[16px] mt-2">
                  Your booking includes liability and comprehensive insurance in
                  Denmark. You can purchase additional insurance coverage
                  below. Click here 
                  <span className="text-lightBlue font-semibold">
                    Learn more{" "}
                  </span>{" "}
                  to understand our insurance policies.
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="mt-[40px]">
                  <h3 className="text-[16px] text-[#262626] font-medium">
                    Choose your insurance package
                  </h3>
                  <div className="mt-[40px]">
                    <div className="flex justify-between gap-3 md:flex-nowrap flex-wrap">
                      <div
                        className={`border  ${
                          toggleCard == "1"
                            ? "border-lightBlue"
                            : "border-lightGrey"
                        } w-[371px] px-7 pt-4 rounded-md relative `}
                        onClick={() => setToggleCard(1)}
                      >
                        <h3 className="text-[#262626] font-medium text-[20px]">
                          Basic
                        </h3>
                        <h1 className="text-[#262626] font-semibold text-[24px] mt-3">
                          Included
                        </h1>
                        <div className="flex gap-1 bg-[#E2E1FA] items-center rounded-lg w-fit px-2 py-1 mt-[38px]">
                          <p className="text-[#262626] font-medium text-[14px]">
                            Deductible:
                          </p>
                          <h3 className="text-[#262626] font-bold text-[14px] ">
                            5.000 kr.
                          </h3>
                          <RiErrorWarningLine className=" h-4 w-4" />
                        </div>
                        <div className=" mt-6">
                          <div className="flex items-center ">
                            <Image
                              className="rounded-lg w-7 h-7"
                              src="/Check.png"
                              alt=""
                              height={100}
                              width={100}
                            />
                            <h6 className="ml-5 font-medium text-[14px] text-[#666666]">
                              Liability insurance
                            </h6>
                          </div>
                          <div className="flex items-center mt-3 ">
                            <Image
                              className="rounded-lg w-7 h-7"
                              src="/Check.png"
                              alt=""
                              height={100}
                              width={100}
                            />
                            <h6 className="ml-5 font-medium text-[14px] text-[#666666]">
                              Comprehensive insurance
                            </h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-6 pb-4">
                          <p className="text-lightBlue font-semibold cursor-pointer">
                            More details
                          </p>
                          <button
                            className={`${
                              toggleCard == "1"
                                ? "bg-[#4F46E5] text-[#FFFFFF]"
                                : "text-[#4F46E5] bg-[#FFFFFF]"
                            }  font-medium text-[14px] border border-[#4F46E5] rounded-md w-[156px] px-6 py-2`}
                          >
                            {toggleCard == "1" ? "Selected" : "Select"}
                          </button>
                        </div>
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
                        className={`border  ${
                          toggleCard == "2"
                            ? "border-lightBlue"
                            : "border-lightGrey"
                        } w-[371px] px-7 pt-4 rounded-md relative `}
                        onClick={() => setToggleCard(2)}
                      >
                        <div className="flex gap-2 items-center">
                          <h3 className="text-[#262626] font-medium text-[20px]">
                            Premium
                          </h3>
                          <p className="text-[#F8F7FC] bg-[#262626] px-2 font-medium text-[10px] rounded-xl ">
                            RECOMMENDED
                          </p>
                        </div>
                        <h1 className="text-[#262626] font-semibold text-[24px] mt-3">
                          75 kr.{" "}
                          <span className="text-[#666666] font-medium text-[20px]">
                            /day
                          </span>
                        </h1>
                        <p className="text-[#666666] font-normal text-[14px]">
                          Total 225 kr.
                        </p>
                        <div className="flex gap-1 bg-[#E2E1FA] items-center rounded-lg w-fit px-2 py-1 mt-[12px]">
                          <p className="text-[#262626] font-medium text-[14px]">
                            Deductible:
                          </p>
                          <h3 className="text-[#262626] font-bold text-[14px] ">
                            5.000 kr.
                          </h3>
                          <RiErrorWarningLine className=" h-4 w-4" />
                        </div>
                        <div className=" mt-6">
                          <div className="flex items-center ">
                            <Image
                              className="rounded-lg w-7 h-7"
                              src="/Check.png"
                              alt=""
                              height={100}
                              width={100}
                            />
                            <h6 className="ml-5 font-medium text-[14px] text-[#666666]">
                              Liability insurance
                            </h6>
                          </div>
                          <div className="flex items-center mt-3 ">
                            <Image
                              className="rounded-lg w-7 h-7"
                              src="/Check.png"
                              alt=""
                              height={100}
                              width={100}
                            />
                            <h6 className="ml-5 font-medium text-[14px] text-[#666666]">
                              Comprehensive insurance
                            </h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-6 pb-4">
                          <p className="text-lightBlue font-semibold cursor-pointer">
                            More details
                          </p>
                          <button
                            className={`${
                              toggleCard == "2"
                                ? "bg-[#4F46E5] text-[#FFFFFF]"
                                : "text-[#4F46E5] bg-[#FFFFFF]"
                            }  font-medium text-[14px] border border-[#4F46E5] rounded-md w-[156px] px-6 py-2`}
                          >
                            {toggleCard == "2" ? "Selected" : "Select"}
                          </button>
                        </div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div className="flex md:flex-nowrap flex-wrap justify-between items-center">
                  <button
                    className={`
                    
                              text-[#4F46E5] bg-[#FFFFFF]
                            font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    onClick={() => props.NextBack()}
                  >
                    Go back to find cars
                  </button>
                  <button
                    className={`
                              bg-[#4F46E5] text-[#FFFFFF]
                               
                           font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    onClick={() => props.NextGo()}
                  >
                    Continue to add personal details
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[520px] w-full">
              <CardImageAddons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOneCar;
