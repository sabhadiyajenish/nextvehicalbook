import * as Yup from "yup";

const UserValidationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).max(100),
  lastName: Yup.string().required().min(2).max(100),
  email: Yup.string()
    .required()
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Email is not valid"),
  phoneNumber: Yup.string()
    .required()
    .matches(/^[0-9]+$/),
  address: Yup.string().required().min(6).max(500),

  postalCode: Yup.string()
    .required()
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/),
  city: Yup.string().required().min(2).max(100),
  drivindLicence: Yup.string()
    .required()
    .min(4)
    .max(20)
    .matches(/^[a-zA-Z0-9]*$/),
});

export { UserValidationSchema };
