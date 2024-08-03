import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import useAppContext from "../AppContext";
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
import { AccountCircle, Lock } from "@mui/icons-material";

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
          text: "Email or Password is invalid",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      resetForm();
    },
    validationSchema: LoginSchema,
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
       <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '26%' }, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ opacity: 0.7 }}>
            Welcome back!
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ opacity: 0.7, mb: 3 }}
            gutterBottom
          >
            Please login to your account
          </Typography>
          <Container maxWidth="sm">
            <form onSubmit={loginForm.handleSubmit}>
              <TextField
                id="email"
                label="Email address"
                type="email"
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
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                error={Boolean(loginForm.errors.email)}
                helperText={loginForm.errors.email}
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
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                error={Boolean(loginForm.errors.password)}
                helperText={loginForm.errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, mb: 1, textTransform: "none" }}
              >
                <Typography variant="h6">Submit</Typography>
              </Button>
              <Typography align="center" variant="body1">
                Don't have an account?{" "}
                <Box component={NavLink} to="/signup" sx={{ textDecoration: 'none' }}>
                Create account
                </Box>
              </Typography>
              <Typography sx={{ fontSize: '14px', mt:2 }}>Email: demouser@gmail.com <br/> Password: Demo123</Typography>              </form>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
