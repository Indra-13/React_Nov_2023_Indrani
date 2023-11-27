import React,{useState} from 'react';
import {AppBar,Tabs,Toolbar,Tab,Typography,Button,useMediaQuery,useTheme} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Drawercomp from './Drawercomp';
import {Link} from "react-router-dom";
const PAGES = [ "Home","Product","Technologies","Solutions","Contact Us"];
const Home=()=> {
    const[value,setValue]=useState();
    const theme =useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{background:"#1A5276  "}}>
                <Toolbar>
                <StorefrontIcon />
               {
                isMatch ? (
                    <>
                    <Typography sx={{fontsize:'1.5rem',paddingLeft:'2%'}}>
                        {" "}
                        VENDOR MANAGEMENT
                        </Typography>

                        <Drawercomp/>


                        </>
                ) : (
                    <>
                <Tabs  textColor="inherit" indicatorColor="secondary" 
                value={value}
                 onChange={(e,value) => setValue(value)} >
                    {
                        PAGES.map((page,index) => (
                            <Tab key={index} label={page}/>
                        ))
                    }
                </Tabs>

                <Button component={Link} to={"/Contact us"} sx={{marginLeft:"auto",color:"white"}} >Contact Us{" "}</Button>
                
               
                <Button component={Link} to={"/Login"} sx={{marginLeft:"auto",color:"white"}} variant="contained">Login</Button>
                <Button component={Link} to={"/Register"} sx={{marginLeft:"10px",color:"white"}} variant="contained">Register</Button>
               
                    </>

                )
                
               }
                
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Home;