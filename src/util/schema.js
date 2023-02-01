import * as yup from "yup";

export const schemaNotifyMe = yup.object().shape({
  email_address: yup
    .string()
    .email("Email must be a valid email")
    .required("Email field cannot be empty"),
});

export const schemaLogInUser = yup.object().shape({
  userName: yup.string().required("Name field cannot be empty"),
  password: yup
    .string()
    .min(8, "Password must not be less done eight characters.").required("Password cannot be empty"),
});
export const schemaLogInCounselor = yup.object().shape({
  userName: yup.string().required("Name field cannot be empty"),
  password: yup
    .string()
    .min(8, "Password must not be less done eight characters.").required("Password cannot be empty"),
});




