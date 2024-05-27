import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const HomeNavLine = ({
  titleText1 = "Search",
  titleText2 = "",
  titleText3 = "",
  titleText4 = "",

  Icon,
}) => {
  return (
    <div className="w-full  md:ml-0 ml-2 flex items-center mt-4 mb-3">
      <div className="">
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
        {titleText1 || "Search"}
      </p>
      {titleText2 && (
        <>
          <div>
            <IoIosArrowForward className="w-[16px] h-[16px] text-[#999999] ml-2" />
          </div>
          <p className="font-bold ml-2 text-[14px] text-[#262626]">
            {titleText2 || "Search"}
          </p>
        </>
      )}
      {titleText3 && (
        <>
          <div>
            <IoIosArrowForward className="w-[16px] h-[16px] text-[#999999] ml-2" />
          </div>
          <p className="font-bold ml-2 text-[14px] text-[#262626]">
            {titleText3 || "Search"}
          </p>
        </>
      )}
      {titleText4 && (
        <>
          <div>
            <IoIosArrowForward className="w-[16px] h-[16px] text-[#999999] ml-2" />
          </div>
          <p className="font-bold ml-2 text-[14px] text-[#262626]">
            {titleText4 || "Search"}
          </p>
        </>
      )}
    </div>
  );
};

export default HomeNavLine;
