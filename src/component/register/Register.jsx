import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be at most 25 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter a password"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://form-builder-api-se7h.onrender.com/api/register",
        values
      );
      console.log(response.data);
      toast.success("Registration successful.");
      setTimeout(() => {
        console.log("Redirecting to login...");
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="logo">
        <Link to={"/"}>
          <img
            src="http://g-ec2.images-amazon.com/images/G/31/img14/anywhere/amazon-logo-500500._V327001990_.jpg"
            alt="Amazon Logo"
            className="register-logo"
          />
        </Link>
      </div>

      <div className="container">
        <div className="formcontainer">
          <h3 className="heading">Create Account</h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control form-input"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control form-input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control form-input"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                <button
                  type="submit"
                  className="btn submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <hr/>
                <p style={{
                
                }}>Buying for work ? </p>
               <p> <Link to="/businesAccount">Create a free business account</Link></p>
                <hr/>
                <p className="mt-3">

                  Already have an Accound ?  {" "}
                  <Link to="/login">Sign In</Link>

                </p>
                <p>By creating an account or logging in, you agree to Amazon’s <Link to={"/"}>Conditions of Use</Link> and <Link to={"/"}>Privacy Policy.</Link></p>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
