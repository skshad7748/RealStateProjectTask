import { Box, Button, Container, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f9ff',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 5,
      }}
    >
      <Container>
        {/* Small Subtitle */}
        <Typography variant="subtitle1" sx={{ color: '#4e9eff', fontWeight: '600', mb: 2 }}>
        Business Growth Platform 🚀
        </Typography>

        {/* Main Heading */}
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
          Guaranteed <br />
          <span style={{ color: '#4e9eff' }}>Real Estate <span style={{color:'black'}}>Solutions</span></span>
        </Typography>

        {/* Sub description */}
        <Typography variant="body1" sx={{ color: '#6c757d', mb: 4 }}>
        Need to sell your real estate fast? Look no further. With our guaranteed quick sale option,
        </Typography>

        {/* Get Started Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4e9eff',
            textTransform: 'none',
            borderRadius: '20px',
            px: 5,
            py: 1.5,
            fontSize: '1rem',
            '&:hover': { backgroundColor: '#1c7ed6' },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
