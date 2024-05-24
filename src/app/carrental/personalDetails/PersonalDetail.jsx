"use client";
import HomeNavLine from "@/app/components/homeNavLine";
import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import CardImageAddons from "../addOnes/CardImageAddons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import {
  AddressValidate,
  CityValidate,
  CompanyCVRValidate,
  CompanyNameValidate,
  DrivingLicenseValidate,
  EmailValidate,
  FirstNameValidate,
  LastNameValidate,
  PhoneNumberValidate,
  PostalCodeValidate,
} from "@/utils/validation/formCarValidation";
import toast from "react-hot-toast";

const PersonalDetail = (props) => {
  const [formType, setFormType] = useState("Individual");
  const [accurate, setAccurate] = useState(true);
  const [ternCondtion, setTermCondition] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const AddUserData = (items) => {
    if (accurate && ternCondtion) {
      console.log("ites data issss<<<<", items);
      props.NextGo();
    } else {
      toast.error(
        accurate == true
          ? "Select terms & conditions"
          : "Please Select confirm box",
        { position: "top-center" }
      );
    }
  };
  const handleCheckboxChange = (event, setEvents) => {
    setEvents(event.target.checked);
  };
  return (
    <>
      <div className="bg-[#F2F2F2] pb-5">
        <div className=" container mx-auto max-w-[1366px] ">
          <div className="py-3 flex justify-center md:mx-[80px]">
            <HomeNavLine
              titleText1="Search results"
              titleText2="Add-ons"
              titleText3="Personal details"
              Icon={CiHome}
            />
          </div>
          <div className="flex lg:flex-nowrap  gap-6 flex-wrap lg:mx-[80px]">
            <div className="w-full">
              <div className="max-w-[822px]  py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={formType}
                      onChange={handleFormTypeChange}
                    >
                      <FormControlLabel
                        value="Individual"
                        control={<Radio />}
                        label="Individual"
                      />
                      <FormControlLabel
                        value="Company"
                        control={<Radio />}
                        label="Company"
                        className="ml-2"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <form
                  autoComplete="off"
                  id="myForm"
                  onSubmit={handleSubmit(AddUserData)}
                >
                  <div>
                    <div className="grid md:grid-cols-2  gap-y-9 gap-x-4 mt-[32px]">
                      {formType === "Company" && (
                        <>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Company Name"
                              variant="outlined"
                              className="w-full"
                              {...register(
                                "companyName",
                                formType === "Company"
                                  ? CompanyNameValidate
                                  : ""
                              )}
                            />
                            {errors.companyName && (
                              <p className="errorMsg mt-2">
                                {errors.companyName.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Company CVR"
                              variant="outlined"
                              className="w-full"
                              {...register(
                                "companyCVR",
                                formType === "Company" ? CompanyCVRValidate : ""
                              )}
                            />
                            {errors.companyCVR && (
                              <p className="errorMsg mt-2">
                                {errors.companyCVR.message}
                              </p>
                            )}
                          </div>
                        </>
                      )}
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="First name"
                          variant="outlined"
                          className="w-full"
                          {...register("firstName", FirstNameValidate)}
                        />
                        {errors.firstName && (
                          <p className="errorMsg mt-2">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Last name"
                          variant="outlined"
                          className="w-full"
                          {...register("lastName", LastNameValidate)}
                        />
                        {errors.lastName && (
                          <p className="errorMsg mt-2">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          className="w-full"
                          {...register("email", EmailValidate)}
                        />
                        {errors.email && (
                          <p className="errorMsg mt-2">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Phone number"
                          variant="outlined"
                          className="w-full"
                          {...register("phoneNumber", PhoneNumberValidate)}
                        />
                        {errors.phoneNumber && (
                          <p className="errorMsg mt-2">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Address"
                          variant="outlined"
                          className="w-full"
                          {...register("address", AddressValidate)}
                        />
                        {errors.address && (
                          <p className="errorMsg mt-2">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Postal code"
                          variant="outlined"
                          className="w-full"
                          {...register("postalCode", PostalCodeValidate)}
                        />
                        {errors.postalCode && (
                          <p className="errorMsg mt-2">
                            {errors.postalCode.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                          {...register("city", CityValidate)}
                        />
                        {errors.city && (
                          <p className="errorMsg mt-2">{errors.city.message}</p>
                        )}
                      </div>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Driving licence number"
                          variant="outlined"
                          className="w-full"
                          {...register(
                            "drivingLicenceNumber",
                            DrivingLicenseValidate
                          )}
                        />

                        {errors.drivingLicenceNumber && (
                          <p className="errorMsg mt-2">
                            {errors.drivingLicenceNumber.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flex items-start">
                        <Checkbox
                          // checked={transmissionTypes.includes("Manual")}
                          // onChange={handleTransmissionChange}
                          defaultChecked={accurate}
                          onChange={(e) => handleCheckboxChange(e, setAccurate)}
                          name="confirm"
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                        />
                        <p className="text-[16px] font-normal text-[#666666] ml-2 ">
                          I confirm that the provided information is accurate,
                          and I consent to being contacted regarding my
                          request/booking.
                        </p>
                      </div>
                      <div className="flex items-start mt-8">
                        <Checkbox
                          // checked={transmissionTypes.includes("Manual")}
                          // onChange={handleTransmissionChange}
                          defaultChecked={ternCondtion}
                          onChange={(e) =>
                            handleCheckboxChange(e, setTermCondition)
                          }
                          name="read"
                          sx={{
                            color: "#4F46E5",
                            padding: 0,
                            "&.Mui-checked": {
                              color: "#4F46E5",
                              padding: 0,
                            },
                          }}
                        />
                        <p className="text-[16px] font-normal text-[#666666] ml-2 ">
                          I have read and accepted the
                          <span className="text-lightBlue mx-1 underline decoration-lightBlue cursor-pointer">
                            terms & conditions
                          </span>
                          and
                          <span className="text-lightBlue ml-1 underline decoration-lightBlue cursor-pointer">
                            privacy policy
                          </span>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="lg:w-[822px] mt-6 py-6 px-7 bg-[#FFFFFF] rounded-md shadow-md">
                <div className="flex md:flex-nowrap flex-wrap justify-between items-center">
                  <button
                    className={`
                    
                              text-[#4F46E5] bg-[#FFFFFF]
                            font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    onClick={() => props.NextBack()}
                  >
                    Go back
                  </button>

                  <button
                    className={`
                              bg-[#4F46E5] text-[#FFFFFF]
                               
                           font-medium text-[14px] border border-[#4F46E5] rounded-md w-fit px-6 py-2`}
                    type="submit"
                    form="myForm"
                  >
                    Continue to payment
                  </button>
                </div>
              </div>
            </div>
            <div className="md:max-w-[360px] w-full">
              <CardImageAddons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetail;
