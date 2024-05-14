import HomeNavLine from "@/app/components/homeNavLine";
import React from "react";
import { CiHome } from "react-icons/ci";
import Divider from "@mui/material/Divider";
import { IoAddCircleOutline } from "react-icons/io5";
const AddOneCar = () => {
  return (
    <>
      <div className="bg-[#F2F2F2] pb-5">
        <div className=" container mx-auto ">
          <div className="py-3 flex justify-center ml-2">
            <HomeNavLine
              titleText1="Search results"
              titleText2="Add-ons"
              Icon={CiHome}
            />
          </div>
          <div className="flex md:flex-nowrap flex-wrap">
            <div className="w-full">
              <div className="md:w-[822px] w-full py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
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
                <div className="mt-[53px] flex gap-5 items-center">
                  <h1 className="text-[16px] font-semibold text-[#666666]">
                    Add extra kilometers
                  </h1>
                  <div className="w-[174px] h-[48px] flex justify-between p-2 items-center border border-[#E6E6E6] rounded-lg ml-3">
                    <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] ml-3 cursor-pointer" />
                    <p className="text-[14px] text-[#999999] font-semibold">
                      0 km
                    </p>
                    <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] mr-3 cursor-pointer" />
                  </div>
                  <p className="text-[14px] text-[#999999] font-medium ml-5">
                    DKK 1.60/km
                  </p>
                </div>
              </div>
              <div className="md:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
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
                          <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] ml-3 cursor-pointer" />
                          <p className="text-[14px] text-[#999999] font-semibold">
                            1
                          </p>
                          <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] mr-3 cursor-pointer" />
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
                          <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] ml-3 cursor-pointer" />
                          <p className="text-[14px] text-[#999999] font-semibold">
                            2
                          </p>
                          <IoAddCircleOutline className="text-[#4F46E5] w-[19.5px] h-[19.5px] mr-3 cursor-pointer" />
                        </div>
                        <div className="mr-5">
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
              <div className="md:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
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
              <div className="md:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOneCar;
