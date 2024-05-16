"use client";
import HomeNavLine from "@/app/components/homeNavLine";
import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import CardImageAddons from "../addOnes/CardImageAddons";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import Image from "next/image";
import Link from "next/link";
const CarPayment = () => {
  const [selectedValue, setSelectedValue] = useState("payLater");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="bg-[#F2F2F2] pb-5">
        <div className=" mx-auto max-w-[1366px]">
          <div className="py-3 flex justify-center md:mx-[80px]">
            <HomeNavLine
              titleText1="Search results"
              titleText2="Add-ons"
              titleText3="Personal details"
              titleText4="Payment"
              Icon={CiHome}
            />
          </div>
          <div className="flex lg:flex-nowrap  gap-6 flex-wrap md:mx-[80px]">
            <div className="w-full">
              <div className="lg:w-[822px]  py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <h1 className="text-[#262626] text-[24px] font-semibold">
                  Complete payments
                </h1>
                <p className="mt-3 text-[#666666] font-normal text-[16px]">
                  Quickly and securely complete your booking right now. Choose
                  how you wnt to pay.
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex justify-between mt-[43px]">
                  <h4 className="text-[#666666] text-[16px] font-medium">
                    Total amount per day
                  </h4>

                  <h4 className="text-[#101010] text-[20px] font-bold">
                    400 kr.
                  </h4>
                </div>
                <div className="flex justify-between mt-5">
                  <h4 className="text-[#666666] text-[16px] font-medium">
                    Rental period
                  </h4>

                  <h4 className="text-[#101010] text-[20px] font-bold">
                    3 days
                  </h4>
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-[23px]"
                />
                <div className="flex justify-between items-center mt-5">
                  <div>
                    <h4 className="text-[#262626] text-[16px] font-medium">
                      Total amount payable
                    </h4>
                    <p className="text-[#666666] text-[10px] font-normal">
                      Secure your booking instantly by paying the total amount
                      online now.
                    </p>
                  </div>

                  <h4 className="text-[#4F46E5] text-[32px] font-bold">
                    1.200 kr.
                  </h4>
                </div>
              </div>
              <div className="lg:w-[822px] mt-5  py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div className="flex items-start">
                  <Radio
                    checked={selectedValue === "payLater"}
                    onChange={handleChange}
                    value="payLater"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    className="-ml-2 -mt-1"
                  />
                  <div className="ml-3">
                    <h1 className="text-[#262626] text-[20px] font-semibold">
                      Reserve now, pay later
                    </h1>
                    <p className="text-[#666666] text-[14px] font-normal">
                      For last-minute pickups, make a reservation without
                      payment. The dealer will confirm availability and handle
                      payment manually.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-8">
                  <Radio
                    checked={selectedValue === "payOnline"}
                    onChange={handleChange}
                    value="payOnline"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    className="-ml-2 -mt-1"
                  />
                  <div className="ml-3">
                    <div className="flex items-center ">
                      <h1 className="text-[#262626] text-[20px] font-semibold">
                        Online payment
                      </h1>
                      <Image
                        src="/Visa.png"
                        className="w-[35px] h-[24px] ml-3"
                        width={100}
                        height={100}
                        alt="visa"
                      />
                      <Image
                        src="/Mastercard.png"
                        className="w-[35px] h-[24px] ml-3"
                        width={100}
                        height={100}
                        alt="visa"
                      />
                      <Image
                        src="/Dankort.png"
                        className="w-[35px] h-[24px] ml-3"
                        width={100}
                        height={100}
                        alt="visa"
                      />
                    </div>
                    <p className="text-[#666666] text-[14px] font-normal">
                      Quickly and securely complete your booking by paying the
                      full amount online right now
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-8 mb-9">
                  <Radio
                    checked={selectedValue === "payExistingAccount"}
                    onChange={handleChange}
                    value="payExistingAccount"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    className="-ml-2 -mt-1"
                  />
                  <div className="ml-3">
                    <h1 className="text-[#262626] text-[20px] font-semibold">
                      Payment via existing account
                    </h1>
                    <p className="text-[#666666] text-[14px] font-normal">
                      Opt for manual payment through your pre-existing account
                      with the dealer after booking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div className="flex md:flex-nowrap flex-wrap justify-between items-start">
                  <p className="text-[10px] text-[#666666] font-normal md:w-[466px]">
                    Once your payment card has been registered and the purchase
                    has been accepted, the full amount due is deducted from the
                    card. If, during or after the rental period, there are
                    additional amounts owed in connection with the rental (e.g.
                    kilometers driven, insufficient fuel, damages, parking and
                    speeding fines, etc., the amount owed will automatically be
                    deducted from the registered payment card).
                  </p>
                  <Link href="/carBookingSuccess">
                    <button
                      className={`
                              bg-[#4F46E5] text-[#FFFFFF]
                               
                           font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    >
                      Make payment
                    </button>
                  </Link>
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

export default CarPayment;
