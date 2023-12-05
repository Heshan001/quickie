import React from "react";
import "../styles/studentSignUp.css";
import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import axios from "axios";
import * as yup from 'yup';

function StudentSignUp() {
  const navigate = useNavigate();


  const initialValues = {
    instituteName: "",
    email: "",
    password: ""
  };


  const validationSchema = yup.object({
    instituteName: yup.string().required("name is required"),
    email: yup
      .string()
      .email("invalid email format")
      .required("email is required"),
    password: yup.string().required("password is required"),
  });

 
  const saveInstitute = async (values, FormikAction) => {
    FormikAction.setSubmitting(true);

    try {
      const res = await axios.post(`/signup`, {
        instituteName: values.instituteName,
        email: values.email,
        password: values.password,
        role: "institute",
      });

      if (res.status === 200) {
        navigate('/Login');
      } else {
        console.log("Authentication failed", res.data.massage);
        FormikAction.setErrors({ serverError: res.data.message });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      FormikAction.setErrors({ serverError: "An error occurred during signup." });
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
        <h1>Institute SignUp</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={saveInstitute}
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
                  name="instituteName"
                  id="instituteName"
                  placeholder="Institute name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.instituteName}
                />
                {errors.instituteName && touched.instituteName ? (
                  <span>{errors.instituteName}</span>
                ) : null}
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
