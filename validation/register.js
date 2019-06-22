const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validRegisterInput(data){
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
//Name Checks
if(Validator.isEmpty(data.name)){
    errors.name = "Name field is Required";
}
//Email Check
if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required";
}else if(!Validator.isEmail(data.email)){
    errors.emaiol = "Email is Invalid";
}
//Password checks
if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required";
}
if(Validator.isEmpty(data.password2)){
    errors.password2 = "Confirm Password field is required"
}
if(!Validator.isLength(data.password,{min: 6 , max:30})){
    errors.password = "Password must be of atleast 6 characters"
}
if(!Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match"
}
return{
    errors,
    isValid: isEmpty(errors)
};
}