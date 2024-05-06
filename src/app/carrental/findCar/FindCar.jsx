import HomeNavLine from "@/app/components/homeNavLine";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  MdOutlineColorLens,
  MdOutlineDirectionsCar,
  MdOutlineErrorOutline,
  MdOutlineTune,
} from "react-icons/md";
import { PiSteeringWheelLight } from "react-icons/pi";
import { TbFishHook } from "react-icons/tb";
import FindCarRightPart from "./FindCarRightPart";
function valuetext(value) {
  return `${value}°C`;
}
function valuetext1(value) {
  return `${value}°C`;
}
const MAX = 10000;
const MIN = 100;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FindCar = () => {
  const [value, setValue] = useState([20, 37]);
  const [value1, setValue1] = useState([700, 7000]);
  const [toggleCard, setToggleCard] = useState(1);
  const [pickUpDate, setpickUpDate] = useState(dayjs());
  const [dropUpDate, setDropUpDate] = useState(dayjs(pickUpDate));
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const currencies = [
    {
      value: "Cars",
      label: "Cars",
    },
    {
      value: "Van",
      label: "Van",
    },
    {
      value: "Moving truck",
      label: "Moving truck",
    },
    {
      value: "Mini bus",
      label: "Mini bus",
    },
    {
      value: "Trailer",
      label: "Trailer",
    },
  ];
  const pickupLocationItem = [
    {
      value: "Ko lind",
      label: "Ko lind",
    },
    {
      value: "Corsair",
      label: "Corsair",
    },
    {
      value: "Ko kkedal",
      label: "Ko kkedal",
    },
    {
      value: "Ko ngerslev",
      label: "Mini bus",
    },
    {
      value: "Ko lding North",
      label: "Ko lding North",
    },
    {
      value: "King’s Lyngby",
      label: "King’s Lyngby",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  return (
    <>
      <div className="bg-[#ffffff] shadow-lg flex justify-center p-4 w-full">
        <div className="mt-5 mb-5 flex flex-wrap lg:justify-center sm:gap-12 ">
          <div className="lg:w-[150px] md:w-[250px] w-full">
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              defaultValue="Cars"
              className="w-full"
              // helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="w-full md:w-[322px] sm:mt-0 mt-5 ">
            <TextField
              id="outlined-select-currency"
              select
              label="Pickup Location"
              defaultValue="Ko lind"
              className=" w-full relative"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GrLocation className="text-[#9791F2] w=[16.5px] h-[21px]" />
                  </InputAdornment>
                ),
              }}
              // helperText="Please select your currency"
            >
              {pickupLocationItem.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="md:w-[210px] w-full sm:-mt-2  mt-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Pickup Date" className="text-[#9791F2]" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="md:w-[210px] w-full sm:-mt-2 mt-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Return Date" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="sm:mt-0 mt-7">
            <button className="w-[154px] font-medium h-[55px] bg-lightBlue rounded-md text-white">
              Update Search
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        <div className="py-3 flex justify-center ml-5">
          <HomeNavLine titleText="Search results" Icon={CiHome} />
        </div>
        <div className="flex justify-center">
          <div className="mt-1 md:w-[1326px] ">
            <div className="flex justify-center px-10">
              <div className="w-[300px] bg-[#FFFFFF] px-6 py-4 mb-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MdOutlineTune className="w-[12px] h-[10px] text-[#666666]" />
                    <p className="ml-2 text-[12px] font-medium text-[#666666]">
                      Filters
                    </p>
                  </div>
                  <p className="ml-2 text-[14px] font-medium text-[#4F46E5]">
                    Clear all
                  </p>
                </div>
                <p className="flex items-center font-bold text-[12px] mt-5">
                  Radius
                  <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                </p>
                <p className="text-[14px] font-medium text-[#666666] mt-2">
                  {value[0]} km- {value[1]} km
                </p>
                <div className="w-full mt-2">
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <p className="flex items-center font-bold text-[12px] mt-5">
                  Price Range
                  <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                </p>
                <p className="text-[14px] font-medium text-[#666666] mt-2">
                  {value1[0]} kr. - {value1[1]} kr.
                </p>
                <div className="w-full mt-2">
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext1}
                    min={MIN}
                    max={MAX}
                    marks={marks}
                  />
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex justify-between items-center mt-5">
                  <p className="flex items-center font-bold text-[12px]">
                    Car Class
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                  <div className="bg-[#F2F2F2] p-2 rounded-full">
                    <IoSearchOutline className="w-[9px] h-[9px] " />
                  </div>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    {...label}
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2">
                    Small car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Midsize car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Big car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 ">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Microcar
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    SUV Group A
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 ">
                  <Checkbox
                    // defaultChecked={false}
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />

                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Luxury car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex justify-between items-center mt-5">
                  <p className="flex items-center font-bold text-[12px]">
                    Pickup Location
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                  <div className="bg-[#F2F2F2] p-2 rounded-full">
                    <IoSearchOutline className="w-[9px] h-[9px] " />
                  </div>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    {...label}
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2">
                    Autohuset
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (6)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Rentlog
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (8)
                    </span>
                  </p>
                </div>
                <p className="mt-3 text-[14px] font-medium text-[#4F46E5]">
                  Show all
                </p>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex justify-between items-center mt-5">
                  <p className="flex items-center font-bold text-[12px]">
                    Transmission
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    {...label}
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2">
                    Automatic
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Manual
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="w-full mt-3"
                />
                <div className="flex justify-between items-center mt-5">
                  <p className="flex items-center font-bold text-[12px]">
                    Fuel
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    {...label}
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2">
                    Diesel
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Petrol
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (67)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#4F46E5",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        padding: 0,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                    Hybrid
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (155)
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <p className="flex items-center font-bold text-[12px]">
                    Towbar
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                </div>
                <div className="flex mt-2">
                  <Switch
                    defaultChecked
                    sx={{
                      marginLeft: -1.2,
                      color: "#4F46E5",
                      "&.Mui-checked": {
                        color: "#4F46E5",
                        marginLeft: -1.2,
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#666666] ml-2">
                    Display only models with Tow hooks
                  </p>
                </div>
              </div>
              <div className="w-[1000px] ml-5">
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-medium pl-3 text-[#666666]">
                    <span className="text-[#262626] font-semibold">23</span>{" "}
                    cars available for
                    <span className="text-[#262626] font-semibold">
                      {" "}
                      rental
                    </span>{" "}
                    between{" "}
                    <span className="text-[#262626] font-semibold">
                      {" "}
                      26 Feb - 29 Feb (3 days)
                    </span>
                  </p>
                  <p className="text-[14px] font-medium text-[#666666]">
                    Price (low to high)
                  </p>
                </div>
                <div className="p-[12px]">
                  <FindCarRightPart />
                  <FindCarRightPart />
                  <FindCarRightPart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCar;
