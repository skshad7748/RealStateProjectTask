import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/logo.png';
const theme = createTheme();

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Left side - Logo */}
            <Typography variant="h6" component="div" sx={{ 
              mr: 2,
              fontWeight: 'bold',
              color: 'primary.main'
            }}>
              <img
            src={Logo}
            width={165}
            height={56}
            alt="Logo"
            loading="lazy"
          />
            </Typography>

            {/* Center - Navigation links */}
            <Box sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2
            }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Career</Button>
            </Box>

            {/* Right side - Action buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="text">Sign In</Button>
              <Button variant="contained" color="primary">Contact Us</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;