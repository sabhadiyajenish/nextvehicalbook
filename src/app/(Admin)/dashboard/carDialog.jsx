"use client";
import { fileUploadCloud } from "@/utils/cloudinary";
import {
  optionsCarTypes,
  optionsCars,
  optionsFual,
  optionsHook,
  optionsManual,
  optionsModal,
  optionsPerLiter,
  optionsSeat,
} from "@/utils/options";
import {
  DescriptionValidate,
  LocationValidate,
  PerDayCostValidate,
  ProfileValidate,
  carTitleValidate,
} from "@/utils/validation/formCarValidation";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import InputAdornment from "@mui/material/InputAdornment";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import stateData from "@/data/stateDistrict.json";
import { useDispatch } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { getCarList } from "@/app/store/Car/car.Api";
const CarDialog = ({ onAdd, onClose, onUpdate, open, car }) => {
  let view = car?.view;
  const editMode = Boolean(car);
  const [scroll, setScroll] = useState("paper");
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreviewUpdate, setImagePreviewUpdate] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imagePreviewsUpdates, setImagePreviewsUpdates] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const dispatch = useDispatch();
  console.log("car<<<<<<<<<<<<<<", car);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setImagePreview(car?.coverImage);
    setImagePreviews(car?.subImagees);
    setValue("title", car?.title);
    setValue("PickupTime", dayjs(car?.pickup_time));
    setValue("ReturnTime", dayjs(car?.return_time));
    setValue("PerDayCost", car?.perDayCost);
    setValue("Description", car?.description);
    setValue("SubDescription", car?.subDescription);
  }, []);

  useEffect(() => {
    if (view) {
      setImagePreview(car?.coverImage);
      setImagePreviews(car?.subImagees);
    }
  }, [view]);
  const AddCarsData = async (item) => {
    setLoadingData(true);
    let arr = [];
    if (item.Airconditioning) {
      arr.push("Air conditioning");
    }
    if (item.Bluetooth) {
      arr.push("Bluetooth");
    }
    if (item.Isofix) {
      arr.push("Isofix");
    }
    if (item.SeatHeating) {
      arr.push("SeatHeating");
    }
    if (item.USB) {
      arr.push("USB");
    }
    const fileImage = await fileUploadCloud(imagePreview);

    const valData = imagePreviews?.map(async (items) => {
      return fileUploadCloud(items);
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
      equipment: arr,
    };
    axios
      .post("/api/cars/addcars", data1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((datas) => {
        if (datas?.data?.status === 200) {
          reset();
          onClose();
          dispatch(getCarList());
          toast.success(datas?.data?.message);
        } else {
          toast.error(datas?.data?.message);
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
  const UpdateCarData = async (item) => {
    setLoadingData(true);

    let fileImage = null;
    let filesImagesPath = [];

    if (imagePreviewUpdate) {
      fileImage = await fileUploadCloud(imagePreviewUpdate);
    }
    if (imagePreviewsUpdates?.length !== 0) {
      const valData = imagePreviewsUpdates?.map(async (items) => {
        return fileUploadCloud(items);
      });
      const uploadedPaths = await Promise.all(valData);
      uploadedPaths.map((items, key) => {
        filesImagesPath.push(items?.url);
      });
    }
    let arr = [];
    if (item.Airconditioning) {
      arr.push("Air conditioning");
    }
    if (item.Bluetooth) {
      arr.push("Bluetooth");
    }
    if (item.Isofix) {
      arr.push("Isofix");
    }
    if (item.SeatHeating) {
      arr.push("SeatHeating");
    }
    if (item.USB) {
      arr.push("USB");
    }
    const data1 = {
      ...item,
      SubImages: filesImagesPath,
      coverImage: fileImage?.url || null,
      equipment: arr,
    };
    axios
      .post(`/api/cars/updatecar/${car?._id}`, data1, {})
      .then((datas) => {
        if (datas?.data?.status === 200) {
          reset();
          onClose();
          dispatch(getCarList());
          toast.success(datas?.data?.message);
        } else {
          toast.error(datas?.data?.message);
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
  const handleFileInputUpdate = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUpdate(reader.result);
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
  const handleFileInputUpdatesMultiple = (event) => {
    const files = event.target.files;
    console.log("ghow may file have in<<<<<", files);
    if (files) {
      const previews = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);

          if (previews.length === files.length) {
            setImagePreviewsUpdates(previews);
            setImagePreviews([...imagePreviews, ...previews]);
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
    reset();
    setImagePreview(null);
    setImagePreviews([]);
    onClose();
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
      <Dialog
        open={Boolean(open)}
        onClose={onClose}
        fullWidth={true}
        maxWidth={"xl"}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Toolbar>
          <div className="flex justify-between ml-2 w-full">
            <DialogTitle id="scroll-dialog-title">Add Car</DialogTitle>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
        <DialogContent className="w-full" dividers={scroll === "paper"}>
          <div className="w-full md:p-8">
            <form
              className="mt-3"
              autoComplete="off"
              onSubmit={handleSubmit(car ? UpdateCarData : AddCarsData)}
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="">
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    className="w-full"
                    // value={car?.title}
                    {...register("title", carTitleValidate)}
                    disabled={view}
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
                      disabled={Boolean(view)}
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
                      disabled={Boolean(view)}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex mt-4 w-full gap-4">
                <div className="w-full">
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Location"
                    className="w-full"
                    name="location"
                    defaultValue={car?.address || "Gujarat"}
                    {...register("location")}
                    disabled={view}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GrLocation className="text-[#9791F2] w=[16.5px] h-[21px]" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {stateData?.states?.map((option, index) => (
                      <MenuItem key={index} value={option?.state}>
                        {option?.state}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="w-full">
                  <TextField
                    id="outlined-basic"
                    label="PerDay Cost"
                    type="number"
                    variant="outlined"
                    className="w-full"
                    {...register("PerDayCost", PerDayCostValidate)}
                    disabled={view}
                  />
                  {errors.PerDayCost && (
                    <p className="errorMsg mt-2">{errors.PerDayCost.message}</p>
                  )}
                </div>
                <div className="w-full">
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Car Types"
                    className="w-full"
                    name="carTypes"
                    defaultValue={car?.carSizeType || "Small car"}
                    {...register("carSizeType")}
                    disabled={view}
                  >
                    {optionsCarTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
                    disabled={view}
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
                    disabled={view}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <div className="flex lg:flex-nowrap flex-wrap justify-between">
                  <div className="flex flex-col">
                    <label>
                      Cover Image:
                      {imagePreviewUpdate
                        ? "(1 image)"
                        : imagePreview
                        ? " (1 image)"
                        : ""}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("coverImage", car ? "" : ProfileValidate)}
                      onChange={
                        car ? handleFileInputUpdate : handleFileInputChange
                      }
                      className="mt-2"
                      disabled={view}
                    />
                    {errors.coverImage && (
                      <p className="errorMsg mt-2">
                        {errors.coverImage.message}
                      </p>
                    )}
                  </div>

                  {imagePreviewUpdate ? (
                    <div className="">
                      <Image
                        className="rounded-lg w-[150px] h-[80px]"
                        src={imagePreviewUpdate}
                        alt=""
                        height={100}
                        width={100}
                        key={10}
                      />
                    </div>
                  ) : (
                    imagePreview && (
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
                    )
                  )}
                </div>
                <div className="flex flex-wrap flex-shrink lg:flex-nowrap  justify-between">
                  <div className="flex flex-col">
                    <label htmlFor="img">
                      Sub Images:
                      {imagePreviews?.length !== 0
                        ? `${
                            imagePreviews?.length == undefined
                              ? ""
                              : ` (${imagePreviews?.length} image)`
                          }`
                        : ""}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      title="Hello"
                      className="mt-2"
                      {...register("SubImages", car ? "" : ProfileValidate)}
                      onChange={
                        car
                          ? handleFileInputUpdatesMultiple
                          : handleFileInputChangeMultiple
                      }
                      disabled={view}
                    />
                    {errors.SubImages && (
                      <p className="errorMsg mt-2">
                        {errors.SubImages.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <div className="flex flex-wrap md:grid md:grid-cols-3 gap-3 lg:mt-0 mt-5">
                      {imagePreviews?.map((preview, index) => (
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
                      defaultValue={car?.carInformation[0]?.carColor || "White"}
                      {...register("carColor")}
                      disabled={view}
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
                      defaultValue={car?.carInformation[0]?.seat || "4"}
                      {...register("Seat")}
                      disabled={view}
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
                      label="Transmission"
                      className="w-full"
                      name="carType"
                      defaultValue={car?.carInformation[0]?.manual || "Manual"}
                      {...register("Manual")}
                      disabled={view}
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
                      defaultValue={car?.carInformation[0]?.oilType || "Petrol"}
                      {...register("FuelType")}
                      disabled={view}
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
                      defaultValue={car?.carInformation[0]?.model || "2024"}
                      {...register("CarModal")}
                      disabled={view}
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
                      name="PerLiter"
                      defaultValue={car?.carInformation[0]?.perLiter || "14"}
                      {...register("PerLiter")}
                      disabled={view}
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
                      {...register("Hook")}
                      defaultValue={car?.carInformation[0]?.hook || "Yes"}
                      disabled={view}
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
                        defaultChecked={
                          car?.equipment?.includes("Air conditioning") ?? true
                        }
                        disabled={view}
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
                        defaultChecked={
                          car?.equipment?.includes("SeatHeating") ?? false
                        }
                        name="SeatHeating"
                        // value={view?.carInformation[0]?.hook}
                        disabled={view}
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
                        defaultChecked={
                          car?.equipment?.includes("Isofix") ?? false
                        }
                        {...register("Isofix")}
                        name="Isofix"
                        disabled={view}
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
                        defaultChecked={
                          car?.equipment?.includes("Bluetooth") ?? true
                        }
                        {...register("Bluetooth")}
                        name="Bluetooth"
                        disabled={view}
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
                        defaultChecked={car?.equipment?.includes("USB") ?? true}
                        name="USB"
                        disabled={view}
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
                {view ? (
                  ""
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    className="ml-5"
                    disabled={loadingData}
                  >
                    {loadingData
                      ? "Loading..."
                      : car
                      ? "Update Car"
                      : "Add Car"}
                  </Button>
                )}
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
    </>
  );
};

export default CarDialog;
