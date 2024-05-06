"use client";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCarSide,
  FaShuttleVan,
} from "react-icons/fa";
import { FaTrailer, FaTruck } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import Select from "react-select";
import HomeCard from "./components/Cards/homeCard";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1700 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  smdesktop: {
    breakpoint: { max: 1700, min: 1435 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  xsmdesktop: {
    breakpoint: { max: 1435, min: 1180 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1180, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smmobile: {
    breakpoint: { max: 464, min: 150 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Home() {
  const [buttonVal, setButtonVal] = useState("Rentails");
  const [selVehical, setSelVehical] = useState("Car");
  const [pickUpDate, setpickUpDate] = useState(dayjs());
  const [dropUpDate, setDropUpDate] = useState(dayjs(pickUpDate));
  const [mounted, setMounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const sliderRef = useRef(null);
  let defaultTransform = 0;

  const options = [
    { value: "Surat", label: "Surat" },
    { value: "Baroda", label: "Baroda" },
    { value: "Ahemdabad", label: "Ahemdabad" },
    { value: "Bhavnagar", label: "Bhavnagar" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Morbi", label: "Morbi" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none", // Remove border
      boxShadow: state.isFocused ? "0 0 0 2px #2563EB" : "none", // Optional: add focus style
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#2563EB", // Set font color of selected value to blue
      fontWeight: "bold",
    }),
  };
  7;
  useEffect(() => {
    // Ensure component is mounted before accessing the ref
    setMounted(true);
  }, []);
  const goNext = () => {
    if (mounted && sliderRef.current) {
      defaultTransform -= 398;
      if (defaultTransform < -(398 * (sliderRef.current.children.length - 3))) {
        defaultTransform = 0;
      }
      requestAnimationFrame(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${defaultTransform}px)`;
      });
    }
  };

  const goPrev = () => {
    if (mounted && sliderRef.current) {
      defaultTransform += 398;
      if (defaultTransform > 0) {
        defaultTransform = -(398 * (sliderRef.current.children.length - 3));
      }
      requestAnimationFrame(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${defaultTransform}px)`;
      });
    }
  };

  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  return (
    <>
      <div className="h-fit md:mt-0 mt-10 md:mx-0 mx-10  md:h-[700px] flex items-center justify-center bg-[url('/hero-banner-bg.jpeg')] bg-no-repeat bg-cover">
        <div className="shadow-lg w-full mt-16  md:w-[940px] p-8 h-fit relative rounded-md bg-white">
          <div className="flex justify-center ">
            <div className="w-full md:w-[346px] shadow-md absolute rounded -top-6 ">
              <button
                onClick={() => setButtonVal("Rentails")}
                className={` w-1/2 h-12  ${
                  buttonVal == "Rentails" ? "text-white" : "text-lightBlue"
                } font-bold py-2 px-4  ${
                  buttonVal == "Rentails" ? "bg-lightBlue" : "bg-white"
                }`}
              >
                <p className="-mt-1 text-[14px] font-bold">Rentails</p>
                {/* <span className="text-sm font-light">1 month +</span> */}
              </button>
              <button
                onClick={() => setButtonVal("Subscriptions")}
                className={` w-1/2 h-12  ${
                  buttonVal == "Subscriptions" ? "text-white" : "text-lightBlue"
                } font-bold py-2 px-4  ${
                  buttonVal == "Subscriptions" ? "bg-lightBlue" : "bg-white"
                }`}
              >
                <p className="-mt-1 text-[14px] font-bold">Subscriptions</p>
                {/* <span className="text-sm font-light">1 month +</span> */}
              </button>
            </div>
          </div>
          <div className="mt-[30px] flex justify-center">
            <div>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("Car")}
                startIcon={
                  <FaCarSide
                    className={`w-[24px] h-[18px] ${
                      selVehical == "Car" ? "text-[#4f46e5]" : "text-grey"
                    }`}
                  />
                }
                className={`ml-[24px] text-[14px] font-medium rounded-full mt-3 lg:mt-0  ${
                  selVehical == "Car"
                    ? "font-semibold text-[#4f46e5] border-[#4f46e5]"
                    : "text-grey border-grey border-opacity-40"
                }`}
              >
                Car
              </Button>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("Van")}
                startIcon={
                  <FaShuttleVan
                    className={` w-[24px] h-[18px] ${
                      selVehical == "Van" ? "text-[#4f46e5]" : "text-grey"
                    }`}
                  />
                }
                className={`ml-[24px] text-[14px] font-medium rounded-full mt-3 lg:mt-0 ${
                  selVehical == "Van"
                    ? "font-semibold text-[#4f46e5] border-[#4f46e5]"
                    : "text-grey border-grey border-opacity-40"
                }`}
              >
                Van
              </Button>{" "}
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("Truck")}
                startIcon={
                  <FaTruck
                    className={` w-[24px] h-[18px] ${
                      selVehical == "Truck" ? "text-[#4f46e5]" : "text-grey"
                    }`}
                  />
                }
                className={`ml-[24px] text-[14px] font-medium rounded-full mt-3 lg:mt-0  ${
                  selVehical == "Truck"
                    ? "font-semibold text-[#4f46e5] border-[#4f46e5]"
                    : "text-grey border-grey border-opacity-40"
                }`}
              >
                Moving truck
              </Button>{" "}
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("MiniBus")}
                startIcon={
                  <TbBus
                    className={`w-[24px] h-[18px] ${
                      selVehical == "MiniBus" ? "text-[#4f46e5]" : "text-grey"
                    }`}
                  />
                }
                className={`ml-[24px] text-[14px] font-medium rounded-full mt-3 lg:mt-0  ${
                  selVehical == "MiniBus"
                    ? "font-semibold text-[#4f46e5] border-[#4f46e5]"
                    : "text-grey border-grey border-opacity-40"
                }`}
              >
                Mini bus
              </Button>{" "}
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("Trailer")}
                startIcon={
                  <FaTrailer
                    className={` w-[24px] h-[18px] ${
                      selVehical == "Trailer" ? "text-[#4f46e5]" : "text-grey"
                    }`}
                  />
                }
                className={`ml-[24px] text-[14px] font-medium rounded-full mt-3 lg:mt-0 ${
                  selVehical == "Trailer"
                    ? "font-semibold text-[#4f46e5] border-[#4f46e5]"
                    : "text-grey border-grey border-opacity-40"
                }`}
              >
                Trailer
              </Button>
            </div>
          </div>
          <div className=" mt-8 ml-3 mb-1">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="w-full md:w-[311px] md:ml-3">
                <p className=" text-[10px] font-medium">Where</p>
                <div className="flex justify-between">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                    className="w-full md:w-[305px]"
                  />
                  {/* <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: "0px 10px 0px 10px", height: "35px" }}
                  /> */}
                </div>
              </div>
              <div className="md:ml-3 sm:mt-0 mt-3">
                <p className="text-[10px] font-medium">Pick-up date</p>
                <div className="flex justify-between md:w-[150px]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={pickUpDate}
                      onChange={(newValue) => setpickUpDate(newValue)}
                      defaultValue={[today, tomorrow]}
                      minDate={today}
                      disablePast
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          InputProps={{ style: { color: "#2563EB" } }} // Set font color to blue
                        />
                      )}
                    />
                  </LocalizationProvider>
                  {/* <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: "0 4px", height: "50px" }}
                  /> */}
                </div>
              </div>
              <div className="sm:ml-3 sm:mt-0 mt-3">
                <p className="text-[10px] font-medium">Drop-up date</p>
                <div className="flex justify-between w-full md:w-[150px]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dropUpDate}
                      onChange={(newValue) => setDropUpDate(newValue)}
                      defaultValue={[pickUpDate]}
                      minDate={pickUpDate}
                      disablePast
                    />
                  </LocalizationProvider>
                  {/* <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: "0 4px", height: "50px" }}
                  /> */}
                </div>
              </div>
              <div className="md:ml-3  sm:mt-0 mt-3 md:w-[150px]">
                <p className="text-[10px] font-medium">Driver age</p>
                <TextField
                  id="outlined-number"
                  type="number"
                  placeholder="Age"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="bg-gray-300 mt-6 sm:mt-3 lg:ml-8  xl:ml-10 md:ml-5 sm:ml-3 ml-2">
                <button className="w-[60px] h-[60px] bg-lightBlue rounded-xl ">
                  <FaArrowRight className="text-white ml-6 w-[16px] h=[12px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightWhite py-4">
        <div className="mt-14 w-full text-center">
          <div className="text-center">
            <h1 className="font-bold text-[36px]">
              We have a car for every need
            </h1>
            <p className="mt-4 font-normal md:mx-auto text-[16px]  mx-5 md:w-[806px] text-center">
              At Oscar Biludlejning, we offer local car rental throughout
              Denmark at our more than 130 branches. We rent cars, vans,
              minibuses and moving vehicles. You always get 100 km. per rental
              day and comprehensive insurance when you rent from us. Below we
              have collected a selection of our most popular rental cars
            </p>
          </div>
        </div>
        <div className="w-full mt-28 px-5 md:px-28 mb-10">
          <div className="parent relative">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((imageUrl, index) => {
                return (
                  <div
                    className="slider w-full flex  justify-center"
                    key={index}
                  >
                    <HomeCard />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
