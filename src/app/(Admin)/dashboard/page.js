"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Checkbox from "@mui/material/Checkbox";
import Select from "react-select";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Page = () => {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileInputChangeMultiple = (event) => {
    const files = event.target.files;
    if (files) {
      const previews = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          if (previews.length === files.length) {
            setImagePreviews(previews);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };
  const handleDeleteImage = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const optionsSeat = [
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];
  const optionsCars = [
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Grey", label: "Grey" },
    { value: "Red", label: "Red" },
  ];
  const optionsManual = [
    { value: "Manual", label: "Manual" },
    { value: "Driver", label: "Driver" },
  ];
  const optionsFual = [
    { value: "Petrol", label: "Petrol" },
    { value: "Diesel", label: "Diesel" },
    { value: "Gas", label: "Gas" },
  ];
  const optionsHook = [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];
  const optionsPerLiter = [
    { value: "10", label: "10" },
    { value: "12", label: "12" },
    { value: "14", label: "14" },
    { value: "16", label: "16" },
    { value: "18", label: "18" },
    { value: "20", label: "20" },
    { value: "22", label: "22" },
    { value: "15", label: "15" },
  ];
  const optionsModal = [
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2017", label: "2017" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2022", label: "2022" },
    { value: "2024", label: "2024" },
  ];
  return (
    <>
      <div>
        <div className="mt-20">
          <Button onClick={handleClickOpen("paper")}>scroll=body</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={"xl"}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Add Car</DialogTitle>
            <DialogContent className="w-full" dividers={scroll === "paper"}>
              <div className="w-full p-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="">
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        // defaultValue={dayjs("2022-04-17T15:30")}
                        label="Pickup Time"
                        className="w-full"
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        // defaultValue={dayjs("2022-04-17T15:30")}
                        label="Return Time"
                        className="w-full"
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-5">
                  <div className="">
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={2}
                      className="w-full"
                    />
                  </div>
                  <div className="">
                    <TextField
                      id="outlined-multiline-static"
                      label="Sub Description"
                      multiline
                      rows={2}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-5">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <label>Cover Image:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="mt-2"
                      />
                    </div>
                    {imagePreview && (
                      <div>
                        <Image
                          className="rounded-lg w-[150px] h-[80px]"
                          src={imagePreview}
                          alt=""
                          height={100}
                          width={100}
                          key={10}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex  justify-between">
                    <div className="flex flex-col">
                      <label for="img">Sub Images:</label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        title="Hello"
                        className="mt-2"
                        onChange={handleFileInputChangeMultiple}
                      />
                    </div>
                    <div className="">
                      <div className="grid grid-cols-3 gap-3">
                        {imagePreviews.map((preview, index) => (
                          <Image
                            className="rounded-lg w-[150px] h-[80px] "
                            src={preview}
                            alt="wfw"
                            height={100}
                            width={100}
                            key={index}
                            onClick={() => handleDeleteImage(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="mt-7 font-semibold ">Car Information</h1>
                  <div className="grid md:grid-cols-4 gap-4 mt-10">
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Car Color"
                        className="w-full"
                        name="carType"
                        defaultValue="White"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsCars.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Seat"
                        className="w-full"
                        name="carType"
                        defaultValue="4"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsSeat.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Manual"
                        className="w-full"
                        name="carType"
                        defaultValue="Manual"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsManual.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Fuel Type"
                        className="w-full"
                        name="carType"
                        defaultValue="Petrol"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsFual.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Car Modal"
                        className="w-full"
                        name="carType"
                        defaultValue="2024"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsModal.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Per Liter (km)"
                        className="w-full"
                        name="carType"
                        defaultValue="14"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsPerLiter.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Hook"
                        className="w-full"
                        name="Hook"
                        defaultValue="No"
                        //   value={find}
                        // onChange={optionsSeat}
                        // helperText="Please select your currency"
                      >
                        {optionsHook.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label> Equipment</label>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                          defaultChecked={true}
                          // onChange={handleCheckboxChange}
                          // checked={checkList.LuxuryCar}
                          name="Airconditioning"
                        />
                        <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                          Air conditioning
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                          // onChange={handleCheckboxChange}
                          // checked={checkList.LuxuryCar}
                          name="SeatHeating"
                        />
                        <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                          Seat heating
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                          // onChange={handleCheckboxChange}
                          // checked={checkList.LuxuryCar}
                          name="Isofix"
                        />
                        <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                          Isofix
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                          // onChange={handleCheckboxChange}
                          // checked={checkList.LuxuryCar}
                          name="Bluetooth"
                          defaultChecked={true}
                        />
                        <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                          Bluetooth
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                          defaultChecked={true}
                          // onChange={handleCheckboxChange}
                          // checked={checkList.LuxuryCar}
                          name="USB"
                        />
                        <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                          USB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                className="bg-[#FF9393]"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Add Car
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Page;
