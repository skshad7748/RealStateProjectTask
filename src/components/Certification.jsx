
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CertificationImage from '../assets/Certification.png'; // <-- replace with your image

const Certification = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Our <span style={{ color: '#4e9eff' }}>Certification</span> Course
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto',
            mb: 6,
            color: '#666',
          }}
        >
          Learn real estate marketing strategies to increase your sales. Get certified and upgrade your skills to new heights.
        </Typography>

        {/* Main Content */}
        <Grid container spacing={2} alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} size={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: '20px',
                backgroundColor: '#fdeee9',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={CertificationImage} // <-- replace with your image
                alt="Certification Course"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text */}
          <Grid item xs={12} md={6} size={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Get Certified Today
            </Typography>

            <Typography variant="body2" sx={{ color: '#666', mb: 4 }}>
              Our certification course is designed to equip you with modern marketing tools, real estate management techniques, and effective client acquisition strategies.
              <br /><br />
              Whether you're a beginner or a seasoned professional, this course will help you stay ahead in the competitive real estate industry.
            </Typography>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4e9eff',
                textTransform: 'none',
                borderRadius: '30px',
                px: 4,
                py: 1,
              }}
            >
              Join Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Certification;
