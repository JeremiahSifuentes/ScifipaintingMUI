import {React, useState, useRef} from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import Reaptcha from 'reaptcha';
import { Grid } from "@material-ui/core";
const SITE_KEY = process.env.REACT_APP_SITE_KEY 

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [btnState, setBtnState] = useState(true);

  const verify = () =>{
          captchaRef.current.getResponse().then(res => {
              setCaptchaToken(res);
              setBtnState(false);
          })

      }
  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit,
    disabled: btnState
  }

  
  

  return (
    <Grid item xs={12} align={'center'}>
       <Button
      {...configButton}
      style={{
        backgroundColor: '#1e88e5',
        color: 'white',
        margin: '0 0 3em 0'
      }}
    >
      {children}
    </Button>
       <Reaptcha 
       sitekey={SITE_KEY}
       ref={captchaRef}
       onVerify={verify} 
      />
    </Grid>
   
  );
};

export default ButtonWrapper;