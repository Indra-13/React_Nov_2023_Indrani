import React from 'react';
//import './Registration.css';
import { TextField, Button,  Stack,Paper,Link,Typography } from '@mui/material';
const Registerationform = () => {
   
    const sizeofpaper={padding:30,height:"80vh",width:"400px", margin:"80px auto",backgroundColor:"#AED6F1 "}
    const Textcolour={color:'#3383FF'}
    return (
        <div className="Registration">

        <Paper square={true} elevation={20} style={sizeofpaper}>
            <h1 style={Textcolour} >Register Form</h1>
            <br></br>
            <form >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="First Name"
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Last Name"
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                   
                    variant='outlined'
                    color='primary'
                    label="Address"
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='primary'
                    label="Password"
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                   
                    variant='outlined'
                    color='primary'
                    label="Date of Birth"
                    fullWidth
                    required
                    sx={{mb: 4}}
                    />
                <Button variant="contained" color="primary" type="submit">Register</Button>
                <Typography>
            <Link href="/Login" componenet={Link} to={"/Login"}>{"Already Have an account? Login Here!"}</Link> 
          </Typography>
            </form>
            
     
        </Paper>
                    </div>
    )
}
 
export default Registerationform;