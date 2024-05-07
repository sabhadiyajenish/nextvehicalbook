import HomeNavLine from "@/app/components/homeNavLine";
import React from "react";
import { CiHome } from "react-icons/ci";

const CarPayment = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <div className="py-3 flex justify-center ml-2">
          <HomeNavLine
            titleText1="Search results"
            titleText2="Add-ons"
            titleText3="Personal details"
            titleText4="Payment"
            Icon={CiHome}
          />
        </div>
      </div>
    </>
  );
};

export default CarPayment;
