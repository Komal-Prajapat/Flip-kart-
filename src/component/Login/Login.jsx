import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./form.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter a password"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://form-builder-api-se7h.onrender.com/api/login",
        values
      );
      console.log(response.data);
      toast.success("Login successful.");
      setTimeout(() => {
        console.log("Redirecting to home...");
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed. Please try again.");
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
          <h3 className="heading">Sign In</h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
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
                <button
                  type="submit"
                  className="btn submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <hr/>
                <p className="mt-3">
                  New to Amazon? <Link to="/register">Create your Amazon account</Link>
                </p>
                <p>By creating an account or logging in, you agree to Amazon’s <Link to={"/"}>Conditions of Use</Link> and <Link to={"/"}>Privacy Policy</Link>.</p>

               <Link> <p to={"/"}>Need help ?</p></Link>
               <hr />
               <p>Buying For Work ?</p>
             <p> <Link to={"/"}>Shop on Amzon Business </Link></p>
              </Form>
            )}
          </Formik>
          <ToastContainer />
       
        <p>New to  Amazon ?</p>

      <Link to={"/register"}>  <button className="btn createaccount"> Create Your Amazon account </button></Link>
        </div>
      </div>
    </>
  );
};

export default Login;
