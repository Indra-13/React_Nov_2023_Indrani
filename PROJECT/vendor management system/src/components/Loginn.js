import React from "react";
//import './Login.css';
import {Grid,Paper,Typography,Avatar,TextField,Button,borderRadius} from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";


const Loginn =()=>
{
    const sizeofpaper={padding:30,height:"50vh",width:"350px", margin:"160px auto",backgroundColor:"#AED6F1 "}
    const Avcolor={background:'#3383FF'}
    
    return (
            <div className="login">
        <Grid>
            <Paper rounded elevation={20} sx={{borderRadius:'7%'}} style={sizeofpaper}>
                <Grid align='center'>
                <Avatar style={Avcolor}></Avatar>    
                </Grid>
                <Typography variant="h6">SIGN IN</Typography>
                <TextField label='EmailAddress' required margin="normal" fullWidth>
                </TextField>
                
                <TextField label='Password' type="password" required margin="normal" fullWidth>
                </TextField>
                <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"/><br></br><br></br>
                <Button type="submit" background='primary' margin="normal" variant="contained" fullWidth> Log In</Button>
                <br></br><br></br>
                <Typography>
                    <Link href="#">Forget Password?</Link>
                    
                </Typography>
                </Paper>

        </Grid>
            </div>
        
    );
}
export default Loginn;
