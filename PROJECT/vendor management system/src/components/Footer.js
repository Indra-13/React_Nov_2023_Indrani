import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ marginTop:'5px',textAlign: "center", bgcolor: "#1A5276  ", color: "white", p: 2,padding:'50px' }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "darkslategrey",
              transform: "translateX(5px)",
              transition: "all 300ms",
            },
          }}
        >
          {/* icons */}
        <h4>FOLLOW US<br></br></h4>
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:400px)": {
              fontSize: "1rem",
            },
          }}
        >
          Transforming vendor onboarding for some of the world's best marketplaces<br></br>
          <Typography color="smokeWhite"> MEESHO | .PRACTO. | AMAZON PAY</Typography>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;