import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SailingIcon from '@mui/icons-material/Sailing';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Car from '../assets/car.png';
const LuxuryAssets = () => {
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
          Luxury <span style={{ color: '#4e9eff' }}>Assets</span>
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
          Luxury Assets, particularly in the realm of real estate, refer to high-end properties that are valued for their exclusivity, location, design, and amenities.
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
                src={Car} // <-- replace with your image
                alt="Luxury Car and Yacht"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid item xs={12} md={6} size={6}>
            {/* Yachts Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                <SailingIcon sx={{ color: '#4e9eff', fontSize: '28px' }} /> 
                Yachts
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                The intersection of real estate and yachts! You’ve got a unique interest there. Luxury real estate can involve properties with direct access to marinas, waterfronts, or even private yacht mooring facilities.
              </Typography>
            </Box>

            {/* Cars Section */}
            <Box sx={{ mb: 3}}>
                
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2}}>
              <DirectionsCarIcon sx={{ color: '#4e9eff', fontSize: '28px' }} />
                Cars
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Luxury cars refer to high-end vehicles offering superior performance, aesthetics, and amenities. Typically manufactured by brands like Mercedes-Benz, BMW, and Audi.
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
              Explore Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LuxuryAssets;
