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
import {
  optionsCars,
  optionsFual,
  optionsHook,
  optionsManual,
  optionsModal,
  optionsPerLiter,
  optionsSeat,
} from "@/utils/options";
import { useForm, Controller } from "react-hook-form";
import {
  DescriptionValidate,
  LocationValidate,
  PerDayCostValidate,
  ProfileValidate,
  carTitleValidate,
} from "@/utils/validation/formCarValidation";
import axios from "axios";
import toast from "react-hot-toast";
import { fileUploadCloud } from "@/utils/cloudinary";

const Page = () => {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [checkList, setCheckList] = useState({
    Airconditioning: true,
    SeatHeating: false,
    Isofix: false,
    Bluetooth: true,
    USB: true,
  });
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const AddCarsData = async (item) => {
    setLoadingData(true);
    const fileImage = await fileUploadCloud(imagePreview);

    const valData = imagePreviews?.map(async (items) => {
      return fileUploadCloud(imagePreview);
    });
    const uploadedPaths = await Promise.all(valData);
    let filesImagesPath = [];
    uploadedPaths.map((items, key) => {
      filesImagesPath.push(items?.url);
    });

    const data1 = {
      ...item,
      SubImages: filesImagesPath,
      coverImage: fileImage?.url,
    };
    console.log("<<<<<<<<<<", data1);
    axios
      .post("/api/cars/addcars", data1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((datas) => {
        if (datas?.data?.status === 200) {
          console.log("datas");
          toast.success(datas?.data?.message);
        } else {
          toast.error(datas?.data?.message);
          console.log("datas");
        }
      })
      .catch((e) => {
        toast.error(e.message);
        console.log("datas", e);
      })
      .finally(() => {
        // setLoading(false);
        setLoadingData(false);
        // setOpen(false);
      });
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckList({
      ...checkList,
      [name]: checked,
    });
  };
  const handleFileInputChange = (event) => {
    console.log("come in handle input chasnge");
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
              <div className="w-full md:p-8">
                <form
                  className="mt-3"
                  autoComplete="off"
                  onSubmit={handleSubmit(AddCarsData)}
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="">
                      <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        className="w-full"
                        {...register("title", carTitleValidate)}
                      />
                      {errors.title && (
                        <p className="errorMsg mt-2">{errors.title.message}</p>
                      )}
                    </div>
                    <div className="">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                          name="PickupTime"
                          control={control}
                          defaultValue={dayjs(new Date())}
                          render={({ field }) => (
                            <MobileTimePicker
                              {...field}
                              label="Pickup Time"
                              className="w-full"
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                          name="ReturnTime"
                          control={control}
                          defaultValue={dayjs(new Date())}
                          render={({ field }) => (
                            <MobileTimePicker
                              {...field}
                              label="Return Time"
                              className="w-full"
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="flex mt-4 w-full gap-4">
                    <div className="md:w-1/2">
                      <TextField
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        className="w-full"
                        {...register("location", LocationValidate)}
                      />
                      {errors.location && (
                        <p className="errorMsg mt-2">
                          {errors.location.message}
                        </p>
                      )}
                    </div>
                    <div className="md:w-1/2">
                      <TextField
                        id="outlined-basic"
                        label="PerDay Cost"
                        type="number"
                        variant="outlined"
                        className="w-full"
                        {...register("PerDayCost", PerDayCostValidate)}
                      />
                      {errors.PerDayCost && (
                        <p className="errorMsg mt-2">
                          {errors.PerDayCost.message}
                        </p>
                      )}
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
                        {...register("Description", DescriptionValidate)}
                      />
                      {errors.Description && (
                        <p className="errorMsg mt-2">
                          {errors.Description.message}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <TextField
                        id="outlined-multiline-static"
                        label="Sub Description"
                        multiline
                        rows={2}
                        className="w-full"
                        {...register("SubDescription")}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div className="flex lg:flex-nowrap flex-wrap justify-between">
                      <div className="flex flex-col">
                        <label>Cover Image:</label>
                        <input
                          type="file"
                          accept="image/*"
                          {...register("coverImage", ProfileValidate)}
                          onChange={handleFileInputChange}
                          className="mt-2"
                        />
                        {errors.coverImage && (
                          <p className="errorMsg mt-2">
                            {errors.coverImage.message}
                          </p>
                        )}
                      </div>
                      {imagePreview && (
                        <div className="">
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
                    <div className="flex flex-wrap flex-shrink lg:flex-nowrap  justify-between">
                      <div className="flex flex-col">
                        <label htmlFor="img">Sub Images:</label>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          title="Hello"
                          className="mt-2"
                          {...register("SubImages", ProfileValidate)}
                          onChange={handleFileInputChangeMultiple}
                        />
                        {errors.SubImages && (
                          <p className="errorMsg mt-2">
                            {errors.SubImages.message}
                          </p>
                        )}
                      </div>
                      <div className="">
                        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-3 lg:mt-0 mt-5">
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
                          {...register("carColor")}
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
                          name="Seat"
                          defaultValue="4"
                          {...register("Seat")}
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
                          {...register("Manual")}
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
                          {...register("FuelType")}
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
                          {...register("CarModal")}
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
                          {...register("PerLiter")}
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
                          {...register("Hook")}
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
                      <div className="md:flex  gap-4 mt-4">
                        <div className="flex md:mt-0 mt-4 items-center gap-2">
                          <Checkbox
                            sx={{
                              color: "#4F46E5",
                              padding: 0,
                              "&.Mui-checked": {
                                color: "#4F46E5",
                                padding: 0,
                              },
                            }}
                            {...register("Airconditioning")}
                            name="Airconditioning"
                          />
                          <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                            Air conditioning
                          </p>
                        </div>
                        <div className="flex md:mt-0 mt-4 items-center gap-2">
                          <Checkbox
                            sx={{
                              color: "#4F46E5",
                              padding: 0,
                              "&.Mui-checked": {
                                color: "#4F46E5",
                                padding: 0,
                              },
                            }}
                            {...register("SeatHeating")}
                            defaultChecked
                            name="SeatHeating"
                          />
                          <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                            Seat heating
                          </p>
                        </div>
                        <div className="flex md:mt-0 mt-4 items-center gap-2">
                          <Checkbox
                            sx={{
                              color: "#4F46E5",
                              padding: 0,
                              "&.Mui-checked": {
                                color: "#4F46E5",
                                padding: 0,
                              },
                            }}
                            {...register("Isofix")}
                            name="Isofix"
                          />
                          <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                            Isofix
                          </p>
                        </div>
                        <div className="flex md:mt-0 mt-4 items-center gap-2">
                          <Checkbox
                            sx={{
                              color: "#4F46E5",
                              padding: 0,
                              "&.Mui-checked": {
                                color: "#4F46E5",
                                padding: 0,
                              },
                            }}
                            {...register("Bluetooth")}
                            defaultChecked
                            name="Bluetooth"
                          />
                          <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                            Bluetooth
                          </p>
                        </div>
                        <div className="flex md:mt-0 mt-4 items-center gap-2">
                          <Checkbox
                            sx={{
                              color: "#4F46E5",
                              padding: 0,
                              "&.Mui-checked": {
                                color: "#4F46E5",
                                padding: 0,
                              },
                            }}
                            {...register("USB")}
                            defaultChecked
                            name="USB"
                          />
                          <p className="text-[14px] font-medium text-[#666666] ml-2 ">
                            USB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full text-center mt-8">
                    <Button
                      variant="contained"
                      className="bg-[#FF9393]"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      className="ml-5"
                      disabled={loadingData}
                    >
                      {loadingData ? "Loading..." : "Add Car"}
                    </Button>
                    {/* <LoadingButton
                      type="submit"
                      color="secondary"
                      loading={loadingData}
                      loadingPosition="start"
                      variant="contained"
                      className="mt-5"
                    >
                      <span>Add Car</span>
                    </LoadingButton> */}
                  </div>
                </form>
              </div>
            </DialogContent>
            <DialogActions>
              {/* <Button
                variant="contained"
                className="bg-[#FF9393]"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Add Car
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Page;
