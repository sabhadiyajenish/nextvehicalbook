import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const HomeNavLine = ({ titleText, Icon }) => {
  return (
    <div className="w-full sm:ml-[80px] sm:mr-[80px] flex items-center mt-4 mb-3">
      <div>
        {CiHome ? (
          <Icon className="text-[#4F46E5]  w-[20px] h-[20px]" />
        ) : (
          <CiHome className="text-[#4F46E5] w-[20px] h-[20px]" />
        )}
      </div>
      <div>
        <IoIosArrowForward className="w-[16px] h-[16px] text-[#999999] ml-2" />
      </div>
      <p className="font-bold ml-2 text-[14px] text-[#262626]">
        {titleText || "Search"}
      </p>
    </div>
  );
};

export default HomeNavLine;
