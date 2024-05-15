import HomeNavLine from "@/app/components/homeNavLine";
import React from "react";
import { CiHome } from "react-icons/ci";
import CardImageAddons from "../addOnes/CardImageAddons";

const PersonalDetail = (props) => {
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
          <div className="flex lg:flex-nowrap  gap-6 flex-wrap lg:mx-[80px]">
            <div className="w-full">
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div className="flex md:flex-nowrap flex-wrap justify-between items-center">
                  <button
                    className={`
                    
                              text-[#4F46E5] bg-[#FFFFFF]
                            font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    onClick={() => props.NextBack()}
                  >
                    Go back
                  </button>
                  <button
                    className={`
                              bg-[#4F46E5] text-[#FFFFFF]
                               
                           font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    onClick={() => props.NextGo()}
                  >
                    Continue to payment
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

export default PersonalDetail;
