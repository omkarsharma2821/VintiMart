import { useFormik } from "formik";
import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$", "Password is invalid"),
  email: Yup.string().email("Invalid email").required("Required"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Signup = () => {
  const navigate = useNavigate();
  // initialize formik
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();

      const res = await fetch(
        `${process.env.REACT_APP_VINTIMART_URL}/user/add`,
        {
          method: "POST",
          body: JSON.stringify(values), //here all the things are case senstive in fetch.
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
          text: "Login to Continue",
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      // send values to backened.
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className=" p-5">
      <header className="bg-dark text-white w-50 mx-auto rounded mb-0 shadow-lg">
        <div className="container py-3">
          <h6 className="text-center display-6 fw-semibold ">
            Register for free, Hurry up!!
          </h6>
          <h4 className="text-center fw-light">
            Create account to save your journey
          </h4>
        </div>
      </header>
      <div className="vh-100">
        <div className="d-flex justify-content-center">
          <div className="card w-50 col-6 col-md-6 shadow-lg">
            <div className="p-5 py-3">
              {/* <h2 className="text-center fw-semibold ">SignUp</h2> */}
              <form onSubmit={signupForm.handleSubmit}>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {signupForm.touched.name && signupForm.errors.name}
                </span>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      id="name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name}
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                    <label>Username</label>
                  </div>
                </div>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {signupForm.touched.email && signupForm.errors.email}
                </span>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      id="email"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.email}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <label>Email</label>
                  </div>
                </div>
                {/* <div className="form-floating">
                <input
                  id="phone"
                  onChange={signupForm.handleChange}
                  value={signupForm.values.phone}
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                />
                <label>Phone</label>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {signupForm.touched.phone && signupForm.errors.phone}
                </span>
                </div> */}
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {signupForm.touched.password && signupForm.errors.password}
                </span>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fa-solid fa-lock"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      id="password"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password}
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                    <label>Password</label>
                  </div>
                </div>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {signupForm.touched.confirm && signupForm.errors.confirm}
                </span>
                <div className="input-group mb-3">
                  <span class="input-group-text">
                    <i class="fa-solid fa-lock"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      id="confirm"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.confirmpassword}
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                    <label>Confirm Password</label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="col-6 btn btn-success w-100 p-2 mt-4 mb-2 mx-auto d-flex justify-content-center button"
                >
                  <h5>Create account</h5>
                </button>
                <span className="d-flex justify-content-center mb-0">
                  Already have an account -
                  <span>
                    <NavLink to="/login">Login</NavLink>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
