import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";

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

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();

      const res = await fetch(
        `${process.env.REACT_APP_VINTIMART_URL}/user/add`,
        {
          method: "POST",
          body: JSON.stringify(values),
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
    },
    validationSchema: SignupSchema,
  });

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <Card sx={{ width: '40%', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ opacity: 0.7 }} >
            Get Started!
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ opacity: 0.7 }}>
          Go ahead fill up your details and start the journey</Typography>
          <Container maxWidth="sm">
            <form onSubmit={signupForm.handleSubmit}>
              <TextField
                id="name"
                label="Username"
                type="text"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                error={Boolean(signupForm.touched.name && signupForm.errors.name)}
                helperText={signupForm.touched.name && signupForm.errors.name}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                error={Boolean(signupForm.touched.email && signupForm.errors.email)}
                helperText={signupForm.touched.email && signupForm.errors.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                error={Boolean(signupForm.touched.password && signupForm.errors.password)}
                helperText={signupForm.touched.password && signupForm.errors.password}
              />
              <TextField
                id="confirm"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupForm.handleChange}
                value={signupForm.values.confirm}
                error={Boolean(signupForm.touched.confirm && signupForm.errors.confirm)}
                helperText={signupForm.touched.confirm && signupForm.errors.confirm}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4, mb: 2, py: 1, textTransform: "none"
                }}
              >
                <Typography variant="h6">Create account</Typography>
              </Button>
              <Typography align="center" variant="body1">
                Already have an account?{" "}
                <NavLink to="/login">Login</NavLink>
              </Typography>
            </form>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Signup;
