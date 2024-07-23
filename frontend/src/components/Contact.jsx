import React from "react";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Container, Typography, Box, TextField, Button, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { AccountCircle, Email, Message } from "@mui/icons-material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        text: "Thank You, will reach you soon",
      });
      Navigate("/login");
    },
    validationSchema: ContactSchema,
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
    <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '32%' }, boxShadow: 3, borderRadius: 2}}>
        <CardContent sx={{ p: 5 }}>
        <Typography variant="h4" align="center" sx={{mb:4  }}>
          Get in touch with us!
        </Typography>
          <form onSubmit={contactForm.handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Username"
                placeholder="Username"
                value={contactForm.values.name}
                onChange={contactForm.handleChange}
                error={contactForm.touched.name && Boolean(contactForm.errors.name)}
                helperText={contactForm.touched.name && contactForm.errors.name}
                InputProps={{
                  startAdornment: (
                    <AccountCircle sx={{ mr: 1 }} />
                  ),
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email address"
                placeholder="Email"
                type="email"
                value={contactForm.values.email}
                onChange={contactForm.handleChange}
                error={contactForm.touched.email && Boolean(contactForm.errors.email)}
                helperText={contactForm.touched.email && contactForm.errors.email}
                InputProps={{
                  startAdornment: (
                    <Email sx={{ mr: 1 }} />
                  ),
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                placeholder="Type your message"
                multiline
                minRows={1}
                value={contactForm.values.message}
                onChange={contactForm.handleChange}
                error={contactForm.touched.message && Boolean(contactForm.errors.message)}
                helperText={contactForm.touched.message && contactForm.errors.message}
                InputProps={{
                  startAdornment: (
                    <Message sx={{ mr: 1 }} />
                  ),
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2, mb: 3, textTransform: "none" }}
            >
              <Typography variant="h6">Submit Query</Typography>
            </Button>
          </form>
        </CardContent>
    </Card>
    </Box>
  );
};

export default Contact;

