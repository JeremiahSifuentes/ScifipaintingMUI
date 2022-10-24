import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit
  }

  
  

  return (
    <Button
      {...configButton}
      style={{
        backgroundColor: '#1e88e5',
        color: 'white'
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;