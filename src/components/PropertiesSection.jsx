import HomeWorkIcon from '@mui/icons-material/HomeWork'; // house icon
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Properties from '../assets/Properties.png'; // <-- Update this image path
const PropertiesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
       {/* Heading */}
       <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center' }}>
              Discover The <br /> Perfect
              <span style={{ color: '#4e9eff' }}> Properties</span> With Ease
            </Typography>
      <Container>
         
        <Grid container spacing={2} alignItems="center">
          {/* Left Text */}
          <Grid item xs={12} md={6} size={6}>
          

            {/* Feature List */}
            <List dense>
              {[
                "Ready to Move In",
                "Off Plan Properties",
                "Secondary Market",
              ].map((feature) => (
                <ListItem key={feature}>
                  <ListItemIcon>
                    <HomeWorkIcon sx={{ color: '#4e9eff', fontSize: '28px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{ fontSize: '18px', fontWeight: 500 }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Button */}
            <Box sx={{ mt: 4 }}>
              <button
                style={{
                  backgroundColor: '#4e9eff',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Explore Now
              </button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} size={6}>
            <Box
              component="img"
              src={Properties}// <-- Update this image path
              alt="Properties Image"
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',

                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(-20%) scale(1.1)',
                  zIndex: 4,
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertiesSection;

