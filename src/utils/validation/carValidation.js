import * as Yup from "yup";

const imageValidation = Yup.mixed()
  .test("fileType", "Unsupported file type", (value) => {
    // Ensure that a file is selected
    if (!value) return false;

    // Check if the file is an image (you may want to refine this check)
    // const supportedTypes = ["image/jpeg", "image/png"];
    // if (!supportedTypes.includes(value.type)) return false;

    // Check file size (you may want to adjust the limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (value.size > maxSize) return false;

    return true;
  })
  .nullable();

const CarValidationSchema = Yup.object().shape({
  title: Yup.string().required().min(5).max(200),
  description: Yup.string().required().min(10).max(1500),
  // file: imageValidation,
  // pickup_time: Yup.date().required().min(new Date()),
  // return_time: Yup.date().min(Yup.ref("pickup_time")),
  address: Yup.string().required().min(5).max(500),
  perDayCost: Yup.number().required().positive(),

  seat: Yup.number().required().positive(),
  manual: Yup.string().required().min(2).max(30),
  perLiter: Yup.string().required().min(1).max(4),
  oilType: Yup.string().required().min(3).max(200),
  doors: Yup.number().required().positive(),
  hook: Yup.string().required().max(20),
  carColor: Yup.string().required().min(2).max(40),
  model: Yup.string().required().min(2),
  carSizeType: Yup.string().required(),
});

export { CarValidationSchema };
