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
import { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import {
  MdOutlineColorLens,
  MdOutlineDirectionsCar,
  MdOutlineErrorOutline,
  MdOutlineTune,
} from "react-icons/md";
import { PiSteeringWheelLight } from "react-icons/pi";
import { TbFishHook } from "react-icons/tb";
import FindCarRightPart from "./FindCarRightPart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getCarList } from "@/app/store/Car/car.Api";
import { useDispatch, useSelector } from "react-redux";
import stateData from "@/data/stateDistrict.json";
import { Controller, useForm } from "react-hook-form";
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

const FindCar = (props) => {
  const [carListData, setCarListData] = useState([]);
  const [value, setValue] = useState([20, 40]);
  const [value1, setValue1] = useState([100, 7000]);
  const [toggleCard, setToggleCard] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [transmissionTypes, setTransmissionTypes] = useState([]);
  const [seatTypes, setSeatTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [towBarTypes, setTowbarTypes] = useState(false);

  const [pickUpDate, setpickUpDate] = useState(dayjs());
  const [dropUpDate, setDropUpDate] = useState(dayjs(pickUpDate));
  const [currentPage, setCurrentPage] = useState(1);
  const [findCarValue, setFindCarValue] = useState({
    carType: "Cars",
    location: "Ko lind",
  });
  const [selectedDates, setSelectedDates] = useState({
    pickupDate: null,
    returnDate: null,
    // Add more date pickers as needed
  });
  const [checkList, setCheckList] = useState({
    smallCar: false,
    midSizeCar: true,
    BigCar: false,
    Microcar: true,
    SuvGroupA: false,
    LuxuryCar: true,
    Autohuset: false,
    Rentlog: true,
    Automatic: false,
    Manual1: true,
    Petrol: false,
    Hybrid: true,
    Seat4: false,
    Seat5: true,
    Towbar: true,
  });
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const { carList, loading } = useSelector((state) => state.carlistData);
  useEffect(() => {
    setCarListData(carList);
  }, [carList]);
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);
  console.log("set type seat<<<<<<", seatTypes);
  useEffect(() => {
    const filteredByCarType =
      selectedTypes?.length !== 0
        ? carList.filter((car) => selectedTypes.includes(car?.carSizeType))
        : carList;
    const filteredByCostRange = filteredByCarType.filter(
      (car) =>
        car?.perDayCost >= Number(value1[0]) &&
        car?.perDayCost <= Number(value1[1])
    );

    const filteredByTransmission =
      transmissionTypes.length !== 0
        ? filteredByCostRange?.filter((car) =>
            transmissionTypes.includes(car?.carInformation[0]?.manual)
          )
        : filteredByCostRange;

    const filteredBySeats =
      seatTypes.length !== 0
        ? filteredByTransmission.filter((car) =>
            seatTypes.includes(String(car?.carInformation[0]?.seat))
          )
        : filteredByTransmission;

    const filteredByFuels =
      fuelTypes.length !== 0
        ? filteredBySeats.filter((car) =>
            fuelTypes.includes(car?.carInformation[0]?.oilType)
          )
        : filteredBySeats;

    const filteredByTows =
      towBarTypes !== false
        ? filteredByFuels.filter(
            (car) => car?.carInformation[0]?.hook === "Yes"
          )
        : filteredByFuels;

    setCarListData(filteredByTows);
  }, [
    selectedTypes,
    value1,
    transmissionTypes,
    seatTypes,
    fuelTypes,
    towBarTypes,
    carList,
  ]);

  const pickupDate = watch("pickupDate");

  const validateReturnDate = (selectedDate) => {
    if (dayjs(selectedDate).isBefore(pickupDate)) {
      return "Return date must be after pickup date";
    }
    return true;
  };

  const cardsPerPage = 5;
  const totalCards = carListData?.length || 0;
  // Calculate index of the first and last card on the current page
  // Calculate index of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].slice(
    indexOfFirstCard,
    indexOfLastCard
  );
  const SetTypeDropdown = (event) => {
    const { name, value } = event.target;
    setFindCarValue({
      ...findCarValue,
      [name]: value,
    });
  };
  // Change page
  const handleChangePagination = (event, value) => {
    setCurrentPage(value);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckList({
      ...checkList,
      [name]: checked,
    });
  };
  const handleCheckboxChangeData = (event) => {
    const typeName = event.target.name;
    if (event.target.checked) {
      setSelectedTypes([...selectedTypes, typeName]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== typeName));
    }
  };
  const handleTransmissionChange = (event) => {
    const transmission = event.target.name;
    if (event.target.checked) {
      setTransmissionTypes([...transmissionTypes, transmission]);
    } else {
      setTransmissionTypes(
        transmissionTypes.filter((type) => type !== transmission)
      );
    }
  };
  const handleSeatSetChange = (event) => {
    const seatSet = event.target.name;
    if (event.target.checked) {
      setSeatTypes([...seatTypes, seatSet]);
    } else {
      setSeatTypes(seatTypes.filter((type) => type !== seatSet));
    }
  };
  const handleFuelChange = (event) => {
    const fuelSet = event.target.name;
    if (event.target.checked) {
      setFuelTypes([...fuelTypes, fuelSet]);
    } else {
      setFuelTypes(fuelTypes.filter((type) => type !== fuelSet));
    }
  };
  const handleTowBarChange = (event) => {
    setTowbarTypes((prev) => !prev);
  };
  const handleSetClearFilter = () => {
    setCheckList({
      smallCar: false,
      midSizeCar: true,
      BigCar: false,
      Microcar: true,
      SuvGroupA: false,
      LuxuryCar: true,
      Autohuset: false,
      Rentlog: true,
      Automatic: false,
      Manual1: true,
      Petrol: false,
      Hybrid: true,
      Seat4: false,
      Seat5: true,
      Towbar: true,
    });
    setValue([20, 40]);
    setValue1([100, 7000]);
    setCarListData(carList);
    setSelectedTypes([]);
    setTransmissionTypes([]);
    setSeatTypes([]);
    setFuelTypes([]);
    setTowbarTypes(false);
  };
  const handleDateChange = (date, dateName) => {
    setSelectedDates({
      ...selectedDates,
      [dateName]: date,
    });
  };
  const SearchCarData = (items) => {
    console.log("data coming form update search", items);
  };
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleCheckValidity = () => {
    const { pickupDate, returnDate } = selectedDates;
    if (pickupDate && returnDate) {
      if (returnDate > pickupDate) {
        console.log("Work correctly");
        toast.success("Working Correctly", {
          duration: 3000,
          position: "top-center",
        });
      } else {
        console.log("Return date is smaller than pickup date");
        toast.error("Return date is smaller than pickup date", {
          duration: 3000,
          position: "top-center",
        });
      }
    } else {
      console.log("Please select both pickup and return dates");
    }
  };
  return (
    <>
      <div className="bg-[#ffffff] shadow-lg flex justify-center p-4 w-full">
        <form autoComplete="off" onSubmit={handleSubmit(SearchCarData)}>
          <div className="mt-5 mb-5  flex flex-wrap lg:flex-nowrap lg:justify-center  w-full gap-10">
            <div className="w-full">
              <TextField
                id="outlined-select-currency"
                select
                label="Type"
                className="w-full md:w-[250px]"
                name="carType"
                {...register("location")}
                defaultValue={"Cars"}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="w-full  sm:mt-0 mt-5 ">
              <TextField
                id="outlined-select-currency"
                select
                label="Pickup Location"
                className=" w-full relative md:w-[250px]"
                name="location"
                defaultValue={"Surat"}
                {...register("pickupLocation")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GrLocation className="text-[#9791F2] w=[16.5px] h-[21px]" />
                    </InputAdornment>
                  ),
                }}
              >
                {stateData?.states[10]?.districts?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className=" w-full sm:-mt-2  mt-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <Controller
                    name="pickupDate" // Name of your form field
                    control={control}
                    defaultValue={null} // Initial value
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Pickup Date"
                        className="text-[#9791F2] w-full"
                        minDate={today} // Minimum selectable date
                        disablePast // Disable past dates
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className=" w-full sm:-mt-2  mt-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <Controller
                    name="returnDate" // Name of your form field
                    control={control}
                    defaultValue={null} // Initial value
                    rules={{ validate: validateReturnDate }}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Return Date"
                        className="text-[#9791F2] w-full"
                        minDate={pickupDate || today} // Minimum selectable date
                        disablePast // Disable past dates
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {errors.returnDate && (
                <p className="errorMsg mt-2">{errors.returnDate.message}</p>
              )}
            </div>
            <div className="sm:mt-0 mt-7">
              <button
                type="submit"
                className="w-[154px] font-medium h-[55px] bg-lightBlue rounded-md text-white"
              >
                Update Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-[#F2F2F2]">
        <div className="py-3 flex justify-center ml-2">
          <HomeNavLine titleText1="Search results" Icon={CiHome} />
        </div>
        <div className="flex justify-center pb-5">
          <div className="mt-1 w-full sm:ml-[80px] sm:mr-[80px]">
            <div className="flex justify-center gap-6">
              <div className="w-[400px] h-fit lg:block hidden bg-[#FFFFFF] px-6 py-4 mb-4 rounded-lg ml-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MdOutlineTune className="w-[12px] h-[10px] text-[#666666]" />
                    <p className="ml-2 text-[12px] font-medium text-[#666666] ">
                      Filters
                    </p>
                  </div>
                  <p
                    className="ml-2 text-[14px] font-medium text-[#4F46E5] cursor-pointer"
                    onClick={handleSetClearFilter}
                  >
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
                    checked={selectedTypes.includes("Small car")}
                    onChange={handleCheckboxChangeData}
                    name="Small car"
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
                    checked={selectedTypes.includes("Midsize car")}
                    onChange={handleCheckboxChangeData}
                    name="Midsize car"
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
                    Midsize car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={selectedTypes.includes("Big car")}
                    onChange={handleCheckboxChangeData}
                    name="Big car"
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
                    Big car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={selectedTypes.includes("Micro car")}
                    onChange={handleCheckboxChangeData}
                    name="Micro car"
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
                    Micro car
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={selectedTypes.includes("SUV Group A")}
                    onChange={handleCheckboxChangeData}
                    name="SUV Group A"
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
                    SUV Group A
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={selectedTypes.includes("Luxury car")}
                    onChange={handleCheckboxChangeData}
                    name="Luxury car"
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
                    onChange={handleCheckboxChange}
                    checked={checkList.Autohuset}
                    name="Autohuset"
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
                    onChange={handleCheckboxChange}
                    checked={checkList.Rentlog}
                    name="Rentlog"
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
                    checked={transmissionTypes.includes("Automatic")}
                    onChange={handleTransmissionChange}
                    name="Automatic"
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
                    checked={transmissionTypes.includes("Manual")}
                    onChange={handleTransmissionChange}
                    name="Manual"
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
                    Seats
                    <MdOutlineErrorOutline className="w-[16px] h-[16px] text-[#999999] ml-2" />
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={seatTypes.includes("5")}
                    onChange={handleSeatSetChange}
                    name="5"
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
                    5
                    <span className="ml-2 text-[#999999] text-[12px] font-medium">
                      (88)
                    </span>
                  </p>
                </div>
                <div className="flex mt-2">
                  <Checkbox
                    checked={seatTypes.includes("4")}
                    onChange={handleSeatSetChange}
                    name="4"
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
                    4
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
                    checked={fuelTypes.includes("Diesel")}
                    onChange={handleFuelChange}
                    name="Diesel"
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
                    checked={fuelTypes.includes("Petrol")}
                    onChange={handleFuelChange}
                    name="Petrol"
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
                    checked={fuelTypes.includes("Hybrid")}
                    onChange={handleFuelChange}
                    name="Hybrid"
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
                    checked={towBarTypes}
                    onChange={handleTowBarChange}
                    name="Towbar"
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
              <div className="w-full md:ml-5 ml-2">
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-medium md:pl-3  text-[#666666]">
                    <span className="text-[#262626] font-semibold">
                      {totalCards || 0}
                    </span>{" "}
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
                  <p className="text-[14px] font-medium text-[#666666] mr-2">
                    Price (low to high)
                  </p>
                </div>
                <div className="md:p-[12px] p-1">
                  {loading ? (
                    <div className="flex items-center justify-center w-full h-[300px] text-center">
                      <h1 className=" font-medium text-[50px]">
                        Loading Cars....
                      </h1>
                    </div>
                  ) : carListData?.length === 0 ? (
                    <div className="flex items-center justify-center w-full h-[300px] text-center">
                      <h1 className="font-medium text-[50px]">No car found!</h1>
                    </div>
                  ) : (
                    carListData
                      ?.slice(indexOfFirstCard, indexOfLastCard)
                      .map((item, index) => (
                        <FindCarRightPart
                          carData={item}
                          NextGoButton={props.NextGo}
                          key={index}
                        />
                      ))
                  )}
                  {currentPage === Math.ceil(totalCards / cardsPerPage) && (
                    <div className="py-[12px] mt-10">
                      <div className="flex flex-wrap lg:justify-between gap-6">
                        {[1, 2, 3, 4, 5].map((items, key) => {
                          return (
                            <>
                              <div
                                className="md:mt-0 shadow-md p-5 bg-[#FFFFFF] text-center rounded-lg"
                                key={key}
                              >
                                <h1 className="text-[20px] font-bold text-[#262626]">
                                  24 Feb - 27 Feb
                                </h1>
                                <p className="mt-2 text-[#666666] text-[20px] font-medium">
                                  8 cars available
                                </p>
                                <button
                                  type="button"
                                  className="text-[#4F46E5] mt-7 w-full text-[14px] md:w-[167px] font-medium  border border-[#4F46E5]  bg-white rounded-sm px-10 py-2"
                                >
                                  Show cars
                                </button>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="mt-5">
                    <Stack spacing={2}>
                      <Pagination
                        count={Math.ceil(totalCards / cardsPerPage)}
                        variant="outlined"
                        shape="rounded"
                        page={currentPage}
                        onChange={handleChangePagination}
                        sx={{
                          "& .Mui-selected": {
                            backgroundColor: "#4F46E5",
                            color: "#4F46E5",
                          },
                        }}
                      />
                    </Stack>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCar;
