import React from 'react';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Typography,TextField,Grid, Button,FormControl,MenuItem,label,InputLabel,Select,Divider} from '@mui/material';
const Pricing =() =>
{
    const root={
        flexGrow: 1,
    padding: '50px',
    background:"#E9EDEE "
    };
    

    return(
<div style={root}>
<Grid container spacing={3} marginTop={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="#1A5276" gutterBottom>
            Plans & Pricing
          </Typography>
          <Typography variant="h6">
            Vendor Intelligence Platform is the leading data-backed SaaS procurement solution. Find the plan that fits your needs.
          </Typography><br></br>
<Button variant='contained' color="secondary">Get a Demo</Button>
<FormControl fullWidth margin="normal">
            <InputLabel id="companyNameLabel">Company Name</InputLabel>
            <Select
              labelId="companyNameLabel"
              id="companyName"
              label="Company Name"
            >
              {/* Replace these MenuItem components with your company names */}
              <MenuItem value="company1">Company 1</MenuItem>
              <MenuItem value="company2">Company 2</MenuItem>
              <MenuItem value="company3">Company 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>


        <Grid item xs={12} md={3}>
          {/* Add your additional text here */}
          <Typography variant="h3" color="#1A5276"textAlign={'center'}>VIP</Typography>
<Typography textAlign={'center'}>Starting at</Typography>
<Typography color="#1A5276" variant="h2" textAlign={'center'}>$150</Typography>
<Typography textAlign={'center'}>PER YEAR</Typography>

        </Grid>
        <Grid item xs={12} md={3}>
          {/* Add your additional text here */}
          <Typography variant="h3" color="#1A5276"textAlign={'center'}>VIP Pro</Typography>
<Typography textAlign={'center'}>Starting at</Typography>
<Typography color="#1A5276" variant="h2" textAlign={'center'}>$250</Typography>
<Typography textAlign={'center'}>PER YEAR</Typography>
        </Grid>
</Grid>


   <hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Buyer Guides
          </Typography>
          <Typography variant="h6">
          Instant access to supplier SKU-level benchmarks, negotiation levers and community insights.
            </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
        
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Negotiation Advisory
          </Typography>
          <Typography variant="h6">
          On-demand strategic advice from Vendr'12s negotiation experts via real-time chat, email, and video calls.
            </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Contract Analysis
          </Typography>
          <Typography variant="h6">
          Upload your contracts to a centralized system of record and analyze agreement details.
           </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Vendr+
          </Typography>
          <Typography variant="h6">
          The Buy button for SaaS. Search and streamline your purchases from select suppliers who are committed to great prices and satisfaction guaranteed.
            </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Integrations
          </Typography>
          <Typography variant="h6">
          Integrate process improvement, spend detection, and people management systems for optimized productivity and operations.
           </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6} >
        <Grid item xs={12} md={3}>
          {/* Add your additional text here */}
          <Typography marginLeft={35} variant="h6" color="#1A5276"textAlign={'center'}>HRIS</Typography>
<Typography marginLeft={35}variant="h6" color="#1A5276" textAlign={'center'}>Identity & SSO</Typography>
<Typography marginLeft={35} color="#1A5276" variant="h6" textAlign={'center'}>Slack</Typography>
        </Grid>

        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Intakes
          </Typography>
          <Typography variant="h6">
          Collect the right information on every SaaS purchase request with fully customizable intake questionnaires.
          </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Approval Workflows
          </Typography>
          <Typography variant="h6">
          Create custom intake-to-procure workflows and manage all approval tasks in one location.
        </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Renewal Management
          </Typography>
          <Typography variant="h6">
          Get notified of upcoming renewals, track status, and take action.
    </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="#1A5276" gutterBottom>
          Supplier Management
          </Typography>
          <Typography variant="h6">
          A single source-of-information for all your supplier relationships.
    </Typography><br></br>
        </Grid>
        <Grid item xs={12} md={6}  >
            <Typography color="#1A5276" marginTop={5} marginLeft={35}>

        <FiberManualRecordIcon />
            </Typography>
        </Grid>
</Grid>
<hr/>
<Grid container spacing={3} marginTop={2} marginLeft={27}>
<Grid item xs={12} md={6}  >
           
<Button variant='contained' color="secondary">Get a Demo</Button>
        </Grid>

<Grid item xs={12} md={6}  >
           
<Button variant='contained' color="secondary">Get a Demo</Button>
        </Grid>

</Grid>
<Grid container spacing={3} marginTop={10} marginBottom={10}  >

        
          
    <Typography variant='h4' color="#1A5276" textAlign={'center'}>
        KEEP IN MIND : “Instead of focusing on negotiating price and contracts, our stakeholders are able to focus on their day-to-day roles, which is helping build and grow our company.”

    </Typography>
        

</Grid>





    </div>

    );
}
export default Pricing;