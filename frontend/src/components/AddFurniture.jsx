import { useFormik } from "formik";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const furnitureSchema = Yup.object().shape({
  brand: Yup.string().min(2, "Too Short!").required("Required"),
  material: Yup.string().min(2, "Too Short!").required("Required"),
  price: Yup.string().required("Required"),
  // image: Yup.string().required("Required"),
  // yearsold: Yup.string().required("Required"),
});


const AddFurniture = () => {
  const [selFile, setSelFile] = useState("");

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file.name);
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded");
      }
    });
  };
  const Furniture = () => {
    const navigate = useNavigate();
  }
  const furnitureForm = useFormik({
    initialValues: {
      brand: "",
      material: "",
      price: "",
      yearsold: 0,
      image: "",
    },
    onSubmit: async (values, { resetForm }) => {
      values.image = selFile;
      console.log(values);
      resetForm();

      const res = await fetch("http://localhost:5000/furniture/add", {
        method: "POST",
        body: JSON.stringify(values), //here all the things are case senstive in fetch.
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Item Added Successfully",
          text: "Our Team will contact you soon",
        });
        Navigate("/");
      }
    },
    validationSchema: furnitureSchema,
  });

  return (
    <div className=" py-5 bg">
      <header className="bg-dark w-50 rounded mx-auto">
        <div className="container py-3">
          <h1 className="text-center mb-3 text-white fw-bold">
            Add Furniture to Sell
          </h1>
        </div>
      </header>
      {/* <div className="img"> */}
      <div className="d-flex justify-content-center img align-items-center vh-50">
        <div className="card w-50 col-6 col-md-6 ">
          <div className="p-5">
            <form onSubmit={furnitureForm.handleSubmit}>
              <div className="form-floating">
                <input
                  id="brand"
                  onChange={furnitureForm.handleChange}
                  value={furnitureForm.values.brand}
                  type="text"
                  className="form-control"
                  placeholder="brandname"
                />
                <label>Brand Name</label>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {furnitureForm.touched.brand && furnitureForm.errors.brand}
                </span>
              </div>
              <div className="form-floating">
                <input
                  id="material"
                  onChange={furnitureForm.handleChange}
                  value={furnitureForm.values.material}
                  type="text"
                  className="form-control"
                  placeholder="material"
                />
                <label>Material</label>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {furnitureForm.touched.material &&
                    furnitureForm.errors.material}
                </span>
              </div>
              <div className="form-floating">
                <input
                  id="price"
                  onChange={furnitureForm.handleChange}
                  value={furnitureForm.values.price}
                  type="number"
                  className="form-control"
                  placeholder="price"
                />
                <label>Set Price</label>
                <span
                  style={{ fontSize: 10, marginLeft: "10px", color: "red" }}
                >
                  {furnitureForm.touched.price && furnitureForm.errors.price}
                </span>
              </div>
              <div class="input-group mb-3">
                <input type="file" class="form-control" onChange={uploadFile} />
                <label class="input-group-text" for="inputGroupFile02">
                  Upload
                </label>
              </div>
              <button
                type="submit"
                className="col-6 btn btn-danger w-50 mx-auto mt-5 d-flex button justify-content-center"
              >
                Add Furniture
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddFurniture;
