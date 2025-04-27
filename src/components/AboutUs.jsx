import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import AboutMan from '../assets/AboutUs.png';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Side - Image with Overlay Cards */}
        <Grid item xs={12} md={6} size={6}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              height: '400px',
              boxShadow: 4,
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }
            }}
          >
            <img 
              src={AboutMan}
              alt="Real Estate Team"
            />
            
            {/* Agents Card (Top Left) */}
            <Box
              sx={{
                position: 'absolute',
                overflow: 'hidden',
                top: -22,
                width: '45%',
                zIndex: 2,
                right: -50,
                
              }}
            >
              <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Agents
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    7,530
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Compared to (53,400 last year)
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            {/* Developer Card (Top Right) */}
            <Box
              sx={{
                position: 'absolute',
                top: 272,
                right: 340,
                width: '45%',
                zIndex: 3
              }}
            >
              <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Developer
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    12,350
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Compared to (53,400 last year)
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - About Us Card */}
        <Grid item xs={12} md={6} size={6}>
          <Card sx={{ height: '100%', boxShadow: 3 }}>
            <CardContent sx={{ p: 5 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  About <span style={{ color: "#4e9eff" }}>Us</span>
                </Typography>
              </Box>

              <Typography paragraph sx={{ mb: 3 }}>
                Real estate company typically provides an overview of the organization's mission, 
                history, values, and team members. It's an opportunity for potential clients to 
                get to know the company's culture and what sets them apart from others in the industry.
              </Typography>

              <Typography paragraph sx={{ mb: 4 }}>
                This section may include information on the company's expertise, services offered, 
                and community involvement. Additionally, it may highlight any notable achievements 
                or awards received by the company.
              </Typography>

              <Box sx={{ textAlign: 'center' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    px: 6,
                    py: 1.5,
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    backgroundColor: '#4e9eff',
                    '&:hover': {
                      backgroundColor: '#3a7bd5'
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;