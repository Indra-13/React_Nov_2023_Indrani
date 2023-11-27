import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Container,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Button
} from '@mui/material';
const Technologies=()=>{
    const root={
        maxWidth: 345,
    margin: '10px',
    backgroundColor:"#DAF3FB"

    };
    const heroStyle = {
      
      background: 'url("https://provana.com/wp-content/uploads/2022/06/shutterstock_2010519671-1110x550.jpg")', // Replace with your actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      maxWidth:'100%',
      padding: '200px 0', // Adjust the padding to reduce the height
    };
    const rightPanelStyle = {
      flex: 1,
      
      flexDirection: 'column-reverse',
      marginLeft: 0,
    };
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
     marginTop:'40px',
      marginBottom: '20px',
      backgroundColor: "#41859A"
    };
   
    return(
      <Container >
<div style={rightPanelStyle}>
        <img
          src="https://media.licdn.com/dms/image/C5612AQGm2SsqiGpvWQ/article-cover_image-shrink_720_1280/0/1632928987150?e=2147483647&v=beta&t=6uz9TCwALc3ZLDijzS7Z-Kbgo8BMrhCT5GR5pBa9bd0"
          alt="Fixed Image"
          style={{ width: '100%', borderRadius: '8px'}}
        />
      </div>
      <Typography variant="h3" color="#1A5276" gutterBottom  marginTop={10} textAlign={'center'}>
        VENDOR MANAGEMENT SYSTEM
      </Typography>
      <Typography marginTop={5} variant="h6" marginBottom={8}>
      Vendor Management Systems (VMS) are comprehensive software solutions that enable businesses to efficiently manage their relationships with third-party vendors. By centralizing the organization and optimization of processes related to vendor selection, onboarding, performance management, and contracts, VMS helps streamline operations for greater cost savings and improved compliance. With such systems in place, enterprises can identify qualified suppliers quickly, reduce costs associated with procuring from them, and ensure consistent execution of policies. As a result, companies have greater control over their external revenue supply chain, allowing them to scale their business operations more effectively.
      </Typography>
      
       
            <Typography variant="h3" textAlign={'center'} marginTop={10} color="#1A5276">Vendor Management Approaches</Typography>
          
          <Typography variant="h4" marginTop={10} gutterBottom>
            Focus on Long-Term Partnerships
          </Typography>
          
            <Typography variant="h6">
This is one of the most important things that many organizations miss while dealing with vendors. Just like customer and employee retention profits, an organization retaining vendors also has its benefits. To begin with, it saves you from initiating new bidding and vetting process every other day. Moreover, a long-term affiliate is less likely to break your trust. When getting a vendor on board, make sure it is for the long haul rather than a one-time partnership.
            </Typography>
          <Typography variant="h4" marginTop={10} gutterBottom>
          Improve Communication
          </Typography>
          
            <Typography variant="h6">
Communication is important in every personal and professional relationship, and vendor relationship is no different. It has been observed that most organizations have a very unenthusiastic and indifferent association with their vendors. Their communications are only limited to exchanging invoices and purchase orders.

Such boxed communication doesn't leave any room to expect service excellence from the vendor. You need to improve your vendor communication and extend it beyond exchanging paperwork. Treat them as your B2B partners to whom you show warmth and courtesy.
     </Typography>
          <Typography variant="h4" marginTop={10} gutterBottom>
          Ensure Vendor Values Working with You
          </Typography>
          
            <Typography variant="h6">
            
This point is linked to the two approaches we have discussed above. When you don’t go for long-term partnerships and keep your correspondence reserved, you somewhat let vendors know that they are expendable. Vendors often reciprocate this cold and disinterested behavior from organizations in their own way. Just take a page out of your consumer/employee satisfaction guidebook and use it for your vendors. You will succeed in making them realize that you truly value their partnership.

Before wrapping up this section, you need to mention here that a vendor management system is central to all the approaches we have discussed here. It will be virtually impossible for you to successfully implement these approaches without vendor management software at your disposal.


  </Typography>
          
        <Typography variant="h3" color="#1A5276" marginTop={10} gutterBottom textAlign={'center'}>List Of Vendor Management Systems</Typography>
       
      <Grid container >
         
<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX////4pxoocbj4oQD4owAAZbP4oAAjb7cibrf4phQSabUAZrMZa7by9vr4pQ+xx+Hm7vZplslWisOrwt8udLnN2uv/+vP+9Ob//fn+8N3958qRsNYAYLH969P5t1L6vmf5tEf2+fycttj6xHb84Lr816f7zIz948H70puEp9HB0ufW4vD6x374qyf5uVj83LH5sT/7yoc9fL36wG371aF7os/f6PNGg8Bej8b5sDZtmssAWq8VP/WtAAARWElEQVR4nO1dCVvivBaGLnSlIJugqIDLCIyidVBn7v//X/ckTUuWk4JeaMHb9/meb4aWlrzJydlykqnVKlSoUKFChQoVKlSoUKFChQoVKsgYXl2Nym7DITG8bZiA26uyG3IoDJ6sOkFkXv/QgXxOCBKOjd9lN+YQuDDrG1hPP3AYnyOOYd0z78pu0L4x4IeQoPFYdpP2jF8yw7r5Vnab9osHS2ZYt57LbtRecRMpDOvWddmt2if+eirDnzWKdYxh3bopu137AyKkVN3clt2wfWGoKhpG8ccYDc0Ygl38KaZfy7De+CGxBqpoKDzrvOzG7QW4LqWI/pbduL0AtYcM1o/w3571ExEU6p+ym7cH/NaZix+jbRDPmwqoaVowul59UHYD/2esUIbm74ur+2sz+glO+IUSHxLhvKD3Rs/mD5iK5w1ERB/SuyvTM08+c4NIqbWZfKO69VRi4/aCiWIQvQl3e/jSOPUw400xiBshpXhu/CqpaXvCH0VMrZX4jWdzWE7T9gRVmZoX0ldeTjviVxKmdVN2ZIbeaceKSnShMKwNrJN2bW5lVaMyrI0mxbdrf7iXVY2J6M67++IbtjeM5Iko61KKh1OWU0+aiBaaZjvl3JscBFuv2LcGsg05Icg2P8Jz+lena/evpInoaTJQJxxkKKrmlLUKCnmFDTGIJw45k4Gai+PF4HyrzJ1LYmqdVNHJm9kwX7Y5JFJaWKdqjhLXRAA9c4vcySnFxukYhhWTP898zmu0bC+UCPF48ZSJn1XPM2eyqjkZF41XIV7ewEjJGiEXddRY8dLn5azqynVD1qlMxEdR+vQUB5KYnsxEvJV1pDYvKMUXeHhxhFAKnrT+2J0opl690HZ+HwpDz9Jo1KFsL04kkFCL1rxI48NJ2vRU7IWasdeWH0ja9FTsxSu2sISXH8jFUeZplJo8Ygu8mjVPKW1qid769gClHChL2JZleZryg4tcMb1pHGfMKK+6WA+rx7+mV0c9licxhBLF9DlqHGVOWAptE2t4Z5noWpIUQlmCMMOMbhyjnyNauYgt5g4m6HhIuW/vhb8J8n6cdW6C5G2czbcG1tgXUUwbvNEn9KMX5KGyIRhEc6MPb7HyA2mJRvRNyT3zAXmqZAjmwuJu3CCutRRgiL4pdeKP0EjyytTz+DsTxPGUXCBhlY2+KZoctrnfgLCELTCsIeVcknER1y/oCtUR7ori84SWcOcc8a2lBe8G78jQIkbv+MqH+BhYKhq5UOVU8vKEAOOqoVw6CtzxDCU9oUqc5CGII5aIg6U8VDIGXGGeknxR/dObHF2TGJPjG0TO5luyJzNQ/FNZ1/DqiMVXR7f0xlU575JeklYwBN/n9TgHkYvdvR28Ltmv4VehklJULzpYW78HPnbfIc8rh/qCTCaK+ehsIpcJ3WVt9zUnhkpU7dGlcDi5U1QNAqkqWpTJRNU2Ssk06uWPa3K0SxWllP02+exFEkJaJYQY538b1q3O7+fU4y5KQs7XCNnH27Jct6cIIvCGpms5V2ynIgspEBasfuLJF58QZxbBvEZllctO7GTL5CUMwcZQRVS8SUz1n4Xv4dmI6S4WUU268c7eMPLK0KbXqXKInjCKvJjuEqRLdW5i2EsXXc2iPbfNlonoCRFUTpvuYi+UVX0xjTiJSlhA5XQDmg/jemCyy/se8gbx3JJzqQWA3/aCnRXAGX0+bH/QbRHNX/NeNYovmroWcoaqouOyNXzvvzZ0h0NIrpukoN4sTQXq4cDlyCzLQrLvGz+Fb+zK0h0rMJA2tEm17dfarjkUNvPGelj9NtUYlQuhOGsNjrRuF6xU4iAXuj0WvRMqW0SjHuP500T5RrSpjeLC4CdP54DJ1YpmyWtrWVkaM3fPiv/GTSwulQRjr3NP5CKpksPebNo02AXl4DXOc+MC2FFDm3aRt5aWnbtId0xk46OYjEk2Jnx2CQyppdk/KRc5lJyASpuTjmFtKJvkO1TX3JtSYnsDeSeNricKQmrSM4a1keyAbjbGcOaaZGV0GTi5FqecyD5F2uGcYy2bAc4T47L75KomPyWr05LXndiSCu9eScLHGXHOryHejs4bl8v+8nJsh5+kbCLmhQ4bqeONIAyirm5dHkRx/VHE4SWY2fwo57iVK9RgkEHUzTD5UJCcnPn5wReHmQzmbiPYxFj81x71Vl8OMfKUzeGzxCyAyovheYPB+ZUgfRPNE3LRWE4S5PABI8s85O6rqKP5GvDKtdn+SNp7qT8G5P7guoaphdycLxcI80r3xtImGe/lXW1aGRkd3jVnCbW8JdphhGYzhjl2QD5FKtIeV3P4iJGJaW6O6BEfxHM9Q+V0U1Nnj/4efP8CCwZyMygDzVpiTuMmcpUxWi8GuD18UMySNamYojOfCxOxTfcIlK3suuK2P4f3zNn+mLTldYwBP4g77sB7U84jwO3+xeGLNNjqbZoGu0HFiXNTtDNKhGL2NdtSRgXEHqz1TKGvTEycOF/T27HT/8hy6qHB8LBxeKM/Yrom8cEGDTR7xJdm7LjQqZw7iE/FIs49SxzPtGjyxsJ29vClfDvWUl4op4GhCvupgP1uqa5JrNuViQ4ip05RBwiRQHXnDVZF/VJEHXjS+NSRvrYwaeI1B+YeIPpCPYUIW0y+LmJ5n2Uq2M9fNNDVaC6dgeWDsdMvHhWKSFX7dRHHnabuN5vzz/iyBF9CpNq2ISZr6iGnXiRTfPE0Wbu9giUzmGk6xxdQ+IABGWVM6V+pRw96nsQnf6PxvsAMRmr17030W9w6PeLZoLMJOeVUWlGHyVpInQ1zTtOhwX1PPmBQW7XCgsWhfA4RoVjnBfXCzAmt9ogrcSZqwK+oKlpxhPqdv5AjMj2LE8tXfeZ1v2CNz7dNfMCg7Pgd4AtuN8hGP4/bYmLhs3r/YA7IlsIZPtmrLPzjrs7Awg6NNidX3BuLOfWFhaz5S5pCwCAHGXX80TtETsk/ofR8N6idvyUlfYUUMLCZuGVJUwgYpKXuiSatjMkp5WhaZtKtBZ36wqoSRGOuCB5vwyUH5UYTVmH6VBbafRLRgtlEMXJQLIBgw8UzrfHYuYYFGQrDYlbgmBoRojhlOVG04UKx2EQ7hzVnf3MMiykBT+N4IUGthDtDQTdGXDLwSX+c/t+8I+rrxVWDpV3Ny6nqUIllpNHfVFAHpr4GWF5wUxgWtBSeqgRetf1W/X4xsI08Nlf/WDnFlat8ioVVg6Xt4OwTUsUkBbZe44FIKik9zMmlakxG+o7CDgl7YcOzMeYrxBhL5c51y7q9fyDTM6945inXZBS2sy1zPLOQ7ReWllIGJLLolbylZOyU+g2KOwYtyzelFmqFBeA6G557/o488gIK3AqdLqR5VqJAHtBMtc6GN5DvZnjIoVjgmZLZvhAvObJDE4Bjx7vUt/kmOdqmyALwTYBkXv+6eo40ivwFteFbGoo/VDRDbtUevP9It5UHD/u2BHpD7T+hVChD5SxE3Ixj6YmttZbnaL8UzVDWCDolgCmOrVkzufvKYSitUGsdlWckU7jVv0SHvvDzeQdCOYy+5k2NGHbYqLhCKepCy0NBkCW95A0Uw7/LVkyUYuHnEfDZo7y6O1lx5Llt3MvV1Yziz+jhVo3ytMeVKTZ2t4MhL0yZYhlHLG80Za4FkCjuGKuPIvkg8DI2sr+aO/36SBDUHYttaoOJaDXKOdj1T2N7YSbgvM6Nx+4rgQ/8ZCzr1NOLiGbcty0MDa+z8fhK0frVU/aY55V1Nu/w1jRNeUETwYOZbtv4Uo3aI0t5W7qzUYvA4NdObR5NGpHneV/9Z8iGq2voQvPt2I51QXFx++S9fGcFaTQ6ldOjc0sxK1SoUKHC/wve39vw/1b3veyGHAbNf0Fg271abPvjpXr7s9dzuvyFD7jQUr/XDuF681CNZGjNP8/mi83nfguQNnrRolj02+JDUyc0DMP9fLcNI1yrL+24hi8ydAwfY2gbjn9Yhl3fD103DMLs50Pf94MO+/Bp+xSB3RMaPAeCrj2eTW3XsWfqa4FhuCND47AML23HMOA/w7HPkitLm3xOf/XMpbfJNzLWBHDF/deEibiIXWQIj4ch0AFuceyHjs0E9TJ0ekbWGmDo9GCqBMDUn2fPNX1g3EZemOJoGK5Dw4mhpdNuJmqxE85iGKDkEzAMyZ13aLIRZM8RhrbSsOlymV7jGcLlZGKmDNvLTDcJDJvvS77XhE/ird0BPcsakj4PqiPor13DFhnWpoQTa9j044OIba8H3RDDAPeT9v2zg2D80ZcYNs9s23YX64xht2fbgR8TyVhyDNvzng3aOWaiNJ2H5Lk1bVdz7ZMP828MNjTE+RCuzELDn7Z8I1iIDGsgukGf/bpPCIIShanbc9jlhU20q+GMZwLDZkguO34m+Z3AcEKXPm/3NwzXyeMwZ5LHeiHVDuEYXt520w+IXdqCS6ISnRnXNx+OE5PfZSZgw9B1sjFsJq0Jg88NwyWoLOj1dKQzhrFLvhiQJlKGc/iGM//0ier6D8fw0ndgnEjXUekn0yfo+b5L+v+MfQh5Xbcj2gFRlKF91k8vALc5GTDHEBm2+JnXhZEGBt3FhiEw8efTWitMpnDKsBUAg/X7klgXyhA4hG1qbcJle8pJaRi32s2F4yS/x77Wcsk9ot3hz64x/TrD2mJMBca148T36vqGD+2GWZPIHjB01/1Fa+0T+549ttE0jCEo5eT2PHRCjiFMWJf2fCfRpTDNHfK5n/wOxzD5feg6+p4x9GDGZwz6/BvcGN47tpvMH8oIWmbDmxc+HcrEHrpg8YlZDDfaTGEILQu77wD4i93OGE4JgQV7MWFIfBgieP0gGVJBl/a7c+gImCWJgghnzOMF+XDc7vd0KcHyn00nspu03ImX/eUChKqXMqQd4PoG9xMKw3/JdIMJl0xExrANQmq/cwxrZP4mUkqvbxg2144dUhVEfvjdJhTtDu325dghHz6/rmey9s5AjVDtSWabA+2kimDJGBK1bXwK9htl6IYJxnkMu0DJvQRNE1IdnjHsgzJygzBmDGvvMXEy3PElpdhLPght+CJHaDGZ4dRJIzCSz1TTXNaUGa4whDFxzy4TgMLhGdKe2lh88JmgK9wgbvIMibkNQd/B/DTYnFvQ+cMMxOKDuJfjb0hqixnYD6rDptAgN4GTzJeEIdojAkPQUKkbVGOEqKZhPbdhOP1w47M4PmP+TcoQhIdqGI4h0REOUweAZeykhusrWNrBGRGifkDtLygY5gA0yYX27gzbYyN1Epo8w0+YTkTJL1NrsQ4Ff5UwDJqJpiJcLpkCaCbS6VO73KbEiPZDmpKPNrEBttGJgQ9RyOvMvqf+3K4Ma/+gacG81ZrF1GjAvHRiYLQgbzbWZ5nFjx2n0ydKlwkcmZb/llQBuLMW9QQIw8+gN1suoX98aM+HHXeXS2hRgPju+XincSyddg4ReM5vgc4kw7kzw1pMnAA/DVJoi4nT8EFmNgh9OobEPyFOph2E6ym7H1yCzEAbYHqSngCGszFVzUSfNiHCgz8C+IJrfJUgzIpLGwJgmPp2D5j1x6EfMK2yGINSbEJfhjbCsJ3cBYDWSCzptGPTNwUG/WiEjjOeEgfTh6tB3LJDmxrAnuMwAxQSw9cfA3vwb7vwJzierY7vG8RdH8PLwET50Kw2fTN8cL6VEZq25p8fnTWdQv1ut5vKwfRyNrtc1hZwqY88Net2Z7QvZvA19sP9dSfuzFPvfB7HH1QSu52PT3grvI+Ixzs4vsT8BMw+1fqfcUxmYB/0zxwiangheep91onj1EQtLzsb5XTkaNtO0J5Om83lJnD7WSAZhORvJAZd5H/5JHFJrEKbuFHgIvwP7vTxYjmmXqALrnAYft+XPmYsnIA6r2AsDp0ILg0QI63Xs/53otkKFSpUqFChQoUKFSpUqFChQoUKR43/Am+jMCU59I2zAAAAAElFTkSuQmCC" // Replace with your image URL
            alt="Contact"
            style={{ width: '50%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          SAP Fieldglass
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          SAP Fieldglass is used by organizations around the world to find, engage, and manage all types of flexible workforces that work at the core of businesses today. The cloud-based, open platform helps companies transform how work gets done, and increase operational agility. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary=" Users " />
              <ListItemText primary=" #Recruiter" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>


<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/hd_favicon/b25008554ea0586db2f358c9fa996493/quickbooks-online.svg" // Replace with your image URL
            alt="Contact"
            style={{ width: '50%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          QuickBooks Online
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Easy Online Accounting to Organize Your Finances in One Place. Run your entire business with the #1 small business cloud accounting solution!<br></br><br></br><br></br>
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary=" Users " />
              <ListItemText primary=" #Owner #President" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>


<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/hd_favicon/6a582a4fcd932a8ba3e2d4d73af44e65/ramp-financial-ramp.svg" // Replace with your image URL
            alt="Contact"
            style={{ width: '31%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Ramp
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ramp is the ultimate platform for modern finance teams. From corporate cards and expense management software, to bill payments and vendor management, Ramp is the all-in-one solution designed to automate finance operations and build healthier businesses. Over 15,000 businesses including Shopify have switched to Ramp to save an average 5% more and close their books 8x faster.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary=" Users " />
              <ListItemText primary=" #CEO #Controller" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/image/size_154_by_154/size_154_by_154_c078baeaeb3537056b4631c095c607b4/prm360.png" // Replace with your image URL
            alt="Contact"
            style={{ width: '50%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          PRM360
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          PRM360 is the smartest solution to your overall Procure-to-Pay requirement incorporating all these individual processes under one umbrella. With Requirements posted Online, Automatic Quotations received from vendors, and their timely Validation by our smart systems make PRM360 one of the best in the business.Statistics show that PRM360 users are able to seek 300% ROI over other Procure-To-Pay solutions in the market.
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary=" Users " />
              <ListItemText primary=" #Manager #Senior " />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/hd_favicon/e4010295ece1fee25782d8b7bc016359/ncontracts-ncontracts.svg" // Replace with your image URL
            alt="Contact"
            style={{ width: '35%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Ncontracts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ncontracts is a leading provider of SaaS-based risk management and compliance solutions for financial services companies. Our GRC solutions help more than 4,000 banks, credit unions, mortgage companies, fintechs, and trusts achieve their risk management and compliance goals with a powerful combination of user-friendly, cloud-based software and expert services.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary="Users " />
              <ListItemText primary=" No information available" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/hd_favicon/0564694d5d8073fe0cf076590157bc00/tropic-tropic.svg" // Replace with your image URL
            alt="Contact"
            style={{ width: '35%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Tropic
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tropic is a cost-savings platform that automatically finds ways for businesses to reduce and control costs. By combining procurement workflows, supplier management, and benchmark data together in one place, Tropic makes savings opportunities easy to find and act on. <br></br><br></br><br></br>
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary="Users " />
              <ListItemText primary=" No information available" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4_xb7kas5vMhdvBSvEYcf66sWhoKbu2LugP6WMDxCYfuC0l2o" // Replace with your image URL
            alt="Contact"
            style={{ width: '50%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Oracle Procurement Cloud

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Use Procurement Cloud to streamline your source-to-pay process through automation and social collaboration, while controlling costs and achieving higher margins<br></br><br></br><br></br><br></br><br></br>
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary="Users " />
              <ListItemText primary=" No information available" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/image/size_154_by_154/size_154_by_154_da7e2fa66b6bb36bca935089efd15d49/genuity.png" // Replace with your image URL
            alt="Contact"
            style={{ width: '35%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Genuity
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Genuity builds tools to help businesses and IT leaders navigate the IT market, optimize their technology spend, and improve their bottom line. Our goal is to level the playing field by shining a light into the black box of IT. We're empowering businesses to make informed decisions about the technology behind critical operations through software and community
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary="Users " />
              <ListItemText primary=" No information available" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>



<Grid item>

        <Card style={root}>
      <CardActionArea>
        
        <CardContent>
        <Grid >
          <img
            src="https://images.g2crowd.com/uploads/product/hd_favicon/560b98f75dc9348aff5b6993c072f131/onspring.svg" // Replace with your image URL
            alt="Contact"
            style={{ width: '55%', borderRadius: '8px' }}
          />
        </Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Onspring
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The short answer is that Onspring is an award-winning process automation platform that delivers intuitive business automation & real-time reporting through flexible, no-code, cloud-based software. Onspring’s automation is made for those looking to improve business operations with thoughtful, scalable solutions for roles, like governance, risk, compliance, audit, and vendors, that are aligned with their enterprise goals. 
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <ListItem>
              <ListItemIcon>
                   <PeopleIcon/>
                
              </ListItemIcon>
              <ListItemText primary="Users " />
              <ListItemText primary=" No information available" />
            </ListItem>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99.99
        </Typography>
        {/* Add more vendor-related information as needed */}
      </CardContent>
    </Card>
</Grid>
          </Grid>
          <Box style={containerStyle}>
      <div>
        <Typography variant="h6">Want to find out more about this?
</Typography>
        <Typography variant="body1">Access more blogs, articles and FAQ's relating to this</Typography>
      </div>
      <Button variant="contained" color="secondary">
       FIND OUT MORE
      </Button>
    </Box>

      </Container>
          
    );
}
export default Technologies;