import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import useAppContext from "../AppContext";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = () => {
  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login success",
        });
        setLoggedIn(true);
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Email or Password is inavalid",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      resetForm();
      // send values to backened.
    },
    validationSchema: LoginSchema,
  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 py-5 bg-body-secondary p-5 img">
        <div className="card  p-4 w-50">
          <div className="p-4 ">
            <h2 className="text-center fw-semibold display-6 mb-5 mt-2">
              {" "}
              Login Here
            </h2>
            <form onSubmit={loginForm.handleSubmit}>
              <div className="input-group">
                {/* <span className="input-group-text"><i class="fa-regular fa-user"></i></span> */}
                <div className="form-floating">
              <input
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <label for="email">Email address</label>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {loginForm.errors.email}
              </span>
              </div>
              </div>
              <div className="form-floating">
              <input
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <label for='password'>Password</label>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {loginForm.errors.password}
              </span>
              </div>
              <button
                type="submit"
                className="btn btn-danger mx-auto d-flex justify-content-center w-50 mt-2"
              >
                Submit
              </button>
              <span className="d-flex justify-content-center">
                Dont have an account -
                <span>
                  <NavLink to="/signup">create account</NavLink>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
