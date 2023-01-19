import { Grid, Box } from '@mui/material';
const Footer = () => {

  return (
    <Grid container justifyContent="center" sx={{
      backgroundColor: '#1e88e5',
      height: 'auto',
      margin: '3em 0 0 0'
    }}>
      <Grid item>
        <Box>
          <p>Copyright Sci-Fi Painting {new Date().getUTCFullYear()} Hours: Mon - Fri 7 am to 4pm</p>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer