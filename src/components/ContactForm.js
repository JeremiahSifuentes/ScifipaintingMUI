import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid } from "@material-ui/core";
import Textfield from "./TextField";
import Button from "./Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const API_KEY = process.env.REACT_APP_API_KEY


const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email.").required("Required"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),
    message: Yup.string(),
  });
 
  

export const ContactForm = () => {

    
    const notify = () => toast("Message Sent");

    const form = useRef();

    const sendEmail = (e) => {
      emailjs
        .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        API_KEY
        )
        .then(
          (result) => {
            notify();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
      <Grid container style={{
        
      }}>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
                sendEmail();
              }}
            >
              <Form  ref={form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} align={"center"} sx={{fontSize: '1em'}}>
                    <h2>Contact Us</h2>
                  </Grid>

                  <Grid item xs={6} sx={{marginTop: '200px'}}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Tell us about your project"
                      multiline={true}
                      minRows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
               
                    <Button >Submit Form</Button>
                  
                    <ToastContainer />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
  );
};

export default ContactForm;
