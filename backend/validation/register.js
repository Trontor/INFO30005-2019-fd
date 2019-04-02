const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.name) ? data.name : "";
  data.password = !isEmpty(data.name) ? data.name : "";
  data.confirmPassword = !isEmpty(data.name) ? data.name : "";

  // Validate Name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Validate Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Validate Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  // Validate Confirm Password
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.password = "Confirm Password field is required";
  }
  if (Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords do not match";
  }
  return { errors, isValid: isEmpty(errors) };
};
