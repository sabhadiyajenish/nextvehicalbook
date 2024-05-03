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
import Carousel from "react-material-ui-carousel";
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
      <div className="h-fit md:mt-0 mt-10 md:h-[700px] flex items-center justify-center">
        <div className="shadow-lg w-5/6 mt-16 md:w-[1400px] p-8 h-fit relative rounded-md bg-white">
          <div className="flex justify-center ">
            <div className="w-full md:w-1/2 shadow-md absolute rounded -top-6 ">
              <button
                onClick={() => setButtonVal("Rentails")}
                className={` w-1/2 h-12  ${
                  buttonVal == "Rentails" ? "text-white" : "text-lightBlue"
                } font-bold py-2 px-4  ${
                  buttonVal == "Rentails" ? "bg-lightBlue" : "bg-white"
                }`}
              >
                <p className="-mt-1">Rentails</p>
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
                <p className="-mt-1">Subscriptions</p>
                {/* <span className="text-sm font-light">1 month +</span> */}
              </button>
            </div>
          </div>
          <div className="mt-[60px] flex justify-center">
            <div>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                onClick={() => setSelVehical("Car")}
                startIcon={
                  <FaCarSide
                    className={`${selVehical == "Car" ? "" : "text-grey"}`}
                  />
                }
                className={`mx-3 rounded-full mt-3 lg:mt-0  ${
                  selVehical == "Car"
                    ? "font-semibold"
                    : "text-grey border-grey"
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
                    className={`${selVehical == "Van" ? "" : "text-grey"}`}
                  />
                }
                className={`mx-3 rounded-full mt-3 lg:mt-0 ${
                  selVehical == "Van"
                    ? "font-semibold"
                    : "text-grey border-grey"
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
                    className={`${selVehical == "Truck" ? "" : "text-grey"}`}
                  />
                }
                className={`mx-3 rounded-full mt-3 lg:mt-0  ${
                  selVehical == "Truck"
                    ? "font-semibold"
                    : "text-grey border-grey"
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
                    className={`${selVehical == "MiniBus" ? "" : "text-grey"}`}
                  />
                }
                className={`mx-3 rounded-full mt-3 lg:mt-0  ${
                  selVehical == "MiniBus"
                    ? "font-semibold"
                    : "text-grey border-grey"
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
                    className={`${selVehical == "Trailer" ? "" : "text-grey"}`}
                  />
                }
                className={`mx-3 rounded-full mt-3 lg:mt-0 ${
                  selVehical == "Trailer"
                    ? "font-semibold"
                    : "text-grey border-grey"
                }`}
              >
                Trailer
              </Button>
            </div>
          </div>
          <div className=" mt-5 mx-3 mb-5">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 auto-cols-max md:auto-cols-min">
              <div className="bg-grey-200  lg:col-span-2 p-4">
                <p className="font-light  text-sm">Where</p>
                <div className="flex justify-between">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                    className="lg:w-5/6"
                  />
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: "0 3px", height: "50px" }}
                  />
                </div>
              </div>
              <div className="bg-gray-300 p-4">
                <p className="font-light  text-sm">Pick-up date</p>
                <div className="flex justify-between">
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
              <div className="bg-gray-300 p-4">
                <p className="font-light  text-sm">Drop-up date</p>
                <div className="flex justify-between">
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
              <div className="bg-gray-300 p-4">
                <p className="font-light  text-sm">Driver age</p>
                <TextField
                  id="outlined-number"
                  type="number"
                  placeholder="Age"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="bg-gray-300 mt-5 lg:ml-8  xl:ml-10 ml-5">
                <button className="w-20 h-20 bg-lightBlue rounded-xl ">
                  <FaArrowRight className="text-white ml-8 size-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightWhite py-4">
        <div className="mt-10 w-full text-center">
          <div className="text-center">
            <h1 className="font-bold text-[35px]">
              We have a car for every need
            </h1>
            <p className="mt-4 mx-auto max-w-[50%] text-center">
              At Oscar Biludlejning, we offer local car rental throughout
              Denmark at our more than 130 branches. We rent cars, vans,
              minibuses and moving vehicles. You always get 100 km. per rental
              day and comprehensive insurance when you rent from us. Below we
              have collected a selection of our most popular rental cars
            </p>
          </div>
        </div>
        <div className="mt-32 w-full px-5 md:px-28 mb-10">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-full relative flex items-center justify-center">
              <button
                aria-label="slide backward"
                className="absolute z-30 w-14 h-14 rounded-full bg-white shadow-lg -left-7  focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
                onClick={goPrev}
              >
                <FaArrowLeft className="ml-5" />
              </button>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-3 items-center justify-start transition-all ease-out duration-300"
                >
                  <div
                    className="flex gap-10 flex-shrink-0 ml-2 relative w-auto"
                    ref={sliderRef}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, key) => {
                      return <HomeCard key={key} />;
                    })}
                  </div>
                </div>
              </div>
              <button
                aria-label="slide forward"
                className="absolute z-30  w-14 h-14 rounded-full bg-white shadow-lg -right-5  focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
                onClick={goNext}
              >
                <FaArrowRight className="ml-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
