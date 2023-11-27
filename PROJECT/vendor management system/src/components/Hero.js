
// Hero.js
import React from 'react';
import { Typography, Button, Container, Grid, Box } from '@mui/material';


const Hero = () => {
  const heroStyle = {
    background: 'url("https://usccg.com/wp-content/uploads/2023/08/Improving-Vendor-Relationship-Management-feature-image-768x359.jpg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '200px 0', // Adjust the padding to reduce the height
  };
  const heroStyle1 = {
    marginTop:'50px',
    background: 'url("https://provana.com/wp-content/uploads/2022/06/shutterstock_2010519671-1110x550.jpg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',

    padding: '200px 0', // Adjust the padding to reduce the height
  };
  const imageSectionStyle = {
    background: 'white', // Gradient color
    padding: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black', // Text color
  };

  const imageStyle = {
    maxWidth: '40%',
    borderRadius: '10px',
};
  const buttonStyle = {
    color:"black",
    background:'#ECF0F1 ',
  };

  const boxStyle = {
    background: '#D7DBDD ', // Gradient color
    padding: '45px',
    borderRadius: '5px',
    color: 'black', // Text color
  };

  return (
    <>
      <Box sx={heroStyle}>
        <Container>
          <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Grid container spacing={4} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img src="https://taulia.com/wp-content/uploads/2023/04/Mask-Group-21@2x-375x291.png" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#1A5276" gutterBottom>
          What is vendor management?
          </Typography>

          <Typography variant="body1" paragraph>
            <box >
          Vendor management is a term that describes the processes organizations use to manage their suppliers, who are also known as vendors. Vendor management includes activities such as selecting vendors, negotiating contracts, controlling costs, reducing vendor-related risks and ensuring service delivery.
            </box>
          </Typography>
        </Grid>
      </Grid>

      {/* Three boxes structure */}
      <Container sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div" >
              Vendor management benefits
              </Typography>

              <Typography  component="div">
                <br></br>
              -Improve vendor selection<br></br>
-Harness cost savings<br></br>
-Speed up vendor onboarding<br></br>
-Reduce the risk of supply chain disruption<br></br>
-Strengthen supplier relationships<br></br>
-Negotiate better rates
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div">
              Vendor management process
              </Typography>

              <Typography variant="body1" component="div">
<br></br>-Selecting vendors<br></br>
-Contract negotiation<br></br>
-Vendor onboarding<br></br>
-Monitoring vendor performance<br></br>
-Monitoring and managing risk<br></br>
-Payment<br></br>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div" >
              How does a vendor management system work?
              </Typography>
              <Typography variant="body1" component="div">
              Vendor management systems will generally integrate several different functions into one <br></br>- usually focusing on features that facilitate both information and relationship management.</Typography>
            </Box>
          </Grid>
        </Grid>
      <Box sx={heroStyle1}>
       
      </Box>
      </Container>
    </>
  );
};

export default Hero;