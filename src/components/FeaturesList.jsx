import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Frame from '../assets/Frame.png';

const FeaturesList = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Text Section */}
          <Grid item xs={12} md={6}>
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Explore Our Exclusive <br />
              <span style={{ color: '#4e9eff' }}>Real Estate</span> Feature
            </Typography>

            {/* Paragraph */}
            <Typography
          variant="body1"
          sx={{
            color: '#6c757d',
            textAlign: 'left',
            maxWidth: '700px',
            margin: '0 auto',
            mb: 5,
          }}
        >
         A real estate feature sheet is a list of features and updates for your seller home. The Multiple Listing Services (MLS) has a lot of great information already built in but having a feature sheet can help your sellers showcase their home in a more personal way.
        </Typography>

            {/* List */}
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <List dense>
                  {["Properties", "Luxury Asset", "Market Insights", "Marketing Tool"].map((text) => (
                    <ListItem key={text}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#4e9eff', fontSize: '20px' }} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense>
                  {["Professional Service", "Networking & Event", "Education & Resource", "Referral & Reward"].map((text) => (
                    <ListItem key={text}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#4e9eff', fontSize: '20px' }} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Frame} 
              alt="Feature Image"
              sx={{
                width: '100%',
                maxWidth: 400,
                display: 'block',
                margin: '0 auto',
                transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-30%) scale(1.1)',
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

export default FeaturesList;
