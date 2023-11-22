import React, { useState } from "react";
import "../styles/login.css";
import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

function SignIn({ userType }) {
  const navigate = useNavigate();

  const signInFields = [
    {
      type: "email",
      name: "email",
      label: "E Mail",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
  ];

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const saveLogin = (e) => {
    e.preventDefault();
    // Add logic to send credentials to the server for authentication
    axios.post("/api/login", credentials).then((response) => {
      handleCallBack(response, response.status);
    });
  };

  const handleCallBack = (data, status) => {
    if (status === 200) {
      localStorage.setItem("userToken", data.data.token);

      if (adminEmail === credentials.email) {
        navigate("/dashboard", { replace: true });
      } else {
        // Add logic to differentiate between institute and student users
        if (userType === "institute") {
          navigate("/instituteDash", { replace: true });
        } else {
          navigate("/mainHome", { replace: true });
        }
      }

      window.location.reload();
    } else {
      openNotification(status);
    }
  };

  const openNotification = (status) => {
    // Add logic to handle error notifications
    console.log(`Error: ${status}`);
  };

  return (
    <div>
      <div className="nav">
        <NavBar />
        <hr />
      </div>

      <div className="hero"></div>

      <div className="signInForm">
        <h1>Sign In</h1>

        <form onSubmit={saveLogin}>
          {signInFields.map(({ label, type, name }, index) => (
            <div className="inputs" key={index}>
              <input
                onChange={handleInput}
                type={type}
                value={credentials[name]}
                name={name}
                placeholder={label}
              />
            </div>
          ))}

          <button className="buttons" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
