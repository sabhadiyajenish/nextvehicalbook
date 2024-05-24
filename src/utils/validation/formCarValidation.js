const carTitleValidate = {
  required: {
    value: true,
    message: "Title is Required.",
  },
  minLength: {
    value: 6,
    message: "Title should be at-least 6 characters.",
  },
  maxLength: {
    value: 200,
    message: "Title maximum 200 characters.",
  },
};

const DescriptionValidate = {
  required: {
    value: true,
    message: "Description is Required.",
  },
  minLength: {
    value: 30,
    message: "Description should be at-least 30 characters.",
  },
  maxLength: {
    value: 1500,
    message: "Description maximum 1500 characters.",
  },
};

const LocationValidate = {
  required: {
    value: true,
    message: "Location is Required.",
  },
  minLength: {
    value: 10,
    message: "Location should be at-least 10 characters.",
  },
  maxLength: {
    value: 600,
    message: "Location maximum 600 characters.",
  },
};

const fullNameValidate = {
  required: {
    value: true,
    message: "FullName is Required.",
  },
  minLength: {
    value: 4,
    message: "FullName should be at-least 6 characters.",
  },
  maxLength: {
    value: 100,
    message: "FullName maximum 100 characters.",
  },
};
const PerDayCostValidate = {
  required: {
    value: true,
    message: "per day cost is Required.",
  },
  minLength: {
    value: 1,
    message: "per day cost minimum 1 number required",
  },
  maxLength: {
    value: 5,
    message: "per day cost maximum 5 number required",
  },
};
const EmailValidate = {
  required: {
    value: true,
    message: "Email is Required.",
  },
  pattern: {
    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    message: "Email is not valid.",
  },
};
const PasswordValidate = {
  required: {
    value: true,
    message: "PassWord is Required.",
  },
  validate: {
    checkLength: (value) => value.length >= 5,
    matchPattern: (value) =>
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value),
  },
};
const ProfileValidate = {
  required: {
    value: true,
    message: "Cover Image is Required.",
  }, // for making the input required
  validate: {
    // If you want other file format, then add them to the array
    fileType: (file) =>
      ["jpg", "png", "jpeg"].includes(
        file[0]?.type?.split("/")[1].toLowerCase()
      ) || "The file type should be Image",

    fileSize: (file) =>
      file[0].size / (1024 * 1024) < 5 ||
      "The file size should be less than 5MB",
    //Add other validation if you want. For example, checking for file size
  },
};
const FirstNameValidate = {
  required: {
    value: true,
    message: "FirstName is Required.",
  },
  minLength: {
    value: 2,
    message: "FirstName should be at-least 2 characters.",
  },
  maxLength: {
    value: 100,
    message: "FirstName maximum 100 characters.",
  },
};

const LastNameValidate = {
  required: {
    value: true,
    message: "LastName is Required.",
  },
  minLength: {
    value: 2,
    message: "LastName should be at-least 2 characters.",
  },
  maxLength: {
    value: 100,
    message: "LastName maximum 100 characters.",
  },
};

const CompanyNameValidate = {
  required: {
    value: true,
    message: "Company Name is Required.",
  },
  minLength: {
    value: 5,
    message: "Company Name should be at-least 5 characters.",
  },
  maxLength: {
    value: 100,
    message: "Company Name maximum 100 characters.",
  },
};

const CompanyCVRValidate = {
  required: {
    value: true,
    message: "Company CVR is Required.",
  },
  minLength: {
    value: 2,
    message: "Company CVR should be at-least 2 characters.",
  },
  maxLength: {
    value: 100,
    message: "Company CVR maximum 100 characters.",
  },
};

const PhoneNumberValidate = {
  required: {
    value: true,
    message: "phone number is Required.",
  },
  minLength: {
    value: 10,
    message: "phone number should be at-least 10 characters.",
  },
  maxLength: {
    value: 12,
    message: "phone number maximum 12 characters.",
  },
};
const AddressValidate = {
  required: {
    value: true,
    message: "address is Required.",
  },
  minLength: {
    value: 6,
    message: "address should be at-least 6 characters.",
  },
  maxLength: {
    value: 500,
    message: "address maximum 500 characters.",
  },
};
const PostalCodeValidate = {
  required: {
    value: true,
    message: "postalcode is Required.",
  },
  minLength: {
    value: 2,
    message: "postalcode should be at-least 2 characters.",
  },
  maxLength: {
    value: 100,
    message: "postalcode maximum 100 characters.",
  },
};
const CityValidate = {
  required: {
    value: true,
    message: "City is Required.",
  },
  minLength: {
    value: 2,
    message: "City should be at-least 2 characters.",
  },
  maxLength: {
    value: 100,
    message: "City maximum 100 characters.",
  },
};
const DrivingLicenseValidate = {
  required: {
    value: true,
    message: "Driving License Number is Required.",
  },
  minLength: {
    value: 4,
    message: "Driving License Number should be at-least 4 characters.",
  },
  maxLength: {
    value: 20,
    message: "Driving License Number maximum 20 characters.",
  },
};
export {
  carTitleValidate,
  DescriptionValidate,
  PerDayCostValidate,
  fullNameValidate,
  EmailValidate,
  PasswordValidate,
  ProfileValidate,
  LocationValidate,
  FirstNameValidate,
  LastNameValidate,
  CompanyNameValidate,
  CompanyCVRValidate,
  PhoneNumberValidate,
  AddressValidate,
  PostalCodeValidate,
  CityValidate,
  DrivingLicenseValidate,
};
