// import { useFormik } from "formik";
// import toast from "react-hot-toast";
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import * as Yup from "yup";

// const furnitureSchema = Yup.object().shape({
//   brand: Yup.string().min(2, "Too Short!").required("Required"),
//   material: Yup.string().min(2, "Too Short!").required("Required"),
//   price: Yup.string().required("Required"),
//   // image: Yup.string().required("Required"),
//   // yearsold: Yup.string().required("Required"),
// });

// const AddFurniture = () => {
//   const [selFile, setSelFile] = useState("");
//   // const navigate = useNavigate();

//   const uploadFile = (e) => {
//     const file = e.target.files[0];
//     const fd = new FormData();
//     setSelFile(file.name);
//     fd.append("myfile", file);
//     fetch(`${process.env.REACT_APP_VINTIMART_URL}/util/uploadfile`, {
//       method: "POST",
//       body: fd,
//     }).then((res) => {
//       if (res.status === 200) {
//         console.log("file uploaded");
//         toast.success("File Uploaded");
//       }
//     });
//   };

//   const furnitureForm = useFormik({
//     initialValues: {
//       brand: "",
//       title: "",
//       material: "",
//       price: "",
//       yearsold: 0,
//       image: "",
//     },
//     onSubmit: async (values, { resetForm }) => {
//       values.image = selFile;
//       console.log(values);

//       const res = await fetch(
//         `${process.env.REACT_APP_VINTIMART_URL}/furniture/add`,
//         {
//           method: "POST",
//           body: JSON.stringify(values), //here all the things are case senstive in fetch.
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(res.status);
//       if (res.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Item Added Successfully",
//           text: "Our Team will contact you soon",
//         });
//         values.image = "";
//         resetForm();
//         // navigate("/");
//       }
//     },
//     validationSchema: furnitureSchema,
//   });

//   return (
//     <div className="vh-100 p-4">
//       <div className="d-flex justify-content-center">
//         <header className="bg-dark w-50 card d-flex justify-content-center shadow-lg">
//           <div className="p-3">
//             <h1 className="text-center mb-2 display-4 text-white fw-bold">
//               Add Furniture to Sell
//             </h1>
//           </div>
//         </header>
//       </div>
//       <div className=" d-flex justify-content-center">
//         <div className="w-50 card col-6 col-md-6 shadow-lg">
//           <div className="p-5 ">
//             <form onSubmit={furnitureForm.handleSubmit}>
//               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
//                 {furnitureForm.touched.brand && furnitureForm.errors.brand}
//               </span>
//               <div className="form-floating">
//                 <input
//                   id="brand"
//                   onChange={furnitureForm.handleChange}
//                   value={furnitureForm.values.brand}
//                   type="text"
//                   className="form-control"
//                   placeholder="brandname"
//                 />
//                 <label>Brand Name</label>
//               </div>
//               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
//                 {furnitureForm.touched.brand && furnitureForm.errors.brand}
//               </span>
//               <div className="form-floating">
//                 <input
//                   id="title"
//                   onChange={furnitureForm.handleChange}
//                   value={furnitureForm.values.title}
//                   type="text"
//                   className="form-control"
//                   placeholder="titlename"
//                 />
//                 <label>Title</label>
//               </div>
//               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
//                 {furnitureForm.touched.material &&
//                   furnitureForm.errors.material}
//               </span>
//               <div className="form-floating">
//                 <input
//                   id="material"
//                   onChange={furnitureForm.handleChange}
//                   value={furnitureForm.values.material}
//                   type="text"
//                   className="form-control"
//                   placeholder="material"
//                 />
//                 <label>Material</label>
//               </div>
//               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
//                 {furnitureForm.touched.price && furnitureForm.errors.price}
//               </span>
//               <div className="form-floating mb-3">
//                 <input
//                   id="price"
//                   onChange={furnitureForm.handleChange}
//                   value={furnitureForm.values.price}
//                   type="number"
//                   className="form-control"
//                   placeholder="price"
//                 />
//                 <label>Set Price</label>
//               </div>
//               <div class="input-group mb-3">
//                 <input type="file" class="form-control" onChange={uploadFile} />
//               </div>
//               <button
//                 type="submit"
//                 className="col-6 btn btn-success w-100 mx-auto mt-4 p-2 d-flex button justify-content-center"
//               >
//                 <h5>Add Furniture</h5>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFurniture;


import React, { useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import * as Yup from "yup";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import { AccountCircle, AttachMoney, Business, Category } from "@mui/icons-material";

const furnitureSchema = Yup.object().shape({
  brand: Yup.string().min(2, "Too Short!").required("Required"),
  material: Yup.string().min(2, "Too Short!").required("Required"),
  price: Yup.string().required("Required"),
});

const AddFurniture = () => {
  const [selFile, setSelFile] = useState("");

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file.name);
    fd.append("myfile", file);
    fetch(`${process.env.REACT_APP_VINTIMART_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded");
      }
    });
  };

  const furnitureForm = useFormik({
    initialValues: {
      brand: "",
      title: "",
      material: "",
      price: "",
      yearsold: 0,
      image: "",
    },
    onSubmit: async (values, { resetForm }) => {
      values.image = selFile;
      console.log(values);

      const res = await fetch(
        `${process.env.REACT_APP_VINTIMART_URL}/furniture/add`,
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
          title: "Item Added Successfully",
          text: "Our Team will contact you soon",
        });
        values.image = "";
        resetForm();
      }
    },
    validationSchema: furnitureSchema,
  });

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${'/images/login.png'})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
      }}
    >
      <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '32%' }, boxShadow: 3, borderRadius: 2 }}>
      <CardContent sx={{ p: 5 }}>
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
              Add Furniture to Sell!
            </Typography>
            <form onSubmit={furnitureForm.handleSubmit}>
              <TextField
                fullWidth
                id="brand"
                name="brand"
                label="Brand Name"
                placeholder="Brand Name"
                value={furnitureForm.values.brand}
                onChange={furnitureForm.handleChange}
                error={furnitureForm.touched.brand && Boolean(furnitureForm.errors.brand)}
                helperText={furnitureForm.touched.brand && furnitureForm.errors.brand}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                placeholder="Title"
                value={furnitureForm.values.title}
                onChange={furnitureForm.handleChange}
                error={furnitureForm.touched.title && Boolean(furnitureForm.errors.title)}
                helperText={furnitureForm.touched.title && furnitureForm.errors.title}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Category />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                id="material"
                name="material"
                label="Material"
                placeholder="Material"
                value={furnitureForm.values.material}
                onChange={furnitureForm.handleChange}
                error={furnitureForm.touched.material && Boolean(furnitureForm.errors.material)}
                helperText={furnitureForm.touched.material && furnitureForm.errors.material}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Set Price"
                placeholder="Price"
                type="number"
                value={furnitureForm.values.price}
                onChange={furnitureForm.handleChange}
                error={furnitureForm.touched.price && Boolean(furnitureForm.errors.price)}
                helperText={furnitureForm.touched.price && furnitureForm.errors.price}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
              <Box sx={{ mb: 3 }}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{textTransform: "none" }}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                    onChange={uploadFile}
                  />
                </Button>
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{textTransform: "none" }}
              >
                <Typography variant="h5">Add Furniture</Typography>
              </Button>
            </form>
          </CardContent>
        </Card>
    </Box>
  );
};

export default AddFurniture;
