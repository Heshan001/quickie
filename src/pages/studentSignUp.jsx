import React from "react";
import "../styles/studentSignUp.css";
import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

function StudentSignUp() {
  const navigate = useNavigate();
  // USE THIS TO CATCH QUERY PRAMS -- const locataion = useLocation();
  const location = useLocation();
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };
  const params = new URLSearchParams(location.search);
  console.log(params.get("page"));

  const validationSchema = yup.object({
    fName: yup.string().required("First name is required"),
    lName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const saveStudent = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);
  
    try {
      const res = await axios.post(`/signup`, {
        fName: values.fName,
        lName: values.lName,
        email: values.email,
        password: values.password,
        role: "student",
      });
  
      if (res.status === 200) {
        navigate("/Login");
         // Assuming authentication is successful, navigate to the home page
      } else {
        // Handle other cases if needed
        console.log("Authentication failed:", res.jsonData.data.message);
        // Display error message to the user
        FormikAction.setErrors({ serverError: res.jsonData.data.message });
      }
    } catch (error) {
      console.error("Error during authentication:", error.response);
      
    }
      FormikAction.resetForm();
      FormikAction.setSubmitting(false);
 
  };


  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>

      <div className="hero"></div>

      <div className="signUpForm">
        <h1>Student SignUp</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={saveStudent}
          validationSchema={validationSchema}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <div className="inputs">
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="first name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fName}
                />
                {errors.fName && touched.fName ? (
                  <span>{errors.fName}</span>
                ) : null}
              </div>
              <div className="inputs">
                <input
                  placeholder="last name"
                  name="lName"
                  id="lName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lName}
                />
              </div>
              <div className="inputs">
                <input
                  placeholder="E mail"
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="inputs">
                <input
                  placeholder="password"
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <button
                id="submitButton"
                onClick={handleSubmit}
                className="submitButton"
                disabled={isSubmitting}
                type="submit"
              >
                Sign Up
              </button>
              <p>
                {" "}
                I have already account. <Link to="/Login">Login</Link>{" "}
              </p>
            </>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}

export default StudentSignUp;
