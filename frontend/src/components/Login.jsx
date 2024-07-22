import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch(
        `${process.env.REACT_APP_VINTIMART_URL}/user/authenticate`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login success",
        });
        navigate("/");
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
    <div className=" vh-100 p-5">
      <div className="d-flex justify-content-center">
        <header className="bg-dark w-50 card d-flex justify-content-center shadow-lg">
          <div className="p-3">
            <h1 className="text-center mb-3 text-white display-2">
              Begin with Login
            </h1>
          </div>
        </header>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card w-50 col-6 col-md-6 p-2 py-0 shadow-lg">
          <div className="p-5">
            <form onSubmit={loginForm.handleSubmit}>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {loginForm.errors.email}
              </span>
              <div className="input-group ">
                <span className="input-group-text">
                  <i class="fa-solid fa-user "></i>
                </span>
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
                </div>
              </div>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {loginForm.errors.password}
              </span>
              <div className="input-group">
                <span className="input-group-text">
                  {" "}
                  <i className="fa-solid fa-lock"></i>
                </span>
                <div className="form-floating">
                  <input
                    id="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success mx-auto d-flex justify-content-center w-100 mt-4 mb-2 p-1"
              >
                <h3>Submit</h3>
              </button>
              <h6 className="d-flex justify-content-center">
                Dont have an account -
                <span className="mr-2">
                  <NavLink to="/signup"> create account</NavLink>
                </span>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
