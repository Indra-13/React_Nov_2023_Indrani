// import React from 'react';
// import { Typography, Container, Grid, Box , Paper } from '@mui/material';

// const Service = () => {
//   const heroStyle = {
//     background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-vOtUyWy48QtnnrEUk-gMwWZw2PBluj68A&usqp=CAU")', // Replace with your actual image path
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     color: 'white',
//     textAlign: 'center',
//     height:'500px',
//     padding: '50px 0', // Adjust the padding to reduce the height
//   };
//   const heroStyle1 = {
//     marginTop:'50px',
//     background: 'url("https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-2.svg")', // Replace with your actual image path
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height:'500px',
//     width:'800px',
//     color: 'white',
//     textAlign: 'center',
    
//     // Adjust the padding to reduce the height
//   };
//   const paperstyle ={
//     borderRadius: '60px',
//     height:'350px',
//     width:'300px',
//     background:"#8DD9F3"
//   }
  
//   const imageSectionStyle = {
   
//     padding: '30px',
//     borderRadius: '10px',
//     textAlign: 'center',
//     color: 'black', // Text color
//   };

//   const imageStyle = {
//     maxWidth: '75%',
//     borderRadius: '10px',
// };

//   return (
//     <>
//     <container>

//       <Box sx={heroStyle}>
        
//       <Grid container spacing={4} sx={imageSectionStyle}>
//         <Grid item xs={12} md={6} >
//           <img src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-1.svg" alt="SmallImage" style={imageStyle} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" color="#1A5276" gutterBottom>
//           Managed Service Programs
//           </Typography>

//           <Typography variant="h5" paragraph>
//             <box >
//             Differentiate your business and increase market share. Be the MSP solution for your trusted relationships and drive revenue using real time data. Leverage technology to improve efficiency. Build your own MSP offering to win.
//             </box>
//           </Typography>
//         </Grid>
//       </Grid>

//       </Box>
//       <Box sx={heroStyle1} marginLeft={45}>
       
//       </Box>

      
//       <Container sx={{ marginTop: '50px',blockSize:'600px' }}>
//         <Typography textAlign={'center'} fontSize={30}>The benefits of partnering with Ringo as your MSP</Typography>
//         <Grid container spacing={4} marginTop={5}>

//           <Grid item xs={12} sm={4}>
//             <Paper elevation={10}  sx={paperstyle}>
             
//             </Paper>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Paper elevation={10} sx={{ height:'350px',width:'300px',background:"#CFEFFA ",borderRadius: '60px'}}>
//               <br></br><br></br>
//              <Typography variant='h4' textAlign={'center'} color="#1A5276">
//              Increased Visibility
//              </Typography>
//              <br></br>
//              <Typography marginLeft={2}>
//              Transparency to proactively analyze, review and measure production ratios, program performance and spend.


//              </Typography>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Paper elevation={10} sx={paperstyle}>
              
             
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </container>
//     </>
//   );
// };

// export default Service;
import React from 'react';
import { Typography, Paper ,Container, Grid } from '@mui/material';


