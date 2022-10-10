import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Home = () => {
  const imageUrl = "/landingImg.png";
  const paintImg = "/ServiceImgs/paint.png";
  const epoxyImg = "/ServiceImgs/epoxy.png";
  const stainImg = "/ServiceImgs/stain.png";
  const drywallImg = "/ServiceImgs/drywall.png";
  const textureImg = "/ServiceImgs/texture.png";
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // tiny phones
        xs: 300, // small phones
        sm: 374, // phones
        msm: 500, // wider phones
        md: 600, // tablets
        mlg: 768, // small laptop
        lg: 1000, // desktop
        mxl: 1300, // widescreen
        xl: 1500, // large screens
        xxl: 1800, // larger screens
        xxxl: 2000,
      },
    },
  });

  const itemData = [
    {
      img: "/landingImg1.jpg",
      title: "workers",
    },
    {
      img: "/landingImg2.jpg",
      title: "brand new cabinets",
    },
    {
      img: "/landingImg3.jpg",
      title: "beautiful house",
    },
  ];

  return (
    <div>
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{
                backgroundImage: `url(${imageUrl})`,
                width: "100%",
                height: "50vh",
                backgroundSize: "cover",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Landing page image and Mission statement */}
              <Grid container>
                <Grid item xs={12}>
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        width: "auto",
                        maxWidth: "35em",
                        height: "auto",
                        marginLeft: {
                          md: "16em",
                          mlg: "25em",
                          lg: "35em",
                          mxl: "55em",
                          xl: "60em",
                          xxl: "70em",
                          xxxl: "99em",
                        },
                        marginTop: {
                          xxs: "5em",
                          xs: "5em",
                          sm: "5em",
                          msm: "5em",
                          md: "7em",
                          mlg: "8em",
                          lg: "6em",
                          xl: "4em",
                          xxl: "3em",
                        },
                        marginRight: {
                          md: "3em",
                          mlg: "3em",
                          lg: "4em",
                          xl: "4em",
                          xxl: "4.5em",
                        },
                      }}
                    >
                      <Box
                        elevation={0}
                        square
                        sx={{
                          border: "none",
                        }}
                      >
                        <Paper
                          elevation={0}
                          square
                          sx={{
                            backgroundColor: "rgba(55, 122, 200, .3)",
                            border: "none",
                            paddingBottom: ".2em",
                            zIndex: "1",
                            paddingLeft: ".3em",
                          }}
                        >
                          <Box
                            sx={{
                              color: "rgba(255, 255, 255, 1)",
                              fontSize: {
                                xxs: "2em",
                                xs: "2em",
                                sm: "2em",
                                msm: "2.2",
                                md: "2.3em",
                                mlg: "2.5",
                                lg: "2.7em",
                                xl: "2.7em",
                                xxl: "3.5",
                              },
                            }}
                          >
                            <img src='/Logo.png' alt='Sci-fi Painting Logo'/>
                  </Box>
                          
                        </Paper>
                        <Paper
                          elevation={0}
                          square
                          sx={{
                            border: "none",
                            backgroundColor: "rgba(55, 122, 200, .3)",
                            lineHeight: "1.1em",
                            paddingLeft: ".3em",
                          }}
                        >
                          <Box
                            sx={{
                              color: "rgba(255, 255, 255, 1)",
                              lineHeight: "1em",
                              fontSize: {
                                xxs: "1em",
                                xs: "1em",
                                sm: "1em",
                                msm: "1.2em",
                                md: "1.2em",
                                mlg: "1.2em",
                                lg: "1.4em",
                                xl: "1.5em",
                              },
                            }}
                          >
                            Sci-Fi Painting is your one stop for all your paint
                            and home improvement needs. With over 25 years of
                            experience rest assured that we will complete your
                            project to the highest quality.
                          </Box>
                          <Box textAlign="center">
                            <Button
                              sx={{
                                marginTop: "1em",
                                marginBottom: "1em",
                              }}
                              variant="contained"
                            >
                              Book Now
                            </Button>
                          </Box>
                        </Paper>
                      </Box>
                    </Box>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            sx={{
              margin: "10em 0 0 0",
            }}
            align="center"
            item
            xs={12}
          >
            <Grid
              item
              xs={12}
              align="center"
              sx={{
                padding: "10em 0 5em 0",
              }}
            >
              <h2>Check Out Our Work!</h2>
            </Grid>
            <Grid
              item
              xs={12}
              align="center"
              sx={{
                border: "none",
                backgroundColor: "rgba(55, 122, 200, .3)",
                lineHeight: "1.1em",
                padding: "1em",
                width: "auto",
                height: "auto",
              }}
            >
              <Box>
              <ImageList
                sx={{ width: 'auto', height: 'auto', padding: '3em',  gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))!important'
              }}
                cols={3}
                rowHeight={'auto'}
                gap={20}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Button variant="contained">Gallery</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              align="center"
              sx={{
                padding: "10em 0 0 0",
              }}
            >
              <h2>Services</h2>
            </Grid>
            <Grid
              container
              spacing={10}
              align="center"
              justify="center"
              sx={{
                padding: "5em 0 0 0",
                fontSize: "1.3em",
              }}
            >
              <Grid item xs={6} xl={2.5}>
                <Box>
                  <img alt="paintbrush icon" src={paintImg}></img>
                  <p>Paint</p>
                </Box>
              </Grid>
              <Grid item xs={6} xl>
                <Box>
                  <img alt="garage icon" src={epoxyImg}></img>
                  <p>Epoxy</p>
                </Box>
              </Grid>
              <Grid item xs={6} xl>
                <Box>
                  <img alt="wood icon" src={stainImg}></img>
                  <p>Stain</p>
                </Box>
              </Grid>
              <Grid item xs={6} xl>
                <Box>
                  <img alt="handyman icon" src={drywallImg}></img>
                  <p>Drywall</p>
                </Box>
              </Grid>
              <Grid item xs={12} xl>
                <Box>
                  <img alt="wall icon" src={textureImg}></img>
                  <p>Texture</p>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            Contact
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
