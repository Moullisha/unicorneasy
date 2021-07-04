import React from 'react';
 import { useFormik, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import Button from '../customElements/Button';
 import Input from '../customElements/Input';
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
        username:'',
        displayUsername: '',
        password: '',
        role: '',
        isCorporate: false,
        visibilty: false,
        corporateDetails : {
          registeredName : '',
          companyRegistrationNumber : '',
          typeOfCompany: '',
          statusOfCompany: '',
          incorporationDate: '',
          registeredAddress1: '',
          registeredAddress2: '',
          registeredAddress3: '',
          registeredCity: '',
          registeredState: '',
          registeredCountry : '',
          sailAddress: '',
        },
        userProfile: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            address1: '',
            address2: '',
            address3: '',
            city:'',
            state: '',
            pincode: '',
            country: '',

        }
     },
    //  validationSchema: Yup.object({
    //    username: Yup.string()
    //       .min(3, 'Must be atleast 3 characters')
    //       .max(15, 'Must be 15 carcaters or less')
    //       .required('Required'),
    //    displayUsername: Yup.string()
    //       .max(15, 'Must be 15 carcaters or less')
    //       .required('Required'),
    //    password: Yup.string()
    //       .max(15, 'Must be 15 carcaters or less')
    //       .required('Required')
    //       .matches(
    //         /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //         "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    //       ),
    //    role: Yup.string(),
    //    firstName: Yup.string()
    //      .max(15, 'Must be 15 characters or less')
    //      .min(3, 'Must be 3 charcaters or more')
    //      .required('Required'),
    //    middleName: Yup.string()
    //      .max(15, 'Must be 15 characters or less')
    //      .min(3, 'Must be 3 charcaters or more'),
    //    lastName: Yup.string()
    //      .max(20, 'Must be 20 characters or less')
    //      .min(3, 'Must be 3 charcaters or more')
    //      .required('Required'),
    //    email: Yup.string().email('Invalid email address').required('Required'),
    //  }),
     onSubmit: values => {
      console.log("Submitting")
      console.log(values);
       alert(JSON.stringify(values, null, 2));
       
       
       formik.resetForm();
     },
     
   });

   const subForm = () => {
     return (
       <div>
         <div>
         <label htmlFor="registeredName">Registered Name</label>
         <input
         id="registeredName"
         name = "registeredName"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredName}
         />
       </div>
       <div>
         <label htmlFor="companyRegistrationNumber">Registration Number</label>
         <input
         id="companyRegistrationNumber"
         name = "companyRegistrationNumber"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.companyRegistrationNumber}
         />
       </div>
       <div>
         <label htmlFor="typeOfCompany">Type of Company</label>
         <input
         id="typeOfCompany"
         name = "typeOfCompany"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.typeOfCompany}
         />
       </div>
       <div>
         <label htmlFor="statusOfCompany">Status of Company</label>
         <input
         id="statusOfCompany"
         name = "statusOfCompany"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.statusOfCompany}
         />
       </div>
       <div>
         <label htmlFor="incorporationDate">Incorporation Date</label>
         <input
         id="incorporationDate"
         name = "incorporationDate"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.incorporationDate}
         />
       </div>
       <div>
         <label htmlFor="registeredAddress1">Registered Address 1</label>
         <input
         id="registeredAddress1"
         name = "registeredAddress1"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredAddress1}
         />
       </div>
       <div>
         <label htmlFor="registeredAddress2">Registered Address 2</label>
         <input
         id="registeredAddress2"
         name = "registeredAddress2"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredAddress2}
         />
       </div>
       <div>
         <label htmlFor="registeredAddress3">Registered Address 3</label>
         <input
         id="registeredAddress3"
         name = "registeredAddress3"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredAddress3}
         />
       </div>
       <div>
         <label htmlFor="registeredCity">Registered City</label>
         <input
         id="registeredCity"
         name = "registeredCity"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredCity}
         />
       </div>
       <div>
         <label htmlFor="registeredState">Registered State</label>
         <input
         id="registeredState"
         name = "registeredState"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredState}
         />
       </div>
       <div>
         <label htmlFor="registeredCountry">Registered Country</label>
         <input
         id="registeredCountry"
         name = "registeredCountry"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.registeredCountry}
         />
       </div>
       <div>
         <label htmlFor="sailAddress">Sail Address</label>
         <input
         id="sailAddress"
         name = "sailAddress"
         type = "text"
         onChange = {formik.handleChange}
         onBlur = {formik.handleBlur}
         value = {formik.values.corporateDetails.sailAddress}
         />
       </div>
       </div>
     )
   }

  //  console.log("Form data", formik.values)
   return (
     <form onSubmit={formik.handleSubmit}>
         
      <div>
      <label htmlFor="username">User Name</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.username}
       />
       {formik.errors.username ? formik.errors.username : null}
      </div>
       
      <div>
      <label htmlFor="displayUsername">Display User Name</label>
       <input
         id="displayUsername"
         name="displayUsername"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.displayUsername}
       />
       {formik.errors.displayUsername ? formik.errors.displayUsername : null}
      </div>

      <div>
      <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.errors.password ? formik.errors.password : null}
      </div>

      <div>
      <label htmlFor="role">Role</label>
       <input
         id="role"
         name="role"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.role}
       />
      </div>

      <div>
      <label htmlFor="isCorporate">Is this a Corprate Account? </label>
      <label>Yes</label>
      <input id="isCorporate" name="isCorporate" type="radio" ></input>
      <label>No</label>
      <input id="isCorporate" name="isCorporate" type="radio" defaultChecked></input>
       {/* <input
         id="isCorporate"
         name="isCorporate"
         type="checkbox"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.isCorporate}
       /> */}
       </div>
       <section>
         {formik.values.isCorporate ? subForm() : null}
       </section>
       {/* {formik.values.isCorporate ? <div> */}
         
       {/* </div>
        : null } */}
      

       <div style={{display : "none"}}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="userProfile.firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.firstName}
       />
       </div>

       <div>
       <label htmlFor="middleName">Middle Name</label>
       <input
         id="middleName"
         name="userProfile.middleName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.middleName}
       />
       </div>
       {/* {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null} */}
 
       <div>
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="userProfile.lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.lastName}
       />
       </div>
       {/* {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null} */}
 
       <div>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="userProfile.email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.email}
       />
       </div>
       {/* {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null} */}

       <div>
       <label htmlFor="address1">Address 1</label>
       <input
         id="address1"
         name="userProfile.address1"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.address1}
       />
       </div>

       <div>
       <label htmlFor="address2">Address 2</label>
       <input
         id="address2"
         name="userProfile.address2"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.address2}
       />
       </div>

       <div>
       <label htmlFor="address3">Address 3</label>
       <input
         id="address3"
         name="userProfile.address3"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.address3}
       />
       </div>

       <div>
       <label htmlFor="city">City</label>
       <input
         id="city"
         name="userProfile.city"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.city}
       />
       </div>

       <div>
       <label htmlFor="state">State</label>
       <input
         id="state"
         name="userProfile.state"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.state}
       />
       </div>

       <div>
       <label htmlFor="pincode">Pincode</label>
       <input
         id="pincode"
         name="userProfile.pincode"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.pincode}
       />
       </div>

       <div>
       <label htmlFor="country">Country</label>
       <input
         id="country"
         name="userProfile.country"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userProfile.country}
       />
       </div>
       
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default SignupForm;