const Service = () => {
  
  const heroStyle1 = {
    marginTop:'50px',
    background: 'url("https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-2.svg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    height:'400px',
    marginLeft:'350px',
    width:'700px' // Adjust the padding to reduce the height
  };
  const imageSectionStyle = {
    background: 'url("https://t4.ftcdn.net/jpg/03/78/40/11/360_F_378401105_9LAka9cRxk5Ey2wwanxrLTFCN1U51DL0.jpg")', // Gradient color
    backgroundSize: 'cover',
    padding: '40px',
    marginTop:'8px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black', // Text color
  };
  const imageSectionStyle1 = {
    background: '#DAF3FB', // Gradient color
    backgroundSize: 'cover',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black', // Text color
  };
  const paperstyle ={
         borderRadius: '60px',
        height:'350px',
         width:'300px',
         background:"#8DD9F3"
       };

  const imageStyle = {
    maxWidth: '60%',
    borderRadius: '10px',
};
  const cont={
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
  };
const image={
  maxWidth: '70%',
  height: 'auto'
  
};
const image1={
  marginTop:'15px',
  maxWidth: '40%',
  height: 'auto',
 
  
};
  const boxStyle = {
    background: '#D7DBDD ', // Gradient color
    padding: '45px',
    borderRadius: '5px',
    color: 'black', // Text color
  };
  const papercont ={
    flexGrow: 1,
    padding: '20px',
  }
  const papersize ={
    marginTop:'15px',
    padding: '5px',
    textAlign: 'center',
    color: "blue",
    height:'400px',
    borderRadius:'40px',
    background:"#8DD9F3"
  }

  return (
    <>
      

      <Grid container spacing={4} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-1.svg" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6} marginTop={8}>
          <Typography variant="h3" color="#1A5276" gutterBottom>
          Managed Service Programs

          </Typography>

          <Typography variant="h5" paragraph>
            <box >
            Differentiate your business and increase market share. Be the MSP solution for your trusted relationships and drive revenue using real time data. Leverage technology to improve efficiency. Build your own MSP offering to win.

</box>
          </Typography>
        </Grid>
      </Grid>



      <Container style={cont}>
      <img
        src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-2.svg"  // Replace with your image URL
        alt="Centered Image"
        style={image}
      />
      
    </Container>



    <Container style={papercont}>
    <Typography textAlign={'center'} fontSize={40} color={'#1B5B71'}>The benefits of partnering</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={papersize}>
          <img
        src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-Icon1b.svg"  // Replace with your image URL
        alt="Centered Image"
        style={image1}
      />
      <Typography fontSize={30} color={"#1B5B71"}marginTop={2}>
      Increased Visibility
      </Typography>
      <Typography  color={"black"}marginTop={2}>
      Transparency to proactively analyze, review and measure production ratios, program performance and spend.
      </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{    padding: '5px',
    textAlign: 'center',
    color: "blue",
    height:'400px',
    borderRadius:'40px',
    background:"#CFEFFA ",
    marginTop:'20px'}}>
           <img
        src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-Icon2.svg"  // Replace with your image URL
        alt="Centered Image"
        style={image1}
      />
       <Typography fontSize={30} color={"#1B5B71"}marginTop={2}>
       Save Time & Internal Resources

      </Typography>
      <Typography  color={"black"}marginTop={2}>
      platform provides the workflows and support to efficiently assist in managing your contingent workforce program.
       </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={papersize}>
          <img
        src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-Icon3.svg"  // Replace with your image URL
        alt="Centered Image"
        style={image1}
      />
       <Typography fontSize={30} color={"#1B5B71"}marginTop={2}>
       Standardize Processes
      </Typography>
      <Typography  color={"black"}marginTop={2}>
      We can standardize all your internal workflows including requisition approval, credentialing, onboarding, and invoicing.
       </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>



    <Grid container marginTop={5} spacing={4} sx={imageSectionStyle1}>
        <Grid item xs={12} md={6}>
          <img src="https://www.goringo.com/hubfs/RINGO_SVGs-ManagedServicePrograms-Icon4.svg" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6} marginTop={5}textAlign={'center'}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Maintain & Enhance Existing Relationships

          </Typography>

          <Typography textAlign={'center'} >
          You've worked hard to forge relationships with staffing suppliers that understand your organization and provide a valuable service. With Ringo as your MSP, you keep those important contacts or relationships and our team works as an extension of your organization as your solutions partner to enhance your results.
          </Typography>
        </Grid>
      </Grid>
   
      <Grid container spacing={3} justify="center">
      
        <Grid item xs={12} textAlign="center" >
          <Typography marginTop={5} marginBottom={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            risus eget urna mollis ornare<br></br> vel eu leo. Aenean euismod eros ac
            turpis vestibulum posuere. Donec interdum, metus et hendrerit
            aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel
            mi.
          </Typography>
        </Grid>
      </Grid>



      <Grid container spacing={3}>
        {/* Image on the left */}
        <Grid item xs={12} md={6} sx={{display: 'flex',
    justifyContent: 'center',
   
    alignItems: 'center',background: '#DAF3FB'}}>
          <img
            src="https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-multitasking-man-work-task-employee-png-image_6054996.png"
            alt="Your Alt Text"
            sx={{ maxWidth: '100%',
            height:'300px',
            height: 'auto',
            borderRadius: '20px'}}
          />
        </Grid>

        {/* Heading, Paragraph, and Papers on the right */}
        <Grid item xs={12} md={6} padding={10} backgroundColor={'#DAF3FB'}>
          <Typography variant="h4" textAlign={'center'} color="#1A5276" gutterBottom>How Our VMS Relationship Actually Works</Typography>
          <Typography variant="h6" gutterBottom>
          When we onboard a new partnership, we solution and power your program in an effort to achieve your overall business goals from onboarding, compliance to service to provide a fully loaded solution in the simplest way possible.

We stay in constant contact with all authorized staffing suppliers to ensure shifts are filled. Our dedicated Ringo Program and Support team will help to ensure that managers, staffing suppliers and your clinical and nonclinical associates are working in compliance with current SLA's and procedures.
          </Typography>

          {/* Papers at the bottom */}
      </Grid>
          <Grid container spacing={2} backgroundColor={'#DAF3FB'} >
            <Grid item xs={12} sm={6} md={4} >
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
               Create open and direct relationships with staffing suppliers
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
                Implement and co-facilitate program goals and SLA's
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
                Provide continual training and support for the life of our Partnership
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
               Simplify communication from Operations to Finance
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
              Access to qualified resources to decrease time to fill

              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: '20px',
    margin: '30px',height:'100px',borderRadius:'40px',fontSize:'20px'}}>
                Facilitate automated compliance standards
              </Paper>
            </Grid>
          </Grid>
        </Grid>

    </>
  );
};

export default Service;