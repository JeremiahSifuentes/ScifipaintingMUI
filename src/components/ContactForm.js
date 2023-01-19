import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import emailjs from "@emailjs/browser";


<<<<<<< HEAD
// Style success message
// Clear form on submit
// Different sizes of text with theme breakpoints
// Add typography to the theme error message, success message, h2s, h1s
// Handle error for success message
// Captcha 
// Send email with emailjs
// Create Textfield component to make code more dry 
// export validate function and useEffect to make code dry

const ContactForm = () => {
  
  // Setting initial state of error messages
  const initialValues = {
    fullName: "",  
    phone: "", 
    email: "", 
    description: "", 
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // catches changes made on inputs
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Submits data to emailjs
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues)
  }
=======
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
 
  
>>>>>>> master

  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

<<<<<<< HEAD
  // Validation Conditionals
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Full name required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (values.phone.length <= 9) {
      errors.phone = "This is not a valid phone number";
    } else if (values.phone.length > 10) {
      errors.phone = "This is not a valid phone number";
    }
    if (!values.description) {
      errors.description = "Description is required"
    }
    return errors;
  };
=======
    
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
>>>>>>> master

  return (
    
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: '0 2em 0 2em'
    }}>
      <form >
      <Stack spacing={1.5}>

<<<<<<< HEAD
      {Object.keys(formErrors).length === 0 && isSubmit ? (
         <Fade in={isSubmit}><Typography color="White" style={{backgroundColor: 'Green', alignText: 'center'}}>Email Sent!</Typography></Fade>
      ) : (
        console.log('error')
      )}
      <h2>Contact Us</h2>      
        <TextField id="filled-basic" label="Full Name" variant="filled" name='fullName' onChange={handleChange}/>
        <Typography color="red">{formErrors.fullName}</Typography>
        <TextField id="filled-basic" label="Phone" variant="filled" type='text' name='phone' onChange={handleChange}/>
        <Typography color="red">{formErrors.phone}</Typography>
        <TextField id="filled-basic" label="Email" variant="filled" type='email' name='email' onChange={handleChange}/>
        <Typography color="red">{formErrors.email}</Typography>
        <TextField multiline rows={4} id="filled-basic" label="Briefly describe your project" variant="filled" type='textarea' name='description' onChange={handleChange}/>
        <Typography color="red">{formErrors.description}</Typography>
        <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
      </Stack>
      </form>
    </Box>
     
=======
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
>>>>>>> master
  );
};

export default ContactForm;


