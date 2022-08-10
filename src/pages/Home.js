import React from "react";
import '../App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <div className="App">
        <Container
          sx={{
            marginY: 5,
          }}
        >
          <>
           
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Test 
              </Typography>
          </>
        </Container>
      </div>
    </div>
  );
};

export default Home;