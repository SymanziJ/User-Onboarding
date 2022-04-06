import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least three characters long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password mus be at least 6 characters long"),
  tos: yup
    .boolean()
    .oneOf([true], "Please agree to the terms of service to proceed"),
})

export default formSchema;