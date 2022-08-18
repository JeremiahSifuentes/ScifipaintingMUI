import React from "react";
import "../App.css";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


const Home = () => {

  const imageUrl = window.innerWidth >= 650 ? '/landingImg.png' : '/landingImgMbl.png';

  return (
    <div>
      <div className="App">
        <Grid container>
          <Grid item>Image and Mission statement</Grid>
          <Grid item>Gallery</Grid>
          <Grid item>Services</Grid>
          <Grid item>Contact</Grid>
        </Grid>
        <Box>
        </Box>
      </div>
    </div>
  );
};

export default Home;


{/* <span>
<div
    style={{
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat'
    }}
  >
  
  </div>
</span> */}