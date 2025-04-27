
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Marketing from '../assets/MarketingSolution.png'; // <-- replace with your image
const MarketingSolution = () => {
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
          Marketing <span style={{ color: '#4e9eff' }}>Problem</span> Solution
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
          Specialized solutions for marketing challenges in the real estate sector. Our tools and services are designed to help you reach your ideal customers effectively.
        </Typography>

        {/* Main Content */}
        <Grid container spacing={2} alignItems="center">
          {/* Left Side - Text Content */}
          <Grid item xs={12} md={6} size={6}>
            {/* Marketing Solution */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Marketing Solution
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Customized marketing plans to target the right audience, maximizing the exposure and appeal of your listings.
              </Typography>
            </Box>

            {/* Marketing Tools */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Marketing Tools
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Advanced digital tools and analytics to enhance your marketing efforts, ensuring your properties stand out in a competitive market.
              </Typography>
            </Box>

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
              Grow Your Business
            </Button>
          </Grid>

          {/* Right Side - Image */}
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
                src={Marketing} // <-- replace with your image
                alt="Marketing Solution"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketingSolution;
