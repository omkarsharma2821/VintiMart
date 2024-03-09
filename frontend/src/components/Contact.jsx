import { useFormik } from "formik";
import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  // initialize formik
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // call back hmko nhi pta kb call hoga lekin aap call hoga sb condition met hogi  jaise isme submit kr  rhe
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      // send values to backened.
      if (true) {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          text: "Thank You, will reach you soon",
        });
        Navigate("/login");
      }
    },
    validationSchema: ContactSchema,
  });

  return (
    <div className=" p-5 vh-100">
      <header className="bg-dark text-white w-50 rounded mx-auto shadow-lg">
        <div className="container py-3 ">
          <h2 className="text-center display-4 fw-semibold">
            Get in touch with us
          </h2>
          <h5 className="text-center fw-light">
            need help or have query? - we're here for you.
          </h5>
          {/* <div class="input-group mt-5 w-75 mx-auto"> */}
          {/* <input type="text" class="form-control form-control-lg"> */}
          {/* <button class="btn btn-warning"><i class="fa-solid fa-magnifying-glass"></i></button> */}
          {/* </div> */}
        </div>
      </header>
      {/* <div className="d-flex justify-content-center align-items-center vh-80 bg-body-secondary"> */}
      <div className="d-flex">
        <div className="card col-6 col-md-6 w-50 mx-auto shadow-lg">
          <div className="p-5 py-3">
            {/* <h2 className="text-center mb-3 fw-semibold">Contact Us</h2> */}
            <form onSubmit={contactForm.handleSubmit}>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {contactForm.errors.name}
              </span>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-user"></i>
                </span>
                <div className="form-floating">
                  <input
                    id="name"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.name}
                    type="text"
                    className="form-control "
                    placeholder="Username"
                  />
                  <label>Username</label>
                </div>
              </div>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {contactForm.errors.email}
              </span>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <div className="form-floating">
                  <input
                    id="email"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <label>Email address</label>
                </div>
              </div>
              <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                {contactForm.errors.message}
              </span>
              <div className="form-floating">
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Type your message"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.message}
                />
                <label>Message</label>
              </div>
              <button className="col-6 text-center btn btn-success w-100 p-2 button mx-auto d-flex justify-content-center mt-5 mb-5">
                <h5>Submit Query</h5>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
