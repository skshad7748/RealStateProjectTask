import { Email, Language, Phone } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, Link, Typography } from "@mui/material";
import ManImage from "../assets/Contact.png";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", mt: 4 }}>
      {/* Contact Card */}
      <Box
        sx={{
          bgcolor: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          p: 4,
          mx: "auto",
          maxWidth: 730,
          transform: "translateY(-12%)",
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
        }}
      >
        <img
          src={ManImage}
          alt="Demo Person"
          style={{
            marginRight: "132px",
            marginBottom: "-34px",
          }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Contact Us Today To Get Started!
          </Typography>
          <Typography variant="h6" mt={1}>
            Toni Luhti
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Email sx={{ mr: 1 }} />
            <Typography>toni@mindmote.fi</Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <Phone sx={{ mr: 1 }} />
            <Typography>+358 50 5066 327</Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <Language sx={{ mr: 1 }} />
            <Link
              href="https://www.dataproductbusiness.com"
              color="inherit"
              underline="hover"
            >
              www.dataproductbusiness.com
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ mt: 8, px: 4, pb: 4 }}
      >
        {/* First Column */}
        <Grid item xs={12} md={3} size={2.4}>
          <Box
            sx={{
              mb: 2,
              bgcolor: "yellow",
              height: 20,
              width: 80,
              borderRadius: 10,
            }}
          ></Box>
          <Typography variant="body2" color="gray" mt={2}>
            By reading the "About Us" page, visitors can gain a better
            understanding of what to expect when working with the real estate
            company.
          </Typography>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={3} size={2.4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Features
          </Typography>
          <Typography variant="body2" mb={1}>
            Properties
          </Typography>
          <Typography variant="body2" mb={1}>
            Professional Service
          </Typography>
          <Typography variant="body2" mb={1}>
            Luxury Asset
          </Typography>
          <Typography variant="body2" mb={1}>
            Networking & event
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} size={2.4}>
          <Typography variant="body2" mb={1}>
            Market Insights
          </Typography>
          <Typography variant="body2" mb={1}>
            Education & Resource
          </Typography>
          <Typography variant="body2" mb={1}>
            Marketing Tool
          </Typography>
          <Typography variant="body2" mb={1}>
            Referral & Reward
          </Typography>
        </Grid>
        {/* Third Column */}
        <Grid item xs={12} md={3} size={2.4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Company
          </Typography>
          <Typography variant="body2" mb={1}>
            Careers
          </Typography>
          <Typography variant="body2" mb={1}>
            Prices
          </Typography>
          <Typography variant="body2" mb={1}>
            For Investors
          </Typography>
          <Typography variant="body2" mb={1}>
            Terms & Privacy
          </Typography>
        </Grid>

        {/* Fourth Column */}
        <Grid item xs={12} md={3} size={2.4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Get in touch
          </Typography>
          <Typography variant="body2" mb={2}>
            You'll find your next Marketing value you prefer.
          </Typography>
          <Box display="flex" gap={1}>
            <Link href="#" color="inherit">
             <FacebookIcon  sx={{ color: '#4e9eff', fontSize: '28px' }}/> 
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon sx={{ color: '#4e9eff', fontSize: '28px' }}/>
            </Link>
            <Link href="#" color="inherit">
              <LinkedInIcon sx={{ color: '#4e9eff', fontSize: '28px' }}/>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Copyright */}
      <Box textAlign="center" py={2} borderTop="1px solid gray">
        <Typography variant="body2" color="gray">
          Copyright 2020.com. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
